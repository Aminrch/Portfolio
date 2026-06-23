import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Container } from "@/components/ui/container"
import { projects } from "@/data/projects"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return {
      title: "Project",
    }
  }

  return {
    title: project.title,
    description: project.shortDescription,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="py-20 md:py-28">
      <Container>
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-zinc-400">
            {project.category} • {project.year}
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400">
            {project.overview}
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
          <div className="relative aspect-[16/9]">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-medium text-white">Overview</h2>
              <p className="mt-4 text-sm leading-8 text-zinc-400 md:text-base">
                {project.shortDescription}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-white">Challenge</h2>
              <p className="mt-4 text-sm leading-8 text-zinc-400 md:text-base">
                {project.challenge}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-white">Outcome</h2>
              <p className="mt-4 text-sm leading-8 text-zinc-400 md:text-base">
                {project.outcome}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-white">
                What I worked on
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-zinc-400">
                {project.services.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-medium text-white">Tech stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.liveUrl ? (
              <div className="mt-8">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Visit Live Site
                </Link>
              </div>
            ) : null}
          </aside>
        </div>

        <div className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <h2 className="text-2xl font-medium text-white">
            Need something similar?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-zinc-400 md:text-base">
            If you need a clean, modern website for your business or want to
            redesign an existing one, feel free to get in touch.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </Container>
    </main>
  )
}
