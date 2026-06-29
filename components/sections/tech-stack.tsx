"use client"

import { motion } from "framer-motion"

import {
  SiWebflow,
  SiWordpress,
  SiNextdotjs,
  SiReact,
  SiFigma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

const logos = [
  SiWebflow,
  SiWordpress,
  SiNextdotjs,
  SiReact,
  SiFigma,
  SiTailwindcss,
  SiTypescript,
]

const loop = [...logos, ...logos, ...logos]

export default function TechStack() {
  return (
    <section className="relative overflow-hidden py-12">
      {/* fade */}
      <div className="absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-black to-transparent pointer-events-none" />

      <motion.div
        className="flex w-max items-center gap-20"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loop.map((Icon, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.15,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
            className="text-white/35 hover:text-white"
          >
            <Icon size={42} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
