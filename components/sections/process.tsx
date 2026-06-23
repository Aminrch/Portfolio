"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

const steps = [
  {
    number: "01",
    title: "Direction & structure",
    text: "I start by understanding what the site actually needs to communicate — the hierarchy, the audience, and the page flow. This stage is about removing noise before adding polish.",
  },
  {
    number: "02",
    title: "Visual system",
    text: "Once the structure is clear, I shape the visual language around it: typography, spacing rhythm, contrast, card systems, section density, and the overall tone of the interface.",
  },
  {
    number: "03",
    title: "Build & motion",
    text: "I implement the design with responsiveness, clean spacing, and interaction details in mind. Motion is layered in carefully to support the experience rather than dominate it.",
  },
  {
    number: "04",
    title: "Refinement",
    text: "The final stage is where a project starts to feel premium: content balance, hover states, animation timing, section pacing, and all the small adjustments that make the whole site feel coherent.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-36">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Process
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            A simple process, refined around structure, motion, and clarity.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-8 text-zinc-400 md:text-base">
            I try to keep the workflow straightforward: define the structure,
            shape the visual system, build carefully, then refine the small
            details until the site feels deliberate.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: process cards */}
          <div className="grid gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/18 hover:bg-white/[0.045]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-start">
                  <div className="shrink-0 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-medium text-zinc-300">
                    {step.number}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl font-medium text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-8 text-zinc-400 md:text-[0.96rem]">
                      {step.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: visual object / supporting panel */}
          <div className="space-y-6">
            <motion.div
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.015] p-6 min-h-[420px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Decorative orbs */}
              <motion.div
                className="absolute left-[-3rem] top-[-2rem] h-56 w-56 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(99,102,241,0.24), transparent 62%)",
                }}
                animate={{
                  x: [0, 16, 0, -10, 0],
                  y: [0, 10, 0, -8, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute bottom-[-3rem] right-[-2rem] h-64 w-64 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(56,189,248,0.18), transparent 62%)",
                }}
                animate={{
                  x: [0, -12, 0, 14, 0],
                  y: [0, -8, 0, 10, 0],
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Inner object / panel composition */}
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    Build principles
                  </p>
                  <h3 className="mt-4 max-w-sm text-2xl font-semibold leading-tight text-white">
                    Clean systems, layered motion, and enough restraint to keep
                    the interface sharp.
                  </h3>
                </div>

                <div className="mt-10 grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                      Layout
                    </p>
                    <p className="mt-2 text-sm leading-7 text-zinc-300">
                      Strong section rhythm, controlled spacing, and content
                      hierarchy that feels intentional.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                      Interaction
                    </p>
                    <p className="mt-2 text-sm leading-7 text-zinc-300">
                      Motion is used to guide attention, create depth, and make
                      the site feel alive without becoming distracting.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                      Delivery
                    </p>
                    <p className="mt-2 text-sm leading-7 text-zinc-300">
                      The final output should feel cohesive both visually and in
                      the implementation details — not just “designed”, but
                      actually well-built.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Why this process
              </p>
              <p className="mt-3 text-sm leading-8 text-zinc-400">
                The goal is not to overcomplicate the workflow. It’s to keep it
                focused enough that the visual decisions, content structure, and
                implementation quality all support the same outcome: a site that
                feels clear, premium, and intentional.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
