import React from 'react';

interface TechStackProps {
  tags: string[];
}

export function TechStack({ tags }: TechStackProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-xl font-label-sm text-label-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
