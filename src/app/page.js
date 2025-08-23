'use client';

import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Link from 'next/link';
import { FaRegStar, FaStar } from 'react-icons/fa';

export default function Home() {
  const [items, setItems] = useState(null); // null = loading

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/products', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to load products');
        setItems(await res.json());
      } catch {
        setItems([]); // show empty gracefully
      }
    })();
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Banner></Banner>


     {/* Latest products */}
        <h1 className="mb-4 text-2xl font-semibold">Latest Products</h1>

        {items === null ? (
          // Loading skeletons
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="h-40 w-full animate-pulse rounded-lg bg-gray-200" />
                <div className="mt-3 h-5 w-2/3 animate-pulse rounded bg-gray-200" />
                <div className="mt-2 h-4 w-1/3 animate-pulse rounded bg-gray-200" />
              </li>
            ))}
          </ul>
        ) : items.length === 0 ? (
          <p>No products yet.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <li
                key={p.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <Link href={`/products/${p.id}`} className="block">
                  {/* Image + category badge */}
                  <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gray-100">
                    {p.category && (
                      <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-800 shadow">
                        {p.category}
                      </span>
                    )}
                    <img
                      src={p.image || '/placeholder.png'}
                      alt={p.name}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Text */}
                  <div className="p-4">
                    <h2 className="line-clamp-1 text-lg font-semibold text-gray-900">{p.name}</h2>

                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-sm text-gray-500">{p.category || 'General'}</p>
                      {p.rating != null && (
                        <div className="flex items-center gap-0.5 text-amber-500">
                          {Array.from({ length: Math.floor(Math.max(0, Math.min(5, Number(p.rating)))) }).map((_, i) => (
                            <FaStar key={`f-${i}`} />
                          ))}
                          {Array.from({ length: 5 - Math.floor(Math.max(0, Math.min(5, Number(p.rating)))) }).map((_, i) => (
                            <FaRegStar key={`e-${i}`} />
                          ))}
                        </div>
                      )}
                    </div>

                    <p className="mt-3 text-base font-semibold text-gray-900">
                      ${Number(p.price ?? 0).toFixed(2)}
                    </p>

                    <span className="mt-3 inline-block rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-900 transition group-hover:bg-gray-50">
                      View details
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}

    </main>
  );
}
