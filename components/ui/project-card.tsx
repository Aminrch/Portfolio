import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Project } from "@/data/projects"
import { cn } from "@/lib/utils"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br",
          project.accent
        )}
      >
        <div className="relative aspect-[16/10]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-zinc-500">
            <span>{project.category}</span>
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <span>{project.year}</span>
          </div>

          <h3 className="text-xl font-medium text-white">{project.title}</h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400">
            {project.shortDescription}
          </p>
        </div>

        <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}
