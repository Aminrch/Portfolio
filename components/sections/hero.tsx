"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32">
      {/* Soft animated background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Main rotating orb */}
        <motion.div
          className="absolute left-1/2 top-[36%] h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.32), transparent 42%), radial-gradient(circle at 70% 60%, rgba(56,189,248,0.24), transparent 38%), radial-gradient(circle at 55% 45%, rgba(255,255,255,0.12), transparent 26%)",
          }}
          animate={{
            rotate: [0, 8, 0, -8, 0],
            x: [0, 18, 0, -14, 0],
            y: [0, -12, 0, 10, 0],
            scale: [1, 1.04, 1, 1.03, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary subtle orb */}
        <motion.div
          className="absolute right-[10%] top-[18%] h-72 w-72 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.10), transparent 60%)",
          }}
          animate={{
            x: [0, 10, 0, -8, 0],
            y: [0, 8, 0, -10, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Ambient vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.22)_72%)]" />
      </div>

      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left content */}
          <div className="max-w-4xl">
            <motion.p
              className="mb-5 text-xs uppercase tracking-[0.24em] text-zinc-400"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Portfolio / Webflow + Front-end
            </motion.p>

            <motion.h1
              className="text-5xl font-semibold leading-[0.96] tracking-tight text-white md:text-7xl xl:text-[5.5rem]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.06,
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
                delay: 0.16,
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
                delay: 0.24,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <a
                href="#work"
                className="rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-medium text-black transition hover:translate-y-[-1px] hover:bg-zinc-200"
              >
                View selected work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/12 px-6 py-3 text-sm font-medium text-white/90 transition hover:border-white/25 hover:bg-white/[0.03]"
              >
                Let’s work together
              </a>
            </motion.div>
          </div>

          {/* Right side stats / micro-panel */}
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Focus
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-300">
                  Webflow builds, portfolio systems, landing pages, and
                  polished front-end implementation.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Approach
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-300">
                  Strategy-first structure, clear hierarchy, motion with
                  restraint, and performance-conscious UI.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Stack
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-300">
                  Webflow, Next.js, Tailwind CSS, CMS workflows, SEO basics,
                  and interaction design.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
