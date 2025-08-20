"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { generateRandomCursor } from "@/lib/generate-random-cursor";

export type User = {
  socketId: string;
  name: string;
  color: string;
  pos: { x: number; y: number };
  location: string;
  flag: string;
};

export type Message = {
  socketId: string;
  content: string;
  time: Date;
  username: string;
};

export type UserMap = Map<string, User>;

type SocketContextType = {
  socket: Socket | null;
  users: UserMap;
  setUsers: Dispatch<SetStateAction<UserMap>>;
  msgs: Message[];
};

const INITIAL_STATE: SocketContextType = {
  socket: null,
  users: new Map(),
  setUsers: () => {},
  msgs: [],
};

export const SocketContext = createContext<SocketContextType>(INITIAL_STATE);

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [users, setUsers] = useState<UserMap>(new Map());
  const [msgs, setMsgs] = useState<Message[]>([]);

  useEffect(() => {
    const username =
      localStorage.getItem("username") || generateRandomCursor().name;

   const socketInstance = io(process.env.NEXT_PUBLIC_WS_URL as string, {
   transports: ["websocket"],
});


    setSocket(socketInstance);

    socketInstance.on("connect", () => {
      socketInstance.emit("user-join", { username });
    });

    socketInstance.on("msgs-receive-init", (messages: Message[]) => {
      setMsgs(messages);
    });

    socketInstance.on("msg-receive", (message: Message) => {
      setMsgs((prev) => [...prev, message]);
    });

    socketInstance.on("users-update", (userList: User[]) => {
      setUsers(new Map(userList.map((u) => [u.socketId, u])));
    });

    return () => {
      socketInstance.off("msgs-receive-init");
      socketInstance.off("msg-receive");
      socketInstance.off("users-update");
      socketInstance.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, users, setUsers, msgs }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
