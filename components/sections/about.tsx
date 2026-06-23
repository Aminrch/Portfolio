import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"

export function About() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="About"
          title="Designing and building websites with clarity, structure, and intent."
        />

        <div className="space-y-6 text-sm leading-8 text-zinc-400 md:text-base">
          <p>
            I’m Amin Ranjbar — a Webflow developer and website designer focused
            on building modern websites for businesses, startups, and personal
            brands.
          </p>
          <p>
            My work is centered around clean layouts, responsive execution, and
            a practical understanding of what a business website actually needs:
            clarity, trust, and a structure that makes content easy to manage.
          </p>
          <p>
            I enjoy turning rough ideas, design references, or existing sites
            into polished web experiences that feel more intentional and more
            useful than a generic template.
          </p>
        </div>
      </Container>
    </section>
  )
}
