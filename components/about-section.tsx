"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"
import { Database, LineChart, Code2 } from "lucide-react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          anime({
            targets: entry.target.querySelectorAll('.organic-fade'),
            opacity: [0, 1],
            translateY: [60, 0],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: anime.stagger(200, { start: 200 }),
          })

          anime({
            targets: entry.target.querySelectorAll('.img-mask'),
            clipPath: ['inset(100% 0 0 0)', 'inset(0% 0 0 0)'],
            easing: 'easeInOutExpo',
            duration: 1600,
            delay: 400
          })

          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-32 px-6 md:px-16 lg:px-[10%] relative overflow-hidden">
      
      {/* Organic Background Blob / Element */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4" />

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* ASYMMETRICAL IMAGE CONTAINER */}
        <div className="w-full lg:w-5/12 relative">
          <div className="relative w-full aspect-[4/5] img-mask rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
            <img 
              src="/rachit1.jpg" 
              alt="Secondary Profile" 
              className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-out"
            />
            {/* Organic Label */}
            <div className="absolute bottom-6 left-6 z-20 text-[10px] text-white font-sans tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 uppercase">
              Visual Data. 01
            </div>
          </div>
          {/* Decorative Offset Element */}
          <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-border rounded-full hidden md:block opacity-50 img-mask" />
        </div>

        {/* ORGANIC TEXT CONTAINER */}
        <div className="w-full lg:w-7/12 lg:pl-16 space-y-12">
          
          <div className="organic-fade opacity-0">
            <h2 className="text-[2.5rem] md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground leading-[1.1] mb-6">
              Engineering <br/> <span className="text-primary italic font-serif font-light">Digital Fluidity.</span>
            </h2>
          </div>

          <div className="space-y-6 text-base md:text-lg font-sans leading-relaxed text-muted-foreground organic-fade opacity-0">
            <p>
              I am an architect of web systems deeply rooted in React, Next.js, and scaling robust APIs. My approach strips away rigid templates, focusing instead on delivering custom, high-fidelity experiences that adapt natively to their constraints.
            </p>
            <p>
              By fusing raw technical competency with an editorial design philosophy, I engineer systems that don’t just process data—they narrate it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-border/40 organic-fade opacity-0">
            <div className="flex flex-col gap-3 group">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                <Code2 className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="text-sm font-bold text-foreground">Frontend</div>
              <div className="text-[11px] text-muted-foreground leading-relaxed">Liquid abstractions in React, Anime.js, and Framer Motion.</div>
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
          </div>

        </div>

      </div>
    </section>
  )
}
