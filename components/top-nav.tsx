"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin } from "lucide-react"

export function TopNav() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      if (currentScroll > lastScroll && currentScroll > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll = currentScroll;
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[80] transition-all duration-300 ease-[cubic-bezier(0.2,1,0.2,1)] ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${scrolled ? 'bg-background/70 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between px-6 md:px-12 lg:px-[10%]">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <a href="#home" className="font-sora font-bold tracking-widest uppercase text-foreground text-lg group">
            Rachit<span className="text-primary group-hover:text-white transition-colors">.</span>
          </a>
        </div>

        {/* TOP LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors relative py-2 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
        </nav>
        
        {/* SOCIAL LINKS */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/rachts" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/rachts" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  )
}
