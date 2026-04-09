"use client"

import { useEffect, useState } from "react"
import anime from "animejs"

export function TopNav() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
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
    { href: "#about", label: "ABOUT", index: "01" },
    { href: "#projects", label: "PROJECTS", index: "02" },
    { href: "#experience", label: "EXPERIENCE", index: "03" },
    { href: "#contact", label: "CONTACT", index: "04" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[80] font-mono transition-transform duration-500 ease-[cubic-bezier(0.2,1,0.2,1)] ${hidden ? '-translate-y-full' : 'translate-y-0'} bg-background/90 backdrop-blur-sm border-b border-border`}
    >
      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between px-6 md:px-12 lg:px-[10%] py-4">
        {/* LOGO HUD */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-primary" />
          <div className="font-bold tracking-[0.2em] uppercase text-foreground text-sm">
            RACHIT.IO
          </div>
        </div>

        {/* TOP LINKS */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors group relative py-2"
            >
              <span className="text-[9px] text-primary">
                {link.index}.
              </span>
              <span>
                {link.label}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
        </nav>
        
        {/* RIGHT METRICS */}
        <div className="hidden lg:flex flex-col items-end gap-1 text-[9px] text-muted-foreground uppercase opacity-80 tracking-widest">
          <div className="flex items-center gap-2">
            STATUS: <span className="text-primary font-bold">ONLINE</span>
          </div>
          <div>NET: ENCRYPTED</div>
        </div>
      </div>
    </header>
  )
}
