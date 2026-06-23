"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Container } from "@/components/ui/container"

const aboutText = `
I care about websites that feel intentional. Not just “good looking”, but clear,
trustworthy, and built with enough motion and rhythm to feel alive. My work usually
starts with structure: content hierarchy, spacing, section flow, and how a visitor
moves from one block to the next. Then I shape the visual language around that —
clean typography, restrained contrast, subtle motion, and interaction details that
support the message instead of distracting from it.

Most of the projects I enjoy are the ones where design and implementation meet in
the middle: building a portfolio that actually feels like a personal brand, turning a
service site into something more premium and confident, or taking a simple landing
page and giving it enough polish that it feels memorable. I’m especially interested in
interfaces that look calm at first glance but reveal depth through spacing, motion,
and pacing as you scroll.
`.trim()

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  })

  const words = aboutText.split(" ")
  const tail = 0.08

  return (
    <section id="about" className="py-28 md:py-36">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            About
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Design should feel calm, sharp, and memorable — not loud for no reason.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left: scroll fill text */}
          <div
            ref={ref}
            className="rounded-3xl border border-white/8 bg-white/[0.02] p-6 md:p-8"
          >
            <p className="text-[1.1rem] leading-9 md:text-[1.35rem] md:leading-[2.35rem]">
              {words.map((word, i) => {
                const start = i / words.length
                const end = Math.min((i + 1) / words.length + tail, 1)

                const opacity = useTransform(
                  scrollYProgress,
                  [start, end],
                  [0.16, 1]
                )

                const y = useTransform(
                  scrollYProgress,
                  [start, end],
                  [8, 0]
                )

                return (
                  <motion.span
                    key={`${word}-${i}`}
                    style={{ opacity, y }}
                    className="mr-[0.35rem] inline-block text-white/95"
                  >
                    {word}
                  </motion.span>
                )
              })}
            </p>
          </div>

          {/* Right panel */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Perspective
              </p>

              <div className="mt-5 space-y-6 text-sm leading-8 text-zinc-300">
                <p>
                  I’m less interested in making things look “impressive” and more interested
                  in making them feel intentional.
                </p>

                <p>
                  The projects I enjoy most usually sit somewhere between design and build —
                  where layout, spacing, motion, and implementation all shape the final feeling
                  of the site.
                </p>

                <p>
                  I like interfaces that stay visually calm, but still have enough rhythm and
                  tension to feel memorable once you spend time with them.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 md:p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                What I care about
              </p>

              <p className="mt-4 text-sm leading-8 text-zinc-300">
                Good spacing, clear hierarchy, motion that doesn’t try too hard, and pages
                that feel cohesive from top to bottom. Most of the time I’m refining the small
                things — how a section opens, how dense a block feels, or whether a page has
                enough contrast and pause to breathe.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
