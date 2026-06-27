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
    <main className="pt-32 pb-24 min-h-screen flex items-center">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Copy */}
          <div className="md:col-span-7 flex flex-col gap-8 pr-0 md:pr-12 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-primary font-bold tracking-widest uppercase text-sm md:text-base">
                  {portfolioData.hero.greeting}
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-hero-primary max-w-2xl leading-tight">
                  {portfolioData.hero.headline}
                </h1>
              </div>
              <p className="text-lg font-body text-on-surface-variant max-w-xl">
                {portfolioData.hero.subtext}
              </p>
              <blockquote className="pl-4 border-l-2 border-outline-variant italic text-base font-body text-on-surface-variant">
                "I enjoy designing systems that transform complex problems into intuitive experiences."
              </blockquote>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-button-primary text-on-primary px-8 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 active:scale-95 duration-200"
              >
                View Work
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <a 
                href="#contact"
                className="bg-card-surface text-primary card-border px-8 py-3 rounded-lg font-semibold text-sm hover:bg-surface transition-colors flex items-center gap-2 active:scale-95 duration-200 cursor-pointer"
              >
                Connect
              </a>
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card-surface text-on-surface-variant card-border px-8 py-3 rounded-lg font-semibold text-sm hover:text-primary hover:bg-surface transition-colors flex items-center gap-2 active:scale-95 duration-200 cursor-pointer"
              >
                Resume
                <Download className="w-4 h-4 ml-1" />
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
                  <span className="text-2xl font-bold font-display text-hero-primary">{stat.value}{stat.suffix}</span>
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mt-1">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
