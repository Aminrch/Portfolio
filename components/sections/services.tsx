import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"

const services = [
  {
    title: "Webflow Development",
    description:
      "Custom responsive websites built with clean structure, polished interactions, and scalable sections for future edits.",
  },
  {
    title: "CMS Setup",
    description:
      "Collection structure, dynamic pages, and content workflows that make updates easier after launch.",
  },
  {
    title: "SEO Foundations",
    description:
      "On-page structure, semantic layout, and cleaner performance habits that help your site start from a better place.",
  },
  {
    title: "Website Maintenance",
    description:
      "Updates, fixes, small improvements, and support for keeping your website stable and current.",
  },
]

export default function Services() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I can help you build."
          description="From marketing websites to clean portfolio builds, I focus on websites that feel modern, perform well, and stay easy to manage."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-xl font-medium text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
