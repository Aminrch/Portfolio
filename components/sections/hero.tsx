"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* main glow */}
        <motion.div
          className="absolute left-1/2 top-[38%] h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.24), transparent 42%), radial-gradient(circle at 72% 62%, rgba(56,189,248,0.14), transparent 58%)",
          }}
          animate={{
            rotate: [0, 8, 0, -8, 0],
            x: [0, 16, 0, -12, 0],
            y: [0, -12, 0, 10, 0],
            scale: [1, 1.04, 1, 1.02, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* secondary light */}
        <motion.div
          className="absolute right-[10%] top-[16%] h-80 w-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08), transparent 62%)",
          }}
          animate={{
            x: [0, 10, 0, -8, 0],
            y: [0, 8, 0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.24)_78%)]" />
      </div>

      <Container>
        <div className="max-w-5xl">
          <motion.p
            className="mb-5 text-xs uppercase tracking-[0.28em] text-zinc-500"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Portfolio / Webflow + Front-end
          </motion.p>

          <motion.h1
            className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl xl:text-[5.6rem]"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            I build clean, high-converting web experiences with motion,
            structure, and a strong visual system.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-sm leading-8 text-zinc-400 md:text-base"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Webflow and front-end builds for portfolio, business, and product websites.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.22,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <a
              href="#work"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              View selected work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:bg-white/5"
            >
              Let’s work together
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
