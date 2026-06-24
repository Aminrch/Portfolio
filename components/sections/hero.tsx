"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[96vh] items-center overflow-hidden bg-black pt-28 pb-20 md:pt-32 md:pb-24">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* subtle grain */}
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(255,255,255,0.12)_0.8px,transparent_0.8px)] [background-size:18px_18px]" />

        {/* SOFT CINEMATIC GRADIENT FIELD */}
        <motion.div
          className="absolute inset-0"
          animate={{
            x: [0, 12, 0, -10, 0],
            y: [0, -10, 0, 8, 0],
            scale: [1, 1.02, 1, 1.015, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(99,102,241,0.22), transparent 58%),
              radial-gradient(circle at 80% 35%, rgba(236,72,153,0.16), transparent 62%),
              radial-gradient(circle at 60% 80%, rgba(56,189,248,0.14), transparent 65%),
              radial-gradient(circle at 30% 80%, rgba(251,146,60,0.10), transparent 70%)
            `,
            filter: "blur(50px) saturate(110%)",
            opacity: 0.95,
          }}
        />

        {/* dark left fade for readability */}
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-black via-black/95 to-transparent" />

        {/* top/bottom cinematic fade */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),transparent_25%,transparent_75%,rgba(0,0,0,0.35))]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_70%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      <Container className="relative">
        <div className="grid items-center lg:grid-cols-[0.92fr_1.08fr]">

          {/* LEFT */}
          <div className="relative z-10 max-w-3xl">

            <motion.p
              className="mb-7 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-zinc-400"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400" />
              Hi, I’m Amin
            </motion.p>

            <motion.h1
              className="text-[3.4rem] font-semibold leading-[0.92] tracking-[-0.055em] text-white sm:text-[4.6rem] md:text-[5.5rem] xl:text-[6.15rem]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              I build digital experiences that feel{" "}
              <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-orange-300 bg-clip-text text-transparent">
                premium.
              </span>
            </motion.h1>

            <motion.p
              className="mt-7 max-w-[34rem] text-base leading-8 text-zinc-400 md:text-[1.04rem]"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Webflow developer and front-end builder crafting clean,
              modern, and high-performance websites.
            </motion.p>

            <motion.div
              className="mt-10"
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
                className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-black/30 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/[0.05]"
              >
                View My Work
                <span className="text-base">↗</span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT EMPTY FOR COMPOSITION */}
          <div className="hidden lg:block" />

        </div>

        {/* scroll indicator */}
        <motion.div
          className="absolute bottom-2 right-0 hidden items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-zinc-500 md:flex"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <div className="flex h-12 w-[1px] items-end justify-center bg-white/10">
            <motion.div
              className="h-4 w-[1px] bg-white/80"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <span>Scroll Down</span>
        </motion.div>

      </Container>
    </section>
  )
}
