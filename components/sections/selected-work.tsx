import { featuredProjects } from "@/data/projects"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { ProjectCard } from "@/components/ui/project-card"

export function SelectedWork() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="A focused selection of websites built for real businesses."
          description="A compact portfolio of recent work across medical and investment-focused brands, built with a strong emphasis on clarity, responsiveness, and modern visual presentation."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
