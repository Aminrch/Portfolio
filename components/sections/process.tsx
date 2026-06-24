"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

const steps = [
  {
    number: "01",
    title: "Direction & structure",
    text: "Define goals, audience, and content hierarchy to shape a clear page structure and flow.",
  },
  {
    number: "02",
    title: "Visual system",
    text: "Build typography, spacing, and layout rules to create a consistent and scalable design system.",
  },
  {
    number: "03",
    title: "Build & motion",
    text: "Translate design into responsive code with careful attention to spacing, UI details, and subtle motion.",
  },
  {
    number: "04",
    title: "Refinement",
    text: "Polish interactions, timing, and visual balance until the product feels cohesive and premium.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-36">
      <Container>
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Process
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            A simple process, refined around structure, motion, and clarity.
          </h2>

          <p className="mt-4 text-sm leading-8 text-zinc-400 md:text-base">
            Structure first, then system, then build — refined until everything
            feels intentional and balanced.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 lg:grid-cols-2">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, amount: 0.25 }}
            >
              {/* subtle glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-10 bg-gradient-to-br from-white/5 via-transparent to-transparent blur-2xl" />
              </div>

              <div className="relative flex flex-col gap-5 md:flex-row md:items-start">
                {/* number badge */}
                <motion.div
                  className="shrink-0 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-medium text-zinc-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {step.number}
                </motion.div>

                {/* content */}
                <div>
                  <h3 className="text-xl font-medium text-white transition-transform duration-300 group-hover:translate-x-1">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {step.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* footer note */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 md:p-7">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Why this works
          </p>

          <p className="mt-3 text-sm leading-8 text-zinc-400">
            This process keeps everything focused: structure leads, design supports,
            and implementation refines — resulting in interfaces that feel calm,
            intentional, and well-built.
          </p>
        </div>
      </Container>
    </section>
  )
}
