import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio-data';

export function ContactSection() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleContactClick = () => {
    try {
      // Attempt to open default mail client
      window.location.href = `mailto:${contact.email}`;
    } catch (e) {
      console.error("Mailto failed", e);
    }
    
    // Always copy to clipboard as a reliable fallback
    try {
      navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (e) {
      console.error("Clipboard failed", e);
    }
  };

  return (
    <section id="contact" className="space-y-16 max-w-4xl mx-auto px-6 py-32 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-hero-primary tracking-tight">
          Let's Build Something
        </h2>
        <p className="text-lg text-on-surface-variant font-medium max-w-2xl mx-auto">
          I'm currently open for new opportunities or exciting side projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="pt-8 pb-12"
      >
        <button 
          onClick={handleContactClick}
          className="inline-flex flex-col items-center gap-2 cursor-pointer relative z-50 group"
        >
          <span className="font-bold text-hero-primary text-xl group-hover:opacity-70 transition-opacity">
            Say Hello
          </span>
          {copied && (
            <span className="text-sm font-medium text-primary animate-pulse absolute -bottom-8 whitespace-nowrap">
              {contact.email} copied!
            </span>
          )}
        </button>
      </motion.div>
      
      <div className="flex justify-center gap-12 pt-8">
        <a href={contact.github} target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-hero-primary transition-colors font-bold text-sm tracking-wide">
           GH
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-hero-primary transition-colors font-bold text-sm tracking-wide">
           IN
        </a>
        <a href={contact.twitter} target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-hero-primary transition-colors font-bold text-sm tracking-wide">
           X
        </a>
      </div>
    </section>
  );
}
