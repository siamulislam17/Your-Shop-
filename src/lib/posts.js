// lib/posts.js
export const POSTS = [
  {
    slug: "welcome-to-our-shop",
    title: "Welcome to Our Shop",
    date: "2025-08-20",
    excerpt:
      "A quick intro to who we are, what we sell, and how we keep things simple for you.",
    image:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1600&auto=format&fit=crop",
    content: `
Welcome to our shop!

We keep things simple: clear pricing, quick shipping, and helpful support.
Browse the catalog, open a product to see details, and check out easily.
    `.trim(),
  },
  {
    slug: "shipping-and-returns",
    title: "Shipping & Returns (Made Simple)",
    date: "2025-08-17",
    excerpt:
      "Fast dispatch, clear tracking, and an easy returns window — here’s how it works.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
    content: `
We dispatch orders quickly and share tracking as soon as it’s available.
If something isn’t right, our returns flow is straightforward and fast.
    `.trim(),
  },
  {
    slug: "secure-payments-faq",
    title: "Secure Payments — FAQ",
    date: "2025-08-16",
    excerpt:
      "Your payments are protected. Answers to the most common questions we get.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    content: `
We use trusted payment processors and never store card details on our servers.
If you have questions about charges or refunds, this FAQ has you covered.
    `.trim(),
  },
];

export function allPosts() {
  return POSTS;
}

export function findPost(slug) {
  return POSTS.find((p) => p.slug === slug) || null;
}
