import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Brain, Component, AlertTriangle, Wrench, Github, ExternalLink } from 'lucide-react';
import { Project } from '../../data/portfolio-data';
import PixelTransition from '../reactbits/PixelTransition';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Define category colors based on tags
  const getCategoryColor = (tags: string[]) => {
    const joined = tags.join(' ').toLowerCase();
    if (joined.includes('ai') || joined.includes('machine learning')) return 'text-primary';
    if (joined.includes('vision') || joined.includes('ar/vr')) return 'text-primary';
    if (joined.includes('full stack') || joined.includes('web')) return 'text-on-surface-variant';
    return 'text-on-surface-variant';
  };

  const primaryTag = project.tags[0] || 'Project';
  const categoryColorClass = getCategoryColor(project.tags);

  return (
    <motion.article 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="project-card relative group bg-surface-container-lowest border border-outline-variant card-shadow rounded-3xl p-6 flex flex-col gap-6 transition-all duration-500 overflow-hidden"
    >
      <div className="flex justify-between items-start relative z-10">
        <span className={`font-label-sm text-label-sm uppercase tracking-wider text-on-surface px-3 py-1 bg-surface-container-low border border-outline-variant/50 rounded-lg`}>
          {primaryTag}
        </span>
        <div className="flex items-center gap-2">
          {project.github && project.github !== "#" && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant rounded-full transition-colors" aria-label="GitHub Repository">
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a href={project.demo.startsWith('http') ? project.demo : `https://${project.demo}`} target="_blank" rel="noopener noreferrer" className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant rounded-full transition-colors" aria-label="Live Demo">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`expand-btn w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant transition-all border ${isOpen ? 'bg-surface-variant border-outline-variant' : 'bg-surface-container-lowest border-outline-variant hover:bg-surface-variant'}`}
            aria-expanded={isOpen}
            aria-label="Toggle Details"
          >
            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="flex-grow relative z-10">
        <div className="mb-6 rounded-xl overflow-hidden h-32 relative border border-outline-variant/30">
          <PixelTransition
            firstContent={
              <div className="w-full h-full bg-surface-container-high flex items-center justify-center p-4">
                <span className={`text-2xl font-display font-bold text-on-surface opacity-30 uppercase tracking-widest`}>{primaryTag}</span>
              </div>
            }
            secondContent={
              <div className="w-full h-full bg-surface-variant flex items-center justify-center p-4">
                <p className="font-body-md text-sm text-on-surface-variant text-center px-4 line-clamp-3">{project.impact || "Impact driven engineering."}</p>
              </div>
            }
            gridSize={12}
            pixelColor="#e2e2e2"
            animationStepDuration={0.03}
            className="w-full h-full"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <h3 className="font-headline-md text-headline-md text-primary mb-2 line-clamp-2">{project.title.replace('SOLUTION: ', '')}</h3>
        <p className="font-body-md text-sm text-on-surface-variant line-clamp-2">{project.problem}</p>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden relative z-10"
          >
            <div className="space-y-3 pt-4 border-t border-outline-variant mt-2">
              
              {project.problem && (
                <div className="bg-surface-bright border border-outline-variant p-4 rounded-xl space-y-2">
                  <h4 className="font-label-sm text-[11px] font-bold text-on-surface uppercase tracking-wide flex items-center gap-1">
                    <Brain className="w-4 h-4" /> Problem
                  </h4>
                  <p className="font-body-md text-[13px] text-on-surface-variant leading-relaxed">{project.problem}</p>
                </div>
              )}

              {project.architecture && (
                <div className="bg-surface-bright border border-outline-variant p-4 rounded-xl space-y-2">
                  <h4 className="font-label-sm text-[11px] font-bold text-primary uppercase tracking-wide flex items-center gap-1">
                    <Component className="w-4 h-4" /> Architecture
                  </h4>
                  <p className="font-body-md text-[13px] text-on-surface-variant leading-relaxed">{project.architecture}</p>
                </div>
              )}

              {project.tradeoffs && (
                <div className="bg-surface-bright border border-outline-variant p-4 rounded-xl space-y-2">
                  <h4 className="font-label-sm text-[11px] font-bold text-error uppercase tracking-wide flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" /> Tradeoffs
                  </h4>
                  <p className="font-body-md text-[13px] text-on-surface-variant leading-relaxed">{project.tradeoffs}</p>
                </div>
              )}

              {project.hardPart && !project.tradeoffs && (
                <div className="bg-surface-bright border border-outline-variant p-4 rounded-xl space-y-2">
                  <h4 className="font-label-sm text-[11px] font-bold text-on-surface uppercase tracking-wide flex items-center gap-1">
                    <Wrench className="w-4 h-4" /> Hardest Challenge
                  </h4>
                  <p className="font-body-md text-[13px] text-on-surface-variant leading-relaxed">{project.hardPart}</p>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
