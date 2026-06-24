"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Container } from "@/components/ui/container"

export default function About() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 20%"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [24, -18])
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0.8, -0.8])

  return (
    <section id="about" className="py-28 md:py-36">
      <Container>
        <div
          ref={sectionRef}
          className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]"
        >
          {/* Left / Portrait */}
          <motion.div
            style={{ y: imageY, rotate: imageRotate }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%)]" />

              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/amin-portrait.jpg"
                  alt="Amin Ranjbar portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <motion.div
              className="absolute -bottom-5 -right-5 rounded-2xl border border-white/10 bg-black/70 px-5 py-4 backdrop-blur-md"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                Based in
              </p>
              <p className="mt-2 text-sm text-white">Iran — working remotely</p>
            </motion.div>
          </motion.div>

          {/* Right / Content */}
          <div className="space-y-6 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 md:p-8"
            >
              <p className="text-base leading-8 text-zinc-300">
                I’m Amin Ranjbar, a Webflow developer and front-end builder focused
                on portfolio, business, and product websites. I care most about the
                point where design and implementation meet — where structure,
                spacing, motion, and front-end decisions shape how a site feels.
              </p>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                I prefer websites that feel intentional rather than loud: clear
                hierarchy, polished interactions, and enough visual rhythm to make
                the experience memorable without overloading it.
              </p>
            </motion.div>

            {/* mini cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  label: "Focus",
                  value: "Webflow and premium front-end builds",
                },
                {
                  label: "Interest",
                  value: "Portfolio systems, landing pages, and cleaner interaction design",
                },
                {
                  label: "Approach",
                  value: "Less noise, better structure, motion, and clarity",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-7"
            >
              <p className="text-sm leading-8 text-zinc-300">
                I’m less interested in making things look impressive for a moment
                and more interested in making them feel coherent — the kind of site
                that stays visually calm but gets better the longer you spend time
                with it.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
