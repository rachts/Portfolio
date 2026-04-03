"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"
import { ArrowRight, SquareMenu } from "lucide-react"

function OrganicText({ text, delayOffset = 0, className = "" }: { text: string; delayOffset?: number; className?: string }) {
  const containerRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      anime.timeline({ loop: false })
        .add({
          targets: containerRef.current.querySelectorAll('.organic-char'),
          translateY: ['120%', '0%'],
          rotateZ: [10, 0],
          opacity: [0, 1],
          easing: "easeOutElastic",
          duration: 1800,
          delay: (el, i) => delayOffset + 40 * i
        })
    }
  }, [delayOffset])

  return (
    <div ref={containerRef} className={`overflow-hidden flex flex-wrap ${className}`}>
      {text.split('').map((char, index) => (
        <span key={index} className="organic-char inline-block" style={{ opacity: 0, transform: 'translateY(120%)' }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  )
}

export function HeroSection() {
  const metaRef = useRef<HTMLDivElement>(null)
  const actionRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLElement>(null)
  const backgroundTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Intro Entrance
    const tl = anime.timeline({
      easing: 'easeOutCubic',
      duration: 1500
    })

    tl.add({
      targets: metaRef.current,
      opacity: [0, 1],
      translateY: [30, 0],
      delay: 500
    })
    .add({
      targets: actionRef.current,
      opacity: [0, 1],
      translateY: [40, 0],
    }, '-=1000')

    // Liquid Mouse Parallax Effect
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;

      if (wrapperRef.current) {
        anime({
          targets: wrapperRef.current,
          translateX: x * -40,
          translateY: y * -40,
          rotateX: y * 5,
          rotateY: x * -5,
          easing: 'easeOutExpo',
          duration: 2000
        })
      }
      
      if (backgroundTextRef.current) {
        anime({
          targets: backgroundTextRef.current,
          translateX: x * 100,
          translateY: y * 100,
          easing: 'easeOutExpo',
          duration: 3000
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-[10%] overflow-hidden pt-20 bg-background text-foreground perspective-[1000px]">
      
      {/* Massive Organic Background Typography */}
      <div 
        ref={backgroundTextRef} 
        className="absolute top-[20%] left-[-10%] text-[20vw] font-black text-white/[0.02] tracking-tighter mix-blend-overlay pointer-events-none whitespace-nowrap leading-none"
      >
        RACHIT.IO
      </div>

      <div 
        ref={wrapperRef as any} 
        className="max-w-[1400px] w-full relative z-10 flex flex-col justify-center transform-style-3d"
      >
        
        {/* TOP META ROW */}
        <div ref={metaRef} className="flex items-center gap-4 text-xs font-sans tracking-[0.2em] uppercase text-primary mb-12 opacity-0 pl-1">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>Interactive Engineer // 2026</span>
        </div>

        {/* ORGANIC OVERLAPPING TYPOGRAPHY */}
        <div className="space-y-0 mb-16 relative z-10 select-none">
          <OrganicText 
            text="Rachit" 
            delayOffset={200} 
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[11rem] font-black tracking-tighter uppercase leading-[0.85] text-foreground mix-blend-difference" 
          />
          <OrganicText 
            text="Digital Product Architect" 
            delayOffset={800} 
            className="text-xl md:text-3xl lg:text-5xl text-muted-foreground font-light tracking-tight mt-4 ml-1 md:ml-4" 
          />
        </div>

        {/* ASYMMETRICAL CONTENT GRID */}
        <div ref={actionRef} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end opacity-0">
          
          <div className="md:col-span-5 lg:col-span-4 text-sm font-sans leading-relaxed text-muted-foreground">
            <p className="border-l border-primary/30 pl-6 py-2 relative before:absolute before:left-[-1px] before:top-0 before:w-[2px] before:h-4 before:bg-primary">
              Crafting fluid algorithmic interfaces and deep machine learning architectures. Moving beyond generic templates to deliver highly sophisticated, humanized web interactions that blur the boundary between software and art.
            </p>
          </div>

          <div className="md:col-span-7 lg:col-span-8 flex flex-col sm:flex-row gap-6 md:justify-end border-t border-border/30 pt-8 mt-4 md:mt-0">
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

        </div>

      </div>
    </section>
  )
}
