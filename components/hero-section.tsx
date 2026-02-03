"use client"

import { ArrowDown, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Rachit Kumar Tiwari
          </h1>
          <p className="text-lg md:text-xl text-primary font-medium">Full-Stack Developer</p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
            Building AI-driven web products with real-world impact. Specializing in{" "}
            <span className="text-foreground">JavaScript</span>, <span className="text-foreground">TypeScript</span>,{" "}
            <span className="text-foreground">Next.js</span>, and{" "}
            <span className="text-foreground">AI integration</span>.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/MY RESUME.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation sidebar */}
      <nav className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-6">
        <NavLink href="#about" label="ABOUT" />
        <NavLink href="#experience" label="EXPERIENCE" />
        <NavLink href="#projects" label="PROJECTS" />
        <NavLink href="#skills" label="SKILLS" />
        <NavLink href="#contact" label="CONTACT" />
      </nav>
    </section>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
    >
      <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
      {label}
    </a>
  )
}
