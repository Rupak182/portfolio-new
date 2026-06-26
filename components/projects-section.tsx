import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { SectionContainer } from "@/components/section-container"
import { BorderBeam } from "@/components/ui/border-beam"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  )
}

interface ProjectItem {
  title: string
  description: string
  image: string
  tags: string[]
  websiteUrl?: string
  sourceUrl?: string
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "HeyCode",
    description: "Built a local-first, monorepo AI CLI Coding assistant using Bun, Hono, and React (OpenTUI). Integrated Vercel AI SDK to support multiple models. Added SQLite local storage with WAL mode .",
    image: "/assets/heycode.png",
    tags: ["Bun", "Hono", "React", "AI SDK", "SQLite", "Git", "WAL", "OpenTUI"],
    websiteUrl: "https://github.com/Rupak182/HeyCode", // Default placeholder links
    sourceUrl: "https://github.com/Rupak182/HeyCode",
  },
  {
    title: "AI Logo Generator",
    description: "An AI based logo generator to generate logos based on their provided data. Deployed a Flux Schnell model with FastAPI and Inngest to manage queues (50+ signups).",
    image: "/assets/gensi.png",
    tags: ["Next.js", "Typescript", "Shadcn UI", "FastAPI", "Inngest", "Flux Schnell"],
    websiteUrl: "https://github.com/Rupak182/AI-Logo-Generator",
    sourceUrl: "https://github.com/Rupak182/AI-Logo-Generator",
  },
  {
    title: "Interactive Dashboard",
    description: "An Interactive Dashboard built with Next.js along with Tailwind CSS, Tanstack Table, Shadcn and Recharts.",
    image: "/assets/dashcharts.png",
    tags: ["Next.js", "Typescript", "Shadcn UI", "TailwindCSS", "Recharts", "TanStack Table"],
    websiteUrl: "https://github.com/Rupak182/Dashboard-NextJS",
    sourceUrl: "https://github.com/Rupak182/Dashboard-NextJS",
  },
  {
    title: "Telemetry Chatbot",
    description: "A lightweight, AI Chatbot, LLM inference logging and ingestion workspace built with a FastAPI backend streaming proxy and a Next.js frontend.",
    image: "/assets/tchat.png",
    tags: ["Next.js", "Fast API", "AI SDK", "Python", "Shad CN", "PostgreSQL"],
    websiteUrl: "https://github.com/Rupak182/Telemetry-Chatbot",
    sourceUrl: "https://github.com/Rupak182/Telemetry-Chatbot",
  },
]

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700">
      <div className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <BorderBeam
          size={120}
          duration={6}
          borderWidth={1.5}
          colorFrom="var(--border-beam-from)"
          colorTo="var(--border-beam-to)"
        />
      </div>
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">

        <Image
          src={project.image}
          alt={`${project.title} Preview`}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-foreground text-base tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4 min-h-[72px]">
            {project.description}
          </p>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-1">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex items-center rounded bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-[10px] font-semibold text-zinc-700 dark:text-zinc-300 border border-border/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5 flex items-center gap-3">
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white dark:bg-zinc-950 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Website
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white dark:bg-zinc-950 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <SectionContainer id="projects" className="flex flex-col gap-6 border-t border-border">
      <div className="flex flex-col gap-1.5">
        <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">
          My Projects
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          I&apos;ve worked across various frontend and fullstack projects. I have experience with building AI tools too.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-2">
        {PROJECTS_DATA.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </SectionContainer>
  )
}
