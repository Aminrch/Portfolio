import Hero from "@/components/sections/hero"
import SelectedWork from "@/components/sections/selected-work"
import Services from "@/components/sections/services"
import About from "@/components/sections/about"
import Process from "@/components/sections/process"

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <SelectedWork />
      <Services />
      <About />
      <Process />
    </main>
  )
}
