"use client"

import { useState, useEffect } from "react"
import { GitHubCalendar } from "react-github-calendar"
import { useTheme } from "next-themes"
import { SectionContainer } from "@/components/section-container"

export function GithubContributionsSection() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <SectionContainer id="github" className="flex flex-col gap-6 py-12 border-t border-border">
      <h2 className="text-2xl flex flex-col font-bold tracking-tight text-foreground font-sans">
        GitHub Contributions
        <span className="text-zinc-400 dark:text-zinc-500 font-normal text-lg ">
          @Rupak182
        </span>
      </h2>
      <div className="w-full overflow-hidden [&_svg]:w-full [&_svg]:h-auto">
        {mounted ? (
          <GitHubCalendar
            username="Rupak182"
            fontSize={12}
            blockSize={12}
            blockMargin={4}
            colorScheme={resolvedTheme as "light" | "dark"}
          />
        ) : (
          <div className="h-[120px] w-full animate-pulse bg-zinc-100 dark:bg-zinc-800/50 rounded-lg" />
        )}
      </div>
    </SectionContainer>
  )
}
