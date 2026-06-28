import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio-data';

export function TimelineSection() {
  return (
    <section id="journey" className="space-y-12 mb-24 relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-headline-md text-headline-md text-primary"
      >
        Engineering Journey
      </motion.h2>

      <div className="relative border-l-[2px] border-outline-variant/30 ml-4 md:ml-12 space-y-12 pl-8 md:pl-12">
        {portfolioData.timeline.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[42px] md:-left-[58px] top-2 w-5 h-5 rounded-full bg-surface-container-lowest border-4 border-primary z-10 shadow-sm transition-transform duration-300 group-hover:scale-110"></div>
            
            {/* Timeline Content */}
            <div className="bg-surface-container-lowest border border-outline-variant p-8 md:p-10 rounded-2xl w-full max-w-2xl card-shadow transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
              <span className="text-primary font-label-sm text-label-sm uppercase tracking-wider mb-2 block">
                {item.date}
              </span>
              <h3 className="font-headline-md text-[20px] font-semibold mb-3 text-primary">
                {item.title}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
