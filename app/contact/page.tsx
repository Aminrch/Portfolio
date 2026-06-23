import { ContactForm } from "@/components/forms/contact-form"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"

export const metadata = {
  title: "Contact",
}

export default function ContactPage() {
  return (
    <main className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about your next website."
            description="If you have a project in mind, a redesign request, or just want to discuss a Webflow build, send me a message."
          />

          <div className="mt-8 space-y-4 text-sm text-zinc-400">
            <p>
              I build websites for businesses, personal brands, and startups
              that need a cleaner and more focused online presence.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <ContactForm />
        </div>
      </Container>
    </main>
  )
}
