import type React from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rachit Kumar Tiwari. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
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
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      {icon}
    </a>
  )
}
