import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolio-data';
import { ProjectCard } from '../ui/ProjectCard';

export function ProjectExplorer() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = useMemo(() => {
    const tags = new Set<string>();
    portfolioData.projects.forEach(p => {
      if (p.tags.length > 0) {
        tags.add(p.tags[0]);
      }
    });
    return ['All', ...Array.from(tags)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return portfolioData.projects;
    return portfolioData.projects.filter(p => p.tags[0] === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="space-y-12 mb-24 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-8">
        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline-md text-headline-md text-primary"
          >
            Project Archives
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body-md text-body-md text-on-surface-variant max-w-xl"
          >
            A comprehensive overview of systems built, algorithms optimized, and products delivered.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 md:gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-5 py-2 font-label-sm text-label-sm transition-all tab-transition ${
                activeFilter === category 
                  ? 'bg-primary text-on-primary' 
                  : 'bg-surface-container-lowest border border-outline-variant hover:bg-surface-variant text-on-surface-variant'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Grid of Projects */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
