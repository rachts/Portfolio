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
    id: "bytehint-business-development",
    role: "Business Development Intern",
    company: "ByteHint IT Solutions · Internship",
    period: "Oct 2026 — Present · 1 mo",
    location: "Veerbhadra Nagar, Pune City, Maharashtra · Remote",
    current: true,
    summary: "Supporting business development for an IT services company, with a focus on understanding client needs in technology projects.",
    description: "Supporting business development for an IT services company, with a focus on understanding client needs in technology projects.",
    achievements: [
      "Researching and reaching out to prospective clients for software and IT services.",
      "Translating technical capabilities into clear pitches and proposals for non-technical decision-makers.",
      "Working with the tech team to understand project scope, strengthening my view of how software is scoped and sold.",
    ],
    tech: ["Business Development", "Client Communication", "Market Research"],
    technologies: ["Business Development", "Client Communication", "Market Research"],
  },
  {
    id: "freelancer-web-developer",
    role: "Freelance Web Developer",
    company: "Freelancer.com · Freelance",
    period: "Oct 2026 — Present · 1 mo",
    location: "Kolkata, West Bengal, India · Remote",
    current: true,
    summary: "Building production websites for real clients, handling requirements, design, payments and delivery.",
    description: "Building production websites for real clients, handling requirements, design, payments and delivery.",
    achievements: [
      "Building a full website for a student-welfare NGO covering membership, donations, scholarship and competition applications across 13 content sections.",
      "Designed a 30-screen UI in a custom design system before writing code, so the client could approve the look early.",
      "Replaced a payment gateway with direct UPI and net-banking flows after the client wanted to avoid transaction fees on donations.",
      "Built a database-free backend on Google Sheets with Apps Script for automated receipts, so the founder can read all data directly with no technical setup.",
    ],
    tech: ["React", "Google Sheets", "Apps Script", "UPI / Net Banking", "Web Infrastructure", "SaaS Architecture"],
    technologies: ["React", "Google Sheets", "Apps Script", "UPI / Net Banking", "Web Infrastructure", "SaaS Architecture"],
  },
  {
    id: "vitamend-founder",
    role: "Founder & Full-Stack Developer",
    company: "VitaMend · Self-employed",
    period: "Oct 2025 — Present · 1 yr 1 mo",
    location: "Kolkata, West Bengal, India · Hybrid",
    current: true,
    summary: "Founded and built an AI-assisted platform that lets people donate unused medicines safely, so they reach people in need instead of going to waste.",
    description: "Founded and built an AI-assisted platform that lets people donate unused medicines safely, so they reach people in need instead of going to waste.",
    achievements: [
      "Built the full product end to end: architecture, backend with FastAPI and OpenAI API, and web interfaces with React and Next.js.",
      "Developed an OCR and AI verification pipeline that reads medicine details and detects expiry dates, filtering unsafe medicines before redistribution.",
      "Designed a credits-based donation system that rewards donors and encourages repeat contributions.",
      "Created separate workflows and dashboards for donors, volunteers and NGOs, giving admins full visibility over listings and pickups.",
      "Designed the redistribution flow to serve people below the poverty line and healthcare partners.",
      "Open-sourced the codebase: github.com/rachts/vitamend-org.",
    ],
    tech: ["Python", "FastAPI", "OpenAI API", "OCR", "React", "Next.js", "SQL"],
    technologies: ["Python", "FastAPI", "OpenAI API", "OCR", "React", "Next.js", "SQL"],
  },
];

export const experienceData = experiencesData;
export default experiencesData;
