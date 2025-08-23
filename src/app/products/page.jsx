export const metadata = { title: "Products | My Shop" };

async function getProducts() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";
  const res = await fetch(`${base}/api/products`, { cache: "no-store" });
  return res.json();
}

export default async function ProductsPage() {
  const items = await getProducts();
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(p => (
          <article key={p.id} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <img src={p.image || "https://via.placeholder.com/600x400"} alt={p.name} className="h-44 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-gray-600 line-clamp-2">{p.description}</p>
              <div className="mt-3 font-semibold text-cyan-700">${Number(p.price).toFixed(2)}</div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
