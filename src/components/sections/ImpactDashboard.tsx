import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { portfolioData } from '../../data/portfolio-data';
import { Trophy, Code2, Users, Activity } from 'lucide-react';

export function ImpactDashboard() {
  const [totalContributions, setTotalContributions] = useState<number | null>(null);

  useEffect(() => {
    async function fetchLiveContribs() {
      try {
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

  const stats = portfolioData.stats;

  const githubTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <section className="mb-24 relative z-10">
      <div className="space-y-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline-md text-headline-md text-primary"
        >
          GitHub & Impact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl card-shadow flex items-center justify-between group hover:-translate-y-1 transition-transform duration-300"
            >
              <div>
                <p className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant mb-2">
                  {stat.label}
                </p>
                <div className="font-headline-md text-3xl font-bold text-primary flex items-baseline gap-1">
                  {stat.label === "Code Contributions" && totalContributions 
                    ? totalContributions.toLocaleString()
                    : stat.value}
                  <span className="text-xl text-primary/60">{stat.suffix}</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-surface-container-high border border-outline-variant/30 rounded-full flex items-center justify-center text-on-surface group-hover:text-primary transition-colors">
                {i === 0 ? <Trophy className="w-5 h-5" /> : 
                 i === 1 ? <Code2 className="w-5 h-5" /> : 
                 <Users className="w-5 h-5" />}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-surface-container-lowest border border-outline-variant p-8 rounded-3xl card-shadow flex flex-col items-center overflow-hidden w-full relative"
        >
          <div className="w-full flex justify-between items-center mb-8">
            <h3 className="font-headline-md text-[18px] text-primary flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Contribution Graph
            </h3>
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant px-3 py-1 bg-surface-container-low border border-outline-variant/50 rounded-full flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Live Sync
            </span>
          </div>

          <div className="w-full overflow-x-auto no-scrollbar pb-4 flex justify-center">
            <GitHubCalendar 
              username="rachts" 
              year={`last&t=${Date.now()}` as any}
              blockSize={13}
              blockMargin={5}
              fontSize={14}
              theme={githubTheme}
              colorScheme="light"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
