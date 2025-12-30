export interface SkillCategory {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["Next.js", "React", "Node.js", "Express", "TailwindCSS","Radix UI","Framer Motion"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Firebase", "Supabase", "Git", "GitHub", "Vercel", "VS Code"],
  },
  {
    name: "Concepts",
    skills: ["Authentication", "REST APIs", "AI Integration", "Scalable Architecture", "Responsive Design"],
  },
]
