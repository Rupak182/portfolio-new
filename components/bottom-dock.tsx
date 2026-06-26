"use client"

import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Dock, DockIcon } from "@/components/ui/dock"
import { FaHome, FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

export function BottomDock() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by waiting for client-side mount
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto">
        <Dock className="bg-white/95 dark:bg-zinc-950/95 border border-border shadow-lg px-4 rounded-full">
          <DockIcon className="hover:bg-muted dark:hover:bg-zinc-900 rounded-full flex items-center justify-center">
            <a href="#hero" aria-label="Home" className="flex items-center justify-center w-full h-full text-muted-foreground hover:text-foreground transition-colors">
              <FaHome className="h-5 w-5" />
            </a>
          </DockIcon>
          <DockIcon className="hover:bg-muted dark:hover:bg-zinc-900 rounded-full flex items-center justify-center">
            <a href="https://github.com/Rupak182" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center justify-center w-full h-full text-muted-foreground hover:text-foreground transition-colors">
              <FaGithub className="h-5 w-5" />
            </a>
          </DockIcon>
          <DockIcon className="hover:bg-muted dark:hover:bg-zinc-900 rounded-full flex items-center justify-center">
            <a href="https://linkedin.com/in/rupakgoura" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center justify-center w-full h-full text-muted-foreground hover:text-foreground transition-colors">
              <FaLinkedin className="h-5 w-5" />
            </a>
          </DockIcon>
          <DockIcon className="hover:bg-muted dark:hover:bg-zinc-900 rounded-full flex items-center justify-center">
            <a href="https://x.com/rupakgoura" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex items-center justify-center w-full h-full text-muted-foreground hover:text-foreground transition-colors">
              <FaXTwitter className="h-5 w-5" />
            </a>
          </DockIcon>
          <DockIcon className="hover:bg-muted dark:hover:bg-zinc-900 rounded-full flex items-center justify-center">
            <a href="mailto:rupakgoura@gmail.com" aria-label="Mail" className="flex items-center justify-center w-full h-full text-muted-foreground hover:text-foreground transition-colors">
              <FaEnvelope className="h-5 w-5" />
            </a>
          </DockIcon>
          <DockIcon className="hover:bg-muted dark:hover:bg-zinc-900 rounded-full flex items-center justify-center">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="flex items-center justify-center w-full h-full text-muted-foreground hover:text-foreground transition-colors">
              <FaFileAlt className="h-5 w-5" />
            </a>
          </DockIcon>
          <DockIcon className="hover:bg-muted dark:hover:bg-zinc-900 rounded-full flex items-center justify-center">
            {mounted ? (
              <AnimatedThemeToggler
                theme={resolvedTheme as "light" | "dark"}
                onThemeChange={(newTheme) => setTheme(newTheme)}
                className="flex items-center justify-center w-full h-full text-muted-foreground hover:text-foreground transition-colors outline-none [&_svg]:h-5 [&_svg]:w-5"
              />
            ) : (
              <AnimatedThemeToggler
                theme="dark"
                className="flex items-center justify-center w-full h-full text-muted-foreground hover:text-foreground transition-colors outline-none [&_svg]:h-5 [&_svg]:w-5"
              />
            )}
          </DockIcon>
        </Dock>
      </div>
    </div>
  )
}
