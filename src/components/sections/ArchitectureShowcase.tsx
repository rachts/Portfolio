import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Globe, Blocks, Cpu, Database } from 'lucide-react';

export function ArchitectureShowcase() {
  const nodes = [
    { name: "Client Layer", icon: <MonitorSmartphone className="w-5 h-5" />, color: "text-primary", delay: 0 },
    { name: "Frontend Systems", icon: <Globe className="w-5 h-5" />, color: "text-primary", delay: 0.1 },
    { name: "API Gateway", icon: <Blocks className="w-5 h-5" />, color: "text-primary", delay: 0.2 },
    { name: "AI Processing", icon: <Cpu className="w-5 h-5" />, color: "text-primary", delay: 0.3, active: true },
    { name: "Data Layer", icon: <Database className="w-5 h-5" />, color: "text-on-surface-variant", delay: 0.4 }
  ];

  return (
    <section className="mt-24 max-w-7xl mx-auto px-6 relative z-10 pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-surface-bright rounded-[2rem] p-8 md:p-12 border border-outline-variant relative overflow-hidden"
      >
        <h3 className="text-2xl font-display font-semibold text-center mb-12 tracking-tight text-on-surface">Standard Architecture Topology</h3>
        
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 z-10">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-outline-variant/50 -translate-y-1/2 z-0"></div>
          
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
              <div className={`bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-outline-variant rounded-2xl px-6 py-4 flex items-center gap-3 w-48 justify-center transition-all hover:-translate-y-1 cursor-default ${node.active ? 'ring-2 ring-primary/20' : ''}`}>
                <span className={`${node.color}`}>{node.icon}</span>
                <span className="font-semibold text-on-surface text-sm">{node.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
