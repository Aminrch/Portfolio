"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type PageTransitionProps = {
  children: ReactNode
  delay?: number
}

export function PageTransition({
  children,
  delay = 0,
}: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  )
}
