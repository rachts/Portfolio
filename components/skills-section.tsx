"use client"

import { motion } from "framer-motion"
import { Code2, Database, Wrench } from "lucide-react"
import Image from "next/image"

const skillCategories = [
  {
    title: "Frontend Architecture",
    icon: <Code2 className="w-6 h-6 text-indigo-400" />,
    skills: [
      { name: "React", icon: "react", usage: "Built scalable UI systems and complex state architectures" },
      { name: "Next.js", icon: "nextdotjs", usage: "SSR, edge caching, and performance optimization" },
      { name: "TypeScript", icon: "typescript", usage: "End-to-end type safety and robust refactoring" },
      { name: "Tailwind CSS", icon: "tailwindcss", usage: "Rapid, responsive, and maintainable styling" },
      { name: "Framer Motion", icon: "framer", usage: "Fluid, physics-based micro-animations" },
    ],
    className: "lg:col-span-1"
  },
  {
    title: "Backend & Systems",
    icon: <Database className="w-6 h-6 text-indigo-400" />,
    skills: [
      { name: "Node.js", icon: "nodedotjs", usage: "High-throughput asynchronous APIs" },
      { name: "Python", icon: "python", usage: "AI integration, OCR pipelines, and automation" },
      { name: "MongoDB", icon: "mongodb", usage: "Flexible NoSQL schema design" },
      { name: "PostgreSQL", icon: "postgresql", usage: "Relational data modeling and complex querying" },
      { name: "Supabase", icon: "supabase", usage: "Real-time subscriptions and RLS security" }
    ],
    className: "lg:col-span-1"
  },
  {
    title: "DevOps & Tooling",
    icon: <Wrench className="w-6 h-6 text-indigo-400" />,
    skills: [
      { name: "Git", icon: "git", usage: "Version control and collaborative branching" },
      { name: "Docker", icon: "docker", usage: "Containerized environments and deployment" },
      { name: "Vercel", icon: "vercel", usage: "CI/CD pipelines and serverless edge functions" },
      { name: "Figma", icon: "figma", usage: "UI/UX prototyping and design systems" },
    ],
    className: "lg:col-span-1"
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
    <section id="skills" className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-[10%] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mb-16"
        >
          <h2 className="font-sora text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Work With</span>
          </h2>
          <p className="text-gray-400 max-w-2xl font-inter text-lg">
            Beyond just syntax, here is how I apply modern technologies to solve real product challenges.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
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
              
              <div className="flex flex-col gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <Image 
                        src={`https://cdn.simpleicons.org/${skill.icon}/9ca3af`} 
                        alt={skill.name}
                        width={20}
                        height={20}
                        className="opacity-70 group-hover:opacity-100 transition-opacity"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-gray-200 font-sora">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-400 font-inter mt-1 leading-relaxed">
                        {skill.usage}
                      </span>
                    </div>
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
