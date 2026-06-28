import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Shield, Layers, MousePointer2 } from 'lucide-react';

export function EngineeringPrinciples() {
  const principles = [
    {
      title: "Performance",
      description: "Optimizing critical paths, minimizing latency, and ensuring fluid interactions under heavy loads.",
      icon: <Gauge className="w-5 h-5" />
    },
    {
      title: "Reliability",
      description: "Building fault-tolerant systems with robust error handling and comprehensive testing strategies.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Scalability",
      description: "Designing decoupled architectures that grow seamlessly alongside user demand and data volume.",
      icon: <Layers className="w-5 h-5" />
    },
    {
      title: "UX & Intuition",
      description: "Translating technical complexity into intuitive, accessible, and delightful interfaces.",
      icon: <MousePointer2 className="w-5 h-5" />
    }
  ];

  return (
    <section className="mb-24 pt-8">
      <div className="mb-16 md:mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary max-w-3xl mb-6"
        >
          Engineering Principles & Project Explorer
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl"
        >
          A systemic approach to building robust software. Bridging the gap between complex architectural design and seamless user experience through disciplined engineering.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 md:p-8 card-shadow"
      >
        <h2 className="font-label-sm text-label-sm text-outline uppercase tracking-widest mb-6">Core Principles</h2>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-outline-variant/50">
          {principles.map((p, i) => (
            <div key={i} className="flex-1 pt-4 md:pt-0 md:px-4 first:pt-0 first:md:pl-0 last:md:pr-0 group">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-on-surface-variant">
                  {p.icon}
                </span>
                <h3 className="font-headline-md text-[18px] text-primary">{p.title}</h3>
              </div>
              <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
