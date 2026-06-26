import type { Metadata } from "next"
import { DM_Sans, Geist_Mono, Inria_Serif } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://rupak182.me"),
  title: {
    default: "Rupak Goura | Developer",
    template: "%s | Rupak Goura",
  },
  description: "Full-stack developer and product builder with experience in frontend, backend, and AI integrations.",
  openGraph: {
    title: "Rupak Goura | Developer",
    description: "Full-stack developer and product builder with experience in frontend, backend, and AI integrations.",
    url: "https://rupak182.me",
    siteName: "Rupak Goura",
    images: [
      {
        url: "/assets/og.png",
        width: 1200,
        height: 630,
        alt: "Rupak Goura | Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupak Goura | Developer & Builder",
    description: "Full-stack developer and product builder with experience in frontend, backend, and AI integration.",
    creator: "@Elnora_Hines18",
    images: ["/assets/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", dmSans.variable, inriaSerif.variable)}
    >
      <body suppressHydrationWarning>
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
