import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"

const steps = [
  {
    index: "01",
    title: "Discovery",
    description:
      "We define the website goal, audience, references, and the overall structure before touching the build.",
  },
  {
    index: "02",
    title: "Direction",
    description:
      "I shape the visual direction and layout system around the content, brand, and business needs.",
  },
  {
    index: "03",
    title: "Build",
    description:
      "The site is developed responsively with attention to spacing, hierarchy, and maintainable structure.",
  },
  {
    index: "04",
    title: "Launch",
    description:
      "Final checks, responsiveness, polishing, and handoff — with room for future content updates and support.",
  },
]

export function Process() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A straightforward workflow from concept to launch."
          description="The goal is simple: reduce noise, make decisions clearly, and ship a site that feels intentional."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.index}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <span className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                {step.index}
              </span>
              <h3 className="mt-4 text-xl font-medium text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
