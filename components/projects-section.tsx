"use client"

import { useRef } from "react"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"
import { motion, useScroll, useTransform } from "framer-motion"

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)
  
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Subtle 3D folding effect bound to vertical scroll
  const rotateX = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [15, 0, 0, -15])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.3, 1, 1, 0.5])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])

  return (
    <section ref={sectionRef} id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-[10%] relative perspective-[1200px]">
      
      {/* Massive Section Watermark */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 150]) }}
        className="absolute top-10 left-[-5%] text-[15vw] font-black text-white/[0.02] tracking-tighter mix-blend-overlay pointer-events-none select-none z-0 will-change-transform"
      >
        ARCHIVE
      </motion.div>

      <motion.div 
        style={{ rotateX, opacity, scale }}
        className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col gap-16 md:gap-24 transform-style-3d will-change-transform"
      >
        
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", mass: 1, stiffness: 100, damping: 20 }}
            className="text-[3rem] md:text-6xl font-black tracking-tighter text-foreground leading-none"
          >
            Selected <br/> <span className="text-primary italic font-serif font-light">Works.</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="text-sm text-muted-foreground max-w-sm"
          >
            A curated index of engineered architectures and web implementations.
          </motion.div>
        </div>
        
        <div className="space-y-32">
          
          {/* FEATURED LIST */}
          <div className="flex flex-col gap-24">
            {featuredProjects.map((project, index) => {
              // Asymmetrical layout: Alternating offsets
              const isEven = index % 2 === 0;
              // Add jitter to stagger perfectly
              const jitter = Math.random() * 0.1;
              
              return (
                <motion.div 
                  key={project.id} 
                  initial={{ opacity: 0, y: 60, scale: 0.98, rotateZ: isEven ? -1 : 1 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotateZ: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ 
                    type: "spring", 
                    mass: 1.2, 
                    stiffness: 120, 
                    damping: 24, 
                    delay: 0.1 + jitter 
                  }}
                  className={`w-full lg:w-9/12 relative ${isEven ? 'self-start' : 'self-end'} will-change-transform`}
                >
                  <ProjectCard project={project} index={index + 1} />
                  
                  {/* Floating Index Number behind card */}
                  <div className={`absolute top-[-15%] ${isEven ? 'right-[-10%]' : 'left-[-10%]'} text-[12rem] md:text-[18rem] font-bold text-border/40 -z-10 leading-none select-none pointer-events-none`}>
                    0{index + 1}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* SECONDARY TARGETS */}
          {otherProjects.length > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="pt-24 border-t border-border/30"
            >
              <h3 className="text-2xl font-bold text-foreground mb-12 tracking-tighter">
                Additional Engagements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project, index) => (
                  <motion.div 
                    key={project.id} 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      damping: 20, 
                      delay: index * 0.08 + Math.random() * 0.05 
                    }}
                    className="group"
                  >
                    <ProjectCard project={project} index={featuredProjects.length + index + 1} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  )
}
