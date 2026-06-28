import React from 'react';
import { MetricCard } from './MetricCard';
import { ExternalLinks } from './ExternalLinks';
import { Project } from '../../../data/portfolio-data';

interface CaseStudySidebarProps {
  project: Project;
}

export function CaseStudySidebar({ project }: CaseStudySidebarProps) {
  const hasSidebarContent = project.impact || project.metrics || project.github || project.demo;

  if (!hasSidebarContent) return null;

  return (
    <div className="md:col-span-5 flex flex-col gap-6 bg-surface-bright p-6 rounded-lg border border-outline-variant/50 h-fit">
      {(project.impact || project.metrics) && (
        <>
          <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2 border-b border-outline-variant/50 pb-1">
            Impact & Metrics
          </h3>
          
          {project.impact && (
            <p className="font-body-md text-body-md text-on-surface-variant">
              {project.impact}
            </p>
          )}

          {project.metrics && (
            <div className="grid grid-cols-2 gap-6 pt-2">
              {parseMetrics(project.metrics).map((m, idx) => (
                <MetricCard key={idx} value={m.value} label={m.label} isFullWidth={m.isFullWidth} />
              ))}
            </div>
          )}
        </>
      )}

      <ExternalLinks github={project.github} demo={project.demo} />
    </div>
  );
}

function parseMetrics(metricsStr: string) {
  // Find a significant number/metric (e.g. 95%, 480ms → 120ms, 10,000+, 60fps)
  const match = metricsStr.match(/(\d+(?:\.\d+)?(?:%|ms|fps|k\+?|,?\d*\+?)(?:\s*(?:to|->|→)\s*\d+(?:ms|fps|%))?)/i);
  
  if (match && match[1]) {
    const value = match[1];
    let label = metricsStr.replace(value, '').trim();
    // Clean up leading/trailing punctuation
    label = label.replace(/^[:\-\s]+|[:\-\s]+$/g, '');
    
    // Capitalize first letter of label for better UI
    if (label.length > 0) {
      label = label.charAt(0).toUpperCase() + label.slice(1);
    }

    return [{ value, label, isFullWidth: true }];
  }
  
  // Fallback if no specific metric value found
  return [{ value: "Metric", label: metricsStr, isFullWidth: true }];
}
