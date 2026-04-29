import type React from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-[10%] border-t border-white/10 bg-background">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm font-medium text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Rachit Tiwari. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-6">
          <SocialLink href="https://github.com/rachts" icon={<Github className="h-5 w-5" />} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/rachitkrtiwari/" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
          <SocialLink href="mailto:tiwari.rachit@gmail.com" icon={<Mail className="h-5 w-5" />} label="Email" />
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
    >
      {icon}
    </a>
  )
}
