import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio-data';

export function ContactSection() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleContactClick = () => {
    try {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`, '_blank');
    } catch (e) {
      console.error("Mailto failed", e);
    }
    
    try {
      navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (e) {
      console.error("Clipboard failed", e);
    }
  };

  return (
    <footer id="contact" className="w-full relative z-10 pt-32 bg-surface-bright border-t border-outline-variant/30">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-display-lg text-4xl md:text-5xl text-primary tracking-tight">
            Let's Build Something
          </h2>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto">
            I'm currently open for new opportunities or exciting side projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button 
            onClick={handleContactClick}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-full hover:bg-on-surface transition-colors card-shadow"
          >
            <span className="font-label-sm text-[13px] tracking-wider uppercase font-semibold">
              Say Hello
            </span>
            {copied && (
              <span className="absolute -bottom-8 font-label-sm text-[11px] text-primary bg-surface-container-highest px-3 py-1 rounded-full animate-pulse whitespace-nowrap">
                {contact.email} copied!
              </span>
            )}
          </button>
        </motion.div>
      </div>

    </footer>
  );
}
