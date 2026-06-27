import React from 'react';
import { useState } from 'react';
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
    if (joined.includes('vision') || joined.includes('ar/vr')) return 'text-tertiary';
    if (joined.includes('full stack') || joined.includes('web')) return 'text-secondary';
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
      className="project-card bg-card-surface border border-outline-variant card-shadow rounded-[2rem] p-6 flex flex-col gap-6 transition-all duration-300"
    >
      <div className="flex justify-between items-start">
        <span className={`text-xs font-bold uppercase tracking-wider ${categoryColorClass} px-3 py-1 bg-canvas border border-outline-variant/50 rounded-lg`}>
          {primaryTag}
        </span>
        <div className="flex items-center gap-3">
          {project.github && project.github !== "#" && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-on-surface transition-colors" aria-label="GitHub Repository">
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a href={project.demo.startsWith('http') ? project.demo : `https://${project.demo}`} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-on-surface transition-colors" aria-label="Live Demo">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`expand-btn w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant transition-all border ${isOpen ? 'bg-surface-variant border-outline-variant/80' : 'bg-card-surface border-outline-variant hover:bg-surface-variant'}`}
            aria-expanded={isOpen}
            aria-label="Toggle Details"
          >
            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="flex-grow">
        <div className="mb-6 rounded-xl overflow-hidden h-32 relative">
          <PixelTransition
            firstContent={
              <div className="w-full h-full bg-primary/5 flex items-center justify-center p-4">
                <span className={`text-2xl font-display font-bold ${categoryColorClass} opacity-80 uppercase tracking-widest`}>{primaryTag}</span>
              </div>
            }
            secondContent={
              <div className="w-full h-full bg-surface-variant flex items-center justify-center p-4">
                <p className="text-on-surface-variant text-center text-sm font-medium">{project.impact || "Impact driven engineering."}</p>
              </div>
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.03}
            className="w-full h-full"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <h3 className="text-2xl font-display font-semibold text-hero-primary mb-2">{project.title.replace('SOLUTION: ', '')}</h3>
        <p className="text-on-surface-variant text-sm line-clamp-2">{project.problem}</p>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pt-4 border-t border-surface-container-highest mt-2">
              
              {project.problem && (
                <div className="bg-canvas border border-outline-variant/50 p-4 rounded-xl space-y-2">
                  <h4 className="text-xs font-bold text-on-surface uppercase tracking-wide flex items-center gap-1">
                    <Brain className="w-4 h-4" /> Problem
                  </h4>
                  <p className="text-xs text-on-surface-variant">{project.problem}</p>
                </div>
              )}

              {project.architecture && (
                <div className="bg-canvas border border-outline-variant/50 p-4 rounded-xl space-y-2">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wide flex items-center gap-1">
                    <Component className="w-4 h-4" /> Architecture
                  </h4>
                  <p className="text-xs text-on-surface-variant">{project.architecture}</p>
                </div>
              )}

              {project.tradeoffs && (
                <div className="bg-canvas border border-outline-variant/50 p-4 rounded-xl space-y-2">
                  <h4 className="text-xs font-bold text-error uppercase tracking-wide flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" /> Tradeoffs
                  </h4>
                  <p className="text-xs text-on-surface-variant">{project.tradeoffs}</p>
                </div>
              )}

              {project.hardPart && !project.tradeoffs && (
                <div className="bg-canvas border border-outline-variant/50 p-4 rounded-xl space-y-2">
                  <h4 className="text-xs font-bold text-tertiary uppercase tracking-wide flex items-center gap-1">
                    <Wrench className="w-4 h-4" /> Hardest Challenge
                  </h4>
                  <p className="text-xs text-on-surface-variant">{project.hardPart}</p>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
