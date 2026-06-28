import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Privacy Policy | Rupak Goura",
  description: "Privacy-focused analytics and visitor tracking policies.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 md:py-24">
      <div className="max-w-xl mx-auto px-6 w-full flex flex-col gap-8">
        <div>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "rounded-full gap-2 text-muted-foreground hover:text-foreground -ml-2"
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight font-heading">
            Privacy Policy
          </h1>
          <p className="text-xs text-muted-foreground">
            Effective: June 28, 2026
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            This website respects your privacy. I do not collect, store, or share any of your personally identifiable information (PII).
          </p>
          <p>
            To understand how visitors interact with the site, I use <strong>Umami Analytics</strong>. Umami is a privacy-first web analytics tool that:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-1.5">
            <li>Does not use cookies or persistent tracking.</li>
            <li>Aggregates and anonymizes all visitor data.</li>
            <li>Fully complies with GDPR, CCPA, and PECR.</li>
          </ul>
          <p>
            If you have any questions, feel free to reach out via{" "}
            <a href="mailto:rupakgoura18@gmail.com" className="underline hover:text-foreground">
              email
            </a>.
          </p>
        </div>
      </div>
    </main>
  )
}
