import React from 'react';
import { Project } from '../../../data/portfolio-data';
import { Check } from 'lucide-react';

interface ArchitectureBlockProps {
  project: Project;
}

export function ArchitectureBlock({ project }: ArchitectureBlockProps) {
  if (!project.architecture) return null;

  // We can try to split by periods to create faux-bullets if there are multiple sentences,
  // to closely match the Stitch design's bulleted architecture list.
  const sentences = project.architecture
    .split('. ')
    .map(s => s.trim())
    .filter(s => s.length > 0);

  return (
    <section>
      <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-3 border-b border-outline-variant/50 pb-1">
        Architecture & Solution
      </h3>
      
      {sentences.length === 1 ? (
        <p className="font-body-md text-body-md text-on-surface-variant mb-4">
          {project.architecture}
        </p>
      ) : (
        <>
          <p className="font-body-md text-body-md text-on-surface-variant mb-4">
            {sentences[0]}.
          </p>
          <ul className="space-y-2">
            {sentences.slice(1).map((sentence, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="text-outline shrink-0 mt-1" size={16} />
                <span className="font-body-md text-body-md text-on-surface-variant">
                  {sentence}{sentence.endsWith('.') ? '' : '.'}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
