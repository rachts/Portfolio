export interface Skill {
  name: string;
  category: "Core" | "Frameworks" | "Backend & DB" | "Tools & DevOps";
  proficiency: number;
}

export const skillsData: Skill[] = [
  { name: "TypeScript", category: "Core", proficiency: 95 },
  { name: "React 19 / 18", category: "Core", proficiency: 95 },
  { name: "Python 3.14", category: "Core", proficiency: 92 },
  { name: "Node.js", category: "Core", proficiency: 90 },
  { name: "FastAPI", category: "Frameworks", proficiency: 92 },
  { name: "Next.js", category: "Frameworks", proficiency: 90 },
  { name: "Tailwind CSS v4", category: "Frameworks", proficiency: 95 },
  { name: "PostgreSQL", category: "Backend & DB", proficiency: 90 },
  { name: "SQLite (WAL)", category: "Backend & DB", proficiency: 92 },
  { name: "MongoDB", category: "Backend & DB", proficiency: 85 },
  { name: "Docker", category: "Tools & DevOps", proficiency: 82 },
  { name: "WebSockets", category: "Tools & DevOps", proficiency: 90 },
  { name: "Git & CI/CD", category: "Tools & DevOps", proficiency: 92 },
];
