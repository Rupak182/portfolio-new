import Image from "next/image"
import { Calendar, Code2, Trophy, ArrowUpRight } from "lucide-react"
import { SectionContainer } from "@/components/section-container"

interface ExperienceItemProps {
  company: string
  logo?: string
  fallbackIcon?: React.ReactNode
  role: string
  period: string
  description: string[]
  websiteUrl?: string
}

function ExperienceItem({
  company,
  logo,
  fallbackIcon,
  role,
  period,
  description,
  websiteUrl,
}: ExperienceItemProps) {
  return (
    <div className="flex items-start gap-3 sm:gap-6">
      <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-white shadow-sm overflow-hidden">
        {logo ? (
          <Image
            src={logo}
            alt={`${company} Logo`}
            fill
            sizes="(max-width: 640px) 40px, 48px"
            className="object-cover p-1"
          />
        ) : (
          fallbackIcon || <Calendar className="h-5 w-5 text-muted-foreground" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div>
            <h3 className="font-semibold text-foreground text-base">
              {websiteUrl ? (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:underline inline-flex items-center gap-0.5 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                >
                  {company}
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                company
              )}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">{role}</p>
          </div>
          <span className="text-xs text-muted-foreground/80 font-medium sm:text-right shrink-0">
            {period}
          </span>
        </div>
        <ul className="list-disc pl-4 text-sm text-muted-foreground leading-relaxed space-y-1 mt-1">
          {description.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

interface OSSItemProps {
  project: string
  logo?: string
  fallbackIcon?: React.ReactNode
  description: string
  pullRequestUrl?: string
}

function OSSItem({ project, logo, fallbackIcon, description, pullRequestUrl }: OSSItemProps) {
  return (
    <div className="flex items-start gap-3 sm:gap-6">
      <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-white shadow-sm overflow-hidden">
        {logo ? (
          <Image
            src={logo}
            alt={`${project} Logo`}
            fill
            sizes="(max-width: 640px) 40px, 48px"
            className="object-cover p-1.5"
          />
        ) : (
          fallbackIcon || <Code2 className="h-5 w-5 text-muted-foreground" />
        )}
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <h3 className="font-semibold text-foreground text-base">
          {pullRequestUrl ? (
            <a
              href={pullRequestUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:underline inline-flex items-center gap-0.5 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
            >
              {project}
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            project
          )}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mt-1">{description}</p>
      </div>
    </div>
  )
}

export function ExperienceSection() {
  return (
    <SectionContainer id="experience" className="flex flex-col gap-12 border-t border-border">
      {/* Experience Section */}
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">
          Experience
        </h2>
        <div className="flex flex-col gap-8">
          <ExperienceItem
            company="Bait AI"
            logo="/assets/baitai.png"
            role="Software Engineering Intern"
            period="Dec 2025 – May 2026"
            websiteUrl="https://baitai.club"
            description={[
              "Built the Next.js/TypeScript frontend and integrated backend APIs.",
              "Implemented user authentication and session management using Firebase.",
              "Optimized the custom voice AI pipeline for real-time AI Interviews.",
              "Integrated WebSockets for real-time voice and text communications.",
            ]}
          />
          <ExperienceItem
            company="Events Booking Platform (Pre-Launch)"
            role="Software Engineering Intern"
            period="Feb 2026 – May 2026"
            fallbackIcon={
              <div className="flex h-full w-full items-center justify-center bg-zinc-100 font-semibold text-zinc-600 text-sm">
                EB
              </div>
            }
            description={[
              "Developing the mobile app using Expo (React Native), FastAPI, and SQLAlchemy.",
              "Added geolocation features for proximity-based filtering and events.",
              "Implemented authentication, relational databases, and Razorpay payments.",
              "Integrated Google Cloud Storage for storing and serving event media.",
            ]}
          />
        </div>
      </div>

      {/* OSS Contributions Section */}
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">
          OSS Contributions
        </h2>
        <div className="flex flex-col gap-6">
          <OSSItem
            project="Onlook (YC W25)"
            logo="/assets/onlook.png"
            pullRequestUrl="https://github.com/onlook-dev/onlook/pulls?q=is%3Apr+is%3Aclosed+author%3ARupak182"
            description="Added Functionalities for the desktop app based on Electron.js."
          />
          <OSSItem
            project="Brie.io"
            logo="/assets/brie.png"
            pullRequestUrl="https://github.com/briehq/brie-extension/pulls?q=is%3Apr+is%3Aclosed+author%3ARupak182"
            description="Migrated Brie extension from using Fabric.js v5 to v6 (Refactored 10 files and updated around 3,100 lines of code for compatibility) and simplified key namings in environment variables."
          />
        </div>
      </div>

      {/* Hackathons Section */}
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">
          Hackathons
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-3 sm:gap-6">
            <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-white shadow-sm overflow-hidden">
              <Image
                src="/assets/juspay.png"
                alt="Juspay Logo"
                fill
                sizes="(max-width: 640px) 40px, 48px"
                className="object-cover p-1.5"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-foreground text-base">
                  <a
                    href="https://github.com/Rupak182/drawer2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hover:underline inline-flex items-center gap-0.5 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                  >
                    Juspay UI Hackathon
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                Qualifed for Justpay UI Hacakthon where I Built a Nested Drawer Component with the help of ShadCN with customization options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
