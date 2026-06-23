"use client"

import { projects } from "@/data/projects"
import ProjectCard from "@/components/ui/project-card"
import { FadeUp } from "@/components/ui/motion"
import { Container } from "@/components/ui/container"

export function SelectedWork() {
  return (
    <section className="py-24">
      <Container>
        {/* Header */}
        <FadeUp>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Selected Work
            </h2>

            <p className="text-zinc-400 mt-3 max-w-xl">
              A collection of projects focused on clean design, usability,
              and performance.
            </p>
          </div>
        </FadeUp>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <FadeUp key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  )
}
