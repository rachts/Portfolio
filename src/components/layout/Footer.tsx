import React from 'react';
import { Logo } from '../ui/Logo';
import { portfolioData } from '../../data/portfolio-data';

export function Footer() {
  const { contact } = portfolioData;

  return (
    <footer className="w-full py-16 md:py-24 bg-surface border-t border-outline-variant/30 mt-auto relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Brand */}
        <div className="font-headline-md text-headline-md text-primary flex items-center gap-2">
          <Logo className="w-6 h-6 text-primary" />
          Rachit Kumar Tiwari
        </div>
        
        {/* Copyright */}
        <div className="font-label-sm text-label-sm text-secondary text-center md:text-left">
          © 2026 Rachit Kumar Tiwari. Built for the next era of engineering.
        </div>
        
        {/* Links */}
        <div className="flex items-center gap-6">
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href={contact.twitter} target="_blank" rel="noreferrer">Twitter</a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href={`mailto:${contact.email}`}>Email</a>
        </div>
        
      </div>
    </footer>
  );
}
