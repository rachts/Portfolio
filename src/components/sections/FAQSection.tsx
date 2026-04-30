import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useIntersection } from '../../hooks/use-intersection';
import { fadeInUp, staggerContainer } from '../../animations';
import { portfolioData } from '../../data/portfolio-data';

export function FAQSection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
              <span className="text-cyan-400 mr-3">04.</span> System Queries
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            {portfolioData.faq.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`glass-panel border rounded-lg transition-colors overflow-hidden ${
                    isOpen ? 'border-cyan-500/30' : 'border-slate-800/60 hover:border-slate-700'
                  }`}
                >
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="font-semibold text-slate-200">{item.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-cyan-400" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-4 pt-2 text-slate-400 border-t border-slate-800/50">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
