import type { Project } from "@/data/projects"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative p-6 rounded-lg bg-card hover:bg-secondary/50 transition-colors border border-transparent hover:border-border">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-primary mt-1">{project.problem}</p>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

        <ul className="space-y-2">
          {project.features.map((feature) => (
            <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-1.5">•</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {project.liveDemo && (
            <Button variant="ghost" size="sm" asChild>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {project.github && (
            <Button variant="ghost" size="sm" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
