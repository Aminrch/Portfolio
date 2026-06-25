import Link from "next/link"
import { Container } from "@/components/ui/container"

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 md:py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* left */}
          <p className="text-sm text-zinc-400 whitespace-nowrap">
            © {new Date().getFullYear()} Amin Ranjbar. All rights reserved.
          </p>

          {/* center */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400 md:justify-center">
            <a
              href="mailto:aminrch78@gmail.com"
              className="transition hover:text-white whitespace-nowrap"
            >
              aminrch78@gmail.com
            </a>

            <a
              href="tel:+989021415554"
              className="transition hover:text-white whitespace-nowrap"
            >
              +98 902 141 5554
            </a>
          </div>

          {/* right */}
          <div className="flex items-center gap-5 text-sm text-zinc-400 md:justify-end">
            <Link href="/work" className="transition hover:text-white">
              Work
            </Link>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
