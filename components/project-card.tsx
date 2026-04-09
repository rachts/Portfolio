"use client"

import type { Project } from "@/data/projects"
import { ExternalLink, Github, Terminal } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 1 }: ProjectCardProps) {
  
  // Spring configurations for hyper-fluid hover states
  const cardSpring = { type: "spring", mass: 1, stiffness: 250, damping: 25 }
  const elementsSpring = { type: "spring", mass: 0.8, stiffness: 300, damping: 20 }

  return (
    <motion.div 
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { scale: 1, rotateZ: 0 },
        // Subtle offset and tilt for Apple-like float
        hover: { scale: 1.02, rotateZ: index % 2 === 0 ? 0.3 : -0.3, y: -4 }
      }}
      transition={cardSpring}
      className="relative p-8 md:p-12 bg-card/80 backdrop-blur-md border border-border cursor-pointer group shadow-2xl transition-colors hover:border-primary/50 will-change-transform overflow-hidden"
    >
      {/* Background tint mapped to variants */}
      <motion.div 
        variants={{
          rest: { opacity: 0, scale: 1 },
          hover: { opacity: 0.05, scale: 1.05 }
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none z-0" 
      />

      {/* Red hover accent edge */}
      <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500 ease-out z-10" />

      <motion.div 
        variants={{
          rest: { x: 0 },
          hover: { x: 4 }
        }}
        transition={elementsSpring}
        className="space-y-6 relative z-10 font-sans"
      >
        <div className="flex items-start justify-between border-b border-border/50 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-4 text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-mono">
              <Terminal className="w-3 h-3 text-primary" />
              <span>LOG // {project.id}</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-black tracking-tighter text-foreground uppercase pt-1">
              {project.name}
            </h3>
            <p className="text-sm text-primary mt-2 font-mono tracking-widest uppercase">
              {project.problem}
            </p>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed text-sm md:text-base pt-2">
          {project.description}
        </p>

        <ul className="space-y-3 py-4">
          {project.features.map((feature) => (
            <li key={feature} className="text-sm text-muted-foreground flex items-start gap-3">
              <span className="text-primary mt-[6px] w-1.5 h-1.5 bg-primary shrink-0 rounded-full" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-4 py-1.5 rounded-full bg-secondary text-foreground uppercase tracking-wider transition-colors group-hover:bg-primary/10 group-hover:text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-6 pt-6 border-t border-border/50 mt-6 relative z-20">
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:text-white transition-colors duration-300 py-2">
              <ExternalLink className="h-4 w-4" />
              Launch View
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:text-white transition-colors duration-300 py-2">
              <Github className="h-4 w-4" />
              Source Code
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
