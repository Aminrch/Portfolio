import Link from "next/link"
import { Container } from "@/components/ui/container"

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Amin Ranjbar. All rights reserved.
          </p>

          <div className="mt-4 space-y-2 text-sm text-zinc-400">
            <p>
              Email:{" "}
              <a
                href="mailto:aminrch78@gmail.com"
                className="transition hover:text-white"
              >
                aminrch78@gmail.com
              </a>
            </p>

            <p>
              Phone:{" "}
              <a
                href="tel:+989021415554"
                className="transition hover:text-white"
              >
                +98 902 141 5554
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 text-sm text-zinc-400">
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
      </Container>
    </footer>
  )
}
