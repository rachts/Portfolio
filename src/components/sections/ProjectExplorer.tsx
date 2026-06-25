import React from 'react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolio-data';
import { ProjectCard } from '../ui/ProjectCard';

export function ProjectExplorer() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract unique tags/categories from all projects
  const categories = useMemo(() => {
    const tags = new Set<string>();
    portfolioData.projects.forEach(p => {
      // Just take the first tag as the primary category for filtering to keep it simple,
      // or we can add all tags. Let's add the first tag of each project as its category.
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
    <section id="projects" className="space-y-12 max-w-7xl mx-auto w-full px-6 py-24 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-semibold text-hero-primary tracking-tight"
          >
            Project Explorer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-on-surface-variant font-medium"
          >
            Deep dives into architecture, challenges, and tradeoffs.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-5 py-2 font-medium text-sm transition-all ${
                activeFilter === category 
                  ? 'bg-primary/10 text-primary border border-primary/20' 
                  : 'bg-card-surface border border-outline-variant hover:bg-surface-variant text-on-surface-variant'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Bento Grid of Projects */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
