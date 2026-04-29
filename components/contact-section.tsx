"use client"

import { Mail, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-[10%] relative overflow-hidden bg-background">
      <div className="max-w-[1000px] w-full mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative p-8 md:p-16 rounded-3xl overflow-hidden bg-[#161616] border border-white/10 shadow-2xl text-center"
        >
          {/* Ambient Glowing Orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full bg-indigo-500/20 blur-[100px] pointer-events-none mix-blend-screen" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-8 border border-indigo-500/30">
              <Mail className="w-8 h-8 text-indigo-400" />
            </div>
            
            <h2 className="font-sora text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Extraordinary</span>
            </h2>
            
            <p className="text-lg text-gray-400 font-inter mb-10 max-w-xl mx-auto">
              Whether you have a specific project in mind or just want to explore possibilities, I'm currently open to new opportunities.
            </p>
            
            <a 
              href="mailto:tiwari.rachit@gmail.com" 
              className="group relative inline-flex items-center justify-center gap-3 bg-white text-background px-8 py-4 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Send me an email</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
