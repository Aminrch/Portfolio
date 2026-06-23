import Link from "next/link"
import { Container } from "@/components/ui/container"

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 md:p-12">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-zinc-400">
              Let’s build
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Need a website that feels sharper, cleaner, and more intentional?
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
              If you already have an idea, a rough design direction, or an
              existing website that needs a better execution, I’d be happy to
              take a look.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
