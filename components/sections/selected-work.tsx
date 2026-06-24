"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import ProjectCard from "@/components/ui/project-card"
import { Container } from "@/components/ui/container"

export default function SelectedWork() {
  const [featuredProject, ...restProjects] = projects
  const secondaryProjects = restProjects.slice(0, 2)

  return (
    <section id="work" className="py-28 md:py-36">
      <Container>
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
              Selected Work
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              A few projects where the details mattered as much as the layout.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-zinc-400 md:text-base">
              A selection of portfolio, business, and landing-page work shaped by
              structure, motion, and front-end execution — with more emphasis on how
              a site feels in use, not just how it looks in a screenshot.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center rounded-full border border-white/12 px-5 py-3 text-sm text-zinc-200 transition hover:border-white/25 hover:bg-white/[0.04]"
            >
              View all projects
            </Link>
          </motion.div>
        </div>

        {/* Featured project */}
        {featuredProject ? (
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, amount: 0.18 }}
            className="mt-14"
          >
            <ProjectCard project={featuredProject} featured />
          </motion.div>
        ) : null}

        {/* Secondary projects */}
        {secondaryProjects.length > 0 ? (
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {secondaryProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.08 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, amount: 0.18 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        ) : null}

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true, amount: 0.25 }}
          className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-7"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Case studies in progress
              </p>
              <p className="mt-3 text-sm leading-8 text-zinc-300">
                I’m gradually expanding these project pages into fuller case studies —
                adding more context around design choices, layout decisions, and the
                implementation details that shaped the final result.
              </p>
            </div>

            <Link
              href="/work"
              className="inline-flex w-fit items-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:translate-y-[-1px] hover:bg-zinc-200"
            >
              Browse all work
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
