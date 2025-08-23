'use client';

import { useEffect, useState } from 'react';
import Banner from './components/Banner';

export default function Home() {
  const [items, setItems] = useState(null); // null=loading, []=empty

  useEffect(() => {
    let on = true;
    (async () => {
      try {
        const res = await fetch('/api/products', { cache: 'no-store' });
        const data = res.ok ? await res.json() : [];
        if (on) setItems(data);
      } catch {
        if (on) setItems([]);
      }
    })();
    return () => { on = false; };
  }, []);

  return (
    <div>
      <Banner />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-4 text-xl font-semibold">Latest products</h2>

        {items === null && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-48 animate-pulse rounded-2xl bg-gray-200" />
            ))}
          </div>
        )}

        {items && items.length === 0 && <p className="text-gray-600">No products yet.</p>}

        {items && items.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.slice(0, 6).map(p => (
              <article key={p.id} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="h-44 w-full overflow-hidden">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-1 text-lg font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{p.category}</p>
                  <p className="mt-2 font-semibold">${Number(p.price).toFixed(2)}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
