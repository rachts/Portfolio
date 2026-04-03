export interface Experience {
  id: string
  title: string
  organization?: string
  period: string
  description: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    id: "hackathons",
    title: "Hackathon Participant",
    period: "2024 — Present",
    description: "Active participant in various hackathons, building innovative solutions under time constraints.",
    highlights: [
      "Multiple hackathon projects shipped",
      "Experience with rapid prototyping",
      "Cross-functional team collaboration",
    ],
  },
  {
    id: "independent",
    title: "Independent Developer",
    period: "2024 — Present",
    description: "Building and shipping self-driven projects, focusing on AI-powered platforms and automation tools.",
    highlights: ["End-to-end product development", "User research and iteration", "Production deployment experience"],
  },
  {
  id: "vitamend-founder",
  title: "Founder, Vitamend",
  period: "2024 — Present",
  description: "Leading the development of an AI-driven platform to streamline medicine donation and redistribution, focusing on accessibility, safety, and scalable healthcare impact.",
  highlights: [
    "Built and scaled an end-to-end medicine donation ecosystem",
    "Implemented AI-based verification and expiry detection systems",
    "Designed secure workflows for validation, credits, and redistribution"
  ],
},
   {
    id: "Database Management System Intern",
    title: "Database Management System Intern For Swiggy",
    period: "July 2025- August 2025",
    description:
  "Contributed to the management and optimization of enterprise-grade databases powering Microsoft applications and Salesforce CRM workflows.",
highlights: [
  "Structured data modeling and query optimization",
  "Data integrity, security, and access control management",
  "Collaboration with cross-functional teams on CRM data operations"
]
 },
]
