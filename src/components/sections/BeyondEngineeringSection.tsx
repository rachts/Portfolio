import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Hammer, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolio-data';

export function BeyondEngineeringSection() {
  const beyond = portfolioData.beyond;

  if (!beyond) return null;

  return (
    <section id="focus" className="space-y-24 mb-24 relative z-10">
      
      {/* Current Interests */}
      <div className="space-y-8">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline-md text-headline-md text-primary"
        >
          Current Vectors of Interest
        </motion.h3>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 card-shadow"
        >
          <div className="flex flex-wrap gap-3">
            {beyond.vectorsOfInterest.map(vector => (
              <span key={vector} className="px-4 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg font-label-sm text-[13px] font-semibold text-on-surface">
                {vector}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Beyond The Code (Editorial Layout) */}
      <div className="space-y-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display-lg text-4xl md:text-5xl text-primary"
        >
          Beyond The Code
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Large Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-3xl overflow-hidden group card-shadow flex flex-col"
          >
            <div className="h-64 md:h-80 w-full relative overflow-hidden bg-surface-variant">
              <img 
                src={beyond.writing.imageUrl} 
                alt={beyond.writing.imageAlt}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent"></div>
            </div>
            <div className="p-8 md:p-10 -mt-12 relative z-10 flex-grow bg-surface-container-lowest">
              <span className="inline-block px-3 py-1 bg-surface-container-high border border-outline-variant/50 rounded-full font-label-sm text-[11px] font-bold text-primary mb-4 uppercase tracking-wider">
                ruhsazzz
              </span>
              <h3 className="font-headline-md text-3xl mb-4 text-primary">{beyond.writing.title}</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed max-w-2xl">
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
              className="bg-surface-container-lowest border border-outline-variant rounded-3xl p-8 flex-1 card-shadow hover:-translate-y-1 transition-transform duration-300 group"
            >
              <div className="w-12 h-12 bg-surface-container-high border border-outline-variant/30 rounded-full flex items-center justify-center mb-6 text-on-surface group-hover:text-primary transition-colors">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="font-headline-md text-xl mb-3 text-primary">{beyond.travel.title}</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {beyond.travel.description}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-surface-container-lowest border border-outline-variant rounded-3xl p-8 flex-1 card-shadow hover:-translate-y-1 transition-transform duration-300 group"
            >
              <div className="w-12 h-12 bg-surface-container-high border border-outline-variant/30 rounded-full flex items-center justify-center mb-6 text-on-surface group-hover:text-primary transition-colors">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="font-headline-md text-xl mb-3 text-primary">{beyond.buildingInPublic.title}</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {beyond.buildingInPublic.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
