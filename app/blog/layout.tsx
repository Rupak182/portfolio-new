"use client";

import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { blog } from "@/lib/source";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { FaHome } from "react-icons/fa";

export default function BlogLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showSidebar = pathname !== "/blog";

  if (!showSidebar) {
    return (
      <RootProvider theme={{ enabled: false }}>
        {children}
      </RootProvider>
    );
  }

  return (
    <RootProvider theme={{ enabled: false }}>
      <DocsLayout
        tree={blog.pageTree}
        nav={{
          title: (
            <div className="flex items-center gap-2 text-xs font-semibold text-[#737373] dark:text-zinc-400 hover:text-[#09090B] dark:hover:text-white transition-colors">
              <FaHome className="h-4 w-4" />
              <span>Home</span>
            </div>
          ),
          url: "/",
        }}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
