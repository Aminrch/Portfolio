import { Hero } from "@/components/sections/hero"
import { SelectedWork } from "@/components/sections/selected-work"
import { Services } from "@/components/sections/services"
import { About } from "@/components/sections/about"
import { Process } from "@/components/sections/process"
import { CTA } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <About />
      <Process />
      <CTA />
    </>
  )
}
