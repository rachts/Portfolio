import { skillCategories } from "@/data/skills"

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">Skills</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div key={category.name} className="space-y-4">
                <h3 className="text-sm font-medium text-foreground">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
