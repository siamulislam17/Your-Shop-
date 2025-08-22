import { allPosts } from "@/lib/posts";
import Link from "next/link";


export const metadata = {
  title: "Blogs | My Shop",
  description: "Short updates and helpful notes about our shop.",
};

export default function BlogsPage() {
  const POSTS = allPosts();

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-cyan-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl font-bold">Our Blog</h1>
          <p className="mt-2 text-white/90">
            Short reads about our products, shipping, and how we work.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Latest posts</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="p-5">
                <p className="text-xs text-gray-500">{post.date}</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>

                <div className="mt-4">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-block rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
