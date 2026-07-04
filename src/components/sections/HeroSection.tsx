import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../../data/portfolio-data';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-32 pb-section-gap-desktop min-h-screen flex items-center">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          
          {/* Left Column: Copy */}
          <div className="md:col-span-7 flex flex-col gap-8 pr-0 md:pr-12 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-hero-primary max-w-2xl">
                {portfolioData.hero.headline}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                {portfolioData.hero.subtext}
              </p>
              <blockquote className="pl-4 border-l-2 border-outline-variant italic font-body-md text-body-md text-on-surface-variant">
                "{portfolioData.hero.quote}"
              </blockquote>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 pt-4"
            >
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-button-primary text-on-primary px-8 py-3 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                View Work
                <ArrowRight size={16} />
              </button>
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card-surface text-primary card-border px-8 py-3 rounded-lg font-label-sm text-label-sm hover:bg-surface transition-colors flex items-center gap-2 cursor-pointer"
              >
                Resume
                <Download size={16} />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tiwari.rachit@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card-surface text-primary card-border px-8 py-3 rounded-lg font-label-sm text-label-sm hover:bg-surface transition-colors flex items-center gap-2 cursor-pointer"
              >
                Connect
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visuals & Metrics */}
          <div className="md:col-span-5 flex flex-col gap-6 relative mt-12 md:mt-0">
            {/* Headshot Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-card-surface rounded-xl overflow-hidden card-border micro-shadow aspect-[4/5] md:aspect-square relative group"
            >
              <img 
                alt="Rachit Kumar Tiwari" 
                className="w-full h-full object-cover object-center filter grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0" 
                src="/hero-profile.jpg"
              />
              <div className="absolute inset-0 border border-black/5 rounded-xl pointer-events-none"></div>
            </motion.div>
            
            {/* Metrics Bento Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {portfolioData.stats.map((stat, idx) => (
                <div key={idx} className="bg-card-surface p-6 rounded-xl card-border micro-shadow flex flex-col justify-center">
                  <span className="font-headline-md text-headline-md text-hero-primary">{stat.value}{stat.suffix}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-1">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
