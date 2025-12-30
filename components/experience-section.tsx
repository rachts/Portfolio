import { experiences } from "@/data/experience"
import { ArrowUpRight } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">Experience</h2>
          </div>
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="group relative grid sm:grid-cols-[140px_1fr] gap-4">
                <span className="text-sm text-muted-foreground">{exp.period}</span>
                <div className="space-y-3">
                  <h3 className="text-foreground font-medium flex items-center gap-2">
                    {exp.title}
                    {exp.organization && (
                      <>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-primary">{exp.organization}</span>
                      </>
                    )}
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
