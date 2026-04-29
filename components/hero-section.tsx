"use client"

import { ArrowRight, Download, Terminal } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-[10%] pt-24 overflow-hidden bg-background">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-white/5 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-300 tracking-wide">Available for new opportunities</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-sora text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Frontend Engineer building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">high-performance</span>, scalable web applications
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-400 font-inter mb-10 max-w-[90%] leading-relaxed">
            I specialize in React, Next.js, and modern UI/UX principles to build seamless digital experiences that prioritize performance and user engagement.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-8">
            <a href="#projects" className="group flex items-center gap-2 bg-white text-background px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-secondary/50 border border-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary/80 hover:scale-105 active:scale-95 transition-all duration-300">
              <Download className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-3 text-sm text-gray-500 font-mono">
            <span>Built 5+ production-grade apps</span>
            <span className="w-1 h-1 rounded-full bg-indigo-500" />
            <span>AI + Full Stack</span>
            <span className="w-1 h-1 rounded-full bg-indigo-500" />
            <span>React / Next.js</span>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
          className="relative perspective-[1000px] hidden md:block"
        >
          <div className="relative w-full max-w-lg mx-auto bg-[#161616]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform hover:-translate-y-2 hover:rotate-1 hover:shadow-indigo-500/20 transition-all duration-500">
            {/* Mac Window Header */}
            <div className="flex items-center px-4 py-3 border-b border-white/10 bg-[#1e1e1e]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex justify-center text-xs text-gray-500 font-mono items-center gap-2">
                <Terminal className="w-3 h-3" />
                rachit.tsx
              </div>
            </div>
            {/* Code Content */}
            <div className="p-6 text-sm font-mono leading-relaxed overflow-x-auto text-gray-300">
              <div className="flex">
                <span className="text-gray-600 select-none pr-4 text-right w-8">1</span>
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> = {'{'}</p>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none pr-4 text-right w-8">2</span>
                <p className="pl-4">name: <span className="text-green-400">'Rachit Tiwari'</span>,</p>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none pr-4 text-right w-8">3</span>
                <p className="pl-4">role: <span className="text-green-400">'Frontend Architect'</span>,</p>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none pr-4 text-right w-8">4</span>
                <p className="pl-4">skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'TypeScript'</span>],</p>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none pr-4 text-right w-8">5</span>
                <p className="pl-4">passion: <span className="text-green-400">'Building performant UIs'</span>,</p>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none pr-4 text-right w-8">6</span>
                <p>{'}'};</p>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none pr-4 text-right w-8">7</span>
                <p>&nbsp;</p>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none pr-4 text-right w-8">8</span>
                <p><span className="text-purple-400">export default function</span> <span className="text-blue-400">buildFuture</span>() {'{'}</p>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none pr-4 text-right w-8">9</span>
                <p className="pl-4"><span className="text-purple-400">return</span> engineer.<span className="text-yellow-300">innovate</span>();</p>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none pr-4 text-right w-8">10</span>
                <p>{'}'}</p>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none pr-4 text-right w-8">11</span>
                <div className="w-2 h-4 bg-gray-400 animate-pulse mt-1 ml-1" />
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
