"use client"

import { useRef } from "react"
import type { Project } from "@/data/projects"
import { ExternalLink, Github, Terminal } from "lucide-react"
import anime from "animejs"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    anime({
      targets: cardRef.current,
      scale: 1.03,
      rotateZ: 0.5,
      easing: 'easeOutElastic',
      duration: 800
    })
    anime({
      targets: bgRef.current,
      opacity: 0.05,
      scale: 1.1,
      easing: 'easeOutExpo',
      duration: 600
    })
    anime({
      targets: contentRef.current,
      translateX: 8,
      easing: 'easeOutElastic',
      duration: 800
    })
  }

  const handleMouseLeave = () => {
    anime({
      targets: cardRef.current,
      scale: 1,
      rotateZ: 0,
      easing: 'easeOutElastic',
      duration: 1000
    })
    anime({
      targets: bgRef.current,
      opacity: 0,
      scale: 1,
      easing: 'easeOutExpo',
      duration: 600
    })
    anime({
      targets: contentRef.current,
      translateX: 0,
      easing: 'easeOutElastic',
      duration: 1000
    })
  }

  return (
    <div 
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative p-8 md:p-12 bg-card/80 backdrop-blur-md border border-border cursor-pointer group shadow-2xl transition-colors hover:border-primary/50"
    >
      {/* Background tint mapped to ref */}
      <div ref={bgRef} className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-primary/20 to-transparent opacity-0 pointer-events-none z-0" />

      {/* Red hover accent edge */}
      <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500 ease-in-out z-10" />

      <div ref={contentRef} className="space-y-6 relative z-10 font-sans">
        <div className="flex items-start justify-between border-b border-border/50 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-4 text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-mono">
              <Terminal className="w-3 h-3 text-primary" />
              <span>LOG // {project.id}</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-black tracking-tighter text-foreground uppercase">
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
              className="text-[10px] px-4 py-1.5 rounded-full bg-secondary text-foreground uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-6 pt-6 border-t border-border/50 mt-6">
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
      </div>
    </div>
  )
}
