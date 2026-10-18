// Central source of truth for the portfolio.
// Edit content here — the homepage and sections read from this file.
import {
  Code,
  Server,
  Palette,
  Database,
  Sparkles,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Kamal Kumari",
  role: "Full-Stack & AI Engineer",
  tagline: "Full-Stack · AI · Competitive Programming",
  headline:
    "I build full-stack web apps and AI pipelines — real-time collaborative editors, secure backends, and LLM-driven platforms that turn a single topic into a full course.",
  location: "India",
  email: "kamaliitbhucse@gmail.com",
  image: "/kamal.jpg",
  // Drop a general resume into public/resume.pdf and set this to "/resume.pdf" to show the Resume buttons.
  resumeUrl: "",
  socials: {
    github: "https://github.com/kamal81684",
    linkedin: "",
    instagram: "",
  },
  // High-signal numbers for the hero stat strip
  stats: [
    { label: "Codeforces max rating", value: "1418" },
    { label: "CodeChef rating (3★)", value: "1643" },
    { label: "Internships", value: "2" },
    { label: "Codefest participants", value: "45K+" },
  ],
} as const;

// Section copy, so the shared components stay generic.
export const sections = {
  skills: "What I use to build web apps, APIs and AI pipelines.",
  experience: "Remote internships across AI platforms and full-stack web development.",
  projects: "Products I've built end to end.",
};

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code,
    skills: ["TypeScript", "JavaScript", "C++", "Python", "SQL"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Prisma", "Mongoose"],
  },
  {
    title: "Frontend",
    icon: Palette,
    skills: ["React", "Next.js", "Tailwind CSS", "TipTap", "Figma"],
  },
  {
    title: "AI & LLMs",
    icon: Sparkles,
    skills: ["LLM Orchestration", "AI Agents", "RAG", "Groq API", "TTS / STT"],
  },
  {
    title: "Data & Cloud",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "AWS S3", "AWS SDK v3", "Yjs (CRDTs)"],
  },
  {
    title: "Auth & Security",
    icon: ShieldCheck,
    skills: ["JWT & Refresh Tokens", "RBAC", "bcrypt", "AWS IAM"],
  },
];

export interface Experience {
  id: number;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
  skills: string[];
  image: string;
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Risk Prediction 360 (RP360)",
    position: "Intern · AI Course Generation Platform",
    description:
      "Built an AI platform that turns a single topic into 80+ structured lectures with quizzes and exercises. Designed the orchestration pipeline across LLMs, TTS and STT that automates 70%+ of course creation, generated 200+ learning components (cutting manual prep by 60%+), and added progress tracking and placement-focused assessments.",
    startDate: "May 2026",
    endDate: "Jul 2026",
    skills: ["TypeScript", "Next.js", "LLMs", "AI Agents", "TTS / STT", "REST APIs"],
    image: "",
  },
  {
    id: 2,
    company: "My Analytics School",
    position: "Intern · Web Development",
    description:
      "Integrated user authentication modules to secure access and protect data, and turned Figma mockups into responsive, production-ready interfaces.",
    startDate: "Dec 2025",
    endDate: "Jan 2026",
    skills: ["TypeScript", "React", "Express.js", "Tailwind CSS", "Figma"],
    image: "",
  },
  {
    id: 3,
    company: "Codefest 2025, IIT (BHU)",
    position: "Publicity Head",
    description:
      "Led the coordinators running outreach across engineering colleges, driving 45K+ student participation across 5 events.",
    startDate: "Sep 2024",
    endDate: "Feb 2025",
    skills: ["Leadership", "Outreach", "Team Management"],
    image: "",
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  accent: string; // tailwind gradient classes for the card header
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Collaborative Docs Editor",
    description:
      "A Google Docs–style editor with real-time multi-user editing over WebSockets using Yjs CRDTs for conflict-free sync, JWT auth with role-based sharing, PDF/TXT export, and an AI RAG pipeline (Groq) for semantic search and chat over documents.",
    tags: ["Next.js", "TypeScript", "Yjs", "WebSockets", "PostgreSQL", "Prisma", "RAG"],
    repo: "https://github.com/kamal81684/google-doc-clone",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    title: "StreamFlix",
    description:
      "Backend for a movie streaming platform: JWT authentication with refresh tokens and role-based access, movie management and public APIs serving multiple video qualities, continue-watching, and AWS S3 thumbnail storage via Multer and the AWS SDK v3.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "RBAC", "AWS S3"],
    repo: "https://github.com/kamal81684/streamFlix",
    accent: "from-rose-500 to-orange-600",
  },
];

export interface Achievement {
  id: number;
  title: string;
  detail: string;
}

export const achievements: Achievement[] = [
  { id: 1, title: "Codeforces Specialist", detail: "Max rating 1418" },
  { id: 2, title: "CodeChef 3★", detail: "Max rating 1643 · Global ranks 54, 103 and 223 in Starters #192, #188 and #150" },
  { id: 3, title: "Uber She++ 2025", detail: "Selected among the top 100 students across India" },
  { id: 4, title: "Amazon ML Summer School 2025", detail: "Selected for ML training by Amazon scientists" },
  { id: 5, title: "Goldman Sachs Hackathon 2025", detail: "Rank 174" },
];

export interface Education {
  id: number;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  grade: string;
  logo: string;
}

export const education: Education[] = [
  {
    id: 1,
    institution: "IIT (BHU), Varanasi",
    degree: "Integrated Dual Degree (B.Tech + M.Tech) — Computer Science and Engineering",
    startDate: "2022",
    endDate: "2027",
    grade: "CGPA: 7.25",
    logo: "",
  },
  {
    id: 2,
    institution: "Govt. Girls Senior Secondary School, Rewari",
    degree: "Class XII (HBSE)",
    startDate: "",
    endDate: "2022",
    grade: "78.00%",
    logo: "",
  },
  {
    id: 3,
    institution: "Champa Devi Govt. Girls Sr. Sec. School, Ateli Mandi",
    degree: "Class X (HBSE)",
    startDate: "",
    endDate: "2020",
    grade: "88.20%",
    logo: "",
  },
];
