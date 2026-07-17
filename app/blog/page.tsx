import { blog } from "@/lib/source";
import Link from "next/link";
import { BottomDock } from "@/components/bottom-dock";

export const metadata = {
  title: "Blog | Rupak Goura",
  description: "Writing about software engineering, system design, and low-level design.",
};

export default function BlogIndexPage() {
  // Get all blog posts and sort them by date (newest first)
  const posts = [...blog.getPages()]
    .filter((post) => post.slugs.length === 1)
    .sort(
      (a, b) =>
        new Date(b.data.date || "").getTime() -
        new Date(a.data.date || "").getTime()
    );

  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-zinc-950 font-sans py-16 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-[#09090B] dark:text-white font-sans">
            Blogs
          </h1>
          <p className="text-base text-[#737373] dark:text-zinc-400">
            Writing about software engineering, system design, and low-level design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.length === 0 ? (
            <p className="text-sm text-[#737373] dark:text-zinc-500 col-span-2">
              No blog posts found. Check back later!
            </p>
          ) : (
            posts.map((post) => (
              <Link
                key={post.url}
                href={post.url}
                className="group block p-6 bg-white dark:bg-zinc-900 border border-[#E5E5E5] dark:border-zinc-800 rounded-2xl hover:border-[#09090B] dark:hover:border-white transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center h-5">
                    {post.data.date ? (
                      <span className="text-[10px] font-medium text-[#737373] dark:text-zinc-500 leading-none">
                        {new Date(post.data.date).toLocaleDateString("en-US", {
                          month: "numeric",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    ) : (
                      <span />
                    )}
                    {post.data.tags && post.data.tags.length > 0 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#09090B]/5 dark:bg-white/5 text-[#09090B]/80 dark:text-white/80 border border-zinc-200 dark:border-zinc-800 leading-none">
                        {post.data.tags[0]}
                      </span>
                    )}
                  </div>
                  <h2 className="font-semibold text-base text-[#09090B] dark:text-white group-hover:text-neutral-900 dark:group-hover:text-zinc-100 transition-colors pt-0.5">
                    {post.data.title}
                  </h2>
                  <p className="text-sm text-[#737373] dark:text-zinc-400 line-clamp-3">
                    {post.data.description}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
      <BottomDock />
    </main>
  );
}
