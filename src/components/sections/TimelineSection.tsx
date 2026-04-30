
import { motion } from 'framer-motion';
import { useIntersection } from '../../hooks/use-intersection';
import { portfolioData } from '../../data/portfolio-data';

export function TimelineSection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="timeline" className="py-24 relative bg-brand-darker/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center">
              <span className="text-fuchsia-400 mr-3">03.</span> Execution Timeline
            </h2>
          </div>

          <div className="relative border-l border-slate-700/50 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-12">
            {portfolioData.timeline.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Node indicator */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-fuchsia-500 rounded-full shadow-[0_0_10px_rgba(217,70,239,0.8)]" />
                
                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-[45%] ${
                  i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="glass-panel p-6 rounded-lg border border-slate-800 hover:border-fuchsia-500/30 transition-colors">
                    <span className="text-fuchsia-400 font-mono text-sm mb-2 block">{item.date}</span>
                    <h3 className="text-lg font-bold text-slate-200 mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
