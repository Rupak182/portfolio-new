"use client"

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiHono,
  SiNodedotjs,
  SiFastapi,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiGooglecloud,
  SiSqlite,
  SiDrizzle,
  SiFirebase,
  SiCloudflare,
  SiElectron,
  SiBun,
} from "react-icons/si"
import { Marquee } from "@/components/ui/marquee"
import { SectionContainer } from "@/components/section-container"

const TOOLS_LIST = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: SiPython },
  { name: "SQLite", icon: SiSqlite },
  { name: "React.js", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Hono", icon: SiHono },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Drizzle", icon: SiDrizzle },
  { name: "Firebase", icon: SiFirebase },
  { name: "Cloudflare", icon: SiCloudflare },
  { name: "Electron", icon: SiElectron },
  { name: "Bun", icon: SiBun },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
  { name: "Google Cloud", icon: SiGooglecloud },
]

export function ToolsSection() {
  return (
    <SectionContainer id="tools" className="flex flex-col gap-6 py-12 border-t border-border">
      <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans">
        Tools i have used
      </h2>
      <div className="relative w-full overflow-hidden">
        <Marquee className="[--duration:40s] [--gap:0.75rem]" pauseOnHover>
          {TOOLS_LIST.map((tool) => {
            const Icon = tool.icon
            return (
              <div
                key={tool.name}
                className="flex items-center gap-2 rounded-xl border border-border bg-white dark:bg-zinc-950 px-4 py-2 text-sm font-medium text-foreground shadow-sm"
              >
                <Icon className="h-4 w-4 text-muted-foreground" />
                <span>{tool.name}</span>
              </div>
            )
          })}
        </Marquee>
        {/* Gradients on edges for smooth marquee fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background to-transparent" />
      </div>
    </SectionContainer>
  )
}
