import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import {
  ArrowDownUpIcon,
  ArrowUpRight,
  ExternalLink,
  Link2,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  gemini: {
    title: "GeminiAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/Google_Gemini_logo.png" alt="GeminiAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    // 01. AI Mock Interviewer
    id: "aimockinterviewer",
    category: "AI",
    title: "MockMate : A complete capstone project",
    src: "/assets/projects-screenshots/mockmate1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://mock-mate-pa7l.vercel.app/",
    github: "https://github.com/shubham220420/MockMate",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.react,
      ],
      backend: [PROJECT_SKILLS.gemini, PROJECT_SKILLS.netlify],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            AI-Mock-Interviewer helps students and professionals practice
            interviews in a realistic, AI-driven environment. Simply choose your
            role or domain, and the app generates tailored interview questions,
            evaluates responses, and gives instant feedback on communication,
            clarity, and technical depth. Deployed on Vercel, it provides
            accessible, on-demand interview preparation anytime.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Architecture </TypographyH3>
          <p className="font-mono mb-2">
            The project is divided into four main phases: 1. User Authentication
            & Personalization 2. AI-Driven Interview Simulation 3. Feedback &
            Performance Tracking 
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/mockmate1.png`,
              `${BASE_PATH}/mockmate2.png`,
              `${BASE_PATH}/mockmate3.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">
            User Authentication & Personalization
          </TypographyH3>
          <p className="font-mono mb-2">
            Secure login is implemented, allowing each user to maintain a
            personalized interview profile. Preferences such as role, domain,
            and difficulty level are stored for tailoring the interview
            experience.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/mockmate4.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">
            AI-Driven Interview Simulation
          </TypographyH3>

          <p className="font-mono mb-2">
            Gemini AI generates interview questions aligned with industry
            standards and real-world problem-solving. Users interact with an
            AI-monitored interviewer, creating a realistic simulation that
            adapts to their responses dynamically.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/mockmate5.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">
            Feedback & Performance Tracking{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            After each session, MockMate provides personalized feedback on
            communication, technical depth, and clarity. Users can revisit past
            interviews, analyze their progress, and focus on areas that need
            improvement.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/mockmate6.png`,
 
            ]}
          />
        </div>
      );
    },
  },
  {
    // 02. Startup project
    id: "PitchSpark",
    category: "Startup and Community Platform",
    title: "PitchSpark: A Startup Pitching Platform",
    src: "/assets/projects-screenshots/pitchspark1.png",
    screenshots: ["/assets/projects-screenshots/pitchspark1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
      ],
      backend: [
        PROJECT_SKILLS.sanity,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.node,
      ],
    },
    live: "https://pitch-spark-delta.vercel.app/",
    github: "https://github.com/shubham220420/PitchSpark",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            PitchSpark: A Startup Pitching Platform
          </TypographyP>
          <TypographyP className="font-mono ">
            PitchSpark lets aspiring founders share and refine their startup
            ideas through interactive pitching. Users can post their concepts,
            receive feedback, and engage with a community of peers to improve
            their pitches. Uses Sanity.io for headless content management.
            Deployed on Vercel, it provides an easy, collaborative space for
            startup validation and idea exchange.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/pitchspark1.png`,
              `${BASE_PATH}/pitchspark2.png`,
              `${BASE_PATH}/pitchspark3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    // 03. Portfolio project
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/myportfolio/landing.png",
    screenshots: ["assets/projects-screenshots/myportfolio/landing.png"],
    live: "https://shubham-rakheja-portfolio.vercel.app/",
    github: "https://github.com/shubham220420/MyPortFolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/myportfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/projects.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  }
];
export default projects;
