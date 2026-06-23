"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07070a]/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.28em] text-white"
        >
          Amin Ranjbar
        </Link>

        <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition",
                  active
                    ? "bg-white text-black"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </Container>
    </header>
  )
}
