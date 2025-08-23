import Link from "next/link";
import { notFound } from "next/navigation";
import ImageFallback from "../../components/ImageFallback"; // relative path

export async function generateMetadata({ params }) {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";
  const res = await fetch(`/api/products/${params.id}`, { cache: "no-store" });
  if (!res.ok) return { title: "Product | Your Shop" };
  const p = await res.json();
  return { title: `${p.name} | Your Shop` };
}

async function getProduct(id) {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";
  const res = await fetch(`/api/products/${id}`, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to load product");
  return res.json();
}

export default async function ProductDetails({ params }) {
  const p = await getProduct(params.id);
  if (!p) notFound();

  const FALLBACK =
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1600&auto=format&fit=crop";

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link
        href="/products"
        className="inline-block rounded-lg border px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50"
      >
        ← Back to products
      </Link>

      <section className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-gray-200">
          <ImageFallback
            src={p.image}
            alt={p.name}
            fallback={FALLBACK}
            className="h-80 w-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-2xl font-semibold">{p.name}</h1>
          <div className="mt-2 text-cyan-700 text-xl font-bold">
            ${Number(p.price).toFixed(2)}
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Category: <span className="font-medium text-gray-800">{p.category}</span>
          </div>
          <div className="mt-1 text-sm text-amber-600">★ {p.rating ?? "—"}</div>
          <p className="mt-4 text-gray-700 leading-relaxed">{p.description}</p>

          
        </div>
      </section>
    </main>
  );
}
