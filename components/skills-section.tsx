"use client"

import { motion } from "framer-motion"
import { Code2, Database, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="w-6 h-6 text-indigo-400" />,
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Framer Motion", icon: "framer" },
      { name: "Redux / Zustand", icon: "redux" }
    ],
    className: "md:col-span-2 lg:col-span-1"
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-6 h-6 text-indigo-400" />,
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Supabase", icon: "supabase" }
    ],
    className: "md:col-span-1"
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="w-6 h-6 text-indigo-400" />,
    skills: [
      { name: "Git & GitHub", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
      { name: "Figma", icon: "figma" },
      { name: "Postman", icon: "postman" }
    ],
    className: "md:col-span-1"
  }
]

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", mass: 1, stiffness: 100, damping: 20 } 
    }
  }

  return (
    <section id="skills" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-[10%] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mb-16"
        >
          <h2 className="font-sora text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl font-inter text-lg">
            A comprehensive overview of my technical stack and the tools I use to build scalable digital products.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              variants={childVariants}
              className={`p-8 rounded-2xl bg-[#161616] border border-white/5 hover:border-indigo-500/30 transition-colors duration-300 group ${category.className}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-secondary/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-sora text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <img 
                      src={`https://cdn.simpleicons.org/${skill.icon}/9ca3af`} 
                      alt={skill.name}
                      className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
