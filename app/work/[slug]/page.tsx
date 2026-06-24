import Link from "next/link"
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
    <section className="py-24 md:py-28">
      <Container>
        {/* Header */}
        <div className="max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            {project.category}
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {project.title}
          </h1>

          {project.shortDescription ? (
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
              {project.shortDescription}
            </p>
          ) : null}
        </div>

        {/* Main layout */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left side */}
          <div className="space-y-8">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
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

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Problem
                </p>
                <p className="mt-4 text-sm leading-8 text-zinc-300">
                  {project.problem}
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Solution
                </p>
                <p className="mt-4 text-sm leading-8 text-zinc-300">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Overview
              </p>
              <p className="mt-4 text-sm leading-8 text-zinc-300">
                {project.overview}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Result
              </p>
              <p className="mt-4 text-sm leading-8 text-zinc-300">
                {project.result}
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
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

                <div className="flex items-center justify-between border-b border-white/6 pb-3">
                  <span className="text-zinc-500">Role</span>
                  <span>Design / Build</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Status</span>
                  <span>Live project</span>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Stack
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech?.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {project.url ? (
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Live Website
                </p>

                <div className="mt-5">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                  >
                    Visit project ↗
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  )
}
