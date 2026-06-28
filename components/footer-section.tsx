import Link from "next/link"
import { SectionContainer } from "./section-container"

export function FooterSection() {
  return (
    <SectionContainer className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-muted-foreground font-medium">
      <div>
        © {new Date().getFullYear()} Rupak Goura. All rights reserved.
      </div>
      <div className="flex gap-4">
        <Link href="/privacy" className="hover:underline hover:text-foreground transition-colors">
          Privacy Policy
        </Link>
      </div>
    </SectionContainer>
  )
}
