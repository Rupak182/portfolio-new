"use client"

import { buttonVariants } from "@/components/ui/button"
import { SectionContainer } from "@/components/section-container"
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { cn } from "@/lib/utils"

export function ContactSection() {
  return (
    <SectionContainer id="contact" className="flex flex-col gap-6 border-t border-border">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">
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
            "rounded-full gap-2 border-border text-muted-foreground hover:text-foreground hover:bg-muted font-medium bg-transparent dark:bg-zinc-950 px-4 py-2 flex items-center transition-colors"
          )}
        >
          <FaGithub className="h-4 w-4" />
          GitHub
        </a>
        <a
          href="https://x.com/Elnora_Hines18"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "default" }),
            "rounded-full gap-2 border-border text-muted-foreground hover:text-foreground hover:bg-muted font-medium bg-transparent dark:bg-zinc-950 px-4 py-2 flex items-center transition-colors"
          )}
        >
          <FaXTwitter className="h-4 w-4" />
          Twitter
        </a>
        <a
          href="https://linkedin.com/in/rupak-goura"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "default" }),
            "rounded-full gap-2 border-border text-muted-foreground hover:text-foreground hover:bg-muted font-medium bg-transparent dark:bg-zinc-950 px-4 py-2 flex items-center transition-colors"
          )}
        >
          <FaLinkedin className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href="mailto:rupakgoura18@gmail.com"
          className={cn(
            buttonVariants({ variant: "outline", size: "default" }),
            "rounded-full gap-2 border-border text-muted-foreground hover:text-foreground hover:bg-muted font-medium bg-transparent dark:bg-zinc-950 px-4 py-2 flex items-center transition-colors"
          )}
        >
          <FaEnvelope className="h-4 w-4" />
          Mail
        </a>
        <a
          href="https://drive.google.com/file/d/1elbb0eqSmbOqaqVSbXnXdtuP9i7ziAw4/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "default" }),
            "rounded-full gap-2 border-border text-muted-foreground hover:text-foreground hover:bg-muted font-medium bg-transparent dark:bg-zinc-950 px-4 py-2 flex items-center transition-colors"
          )}
        >
          <FaFileAlt className="h-4 w-4" />
          Resume
        </a>
      </div>
    </SectionContainer>
  )
}
