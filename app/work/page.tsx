import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import  ProjectCard  from "@/components/ui/project-card"
import { projects } from "@/data/projects"

export default function WorkPage() {
  return (
    <main className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected projects and website builds."
          description="A compact archive of projects focused on modern presentation, responsive implementation, and business-oriented design."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </main>
  )
}
