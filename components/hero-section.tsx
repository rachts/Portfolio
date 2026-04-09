"use client"

import { useEffect } from "react"
import { ArrowRight, SquareMenu } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

function OrganicText({ text, delayOffset = 0, className = "" }: { text: string; delayOffset?: number; className?: string }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // micro-delays
        delayChildren: delayOffset,
      }
    }
  }

  const item = {
    hidden: { y: "120%", rotateZ: 5, opacity: 0 },
    show: { 
      y: "0%", 
      rotateZ: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        mass: 1, 
        stiffness: 150, 
        damping: 15 
      } 
    }
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className={`overflow-hidden flex flex-wrap ${className}`}
    >
      {text.split('').map((char, index) => (
        <motion.span 
          key={index} 
          variants={item}
          className="inline-block will-change-transform" 
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Fluid physics for mouse tracking
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Map mouse positions to rotations and translations
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5])
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-20, 20])
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-20, 20])
  
  const bgTranslateX = useTransform(smoothX, [-0.5, 0.5], [50, -50])
  const bgTranslateY = useTransform(smoothY, [-0.5, 0.5], [50, -50])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;
      mouseX.set(x)
      mouseY.set(y)
    }

    // Gentle random jitter initially before user moves mouse
    mouseX.set(0)
    mouseY.set(0)

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const metaVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.4 } 
    }
  }

  const actionVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 20, delay: 1.2 } 
    }
  }

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-[10%] overflow-hidden pt-20 bg-background text-foreground perspective-[1000px]">
      
      {/* Massive Organic Background Typography */}
      <motion.div 
        style={{ x: bgTranslateX, y: bgTranslateY }}
        className="absolute top-[20%] left-[-10%] text-[20vw] font-black text-white/[0.02] tracking-tighter mix-blend-overlay pointer-events-none whitespace-nowrap leading-none will-change-transform"
      >
        RACHIT.IO
      </motion.div>

      <motion.div 
        style={{ rotateX, rotateY, x: translateX, y: translateY }}
        className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col justify-center transform-style-3d will-change-transform"
      >
        
        {/* TOP META ROW */}
        <motion.div 
          variants={metaVariants}
          initial="hidden"
          animate="show"
          className="flex items-center gap-4 text-xs font-sans tracking-[0.2em] uppercase text-primary mb-12 pl-1 whitespace-nowrap overflow-hidden"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
          <span>Interactive Engineer // 2026</span>
        </motion.div>

        {/* ORGANIC OVERLAPPING TYPOGRAPHY */}
        <div className="space-y-0 mb-16 relative z-10 select-none">
          <OrganicText 
            text="Rachit" 
            delayOffset={0.2} 
            className="text-6xl sm:text-[5rem] md:text-[8rem] lg:text-[11rem] font-black tracking-tighter uppercase leading-[0.85] text-foreground mix-blend-difference" 
          />
          <OrganicText 
            text="Digital Product Architect" 
            delayOffset={0.8} 
            className="text-xl md:text-3xl lg:text-5xl text-muted-foreground font-light tracking-tight mt-4 ml-1 md:ml-4" 
          />
        </div>

        {/* ASYMMETRICAL CONTENT GRID */}
        <motion.div 
          variants={actionVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end"
        >
          
          <div className="md:col-span-6 lg:col-span-5 text-sm font-sans leading-relaxed text-muted-foreground pr-4">
            <p className="border-l border-primary/30 pl-6 py-2 relative before:absolute before:left-[-1px] before:top-0 before:w-[2px] before:h-4 before:bg-primary">
              Crafting fluid algorithmic interfaces and deep machine learning architectures. Moving beyond generic templates to deliver highly sophisticated, humanized web interactions that blur the boundary between software and art.
            </p>
          </div>

          <div className="md:col-span-6 lg:col-span-7 flex flex-col sm:flex-row gap-6 md:justify-end border-t border-border/30 pt-8 mt-4 md:mt-0">
            <a href="#projects" className="group flex items-center justify-center md:justify-start gap-4 bg-foreground text-background px-10 py-5 rounded-full uppercase text-[10px] tracking-widest font-bold hover:bg-primary transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-lg">
              Explore Projects
              <span className="bg-background text-foreground w-6 h-6 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
            
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center md:justify-start gap-4 border border-border px-10 py-5 rounded-full uppercase text-[10px] tracking-widest font-bold hover:border-primary/50 transition-all duration-500 text-muted-foreground hover:text-foreground hover:scale-[1.02] active:scale-[0.98]">
              <SquareMenu className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
              View Abstract
            </a>
          </div>

        </motion.div>

      </motion.div>
    </section>
  )
}
