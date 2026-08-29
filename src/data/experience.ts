export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  description?: string;
  achievements: string[];
  tech: string[];
  technologies?: string[];
  current?: boolean;
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "vitamend",
    role: "Founder & Lead Systems Architect",
    company: "Vitamend",
    period: "2024 — Present",
    location: "Kolkata, India",
    current: true,
    summary: "Leading technical direction and microservices architecture for an automated medicine verification and redistribution platform.",
    description: "Leading technical direction and microservices architecture for an automated medicine verification and redistribution platform.",
    achievements: [
      "Engineered an automated OCR pipeline with OpenCV and Tesseract extracting expiry and batch codes with 95% accuracy.",
      "Architected secure clinic management dashboard connecting 30+ donation hubs and verifying 10,000+ medicine units.",
      "Designed role-based access control and sanitization layers to guarantee zero data injection across public verification nodes.",
    ],
    tech: ["Python", "OpenCV", "Tesseract OCR", "Next.js 15", "Node.js", "FastAPI"],
    technologies: ["Python", "OpenCV", "Tesseract OCR", "Next.js 15", "Node.js", "FastAPI"],
  },
  {
    id: "systems-eng",
    role: "Full-Stack Systems Engineer & Product Builder",
    company: "Independent / Stealth Projects",
    period: "2024 — Present",
    location: "Remote",
    current: true,
    summary: "Building high-performance SaaS tools and clinical pharmacology intelligence engines.",
    description: "Building high-performance SaaS tools and clinical pharmacology intelligence engines.",
    achievements: [
      "Built MEDCHECK: A deterministic multi-drug pharmacology engine with 17 curated medical rules and sub-80ms response latency.",
      "Engineered VITALS.IO: A zero-build financial unit economics engine calculating LTV/CAC and real-time sensitivity models.",
      "Created OptraFi: Minimalist personal wealth vault with AI delta analysis reducing computation latency by 75% (480ms → 120ms).",
    ],
    tech: ["TypeScript", "FastAPI", "React 19", "SQLite WAL", "Tailwind CSS v4", "WebSockets"],
    technologies: ["TypeScript", "FastAPI", "React 19", "SQLite WAL", "Tailwind CSS v4", "WebSockets"],
  },
  {
    id: "open-source",
    role: "Open Source Contributor & Systems Researcher",
    company: "GitHub / Global Developer Community",
    period: "2023 — Present",
    location: "Global",
    summary: "Authoring and contributing to open-source developer tooling, WebSockets experiments, and UI motion libraries.",
    description: "Authoring and contributing to open-source developer tooling, WebSockets experiments, and UI motion libraries.",
    achievements: [
      "Shipped 31+ public repositories with 3,300+ GitHub contributions.",
      "Engineered real-time 21-point hand tracking with Kalman filters in Python/MediaPipe for touchless AR computing.",
      "Contributed bug fixes and performance patches across modern React and Next.js ecosystems.",
    ],
    tech: ["Python", "MediaPipe", "React", "TypeScript", "GSAP", "Framer Motion"],
    technologies: ["Python", "MediaPipe", "React", "TypeScript", "GSAP", "Framer Motion"],
  },
];

export const experienceData = experiencesData;
export default experiencesData;
