
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useIntersection } from '../../hooks/use-intersection';
import { fadeInUp, staggerContainer } from '../../animations';
import { portfolioData } from '../../data/portfolio-data';
import { Card } from '../ui/Card';

export function ProjectsSection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center">
              <span className="text-cyan-400 mr-3">02.</span> Technical Solutions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <Card glowOnHover className="h-full flex flex-col group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-xs font-mono text-cyan-400 bg-cyan-900/30 px-2 py-1 rounded">
                      ID: {project.id}
                    </div>
                    <div className="flex space-x-3 text-slate-400">
                      <a href={project.github} className="hover:text-cyan-400 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.demo} className="hover:text-cyan-400 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="mb-4 space-y-3 flex-grow">
                    <div>
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Problem</span>
                      <p className="text-slate-300 text-sm">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Impact</span>
                      <p className="text-cyan-300 text-sm font-medium">{project.impact}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800/50">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
