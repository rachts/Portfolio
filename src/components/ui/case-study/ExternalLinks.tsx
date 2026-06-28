import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ExternalLinksProps {
  github?: string;
  demo?: string;
}

export function ExternalLinks({ github, demo }: ExternalLinksProps) {
  if (!github && !demo) return null;

  return (
    <div className="flex flex-col gap-3 mt-6 border-t border-outline-variant/30 pt-6">
      {demo && demo !== '#' && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-4 py-3 bg-primary text-on-primary rounded-lg hover:opacity-80 transition-opacity"
        >
          <span className="font-label-sm text-label-sm uppercase tracking-wider">Live Demo</span>
          <ExternalLink size={16} />
        </a>
      )}
      {github && github !== '#' && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-4 py-3 bg-surface-container-high text-primary rounded-lg hover:bg-surface-variant transition-colors"
        >
          <span className="font-label-sm text-label-sm uppercase tracking-wider">Source Code</span>
          <Github size={16} />
        </a>
      )}
    </div>
  );
}
