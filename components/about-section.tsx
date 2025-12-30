export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              About
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a <span className="text-foreground font-medium">Computer Science Engineering student</span> and
              developer focused on building{" "}
              <span className="text-foreground font-medium">practical, user-centric software products</span>.
              My work spans full-stack web development, database management, and{" "}
              <span className="text-foreground font-medium">AI-powered platforms</span>, with a strong emphasis on
              solving real-world problems through clean architecture and scalable systems.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I have experience taking projects end-to-end from{" "}
              <span className="text-foreground font-medium">ideation and design</span> to development, deployment,
              and iteration. I enjoy working with modern technologies such as{" "}
              <span className="text-foreground font-medium">
                TypeScript, Next.js, cloud databases, and APIs
              </span>, and I am particularly interested in automation, intelligent systems, and productivity tools.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Through internships and self-driven projects, I have developed a strong understanding of{" "}
              <span className="text-foreground font-medium">
                data management, system optimization, and collaborative development workflows
              </span>.
              I am motivated by building solutions that are reliable, efficient, and impactful, and I continuously
              seek opportunities to learn, experiment, and grow as an engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
