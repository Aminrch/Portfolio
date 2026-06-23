"use client"

import { motion } from "framer-motion"

type Project = {
  slug: string
  title: string
  category: string
  year?: string
  shortDescription?: string
  coverImage?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950"
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 20,
      }}
    >
      {/* Image */}
      <div className="aspect-[16/10] bg-zinc-900 overflow-hidden">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            className="h-full w-full object-cover scale-105 group-hover:scale-110 transition duration-500"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-zinc-600">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        {/* Top row */}
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white group-hover:text-zinc-200 transition">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-400 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Hover line */}
        <div className="h-[1px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-white/40 to-transparent" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-t from-white/5 to-transparent" />
    </motion.div>
  )
}
