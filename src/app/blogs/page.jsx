// app/blogs/page.jsx
import Link from "next/link";

const POSTS = [
  {
    slug: "welcome-to-our-shop",
    title: "Welcome to Our Shop",
    date: "2025-08-20",
    excerpt:
      "A quick intro to who we are, what we sell, and how we keep things simple for you.",
    image:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1600&auto=format&fit=crop",
  },

  {
    slug: "shipping-and-returns",
    title: "Shipping & Returns (Made Simple)",
    date: "2025-08-17",
    excerpt:
      "Fast dispatch, clear tracking, and an easy returns window — here’s how it works.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "secure-payments-faq",
    title: "Secure Payments — FAQ",
    date: "2025-08-16",
    excerpt:
      "Your payments are protected. Answers to the most common questions we get.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
  },
];

export const metadata = {
  title: "Blogs | My Shop",
  description: "Short updates and helpful notes about our shop.",
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen">
      {/* Theme-aware Header */}
      <header className="bg-indigo-600 text-white dark:bg-gray-900 dark:text-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl font-bold">Our Blog</h1>
          <p className="mt-2 text-white/90 dark:text-gray-300">
            Short reads about our products, shipping, and how we work.
          </p>
        </div>
      </header>

      {/* Posts */}
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.slug}
              className="
                overflow-hidden rounded-2xl border
                bg-white shadow-sm
                border-gray-200
                dark:bg-gray-900 dark:border-gray-800 dark:shadow-none
              "
            >
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
                <h2 className="mt-1 line-clamp-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>

                <div className="mt-4">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="
                      inline-block rounded-lg border px-3 py-2 text-sm font-medium
                      text-gray-900 border-gray-300 hover:bg-gray-50
                      dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800
                      transition
                    "
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
