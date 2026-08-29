import React from "react";

const SKILL_GROUPS = [
  {
    category: "FRONTEND",
    skills: ["React 19 / 18", "Next.js (App Router)", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Radix UI", "HTML5 / Semantic DOM"],
  },
  {
    category: "BACKEND & APIS",
    skills: ["FastAPI (Python)", "Node.js", "Python 3.14", "WebSockets Streaming", "REST API Architecture", "Pydantic Validation", "JWT Auth"],
  },
  {
    category: "DATA & STORAGE",
    skills: ["PostgreSQL", "SQLite (WAL Mode)", "MongoDB & Aggregations", "Supabase (RLS)", "Redis Caching", "Schema Design"],
  },
  {
    category: "DEVOPS & TOOLS",
    skills: ["Docker", "Git & GitHub Actions", "Vercel / Render", "OpenCV & MediaPipe", "Tesseract OCR", "Performance Profiling"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#737373] block mb-3">
            Technologies
          </span>
          <h2 className="text-[36px] md:text-[42px] font-bold tracking-tight text-black">
            Tools I work with
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#737373] pb-2 border-b border-[#E5E5E5]">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-base text-[#525252]">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
