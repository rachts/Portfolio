import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../../data/portfolio-data';
import { TechStack } from './TechStack';
import { EngineeringHighlights } from './EngineeringHighlights';
import { ArchitectureBlock } from './ArchitectureBlock';
import { CaseStudySidebar } from './CaseStudySidebar';

interface CaseStudyProps {
  project: Project;
}

export function CaseStudy({ project }: CaseStudyProps) {
  // Clean up the title if it has a prefix like "SOLUTION: "
  const cleanTitle = project.title.replace('SOLUTION: ', '');

  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-surface-container-lowest rounded-xl border border-outline-variant p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.04)] grid grid-cols-1 md:grid-cols-12 gap-8 relative overflow-hidden group"
    >
      <div className="md:col-span-12 mb-4 border-b border-outline-variant/30 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-2">
            {cleanTitle}
          </h2>
        </div>
        <TechStack tags={project.tags} />
      </div>

      <div className="md:col-span-7 flex flex-col gap-8">
        <EngineeringHighlights project={project} />
        <ArchitectureBlock project={project} />
      </div>

      <CaseStudySidebar project={project} />
    </motion.article>
  );
}
