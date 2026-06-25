import React from 'react';
import { motion } from 'framer-motion';
import { Network, Mic, Building, Plane, Hammer } from 'lucide-react';
import { portfolioData } from '../../data/portfolio-data';

export function BeyondEngineeringSection() {
  const currentProjects = portfolioData.projects.filter(p => p.isFlagship).slice(0, 3);
  const beyond = portfolioData.beyond;

  if (!beyond) return null;

  return (
    <section id="focus" className="space-y-32 max-w-7xl mx-auto px-6 py-24 relative z-10">
      
      {/* What I'm Building Right Now */}
      <div className="space-y-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-semibold text-hero-primary tracking-tight"
        >
          What I'm Building Right Now
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {currentProjects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#F4F5F7] rounded-[1.25rem] p-8 md:p-10 flex flex-col hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-outline-variant/30"
            >
              <div className="w-12 h-12 bg-canvas border border-outline-variant/30 rounded-full flex items-center justify-center mb-6 text-primary shadow-sm">
                {i === 0 && <Network className="w-5 h-5" />}
                {i === 1 && <Mic className="w-5 h-5" />}
                {i === 2 && <Building className="w-5 h-5" />}
              </div>
              <h3 className="font-display text-xl font-semibold mb-1 text-hero-primary">
                {project.title.replace('SOLUTION: ', '')}
              </h3>
              <p className="text-xs font-semibold tracking-wide text-primary mb-4">
                {project.tags[0]}
              </p>
              <p className="text-[15px] text-on-surface-variant flex-grow leading-relaxed">
                {project.problem}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Current Interests */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#F4F5F7] rounded-[1.25rem] p-8 border border-transparent hover:border-outline-variant/30 transition-colors"
        >
          <h4 className="font-semibold text-[15px] mb-5 text-hero-primary">
            Current Vectors of Interest
          </h4>
          <div className="flex flex-wrap gap-3">
            {beyond.vectorsOfInterest.map(vector => (
              <span key={vector} className="px-4 py-2 bg-canvas border border-outline-variant/40 rounded-lg text-[13px] font-medium text-on-surface shadow-sm">
                {vector}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Beyond The Code */}
      <div className="space-y-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-semibold text-hero-primary tracking-tight"
        >
          Beyond The Code
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Large Feature */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-[#F4F5F7] rounded-[1.5rem] overflow-hidden group flex flex-col border border-transparent hover:border-outline-variant/30 transition-colors"
          >
            <div className="h-64 md:h-[22rem] w-full relative">
              <img 
                src={beyond.writing.imageUrl} 
                alt={beyond.writing.imageAlt}
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F4F5F7] via-[#F4F5F7]/40 to-transparent"></div>
            </div>
            <div className="p-8 md:p-10 -mt-24 md:-mt-28 relative z-10 flex-grow">
              <span className="inline-block px-3 py-1 bg-canvas border border-outline-variant/30 rounded-full text-[11px] font-bold text-primary mb-4 shadow-sm uppercase tracking-widest">
                
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3 text-hero-primary">
                {beyond.writing.title}
              </h3>
              <p className="text-[15px] text-on-surface-variant leading-relaxed max-w-2xl">
                {beyond.writing.description}
              </p>
            </div>
          </motion.div>

          {/* Side Stack */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#F4F5F7] rounded-[1.25rem] p-8 flex-1 border border-transparent hover:border-outline-variant/30 transition-colors"
            >
              <div className="w-10 h-10 bg-canvas border border-outline-variant/30 shadow-sm rounded-full flex items-center justify-center mb-5 text-tertiary">
                <Plane className="w-4 h-4" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-hero-primary">
                {beyond.travel.title}
              </h3>
              <p className="text-[14px] text-on-surface-variant leading-relaxed">
                {beyond.travel.description}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#F4F5F7] rounded-[1.25rem] p-8 flex-1 border border-transparent hover:border-outline-variant/30 transition-colors"
            >
              <div className="w-10 h-10 bg-canvas border border-outline-variant/30 shadow-sm rounded-full flex items-center justify-center mb-5 text-primary">
                <Hammer className="w-4 h-4" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-hero-primary">
                {beyond.buildingInPublic.title}
              </h3>
              <p className="text-[14px] text-on-surface-variant leading-relaxed">
                {beyond.buildingInPublic.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
