import React from 'react';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-margin-mobile md:px-gutter h-16">
        <a href="#" className="font-headline-md text-headline-md tracking-tighter text-primary dark:text-on-primary">
          Rachit Kumar Tiwari
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-on-surface-variant dark:text-on-secondary-fixed-variant hover:text-primary transition-colors hover:opacity-70 font-body-md text-body-md active:scale-95 duration-200" href="#systems">Projects</a>
          <a className="text-on-surface-variant dark:text-on-secondary-fixed-variant hover:text-primary transition-colors hover:opacity-70 font-body-md text-body-md active:scale-95 duration-200" href="#projects">Stack</a>
          <a className="text-on-surface-variant dark:text-on-secondary-fixed-variant hover:text-primary transition-colors hover:opacity-70 font-body-md text-body-md active:scale-95 duration-200" href="#journey">Journey</a>
          <a className="text-on-surface-variant dark:text-on-secondary-fixed-variant hover:text-primary transition-colors hover:opacity-70 font-body-md text-body-md active:scale-95 duration-200" href="#focus">Focus</a>
        </div>
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=tiwari.rachit@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-button-primary text-on-primary px-6 py-2 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity active:scale-95 duration-200"
        >
          Connect
        </a>
      </div>
    </nav>
  );
}
