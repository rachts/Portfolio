import React from 'react';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useIntersection } from '../../hooks/use-intersection';
import { fadeInUp, staggerContainer } from '../../animations';
import { portfolioData } from '../../data/portfolio-data';
import { Card } from '../ui/Card';

export function ProjectsSection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center">
              <span className="text-cyan-400 mr-3">02.</span> Technical Solutions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioData.projects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp} className={project.isFlagship ? "lg:col-span-2" : ""}>
                <Card glowOnHover className={`h-full flex flex-col group ${project.isFlagship ? "border-cyan-500/30 bg-cyan-900/5" : ""}`}>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`text-xs font-mono px-2 py-1 rounded ${project.isFlagship ? "text-cyan-300 bg-cyan-900/50 border border-cyan-500/30" : "text-cyan-400 bg-cyan-900/30"}`}>
                        {project.isFlagship ? `FLAGSHIP: ${project.id.toUpperCase()}` : `ID: ${project.id}`}
                      </div>
                    </div>
                    <div className="flex space-x-3 text-slate-400">
                      {project.github && project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && project.demo !== "#" && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
                          <span className="text-xs font-medium uppercase hidden sm:inline-block">Live Demo</span>
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className={`mb-4 flex-grow ${project.isFlagship ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4"}`}>
                    <div className="space-y-4">
                      <div>
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Problem</span>
                        <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Impact</span>
                        <p className="text-cyan-300 text-sm font-medium leading-relaxed">{project.impact}</p>
                      </div>
                      
                      {project.architecture && (
                        <div>
                          <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Architecture</span>
                          <p className="text-slate-300 text-sm leading-relaxed">{project.architecture}</p>
                        </div>
                      )}
                    </div>
                    
                    {(project.metrics || project.tradeoffs || project.constraints || project.hardPart || project.security || project.failureHandling || project.future) && (
                      <div className="space-y-3 bg-slate-900/50 p-4 rounded-md border border-slate-800/50">
                        {project.metrics && (
                          <div>
                            <span className="text-cyan-500/70 text-xs font-bold uppercase tracking-wider block mb-1">Metrics & Scale</span>
                            <p className="text-slate-300 text-sm">{project.metrics}</p>
                          </div>
                        )}
                        {project.constraints && (
                          <div>
                            <span className="text-cyan-500/70 text-xs font-bold uppercase tracking-wider block mb-1">Constraints</span>
                            <p className="text-slate-300 text-sm">{project.constraints}</p>
                          </div>
                        )}
                        {project.tradeoffs && (
                          <div>
                            <span className="text-cyan-500/70 text-xs font-bold uppercase tracking-wider block mb-1">Engineering Trade-offs</span>
                            <p className="text-slate-300 text-sm">{project.tradeoffs}</p>
                          </div>
                        )}
                        {project.security && (
                          <div>
                            <span className="text-cyan-500/70 text-xs font-bold uppercase tracking-wider block mb-1">Security & Resilience</span>
                            <p className="text-slate-300 text-sm">{project.security}</p>
                          </div>
                        )}
                        {project.failureHandling && (
                          <div>
                            <span className="text-cyan-500/70 text-xs font-bold uppercase tracking-wider block mb-1">Failure Handling</span>
                            <p className="text-slate-300 text-sm">{project.failureHandling}</p>
                          </div>
                        )}
                        {project.hardPart && (
                          <div>
                            <span className="text-fuchsia-500/70 text-xs font-bold uppercase tracking-wider block mb-1">Hardest Technical Challenge</span>
                            <p className="text-slate-300 text-sm">{project.hardPart}</p>
                          </div>
                        )}
                        {project.future && (
                          <div>
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Future Scope</span>
                            <p className="text-slate-400 text-sm italic">{project.future}</p>
                          </div>
                        )}
                        {project.credentials && (
                          <div className="mt-2 pt-2 border-t border-slate-700/50">
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Test Credentials</span>
                            <p className="text-slate-300 text-xs font-mono">{project.credentials}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800/50">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
