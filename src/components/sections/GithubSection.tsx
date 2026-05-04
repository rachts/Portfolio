import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIntersection } from '../../hooks/use-intersection';

import { GitHubCalendar } from 'react-github-calendar';

export function GithubSection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });
  const [totalContributions, setTotalContributions] = useState<number | null>(null);

  useEffect(() => {
    async function fetchLiveContribs() {
      try {
        // Fetch from a different proxy to potentially bypass primary cache and get total count
        const response = await fetch(`https://github-contributions-api.deno.dev/rachts.json?t=${Date.now()}`);
        const data = await response.json();
        if (data.totalContributions) {
          setTotalContributions(data.totalContributions);
        }
      } catch (error) {
        console.error('Error fetching live contributions:', error);
      }
    }
    fetchLiveContribs();
  }, []);

  const githubTheme = {
    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <section className="py-20 relative border-b border-slate-800/50 bg-[#050608]/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tighter">
              <span className="text-slate-500 mr-2">03.</span>
              <span className="gradient-text">CODE_CONTRIBUTIONS</span>
            </h2>
            <div className="h-[1px] w-32 md:w-64 bg-slate-800 hidden sm:block"></div>
          </div>

          <div className="w-full glass-panel p-8 rounded-2xl border border-slate-800/50 flex flex-col items-center">
            <div className="w-full overflow-hidden flex justify-center">
               <GitHubCalendar 
                username="rachts" 
                // Cache busting: passing a unique string to the year prop
                // which gets appended as a query param in the library's fetch call
                year={`last&t=${Date.now()}` as any}
                blockSize={12}
                blockMargin={4}
                fontSize={14}
                theme={githubTheme}
                colorScheme="dark"
              />
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
                <div className="flex flex-col items-center p-4 rounded-xl bg-slate-900/50 border border-slate-800/30 relative">
                    <div className="absolute top-2 right-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                      </span>
                    </div>
                    <span className="text-cyan-400 font-mono text-xl mb-1">
                      {totalContributions ? totalContributions.toLocaleString() : 'LIVE_DATA'}
                    </span>
                    <span className="text-slate-500 text-xs uppercase tracking-widest">Total Contributions</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl bg-slate-900/50 border border-slate-800/30">
                    <span className="text-cyan-400 font-mono text-xl mb-1">PUBLIC_REPOS</span>
                    <span className="text-slate-500 text-xs uppercase tracking-widest">Activity Data</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl bg-slate-900/50 border border-slate-800/30">
                    <span className="text-cyan-400 font-mono text-xl mb-1">ENGAGEMENT</span>
                    <span className="text-slate-500 text-xs uppercase tracking-widest">Consistency</span>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
