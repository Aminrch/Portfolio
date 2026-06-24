"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
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
  const ref = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  })

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

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
            Structure first, system second, build third, refine last — with
            every step reinforcing the next.
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative grid gap-10 lg:grid-cols-[1fr_1fr]">
          {/* LEFT: timeline line */}
          <div className="absolute left-[18px] top-0 h-full w-[2px] bg-white/10 lg:left-[22px]" />

          {/* progress line */}
          <motion.div
            className="absolute left-[18px] top-0 w-[2px] bg-white/40 lg:left-[22px]"
            style={{ height: progressHeight }}
          />

          {/* Steps */}
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative flex gap-5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* dot */}
                <motion.div
                  className="relative z-10 mt-1 h-9 w-9 shrink-0 rounded-full border border-white/20 bg-black/40 backdrop-blur flex items-center justify-center text-xs text-zinc-300"
                  whileInView={{ scale: [0.8, 1] }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  {step.number}
                </motion.div>

                {/* content */}
                <div className="pb-2">
                  <h3 className="text-lg font-medium text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: visual panel */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 md:p-7">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
              System thinking
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-white">
              Design is a sequence, not a snapshot.
            </h3>

            <p className="mt-4 text-sm leading-8 text-zinc-400">
              Each step builds on the previous one — structure defines clarity,
              system defines consistency, build defines reality, and refinement
              defines quality.
            </p>

            <div className="mt-8 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-zinc-300">
                Structure → clarity
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-zinc-300">
                System → consistency
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-zinc-300">
                Build → reality
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-zinc-300">
                Refine → quality
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
