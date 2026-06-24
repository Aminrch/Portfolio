import { Container } from "@/components/ui/container"

const services = [
  {
    title: "Webflow Development",
    description:
      "Responsive marketing and portfolio websites built with clean structure, polished interactions, and reusable sections.",
  },
  {
    title: "CMS Setup",
    description:
      "Collections, dynamic pages, and content structures that make editing and scaling the site easier after launch.",
  },
  {
    title: "SEO Foundations",
    description:
      "Semantic structure, on-page basics, and performance-minded implementation for a stronger starting point.",
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing updates, fixes, and small improvements to keep the site stable, current, and clean.",
  },
]

export function Services() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Services
          </h2>
        </div>

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
