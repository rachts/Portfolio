import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from './Button'; // Reusing cn utility

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  glowOnHover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, glowOnHover = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "glass-panel rounded-xl border border-slate-800/60 p-6 relative overflow-hidden group",
          className
        )}
        whileHover={glowOnHover ? { 
          borderColor: "rgba(34,211,238,0.5)",
          boxShadow: "0 0 20px rgba(34,211,238,0.15)"
        } : undefined}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {/* Subtle gradient overlay on hover */}
        {glowOnHover && (
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  }
);
Card.displayName = "Card";
