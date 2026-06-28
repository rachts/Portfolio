import React from 'react';
import { Project } from '../../../data/portfolio-data';

interface EngineeringHighlightsProps {
  project: Project;
}

export function EngineeringHighlights({ project }: EngineeringHighlightsProps) {
  const sections = [
    { title: "The Problem", content: project.problem },
    { title: "Tradeoffs", content: project.tradeoffs },
    { title: "Constraints", content: project.constraints },
    { title: "Security", content: project.security },
    { title: "The Hard Part", content: project.hardPart },
    { title: "Failure Handling", content: project.failureHandling },
    { title: "Future Architecture", content: project.future },
  ];

  return (
    <>
      {sections.map(
        (section, idx) =>
          section.content && (
            <section key={idx}>
              <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-3 border-b border-outline-variant/50 pb-1">
                {section.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {section.content}
              </p>
            </section>
          )
      )}
    </>
  );
}
