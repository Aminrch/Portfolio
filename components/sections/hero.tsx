"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import Lightfall from "@/components/ui/hero-background/Lightfall";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[96vh] items-center overflow-hidden bg-black pt-28 pb-20 md:pt-32 md:pb-24">

      {/* Background */}
      <Lightfall
        className="absolute inset-0 -z-10"
        colors={["#A6C8FF", "#5227FF", "#FF9FFC"]}
        backgroundColor="#0A29FF"
        speed={0.5}
        streakCount={2}
        streakWidth={1}
        streakLength={1}
        glow={1}
        density={0.6}
        twinkle={1}
        zoom={3}
        backgroundGlow={0.5}
        opacity={1}
        mouseInteraction
        mouseStrength={0.5}
        mouseRadius={1}
      />

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 -z-[5] overflow-hidden">
        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(255,255,255,0.12)_0.8px,transparent_0.8px)] [background-size:18px_18px]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_70%,rgba(0,0,0,0.85)_100%)]" />

        {/* Readability */}
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-black via-black/95 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center lg:grid-cols-[0.92fr_1.08fr]">

          <div className="max-w-3xl">

            <motion.p
              className="mb-7 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-zinc-400"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400" />
              Hi, I'm Amin
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
              }}
            >
              <a
                href="#work"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View My Work
                <span className="text-base">↗</span>
              </a>
            </motion.div>

          </div>

          <div className="hidden lg:block" />

        </div>
      </Container>
    </section>
  );
}
