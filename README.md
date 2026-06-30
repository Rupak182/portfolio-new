# Developer Portfolio 🚀

A modern, high-performance personal portfolio website built using **Next.js 16 (App Router)**, **Tailwind CSS v4**, **TypeScript**, and **MagicUI**. 

This portfolio showcases professional software engineering experience, open-source contributions, hackathon participation, and featured full-stack projects.

## ✨ Features

- **Theme Toggling:** Seamless transition between light and dark modes with micro-animations.
- **Floating Bottom Dock:** Interactive MagicUI floating navigation dock at the bottom of the viewport.
- **Dynamic Highlights:** Soft hand-drawn annotations powered by `rough-notation` (via a custom `Highlighter` component) highlighting core roles.
- **Project Showcase:** A modern grid of full-stack projects featuring clean cards, technical tags, and source/live links.
- **GitHub Contribution Graph:** An interactive contribution calendar integration using `react-github-calendar`.
- **Marquee Tools Section:** A smooth infinite-scrolling marquee listing utilized tech stack tools.
- **Responsive Layout:** Optimized across mobile, tablet, and desktop viewports.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) & [MagicUI](https://magicui.design/)
- **State/Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Package Manager / Runtime:** [Bun](https://bun.sh/)
- **Interactive Graphs:** [react-github-calendar](https://github.com/grubersjoe/react-github-calendar)

## 📁 Project Structure

```text
├── app/                  # Next.js App Router (pages & layout)
├── components/           # React Components
│   ├── ui/               # Reusable primitive UI components (Shadcn/MagicUI)
│   ├── hero-section.tsx  # Hero section component with Highlighter
│   ├── projects-section.tsx
│   ├── experience-section.tsx
│   ├── tools-section.tsx # Marquee tech stack list
│   └── ...
├── public/               # Static assets (images, profile graphics)
└── package.json          # Dependency manifest
```

## 🚀 Getting Started

First, install the dependencies and run the development server:

```bash
# Install dependencies
bun install

# Start the dev server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
