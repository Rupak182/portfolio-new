import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function SectionContainer({
  children,
  className,
  ...props
}: SectionContainerProps) {
  return (
    <section
      className={cn("max-w-2xl mx-auto px-6 w-full py-12 md:py-16", className)}
      {...props}
    >
      {children}
    </section>
  )
}
