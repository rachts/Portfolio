import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Globe, Blocks, Cpu, Database } from 'lucide-react';

export function ArchitectureShowcase() {
  const nodes = [
    { name: "Client Layer", icon: <MonitorSmartphone className="w-6 h-6" />, color: "text-primary", delay: 0 },
    { name: "Frontend Systems", icon: <Globe className="w-6 h-6" />, color: "text-tertiary", delay: 0.1 },
    { name: "API Gateway", icon: <Blocks className="w-6 h-6" />, color: "text-secondary", delay: 0.2 },
    { name: "AI Processing", icon: <Cpu className="w-6 h-6" />, color: "text-primary", delay: 0.3, active: true },
    { name: "Data Layer", icon: <Database className="w-6 h-6" />, color: "text-on-surface-variant", delay: 0.4 }
  ];

  return (
    <section className="mt-24 max-w-7xl mx-auto px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-neo-inset relative overflow-hidden"
      >
        <h3 className="text-2xl font-display font-semibold text-center mb-12 tracking-tight text-on-surface">Standard Architecture Topology</h3>
        
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 z-10">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-2 neo-surface shadow-neo-inset -translate-y-1/2 z-0 rounded-full"></div>
          
          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + node.delay, type: 'spring', stiffness: 100 }}
              className="flex flex-col items-center gap-4 z-10 w-full lg:w-auto"
            >
              <div className={`neo-surface shadow-neo-raised rounded-2xl px-6 py-4 flex items-center gap-3 w-48 justify-center border border-white/20 transition-all hover:scale-105 cursor-default ${node.active ? 'ring-2 ring-primary/20' : ''}`}>
                <span className={`${node.color}`}>{node.icon}</span>
                <span className="font-semibold text-on-surface">{node.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
