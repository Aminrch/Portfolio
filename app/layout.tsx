import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-[#07070a] text-white antialiased">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_30%)]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
