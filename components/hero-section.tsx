import Image from "next/image"
import { SectionContainer } from "@/components/section-container"
import { Highlighter } from "@/components/ui/highlighter"

export function HeroSection() {
  return (
    <SectionContainer id="hero" className="flex flex-col gap-6 pt-16 md:pt-20">
      <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-heading">
            Rupak Goura
          </h1>
          <p className="text-lg font-medium text-muted-foreground">
            Engineer  • Builder
          </p>
        </div>
        <div className="relative h-24 w-24 overflow-hidden rounded-full border border-border shadow-sm">
          <Image
            src="/assets/profile.png"
            alt="Rupak Kumar Goura"
            fill
            sizes="96px"
            className="object-cover"
            priority
          />
        </div>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-lg max-w-xl">
        I am a{" "}
        <Highlighter action="highlight" color="rgba(244, 63, 94, 0.25)" isView>
          <span className="text-foreground font-medium">full-stack developer</span>
        </Highlighter>{" "}
        and{" "}
        <Highlighter action="highlight" color="rgba(59, 130, 246, 0.2)" isView>
          <span className="text-foreground font-medium">product builder</span>
        </Highlighter>{" "}
        with experience on React/Next.js, backend development with frameworks like FastAPI and Hono, and AI integrations. I also have experience building voice AI pipelines, developer tools, and contributing to open-source projects.
      </p>
    </SectionContainer>
  )
}



