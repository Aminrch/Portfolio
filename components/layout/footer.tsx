import Link from "next/link"
import { Container } from "@/components/ui/container"

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Amin Ranjbar. All rights reserved.
        </p>

        <div className="flex items-center gap-5 text-sm text-zinc-400">
          <Link href="/work" className="transition hover:text-white">
            Work
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  )
}
