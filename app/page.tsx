import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { GithubContributionsSection } from "@/components/github-contributions-section"
import { ToolsSection } from "@/components/tools-section"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-background pb-32">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <GithubContributionsSection />
      <ToolsSection />
    </main>
  )
}
