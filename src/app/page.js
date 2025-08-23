// app/page.jsx
import Link from "next/link";
import Banner from "./components/Banner";

export const metadata = { title: "Home | Your Shop" };

async function getProducts() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";
  const res = await fetch(`${base}/api/products`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function Home() {
  const items = await getProducts();
  const FALLBACK =
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1600&auto=format&fit=crop";

  return (
    <main className="min-h-screen">
      {/* Hero / Banner */}
      <Banner />

      {/* All Products on Home */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">All Products</h2>
          <Link
            href="/products"
            className="text-sm font-medium text-cyan-700 hover:underline"
          >
            Open products page
          </Link>
        </div>

        {items.length === 0 ? (
          <p className="text-gray-600">No products yet. Add some first.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="h-44 w-full overflow-hidden">
                  {/* plain <img> so no client handlers needed */}
                  <img
                    src={(p.image || "").trim() || FALLBACK}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <h3 className="line-clamp-1 text-lg font-semibold text-gray-900 group-hover:text-cyan-700">
                    {p.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                    {p.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-semibold text-cyan-700">
                      ${Number(p.price).toFixed(2)}
                    </span>
                    <span className="text-sm text-amber-600">★ {p.rating ?? "—"}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
