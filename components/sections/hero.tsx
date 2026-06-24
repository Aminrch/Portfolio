"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32">

      {/* Cinematic background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          className="absolute left-1/2 top-[38%] h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.30), transparent 45%), radial-gradient(circle at 70% 60%, rgba(56,189,248,0.18), transparent 60%)",
          }}
          animate={{
            rotate: [0, 6, 0, -6, 0],
            x: [0, 14, 0, -10, 0],
            y: [0, -10, 0, 8, 0],
            scale: [1, 1.03, 1, 1.02, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[8%] top-[18%] h-80 w-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.10), transparent 60%)",
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

        {/* cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.25)_75%)]" />
      </div>

      {/* CONTENT (unchanged structure) */}
      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT */}
          <div className="max-w-4xl">

            <motion.p
              className="mb-5 text-xs uppercase tracking-[0.28em] text-zinc-500"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Portfolio / Webflow + Front-end
            </motion.p>

            <motion.h1
              className="text-5xl font-semibold leading-[0.96] tracking-tight text-white md:text-7xl xl:text-[5.5rem]"
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
              className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              I’m Amin Ranjbar — a Webflow developer and front-end builder
              focused on premium portfolio, business, and product websites.
              I care about layout clarity, motion feel, and the small details
              that make a site feel alive.
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
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white hover:bg-white/5 transition"
              >
                Let’s work together
              </a>
            </motion.div>

          </div>

          {/* RIGHT (kept structure, not removed if you still use it) */}
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18 }}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
              Focus
            </p>

            <p className="mt-3 text-sm leading-7 text-zinc-300">
              Webflow builds, portfolio systems, landing pages, and polished
              front-end implementation.
            </p>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
