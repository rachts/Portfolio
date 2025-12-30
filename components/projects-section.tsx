import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">Projects</h2>
          </div>
          <div className="space-y-8">
            <div className="space-y-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {otherProjects.length > 0 && (
              <div className="pt-8">
                <h3 className="text-sm font-medium text-muted-foreground mb-6">Other Projects</h3>
                <div className="space-y-6">
                  {otherProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
