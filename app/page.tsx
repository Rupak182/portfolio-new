import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { GithubContributionsSection } from "@/components/github-contributions-section"
import { ToolsSection } from "@/components/tools-section"
import { ContactSection } from "@/components/contact-section"
import { BottomDock } from "@/components/bottom-dock"
import { BlurFade } from "@/components/ui/blur-fade"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-background pb-16">
      {/* Staggered on load */}
      <BlurFade delay={0.1}>
        <HeroSection />
      </BlurFade>
      <BlurFade delay={0.25}>
        <ExperienceSection />
      </BlurFade>

      {/* Immediate reveal when scrolled into view */}
      <BlurFade delay={0.1} inView>
        <ProjectsSection />
      </BlurFade>
      <BlurFade delay={0.1} inView>
        <GithubContributionsSection />
      </BlurFade>
      <BlurFade delay={0.1} inView>
        <ToolsSection />
      </BlurFade>
      <BlurFade delay={0.1} inView>
        <ContactSection />1"
      </BlurFade>
      <BottomDock />
    </main>
  )
}
