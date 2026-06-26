<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio Implementation Plan & Design Guidelines

This project is a personal portfolio website built with Next.js (App Router), Tailwind CSS v4, TypeScript, Shadcn UI, and MagicUI components. Follow these exact styling rules, layout architectures, and component patterns when implementing or refactoring the portfolio page.

## 🎨 Theme & Design System

Ensure all styles align with the following design tokens:
- **Font Family**: `DM Sans` (Google Fonts). Set this as the main typography font.
- **Background Color**: `#FAFAFA` (FAFAFA)
- **Primary Color**: `#09090B` (09090B) - Used for primary text, main cards, components, and primary buttons.
- **Secondary Color**: `#737373` (737373) - Used for subtitles, descriptions, and auxiliary text.
- **Border/Stroke Color**: `#E5E5E5`

---

## 🛠️ Required Component Libraries & Icons
- **Shadcn UI**: Use Shadcn components for UI elements (Buttons, Cards, Dialogs, Drawers, etc.) wherever possible to keep the styling clean and consistent.
- **MagicUI**: Use MagicUI for subtle animations and interactive components.
  - Install `@magicui/dock` (via `bunx --bun shadcn@latest add @magicui/dock`) for the floating dock at the bottom of the page.
- **GitHub Contributions**: Use the `react-github-calendar` library to render the interactive contribution calendar.
- **Icons**: Use `lucide-react` for clean, modern interface iconography. For brand icons (GitHub, LinkedIn, Twitter/X, etc.), use appropriate SVG paths or a suitable icon package.

---

## 📐 Page Structure & Layout (Figma Design Schema)

The page layout is structured vertically inside a main layout. Follow these layout, styling, and structural rules:

### 🏛️ Architectural & Layout Guidelines
- **Semantic HTML**: Every main section of the portfolio page must be wrapped in a semantic `<section>` tag.
- **Component-Driven Architecture**: Implement each section as a separate, reusable component in the `components/` directory (e.g., `components/hero-section.tsx`, `components/experience-section.tsx`, `components/projects-section.tsx`, etc.). Keep the main page (`app/page.tsx`) clean by only importing and arranging these section components.
- **Consistent Layout & Margins**:
  - Wrap all section contents in a unified layout container (e.g., `max-w-2xl mx-auto px-6 w-full`).
  - Keep left and right alignments perfectly consistent across the entire vertical scroll.
- **Consistent Spacing & Padding**:
  - Use uniform vertical padding for each section (e.g., `py-12` or `py-16`).
  - Maintain a consistent spacing/gap between sections in the parent container (e.g., `space-y-20` or `gap-20`).
  - Standardize vertical spacing inside components (e.g., `space-y-4` or `gap-4` between headers and descriptions, `space-y-8` for list items).

### Section Order & Details:


### 1. 🚀 Hero Section
- **Heading (H1)**: `Rupak Goura`
- **Role/Subtitle**: `Developer`
- **Bio Paragraph**:
  > a full-stack developer and product builder with deep experience across engineering, product strategy, and user-centric design. A polymath who bridges technical architecture with business outcomes to create impactful, scalable solutions.

### 2. 💼 Experience & Contributions Section
- **Heading 2**: `Experience`
  - **Bait AI** (Software Engineering Intern | *Dec 2025 – May 2026*)
    - Description: *Built almost entire frontend (Next.js) with Figma Designs and collaborate on building to backend, implemented Firebase Auth, deployed on Cloudflare Workers and worked on integrating WebSockets for real-time audio/text communication for Voice AI pipeline.*
- **Heading 2**: `OSS Contributions`
  - **Onlook (YC W25)**
    - Description: *Added Text Transform and Sticky Positioning Feature for the desktop app based on Electron.js*
  - **BrieHQ**
    - Description: *Added support for Fabric.js v6 and Simplify Key Namings in environment variables for the Brie browser extension.*
- **Heading 3**: `Hackathon`
  - **Juspay**
    - Description: *Qualified for Juspay UI Hackathon where I built an Nested animated Drawer Component*

### 3. 📂 Projects Section
- **Heading 2**: `My Projects`
- **Subtitle**: *I've worked across various frontend and fullstack projects. I have experience with building AI tools too.*
- **Grid Layout**: A responsive 2x2 grid containing these four projects:
  1. **HeyCode**
     - *Description*: HeyCode is an Local First, AI-powered coding assistant designed to help developers build and edit codebases directly from their command line.
     - *Tech Tags*: `Open TUI`, `Typescript`, `Hono.js`, `Drizzle`, `AI SDK`, `Sqlite`, `MCP`
     - *Links*: Website, Source
  2. **Gensi**
     - *Description*: An AI based logo generator. Logos are generated based on the information provided by user via image generation model hosted on serverless platform.
     - *Tech Tags*: `Next.js`, `Typescript`, `Shadcn UI`, `FastAPI`, `Inngest`, `Flux Schnell`
     - *Links*: Website, Source
  3. **Interactive Dashboard**
     - *Description*: An Interactive Dashboard built with Next.js along with Tailwind CSS, Tanstack Table, Shadcn and Recharts.
     - *Tech Tags*: `Next.js`, `Typescript`, `Shadcn UI`, `TailwindCSS`, `Recharts`, `TanStack Table`
     - *Links*: Website, Source
  4. **Telemetry Chatbot**
     - *Description*: A lightweight, AI Chatbot, LLM inference logging and ingestion workspace built with a FastAPI backend streaming proxy and a Next.js frontend.
     - *Tech Tags*: `Next.js`, `Fast API`, `AI SDK`, `Python`, `Shad CN`, `PostgreSQL`
     - *Links*: Website, Source

### 4. 📊 GitHub Contributions Section
- **Heading 2**: `GitHub Contributions`
- **Subtitle**: *2115 contributions in the last year*
- **Implementation**: Display an interactive contribution graph using `react-github-calendar`.

### 5. 🧰 Tools / Stack Section
- **Heading 2**: `Tools i have used`
- **Layout**: Infinite marquee or scrolling list (use MagicUI Marquee or CSS scrolling marquee) with these items:
  - `JavaScript`, `TypeScript`, `Java`, `Python`, `SQL`, `React.js`, `Next.js`, `Express.js`, `Node.js`, `FastAPI`, `Tailwind CSS`, `MongoDB`, `PostgreSQL`, `Redis`, `Git`, `Docker`, `Azure`, `AWS`, `Google Cloud`, `Jira`, `Nix OS`.

### 6. ✉️ Contact / Get In Touch
- **Heading 2**: `Contact` / `Get in Touch`
- **Subtitle**: `Find me on these platforms`
- **Platforms/Links**:
  - `GitHub`, `Twitter`, `LinkedIn`, `Mail`, `Resume`
  - Style as custom buttons/pills using shadcn styling.

### 7. ⚓ Bottom Navigation Dock
- **Component**: MagicUI Dock floating at the bottom center of the page.
- **Design Specifications**:
  - Rounded pill structure, white background (`#ffffff`), light grey border (`#e5e5e5`), drop-shadow effects, padding and center alignment.
  - Interactive icons: Home, GitHub, LinkedIn, Twitter/X, Mail, Resume.
