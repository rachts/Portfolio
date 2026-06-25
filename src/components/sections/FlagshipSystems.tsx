import React from 'react';
import { portfolioData } from '../../data/portfolio-data';
import { CaseStudyCard } from '../ui/CaseStudyCard';

export function FlagshipSystems() {
  const flagshipProjects = portfolioData.projects.filter(p => p.isFlagship);

  return (
    <section id="systems" className="max-w-7xl mx-auto w-full px-6 py-24 space-y-16 relative z-10">
      {/* Header Section */}
      <header className="max-w-3xl space-y-4">
        <h1 className="text-5xl font-display font-bold text-on-surface tracking-tight">Systems Architecture</h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          Deep dives into flagship engineering problems, architectural decisions, and the resulting impact. Built for scale, resilience, and user experience.
        </p>
      </header>

      {/* Vertical Stack Layout */}
      <div className="flex flex-col gap-8 md:gap-12">
        {flagshipProjects.map((project, index) => (
          <CaseStudyCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
