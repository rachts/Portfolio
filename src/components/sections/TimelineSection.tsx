import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio-data';

export function TimelineSection() {
  return (
    <section id="journey" className="space-y-12 max-w-7xl mx-auto px-6 relative z-10 py-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl font-semibold text-on-surface tracking-tight"
      >
        Engineering Journey
      </motion.h2>

      <div className="relative border-l border-outline-variant/50 ml-4 md:ml-8 space-y-12 pl-8 md:pl-12">
        {portfolioData.timeline.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[37px] md:-left-[53px] top-6 w-3.5 h-3.5 rounded-full bg-canvas border-[2.5px] border-primary z-10"></div>
            
            {/* Timeline Content */}
            <div className="bg-[#F4F5F7] p-8 md:p-10 rounded-[1.25rem] w-full max-w-2xl border border-transparent hover:border-outline-variant/30 transition-colors duration-300">
              <span className="text-primary font-semibold text-xs uppercase tracking-wider mb-3 block">
                {item.date}
              </span>
              <h3 className="font-display text-2xl font-semibold mb-3 text-hero-primary">
                {item.title}
              </h3>
              <p className="text-[15px] text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
