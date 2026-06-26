import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-background pb-32">
      <HeroSection />
      <ExperienceSection />
    </main>
  )
}
