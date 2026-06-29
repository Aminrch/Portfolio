import Hero from "@/components/sections/hero"
import TechStack from "@/components/sections/tech-stack"
import SelectedWork from "@/components/sections/selected-work"
import {Services} from "@/components/sections/services"
import About from "@/components/sections/about"
import Process from "@/components/sections/process"

export default function HomePage() {
  return (
    <>
      <Hero />

      <TechStack />

      <SelectedWork />

      <Services />

      <About />

      <Process />
    </>
  )
}
