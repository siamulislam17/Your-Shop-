'use client';

import { use, useEffect, useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

export default function ProductDetails({ params }) {
  // ✅ unwrap the promise
  const { id } = use(params);

  const [p, setP] = useState(null);
  const [err, setErr] = useState('');

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch(`/api/products/${id}`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Not found');
        const data = await res.json();
        if (alive) setP(data);
      } catch {
        if (alive) setErr('Failed to load product');
      }
    })();
    return () => { alive = false; };
  }, [id]);

  if (err) return <main className="p-6">{err}</main>;
  if (!p) return <main className="p-6">Loading…</main>;

  const price = Number(p?.price ?? 0).toFixed(2);
  const rating = Math.max(0, Math.min(5, Number(p?.rating ?? 0)));

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <img
        src={p.image || '/placeholder.png'}
        alt={p.name}
        className="h-64 w-full object-cover rounded-xl"
        loading="lazy"
        onError={(e) => { e.currentTarget.src = '/placeholder.png'; }}
      />
      <h1 className="mt-4 text-2xl font-semibold">{p.name}</h1>

      <div className="mt-1 flex items-center gap-1 text-amber-500">
        {Array.from({ length: Math.floor(rating) }).map((_, i) => <FaStar key={`f-${i}`} />)}
        {Array.from({ length: 5 - Math.floor(rating) }).map((_, i) => <FaRegStar key={`e-${i}`} />)}
        <span className="ml-2 text-sm text-gray-600">{rating ? rating.toFixed(1) : 'No rating'}</span>
      </div>

      <p className="mt-2 text-xl font-bold text-gray-900">${price}</p>
      <p className="mt-4 text-gray-700">{p.description || 'No description provided.'}</p>
    </main>
  );
}
