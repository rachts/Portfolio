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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-[450px] mx-auto md:max-w-none aspect-[3/4] rounded-[2rem] overflow-hidden bg-surface-variant"
          >
            <img 
              src="/visuals/IMG_20260518_072615.jpg" 
              alt="Perspective"
              className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:pr-8"
          >
            <p className="text-xl md:text-2xl text-on-surface leading-relaxed font-medium">
              I spend most of my days building digital experiences. When I step away from the screen, I look for stories in places, people, and light.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Photography is a quiet hobby that forces me to slow down and observe the world instead of trying to optimize it. 
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Whether I'm writing code, reading about infrastructure, or exploring a new city, I'm always looking for the underlying structure of how things work.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
