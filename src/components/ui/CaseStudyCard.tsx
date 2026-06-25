import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../data/portfolio-data';

interface CaseStudyCardProps {
  project: Project;
  index: number;
}

export function CaseStudyCard({ project, index }: CaseStudyCardProps) {
  // Extract a subtitle from the project data (using impact or problem as fallback)
  const subtitle = project.impact ? project.impact.split('.')[0] + '.' : project.problem?.split('.')[0] + '.';

  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
      className="bg-card-surface border border-outline-variant rounded-xl card-shadow w-full flex flex-col overflow-hidden"
    >
      {/* Top Section: Title & Tags */}
      <div className="p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2 max-w-2xl">
          <h2 className="text-3xl font-display font-semibold text-hero-primary tracking-tight">
            {project.title.replace('SOLUTION: ', '')}
          </h2>
          <p className="text-on-surface-variant font-medium text-[15px]">
            {subtitle}
          </p>
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1.5 text-xs font-medium text-on-surface-variant bg-surface rounded-md border border-outline-variant/30">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            {project.github && project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
                <Github className="w-4 h-4" /> Code
              </a>
            )}
            {project.demo && project.demo !== "#" && (
              <a href={project.demo.startsWith('http') ? project.demo : `https://${project.demo}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-outline-variant/30"></div>

      {/* Content Section: 2 Columns */}
      <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column (Content) */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-10">
          
          {project.problem && (
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold text-on-surface uppercase tracking-widest">
                The Problem
              </h4>
              <p className="text-[15px] text-on-surface-variant leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}

          {project.architecture && (
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold text-on-surface uppercase tracking-widest">
                Architecture & Solution
              </h4>
              <p className="text-[15px] text-on-surface-variant leading-relaxed">
                {project.architecture}
              </p>
            </div>
          )}

          {project.tradeoffs && (
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold text-on-surface uppercase tracking-widest">
                Tradeoffs
              </h4>
              <p className="text-[15px] text-on-surface-variant leading-relaxed">
                {project.tradeoffs}
              </p>
            </div>
          )}
          
          {(project.hardPart || project.failureHandling) && !project.tradeoffs && (
             <div className="space-y-3">
               <h4 className="text-[11px] font-bold text-on-surface uppercase tracking-widest">
                 Key Challenges
               </h4>
               <p className="text-[15px] text-on-surface-variant leading-relaxed">
                 {project.hardPart || project.failureHandling}
               </p>
             </div>
          )}

        </div>

        {/* Right Column (Metrics Box) */}
        <div className="lg:col-span-5 xl:col-span-4">
          <div className="bg-[#F8F9FA] border border-outline-variant/50 rounded-xl p-8 h-full">
            <h4 className="text-[11px] font-bold text-on-surface uppercase tracking-widest mb-6">
              Impact & Metrics
            </h4>
            
            <div className="space-y-6">
              {project.metrics && (
                <div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    <strong className="text-on-surface block mb-1">Metrics:</strong>
                    {project.metrics}
                  </p>
                </div>
              )}
              
              {project.impact && (
                <div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    <strong className="text-on-surface block mb-1">Impact:</strong>
                    {project.impact}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </motion.article>
  );
}
