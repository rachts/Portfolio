import React from 'react';
import { motion } from 'framer-motion';

export function StatsSection() {
  const stats = [
    {
      label: "Projects Built",
      value: "31+",
      icon: "rocket_launch",
      colorClass: "text-primary",
      hoverClass: "group-hover:text-primary"
    },
    {
      label: "Contributions",
      value: "3308+",
      icon: "code_blocks",
      colorClass: "text-tertiary",
      hoverClass: "group-hover:text-tertiary"
    },
    {
      label: "Users Impacted",
      value: "100+",
      icon: "groups",
      colorClass: "text-primary",
      hoverClass: "group-hover:text-primary"
    },
    {
      label: "Startup Products",
      value: "3",
      icon: "domain",
      colorClass: "text-tertiary",
      hoverClass: "group-hover:text-tertiary"
    }
  ];

  return (
    <div className="lg:col-span-5 grid grid-cols-2 gap-6 w-full mt-12 lg:mt-0 relative z-20">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
          className="neo-raised p-6 flex flex-col justify-center items-center text-center group hover:-translate-y-1 transition-transform duration-300"
        >
          <div className={`w-12 h-12 rounded-full neo-inset flex items-center justify-center mb-4 ${stat.colorClass}`}>
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              {stat.icon}
            </span>
          </div>
          <h3 className={`text-3xl font-display font-bold text-on-surface transition-colors ${stat.hoverClass}`}>
            {stat.value}
          </h3>
          <p className="text-sm font-body text-on-surface-variant mt-1 font-medium">{stat.label}</p>
        </motion.div>
      ))}

      {/* Founder Statement Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="col-span-2 neo-inset p-8 relative overflow-hidden group"
      >
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
        <span className="material-symbols-outlined text-primary/30 text-5xl absolute -left-2 -top-2">format_quote</span>
        
        <div className="relative z-10 pl-6">
          <p className="font-body text-lg italic text-on-surface-variant leading-relaxed">
            "I enjoy designing systems that transform complex problems into intuitive experiences."
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden border-2 border-surface flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
              <img 
                className="w-full h-full object-cover" 
                alt="Rachit Kumar Tiwari"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx3LyGAq83Sn-PebV3FPJBb_oLHBEfm9obstTnm1-VXOv3E6MswQsZxl6qz0RuMjy2qyOUxGFGA9ArLHJlv86RuiZDdHoR0dgNTLa_jrxbYCKPBHxENtiWksGlgg1RBFKigjx7RhBcRnbETn9ZoweVwJ7sfU1JglT4Fu0Bgh186tSIGTqcMmz-7mAZEefogMC1WmVc7UoJoL1cpkp2vWeFheOfnSn7hvYwRwpHHR3w5DjZTPVuWKT703oBeSNCw4SCdjEJQrzZ3EZm"
              />
            </div>
            <div>
              <h4 className="font-headline font-bold text-on-surface text-sm">Rachit Kumar Tiwari</h4>
              <p className="font-body text-xs text-on-surface-variant">Founder Statement</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
