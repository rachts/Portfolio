"use client"

import { Database, LineChart, Code2 } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  
  // Parallax subtle binding
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30])

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", mass: 1, stiffness: 100, damping: 20 } 
    }
  }

  const maskVariants = {
    hidden: { clipPath: 'inset(100% 0 0 0)' },
    show: { 
      clipPath: 'inset(0% 0 0 0)', 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-[10%] relative overflow-hidden">
      
      {/* Organic Background Blob / Element */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4 will-change-transform" 
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-8"
      >
        
        {/* ASYMMETRICAL IMAGE CONTAINER */}
        <div className="w-full lg:w-5/12 relative">
          <motion.div 
            variants={maskVariants}
            className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 pointer-events-none" />
            <img 
              src="/rachit1.jpg" 
              alt="Secondary Profile" 
              className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-out"
            />
            {/* Organic Label */}
            <div className="absolute bottom-6 left-6 z-20 text-[10px] text-white font-sans tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 uppercase">
              Visual Data. 01
            </div>
          </motion.div>
          {/* Decorative Offset Element */}
          <motion.div 
            variants={maskVariants}
            className="absolute -bottom-8 -right-8 w-64 h-64 border border-border rounded-full hidden md:block opacity-50" 
          />
        </div>

        {/* ORGANIC TEXT CONTAINER */}
        <div className="w-full lg:w-7/12 lg:pl-16 space-y-12">
          
          <motion.div variants={childVariants} className="pt-4 lg:pt-0">
            <h2 className="text-[2.5rem] md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground leading-[1.1] mb-6">
              Engineering <br/> <span className="text-primary italic font-serif font-light">Digital Fluidity.</span>
            </h2>
          </motion.div>

          <motion.div variants={childVariants} className="space-y-6 text-base md:text-lg font-sans leading-relaxed text-muted-foreground">
            <p>
              I am an architect of web systems deeply rooted in React, Next.js, and scaling robust APIs. My approach strips away rigid templates, focusing instead on delivering custom, high-fidelity experiences that adapt natively to their constraints.
            </p>
            <p>
              By fusing raw technical competency with an editorial design philosophy, I engineer systems that don’t just process data—they narrate it.
            </p>
          </motion.div>

          <motion.div variants={childVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-border/40">
            <div className="flex flex-col gap-3 group">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                <Code2 className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="text-sm font-bold text-foreground">Frontend</div>
              <div className="text-[11px] text-muted-foreground leading-relaxed">Liquid abstractions in React and Framer Motion.</div>
            </div>
            <div className="flex flex-col gap-3 group">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                <Database className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="text-sm font-bold text-foreground">Backend</div>
              <div className="text-[11px] text-muted-foreground leading-relaxed">Rock-solid infrastructure using Postgres, Prisma, & Node.</div>
            </div>
            <div className="flex flex-col gap-3 group">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                <LineChart className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="text-sm font-bold text-foreground">Optimization</div>
              <div className="text-[11px] text-muted-foreground leading-relaxed">Algorithmic efficiency and continuous deployment pipelines.</div>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  )
}
