// src/app/products/page.jsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaStar, FaRegStar } from 'react-icons/fa';

function Stars({ value }) {
  const v = Math.max(0, Math.min(5, Number(value || 0)));
  const full = Math.floor(v);
  const empty = 5 - full;
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: full }).map((_, i) => <FaStar key={`f-${i}`} />)}
      {Array.from({ length: empty }).map((_, i) => <FaRegStar key={`e-${i}`} />)}
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="h-40 w-full animate-pulse rounded-lg bg-gray-200" />
      <div className="mt-3 h-5 w-2/3 animate-pulse rounded bg-gray-200" />
      <div className="mt-2 h-4 w-1/3 animate-pulse rounded bg-gray-200" />
      <div className="mt-3 h-9 w-full animate-pulse rounded-lg bg-gray-200" />
    </div>
  );
}

export default function ProductsPage() {
  const [items, setItems] = useState(null);   // null = loading
  const [err, setErr] = useState('');

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch('/api/products', { cache: 'no-store' });
        if (!res.ok) throw new Error(await res.text());
        const data = await res.json();
        if (alive) setItems(data);
      } catch {
        if (alive) {
          setErr('Failed to load products');
          setItems([]); // render gracefully
        }
      }
    })();
    return () => { alive = false; };
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6 flex items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">All Products</h1>
          <p className="mt-1 text-sm text-gray-600">
            {items?.length ?? 0} item{(items?.length ?? 0) === 1 ? '' : 's'}
          </p>
        </div>
      </div>

      {err && (
        <p className="mb-6 rounded-lg bg-red-50 p-3 text-sm text-red-700">
          {err}
        </p>
      )}

      {items === null ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)}
        </div>
      ) : items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center">
          <p className="text-gray-600">No products yet.</p>
          <p className="text-sm text-gray-500">Add your first product from the dashboard.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-44 w-full overflow-hidden">
                {/* category badge */}
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

              <div className="p-5">
                <h2 className="line-clamp-1 text-lg font-semibold text-gray-900">
                  {p.name}
                </h2>

                <div className="mt-1 flex items-center justify-between">
                  <p className="text-sm text-gray-500">{p.category || 'General'}</p>
                  {p.rating != null && <Stars value={p.rating} />}
                </div>

                <p className="mt-3 text-base font-semibold text-gray-900">
                  ${Number(p.price ?? 0).toFixed(2)}
                </p>

                <Link
                  href={`/products/${p.id}`}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
                >
                  View details
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
