import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Shield, TrendingUp, MousePointer2 } from 'lucide-react';

export function EngineeringPrinciples() {
  const principles = [
    {
      title: "Performance",
      description: "Optimizing latency at every tier. Milliseconds matter when building intuitive, flow-state applications.",
      icon: <Gauge className="w-6 h-6" />
    },
    {
      title: "Reliability",
      description: "Designing for failure. Automated recovery, robust fallback mechanisms, and zero-trust data integrity.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Scalability",
      description: "Stateless services, horizontal growth patterns, and decoupled architectures ready for global loads.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "UX & Intuition",
      description: "Complex systems distilled into tactile, self-evident interfaces. Technology should feel invisible.",
      icon: <MousePointer2 className="w-6 h-6" />
    }
  ];

  return (
    <section className="space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-semibold text-hero-primary tracking-tight"
        >
          Systems Engineering Principles
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-on-surface-variant font-medium"
        >
          Building software that scales gracefully without compromising user experience.
        </motion.p>
      </div>

      {/* 4 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {principles.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (i * 0.1) }}
            className="bg-card-surface border border-outline-variant p-6 rounded-xl card-shadow hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary mb-6">
              {p.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-hero-primary mb-3 tracking-tight">{p.title}</h3>
              <p className="text-sm text-on-surface-variant">{p.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
