import React from 'react';

export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="transparent" />
      <path d="M30 30L50 50L30 70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="55" y="65" width="15" height="8" rx="4" fill="currentColor" />
      <circle cx="70" cy="35" r="10" stroke="currentColor" strokeWidth="4" strokeDasharray="2 4" />
    </svg>
  );
}
