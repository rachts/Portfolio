import React from 'react';
import { Logo } from '../ui/Logo';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-5 md:px-6 h-16">
        {/* Brand */}
        <a className="text-headline-md tracking-tighter text-primary flex items-center gap-2 font-semibold" href="#">
          <Logo className="w-6 h-6 text-primary" />
          Rachit Kumar Tiwari
        </a>
        
        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <a className="text-on-surface-variant hover:text-primary transition-colors hover:opacity-70 font-body-md active:scale-95 duration-200" href="#systems">Projects</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors hover:opacity-70 font-body-md active:scale-95 duration-200" href="#projects">Stack</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors hover:opacity-70 font-body-md active:scale-95 duration-200" href="#journey">Journey</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors hover:opacity-70 font-body-md active:scale-95 duration-200" href="#focus">Focus</a>
        </div>
        
        {/* Trailing Action */}
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=tiwari.rachit@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-button-primary text-on-primary px-6 py-2 rounded-lg font-label-sm text-sm hover:opacity-90 transition-opacity active:scale-95 duration-200"
        >
          Connect
        </a>
      </div>
    </nav>
  );
}
