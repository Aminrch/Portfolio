"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

type Project = {
  slug: string
  title: string
  category: string
  year?: string
  shortDescription?: string
  coverImage?: string
}

type ProjectCardProps = {
  project: Project
  featured?: boolean
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] ${
        featured ? "min-h-[520px]" : "min-h-[420px]"
      }`}
    >
      <Link href={`/work/${project.slug}`} className="block h-full">
        {/* Image area */}
        <div
          className={`relative overflow-hidden ${
            featured ? "aspect-[16/10] md:aspect-[16/9]" : "aspect-[16/11]"
          }`}
        >
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
              sizes={
                featured
                  ? "(max-width: 768px) 100vw, 1200px"
                  : "(max-width: 768px) 100vw, 50vw"
              }
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-sm text-zinc-500">
              No preview
            </div>
          )}

          {/* overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_38%)]" />

          {/* floating top meta */}
          <div className="absolute left-5 right-5 top-5 z-20 flex items-start justify-between gap-4">
            <div className="rounded-full border border-white/12 bg-black/45 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-zinc-200 backdrop-blur-md">
              {project.category}
            </div>

            {project.year ? (
              <div className="rounded-full border border-white/12 bg-black/45 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-zinc-300 backdrop-blur-md">
                {project.year}
              </div>
            ) : null}
          </div>

          {/* bottom content on image */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-5 md:p-6">
            <div className="max-w-2xl">
              <div className="flex items-end justify-between gap-4">
                <h3
                  className={`font-semibold tracking-tight text-white transition duration-300 group-hover:translate-y-[-1px] ${
                    featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                  }`}
                >
                  {project.title}
                </h3>

                <span className="hidden translate-x-0 text-sm text-zinc-300 transition duration-300 group-hover:translate-x-1 md:inline-flex">
                  View project ↗
                </span>
              </div>

              {project.shortDescription ? (
                <p
                  className={`mt-3 max-w-[62ch] text-zinc-300 ${
                    featured
                      ? "text-sm leading-7 md:text-[15px]"
                      : "text-sm leading-7"
                  }`}
                >
                  {project.shortDescription}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        {/* bottom strip */}
        <div className="flex items-center justify-between gap-4 border-t border-white/8 px-5 py-4 md:px-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
            <span>Case Study</span>
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <span>Responsive Build</span>
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-zinc-300 transition duration-300 group-hover:gap-3 group-hover:text-white">
            <span>Open</span>
            <span aria-hidden>→</span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
