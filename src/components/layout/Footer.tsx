
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { portfolioData } from '../../data/portfolio-data';

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-[#050608] py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/10 via-brand-dark to-transparent" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <span className="font-bold text-2xl tracking-tight text-slate-100">RACHIT<span className="text-cyan-400">.</span></span>
          <p className="text-slate-500 mt-2 text-sm max-w-xs">
            Engineering scalable systems and highly interactive web experiences.
          </p>
        </div>
        
        <div className="flex items-center space-x-6">
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={portfolioData.contact.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.contact.email}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 max-w-6xl mt-8 pt-8 border-t border-slate-800/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Rachit Tiwari. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-slate-600">
          <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> System Operational</span>
        </div>
      </div>
    </footer>
  );
}
