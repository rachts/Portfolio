"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const techSkills = [
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Next.js", icon: "nextdotjs", color: "#ffffff" },
  { name: "Python", icon: "python", color: "#3776AB" },
  { name: "Node.js", icon: "nodedotjs", color: "#339933" },
  { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
  { name: "Docker", icon: "docker", color: "#2496ED" },
  { name: "Git", icon: "git", color: "#F05032" }
]

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  // Duplicate the array to create a seamless infinite marquee
  const marqueeItems = [...techSkills, ...techSkills]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      variants={containerVariants}
      id="skills" 
      className="py-24 border-t border-border overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 mb-12">
        <motion.div variants={childVariants} className="border-b border-border pb-6 flex items-center justify-between">
          <h2 className="text-3xl font-black tracking-tighter text-foreground uppercase flex items-center gap-4">
            <span className="w-4 h-4 bg-primary shrink-0" />
            Arsenal & Utilities
          </h2>
        </motion.div>
      </div>

      {/* Marquee Track */}
      <motion.div variants={childVariants} className="relative w-full overflow-hidden flex border-y border-border/50 bg-card/30 py-12">
        
        {/* Left/Right sheer overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeItems.map((skill, index) => (
            <motion.div 
              key={`${skill.name}-${index}`}
              className="flex flex-col items-center justify-center gap-4 w-32 md:w-48 group cursor-crosshair"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              animate={{
                opacity: hoveredSkill && hoveredSkill !== skill.name ? 0.3 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={`https://cdn.simpleicons.org/${skill.icon}/ffffff`} 
                alt={skill.name} 
                className="w-12 h-12 md:w-16 md:h-16 pointer-events-none"
                animate={{
                  scale: hoveredSkill === skill.name ? 1.2 : 1,
                  filter: hoveredSkill === skill.name 
                    ? `drop-shadow(0 0 15px ${skill.color}) drop-shadow(0 0 5px #ffffff)` 
                    : 'drop-shadow(0 0 0px transparent)'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <motion.span 
                className="text-xs font-mono tracking-widest uppercase"
                animate={{
                  color: hoveredSkill === skill.name ? skill.color : 'var(--muted-foreground)',
                  y: hoveredSkill === skill.name ? 5 : 0
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}
