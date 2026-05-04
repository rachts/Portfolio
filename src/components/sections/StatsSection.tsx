import { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { useIntersection } from '../../hooks/use-intersection';
import { portfolioData } from '../../data/portfolio-data';

function Counter({ from, to, suffix = "" }: { from: number; to: number; suffix?: string }) {
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

  return <span ref={ref}>{value.toLocaleString()}{suffix}</span>;
}

export function StatsSection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });
  const [stats, setStats] = useState(portfolioData.stats);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    async function fetchGithubStats() {
      try {
        // Fetch Repo Count
        const userResponse = await fetch('https://api.github.com/users/rachts');
        const userData = await userResponse.json();
        
        // Fetch Contributions
        const contribResponse = await fetch('https://github-contributions-api.deno.dev/rachts.json');
        const contribData = await contribResponse.json();

        setStats(prev => prev.map(stat => {
          if (stat.label === "Projects Deployed" && userData.public_repos) {
            return { ...stat, value: userData.public_repos };
          }
          if (stat.label === "Code Contributions" && contribData.totalContributions) {
            return { ...stat, value: contribData.totalContributions };
          }
          return stat;
        }));
        setIsLive(true);
      } catch (error) {
        console.error('Failed to fetch realtime stats:', error);
      }
    }

    fetchGithubStats();
  }, []);

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
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 rounded-lg bg-slate-900/30 border border-slate-800/30 relative overflow-hidden group">
              {isLive && stat.label === "Code Contributions" && (
                <div className="absolute top-2 right-2 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  <span className="text-[10px] font-mono text-cyan-500/70 uppercase tracking-tighter">Live</span>
                </div>
              )}
              <div className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-2 font-mono glow-text">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
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
