"use client"

import type { Project } from "@/data/projects"
import { ExternalLink, Github, Folder } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 1 }: ProjectCardProps) {
  return (
    <motion.div 
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { y: 0 },
        hover: { y: -8 }
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative flex flex-col h-full p-8 bg-[#161616] border border-white/5 rounded-2xl shadow-xl transition-all duration-300 hover:border-indigo-500/30 hover:shadow-indigo-500/10 group"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-secondary/50 rounded-xl">
          <Folder className="w-6 h-6 text-indigo-400" />
        </div>
        <div className="flex items-center gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-sora text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
        {project.name}
      </h3>
      
      <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed font-inter">
        {project.description}
      </p>

      {/* Impact Section */}
      {project.impact && (
        <div className="space-y-3 mb-8">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-2">Impact:</span>
          <ul className="space-y-2">
            {project.impact.slice(0, 2).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300 font-inter">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500 shrink-0" />
                <span className="line-clamp-2">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-md bg-secondary text-gray-300 font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
