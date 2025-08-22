import { notFound } from "next/navigation";
import Link from "next/link";
import { allPosts, findPost } from "../../../lib/posts";

export async function generateStaticParams() {
  // prebuild /blogs/welcome-to-our-shop, etc.
  return allPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = findPost(params.slug);
  return {
    title: post ? `${post.title} | My Shop` : "Blog | My Shop",
    description: post?.excerpt ?? "Blog post",
  };
}

export default function BlogPostPage({ params }) {
  const post = findPost(params.slug);
  if (!post) return notFound();

  // very simple paragraph rendering
  const paragraphs = (post.content || "").split(/\n\s*\n/);

  return (
    <article className="min-h-screen bg-white">
      <header className="bg-cyan-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <p className="text-xs opacity-90">{post.date}</p>
          <h1 className="mt-1 text-3xl font-bold">{post.title}</h1>
          <p className="mt-2">
            <Link href="/blogs" className="underline underline-offset-4">
              ← Back to all posts
            </Link>
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200">
          <img
            src={post.image}
            alt={post.title}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="prose max-w-none prose-headings:scroll-mt-24">
          {paragraphs.map((para, i) => (
            <p key={i} className="mb-4 text-gray-800">
              {para}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
