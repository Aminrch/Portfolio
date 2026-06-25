import type { Metadata } from "next"
import "./globals.css"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { GlobalBackground } from "@/components/ui/global-bg"

export const metadata: Metadata = {
  title: {
    default: "Amin Ranjbar — Webflow Developer & Website Designer",
    template: "%s | Amin Ranjbar",
  },
  description:
    "Portfolio of Amin Ranjbar — building clean, modern, responsive websites for businesses and startups.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#030304] text-white antialiased">

        {/* 🌌 global cinematic background */}
        <GlobalBackground />

        {/* 🧱 app structure */}
        <div className="relative min-h-screen">
          <Navbar />

          {children}

          <Footer />
        </div>

      </body>
    </html>
  )
}
