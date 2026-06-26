"use client"

import { buttonVariants } from "@/components/ui/button"
import { SectionContainer } from "@/components/section-container"
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { cn } from "@/lib/utils"

export function ContactSection() {
  return (
    <SectionContainer id="contact" className="flex flex-col gap-6 py-12 border-t border-border">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans">
          Contact
        </h2>
        <p className="text-muted-foreground text-sm font-medium">
          Find me on these platforms
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href="https://github.com/Rupak182"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "default" }),
            "rounded-full gap-2 border-border text-foreground hover:bg-muted font-medium bg-white dark:bg-zinc-950 px-4 py-2 flex items-center"
          )}
        >
          <FaGithub className="h-4 w-4" />
          GitHub
        </a>
        <a
          href="https://x.com/rupakgoura"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "default" }),
            "rounded-full gap-2 border-border text-foreground hover:bg-muted font-medium bg-white dark:bg-zinc-950 px-4 py-2 flex items-center"
          )}
        >
          <FaXTwitter className="h-4 w-4" />
          Twitter
        </a>
        <a
          href="https://linkedin.com/in/rupakgoura"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "default" }),
            "rounded-full gap-2 border-border text-foreground hover:bg-muted font-medium bg-white dark:bg-zinc-950 px-4 py-2 flex items-center"
          )}
        >
          <FaLinkedin className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href="mailto:rupakgoura@gmail.com"
          className={cn(
            buttonVariants({ variant: "outline", size: "default" }),
            "rounded-full gap-2 border-border text-foreground hover:bg-muted font-medium bg-white dark:bg-zinc-950 px-4 py-2 flex items-center"
          )}
        >
          <FaEnvelope className="h-4 w-4" />
          Mail
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "default" }),
            "rounded-full gap-2 border-border text-foreground hover:bg-muted font-medium bg-white dark:bg-zinc-950 px-4 py-2 flex items-center"
          )}
        >
          <FaFileAlt className="h-4 w-4" />
          Resume
        </a>
      </div>
    </SectionContainer>
  )
}
