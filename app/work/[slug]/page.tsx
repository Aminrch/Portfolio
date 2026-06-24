import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import { Container } from "@/components/ui/container"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) return notFound()

  return (
    <section className="py-24">
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm text-zinc-500">{project.category}</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {project.title}
          </h1>

          {project.shortDescription ? (
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
              {project.shortDescription}
            </p>
          ) : null}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            {project.coverImage ? (
              <img
                src={project.coverImage}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[16/10] items-center justify-center text-zinc-500">
                No image
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Overview
              </p>
              <p className="mt-4 text-sm leading-8 text-zinc-300">
                {project.shortDescription ||
                  "More project details and a fuller case study will be added here."}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Project Info
              </p>

              <div className="mt-5 space-y-4 text-sm text-zinc-300">
                <div className="flex items-center justify-between border-b border-white/6 pb-3">
                  <span className="text-zinc-500">Category</span>
                  <span>{project.category}</span>
                </div>

                {project.year ? (
                  <div className="flex items-center justify-between border-b border-white/6 pb-3">
                    <span className="text-zinc-500">Year</span>
                    <span>{project.year}</span>
                  </div>
                ) : null}

                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Status</span>
                  <span>Case study in progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
