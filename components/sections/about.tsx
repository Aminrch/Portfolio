"use client"

import { useEffect, useState } from "react"

export default function About() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about")
      if (!section) return

      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const visible =
        1 - Math.max(0, rect.top) / windowHeight

      setProgress(Math.min(Math.max(visible, 0), 1))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="about" className="py-40">
      <div className="max-w-3xl mx-auto text-2xl leading-relaxed">
        
        <p className="text-zinc-600">
          I design and build modern web experiences focused on
          performance, clarity, and interaction.
        </p>

        <p
          className="text-white transition-all duration-300"
          style={{
            opacity: progress,
            transform: `translateY(${20 - progress * 20}px)`,
          }}
        >
          I help brands transform static websites into
          interactive digital experiences with strong visual hierarchy,
          smooth motion, and user-focused design.
        </p>

      </div>
    </section>
  )
}
