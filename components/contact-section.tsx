import type React from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">Contact</h2>
          </div>
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you'd like to discuss a project or just say hi, I'm always down to chat. Feel free to reach out through
              any of the channels below.
            </p>

            <div className="flex flex-col gap-4">
              <ContactLink
                href="mailto:tiwari.rachit@gmail.com"
                icon={<Mail className="h-5 w-5" />}
                label="tiwari.rachit@gmail.com"
              />
              <ContactLink
                href="https://github.com/rachts"
                icon={<Github className="h-5 w-5" />}
                label="github.com/rachts"
              />
              <ContactLink
                href="https://www.linkedin.com/in/rachitkrtiwari/"
                icon={<Linkedin className="h-5 w-5" />}
                label="linkedin.com/in/rachitkrtiwari"
              />
            </div>

            <div className="pt-8">
              <Button asChild>
                <a href="mailto:tiwari.rachit@gmail.com">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactLink({
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
      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
    >
      <span className="text-muted-foreground group-hover:text-primary transition-colors">{icon}</span>
      <span>{label}</span>
    </a>
  )
}
