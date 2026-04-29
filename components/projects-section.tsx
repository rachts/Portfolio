"use client"

import { useState } from "react"
import { projects, type Project } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { motion } from "framer-motion"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4)

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-[10%] relative bg-background">
      <div className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col gap-12">
        
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-8 mb-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", mass: 1, stiffness: 100, damping: 20 }}
            className="font-sora text-4xl md:text-5xl font-bold tracking-tight text-white leading-none"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="text-base text-gray-400 max-w-sm font-inter"
          >
            A curated index of engineered architectures and web implementations.
          </motion.p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => {
            return (
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 20, 
                  delay: index * 0.1 
                }}
                className="h-full cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <ProjectCard project={project} index={index + 1} />
              </motion.div>
            )
          })}
        </div>

      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  )
}
