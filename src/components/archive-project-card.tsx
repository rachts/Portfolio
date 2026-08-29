import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../data/projects";
import { PixelReveal } from "./pixel-reveal";

interface ArchiveProjectCardProps {
  project: Project;
}

export function ArchiveProjectCard({ project }: ArchiveProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-[#E8E8E8] overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between p-5 pb-0">
          <span className="px-3 py-1.5 bg-[#F2F2F2] rounded-full text-xs font-semibold tracking-wide text-[#525252] uppercase">
            {project.category}
          </span>
          
          <div className="flex items-center gap-1.5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-[#F2F2F2] rounded-full transition-colors"
                aria-label="Source Code"
              >
                <svg className="w-5 h-5 text-[#525252]" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            )}
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-[#F2F2F2] rounded-full transition-colors"
                aria-label="Live Demo"
              >
                <svg className="w-5 h-5 text-[#525252]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            
            {/* Expand chevron - toggles description visibility */}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 hover:bg-[#F2F2F2] rounded-full transition-colors cursor-pointer"
              aria-label="Toggle details"
            >
              <svg 
                className={`w-5 h-5 text-[#525252] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Pixel Reveal Image / Placeholder Area */}
        <div className="px-5 py-4">
          <PixelReveal 
            rows={10} 
            cols={14} 
            image={project.image}
            category={project.category}
            className="w-full aspect-[16/10] rounded-xl"
          >
            {/* This content is revealed on hover */}
            <div className="h-full flex flex-col justify-between">
              <div className="space-y-2">
                <h4 className="text-xs font-semibold tracking-[0.08em] uppercase text-[#A3A3A3]">
                  Overview
                </h4>
                <p className="text-xs sm:text-sm text-[#D4D4D4] leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-0.5 bg-[#1A1A1A] rounded text-[10px] font-medium text-[#A3A3A3]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-4 pt-2.5 border-t border-[#262626]">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-[#A3A3A3] hover:text-white transition-colors flex items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Code
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-[#A3A3A3] hover:text-white transition-colors flex items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live
                  </a>
                )}
              </div>
            </div>
          </PixelReveal>
        </div>

        {/* Card Body */}
        <div className="px-5 pb-5">
          <h3 className="text-xl font-bold text-black mb-2 tracking-tight">
            {project.title}
          </h3>
          
          <AnimatePresence initial={false}>
            {isExpanded ? (
              <motion.p 
                key="full"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm text-[#525252] leading-relaxed overflow-hidden"
              >
                {project.description}
              </motion.p>
            ) : (
              <p className="text-sm text-[#525252] leading-relaxed line-clamp-2">
                {project.shortDescription}
              </p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default ArchiveProjectCard;
