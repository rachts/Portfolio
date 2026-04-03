"use client"

import { useEffect, useRef, useState } from "react"
import anime from "animejs"

const techSkills = [
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Next.js", icon: "nextdotjs", color: "#ffffff" },
  { name: "Python", icon: "python", color: "#3776AB" },
  { name: "Node.js", icon: "nodedotjs", color: "#339933" },
  { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
  { name: "AWS", icon: "amazonwebservices", color: "#FF9900" },
  { name: "Docker", icon: "docker", color: "#2496ED" },
  { name: "Git", icon: "git", color: "#F05032" }
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target.querySelectorAll('.skill-fade'),
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutCubic',
            duration: 800,
            delay: anime.stagger(100),
          })
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Duplicate the array to create a seamless infinite marquee
  const marqueeItems = [...techSkills, ...techSkills]

  return (
    <section ref={sectionRef} id="skills" className="py-24 border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 mb-12">
        <div className="border-b border-border pb-6 flex items-center justify-between skill-fade opacity-0">
          <h2 className="text-3xl font-black tracking-tighter text-foreground uppercase flex items-center gap-4">
            <span className="w-4 h-4 bg-primary shrink-0" />
            Arsenal & Utilities
          </h2>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex border-y border-border/50 bg-card/30 py-12 skill-fade opacity-0">
        
        {/* Left/Right sheer overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeItems.map((skill, index) => (
            <div 
              key={`${skill.name}-${index}`}
              className="flex flex-col items-center justify-center gap-4 w-32 md:w-48 group cursor-crosshair transition-all duration-300"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                opacity: hoveredSkill && hoveredSkill !== skill.name ? 0.3 : 1
              }}
            >
              <img 
                src={`https://cdn.simpleicons.org/${skill.icon}/ffffff`} 
                alt={skill.name} 
                className="w-12 h-12 md:w-16 md:h-16 transition-all duration-500 ease-out"
                style={{
                  filter: hoveredSkill === skill.name 
                    ? `drop-shadow(0 0 15px ${skill.color}) drop-shadow(0 0 5px #ffffff)` 
                    : 'drop-shadow(0 0 0px transparent)'
                }}
              />
              <span 
                className="text-xs font-mono tracking-widest uppercase transition-colors duration-300"
                style={{
                  color: hoveredSkill === skill.name ? skill.color : 'var(--muted-foreground)'
                }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
