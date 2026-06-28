import React from 'react';
import { portfolioData } from '../../data/portfolio-data';
import { CaseStudy } from '../ui/case-study/CaseStudy';

export function FlagshipSystems() {
  const flagshipProjects = portfolioData.projects.filter(p => p.isFlagship);

  return (
    <section id="systems" className="w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10 py-section-gap-mobile md:py-section-gap-desktop">
      {/* Header Section */}
      <div className="mb-section-gap-mobile md:mb-[80px]">
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-4 tracking-[-0.02em]">
          Systems Architecture
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Deep dives into flagship engineering problems, architectural decisions, and the resulting impact. Built for scale, resilience, and user experience.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-12">
        {flagshipProjects.map((project) => (
          <CaseStudy key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
