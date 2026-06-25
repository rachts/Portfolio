import React from 'react';

import { motion } from 'framer-motion';
import { useIntersection } from '../../hooks/use-intersection';
import { fadeInUp, staggerContainer } from '../../animations';
import { portfolioData } from '../../data/portfolio-data';
import { Card } from '../ui/Card';
import { Cpu, Zap, Shield } from 'lucide-react';

export function AboutSection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 relative bg-brand-darker/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="mb-16 md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
              <span className="text-cyan-400 mr-3">01.</span> Value Proposition
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed border-l-2 border-slate-700 pl-6">
              {portfolioData.about.valueProp}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card glowOnHover className="bg-[#0b0c10]/80">
              <Cpu className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-slate-200">Systems Architecture</h3>
              <p className="text-slate-400 text-sm">Designing robust, scalable microservices and monolithic architectures that withstand high traffic.</p>
            </Card>
            
            <Card glowOnHover className="bg-[#0b0c10]/80">
              <Zap className="w-8 h-8 text-fuchsia-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-slate-200">Performance First</h3>
              <p className="text-slate-400 text-sm">Optimizing critical rendering paths, database queries, and network payloads for blazing fast UX.</p>
            </Card>

            <Card glowOnHover className="bg-[#0b0c10]/80">
              <Shield className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-slate-200">Resilient Infrastructure</h3>
              <p className="text-slate-400 text-sm">Implementing robust error boundaries, automated testing, and secure authentication flows.</p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
