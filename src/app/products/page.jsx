import Link from "next/link";
import ImageFallback from "../components/ImageFallback"; // relative path from /products

export const metadata = { title: "Products | Your Shop" };

async function getProducts() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";
  const res = await fetch(`${base}/api/products`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load products");
  return res.json();
}

export default async function ProductsPage() {
  const items = await getProducts();
  const FALLBACK =
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1600&auto=format&fit=crop";

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">All Products</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Link
            key={p.id}
            href={`/products/${p.id}`}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="h-44 w-full overflow-hidden">
              <ImageFallback
                src={p.image}
                alt={p.name}
                fallback={FALLBACK}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="line-clamp-1 text-lg font-semibold text-gray-900 group-hover:text-cyan-700">
                {p.name}
              </h3>
              
              <div className="mt-3 flex items-center justify-between">
                <span className="font-semibold text-cyan-700">
                  ${Number(p.price).toFixed(2)}
                </span>
               
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
