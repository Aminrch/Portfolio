"use client"

import { motion } from "framer-motion"

export const FadeUp = ({ children, delay = 0 }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
