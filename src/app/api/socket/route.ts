import { NextRequest } from "next/server";
import { Server } from "socket.io";

const ioHandler = (req: NextRequest) => {
  if (!(global as any).io) {
    console.log("🚀 Starting Socket.IO server...");

    const io = new Server(3000, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    let users = new Map();
    let messages: any[] = [];

    io.on("connection", (socket) => {
      console.log("✅ User connected:", socket.id);

      socket.on("user-join", ({ username }) => {
        users.set(socket.id, {
          socketId: socket.id,
          name: username,
          color: "#" + Math.floor(Math.random() * 16777215).toString(16),
          pos: { x: 0, y: 0 },
          location: "unknown",
          flag: "🌍",
        });

        socket.emit("msgs-receive-init", messages);
        io.emit("users-update", Array.from(users.values()));
      });

      socket.on("send-message", (content) => {
        const user = users.get(socket.id);
        const msg = {
          socketId: socket.id,
          content,
          time: new Date(),
          username: user?.name || "Anonymous",
        };
        messages.push(msg);
        io.emit("msg-receive", msg);
      });

      socket.on("disconnect", () => {
        users.delete(socket.id);
        io.emit("users-update", Array.from(users.values()));
        console.log("❌ User disconnected:", socket.id);
      });
    });

    (global as any).io = io;
  }

  return new Response("Socket.IO server is running");
};

export { ioHandler as GET, ioHandler as POST };
