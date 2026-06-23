import Link from "next/link"
import { Container } from "@/components/ui/container"
import { PageTransition } from "@/components/ui/page-transition"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(80,80,160,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,180,255,0.12),transparent_28%)]" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <PageTransition>
            <div>
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-zinc-400">
                Webflow Developer • Website Designer
              </span>

              <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
                I build clean, high-performance websites for businesses that
                need more than just a nice-looking homepage.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                I design and develop modern websites with a strong focus on
                clarity, responsiveness, and business-oriented execution — from
                landing pages to full Webflow builds.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/work"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  View Work
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </PageTransition>

          <PageTransition delay={0.12}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-3xl font-semibold text-white">2</p>
                  <p className="mt-2 text-sm text-zinc-400">Selected projects</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-3xl font-semibold text-white">Webflow</p>
                  <p className="mt-2 text-sm text-zinc-400">
                    Development, CMS, responsive builds
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-3xl font-semibold text-white">SEO</p>
                  <p className="mt-2 text-sm text-zinc-400">
                    Performance-aware and search-friendly structure
                  </p>
                </div>
              </div>
            </div>
          </PageTransition>
        </div>
      </Container>
    </section>
  )
}
