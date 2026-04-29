"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Github, CheckCircle2, TrendingUp, Lightbulb } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [project])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6 lg:p-12 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-4xl max-h-[90vh] bg-[#121212] border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col relative"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/5 bg-[#1a1a1a]">
                <div>
                  <h2 className="font-sora text-2xl md:text-3xl font-bold text-white mb-2">
                    {project.name}
                  </h2>
                  <div className="flex gap-4">
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-sm flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-sm flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <Github className="w-4 h-4" /> Repository
                      </a>
                    )}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  
                  {/* Left Column */}
                  <div className="space-y-10">
                    <section>
                      <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3 font-sora">
                        <Lightbulb className="w-5 h-5 text-yellow-500" />
                        The Problem
                      </h3>
                      <p className="text-gray-400 font-inter leading-relaxed">
                        {project.problem}
                      </p>
                    </section>

                    <section>
                      <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3 font-sora">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        The Solution
                      </h3>
                      <p className="text-gray-400 font-inter leading-relaxed">
                        {project.solution || project.description}
                      </p>
                    </section>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-10">
                    <section>
                      <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3 font-sora">
                        <TrendingUp className="w-5 h-5 text-indigo-400" />
                        Engineering Impact
                      </h3>
                      <ul className="space-y-3">
                        {project.impact?.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-400 font-inter">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    {project.technicalChallenge && (
                      <section className="p-5 bg-red-500/5 border border-red-500/10 rounded-xl">
                        <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-2">
                          Technical Challenge
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {project.technicalChallenge}
                        </p>
                      </section>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
