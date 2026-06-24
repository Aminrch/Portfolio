"use client"

import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import ProjectCard from "@/components/ui/project-card"
import { Container } from "@/components/ui/container"

export default function SelectedWork() {
  const visibleProjects = projects.slice(0, 2)

  return (
    <section id="work" className="py-28 md:py-36">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.25 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Selected Work
          </h2>
        </motion.div>

        {/* 2 equal cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
