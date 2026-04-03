"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          anime({
            targets: entry.target.querySelectorAll('.organic-card'),
            opacity: [0, 1],
            translateY: [80, 0],
            rotateZ: [2, 0],
            easing: 'spring(1, 80, 10, 0)',
            duration: 1500,
            delay: anime.stagger(150, { start: 100 }),
          })

          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-32 px-6 md:px-16 lg:px-[10%] relative">
      
      {/* Massive Section Watermark */}
      <div className="absolute top-10 left-[-5%] text-[15vw] font-black text-white/[0.02] tracking-tighter mix-blend-overlay pointer-events-none select-none z-0">
        ARCHIVE
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col gap-24">
        
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-8">
          <h2 className="text-[3rem] md:text-6xl font-black tracking-tighter text-foreground leading-none">
            Selected <br/> <span className="text-primary italic font-serif font-light">Works.</span>
          </h2>
          <div className="text-sm text-muted-foreground max-w-sm">
            A curated index of engineered architectures and web implementations.
          </div>
        </div>
        
        <div className="space-y-32">
          
          {/* STAGGERED FEATURED LIST */}
          <div className="flex flex-col gap-24">
            {featuredProjects.map((project, index) => {
              // Asymmetrical layout: Alternating offsets
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={project.id} 
                  className={`organic-card opacity-0 w-full lg:w-9/12 relative ${isEven ? 'self-start' : 'self-end'}`}
                >
                  <ProjectCard project={project} />
                  
                  {/* Floating Index Number behind card */}
                  <div className={`absolute top-[-15%] ${isEven ? 'right-[-10%]' : 'left-[-10%]'} text-[12rem] md:text-[18rem] font-bold text-border/40 -z-10 leading-none select-none pointer-events-none`}>
                    0{index + 1}
                  </div>
                </div>
              )
            })}
          </div>

          {/* SECONDARY TARGETS */}
          {otherProjects.length > 0 && (
            <div className="pt-24 border-t border-border/30">
              <h3 className="text-2xl font-bold text-foreground mb-12 tracking-tighter">
                Additional Engagements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project) => (
                  <div key={project.id} className="organic-card opacity-0 group">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
