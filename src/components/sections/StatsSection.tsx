import { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { useIntersection } from '../../hooks/use-intersection';
import { portfolioData } from '../../data/portfolio-data';

function Counter({ from, to }: { from: number; to: number }) {
  const [ref, isVisible] = useIntersection<HTMLSpanElement>({ threshold: 0.5, triggerOnce: true });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isVisible) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          setValue(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [isVisible, from, to]);

  return <span ref={ref}>{value.toLocaleString()}{to >= 1000 ? '+' : ''}</span>;
}

export function StatsSection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-20 relative border-y border-slate-800/50 bg-[#0b0c10]/80">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {portfolioData.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 rounded-lg bg-slate-900/30 border border-slate-800/30">
              <div className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-2 font-mono glow-text">
                <Counter from={0} to={stat.value} />
              </div>
              <div className="text-slate-400 uppercase tracking-widest text-sm font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
