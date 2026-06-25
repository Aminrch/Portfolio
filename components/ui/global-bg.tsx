"use client"

import { motion } from "framer-motion"

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030304]">

      {/* grain texture (film feel) */}
      <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay [background-image:radial-gradient(rgba(255,255,255,0.12)_0.8px,transparent_0.8px)] [background-size:16px_16px]" />

      {/* MAIN CINEMATIC GRADIENT FIELD */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [0, 14, 0, -10, 0],
          y: [0, -12, 0, 8, 0],
          scale: [1, 1.03, 1, 1.02, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `
            radial-gradient(circle at 18% 28%, rgba(99,102,241,0.10), transparent 60%),
            radial-gradient(circle at 82% 35%, rgba(236,72,153,0.08), transparent 65%),
            radial-gradient(circle at 60% 78%, rgba(56,189,248,0.06), transparent 72%),
            radial-gradient(circle at 30% 85%, rgba(251,146,60,0.04), transparent 75%)
          `,
          filter: "blur(90px)",
          opacity: 0.65,
        }}
      />

      {/* subtle top/bottom cinematic fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),transparent_25%,transparent_75%,rgba(0,0,0,0.5))]" />

      {/* vignette (depth focus) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.4)_75%,rgba(0,0,0,0.85)_100%)]" />

    </div>
  )
}
