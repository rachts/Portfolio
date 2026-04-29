"use client"

import { Terminal } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", mass: 1, stiffness: 100, damping: 20 } 
    }
  }

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-[10%] relative overflow-hidden bg-background">
      <div className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* TEXT CONTENT */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-1/2 space-y-8"
        >
          <motion.div variants={childVariants}>
            <h2 className="font-sora text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Code</span>
            </h2>
          </motion.div>

          <motion.div variants={childVariants} className="space-y-6 text-lg font-inter text-gray-400 leading-relaxed">
            <p>
              Hi, I'm Rachit. I don't just write code; I build digital ecosystems. My journey in software engineering has been driven by a singular focus: transforming complex technical challenges into fluid, intuitive user experiences.
            </p>
            <p>
              Over the years, I've architected everything from intelligent AI assistants and smart finance tools to comprehensive civic-tech platforms. I believe that the best software feels invisible to the user—it just works, brilliantly and beautifully.
            </p>
            <p>
              When I'm not optimizing algorithms or polishing UI transitions, you'll probably find me exploring the intersection of artificial intelligence and human-computer interaction, looking for the next paradigm shift in how we use the web.
            </p>
          </motion.div>
        </motion.div>

        {/* TERMINAL / CURRENTLY WORKING ON */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
          className="w-full lg:w-1/2"
        >
          <div className="rounded-2xl bg-[#161616] border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center px-4 py-3 border-b border-white/10 bg-[#1e1e1e]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex justify-center text-xs text-gray-500 font-mono items-center gap-2">
                <Terminal className="w-3 h-3" />
                status.sh
              </div>
            </div>
            <div className="p-6 md:p-8 font-mono text-sm">
              <div className="text-gray-400 mb-4">
                <span className="text-green-400">guest@rachit.io</span>:<span className="text-blue-400">~</span>$ ./check_status.sh
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-indigo-400 font-bold">Currently Working On:</span>
                  <ul className="mt-2 space-y-2 text-gray-300 ml-4 border-l-2 border-white/10 pl-4">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Building next-gen AI interfaces
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Refining motion physics in React
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Exploring WebGL for 3D web experiences
                    </li>
                  </ul>
                </div>
                <div className="pt-4 text-gray-500 animate-pulse">
                  _ Waiting for new connections...
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
