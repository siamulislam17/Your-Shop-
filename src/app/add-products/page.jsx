'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Page() {
  const [submitting, setSubmitting] = useState(false);
  const [v, setV] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    description: '',
    rating: '',
  });

  async function onSubmit(e) {
    const BASE = process.env.NEXT_PUBLIC_BASE_URL || '';
    e.preventDefault();
    if (!v.name || !v.price) return toast.error('Name & Price are required');
    setSubmitting(true);
    try {
      const res = await fetch(`${BASE}/api/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: v.name,
          price: Number(v.price),
          category: v.category || undefined,
          image: v.image || undefined,
          description: v.description || undefined,
          rating: v.rating ? Number(v.rating) : undefined,
        }),
      });
      const text = await res.text();
      if (!res.ok) throw new Error(text || 'Request failed');

      toast.success('Product added');
      setV({ name: '', price: '', category: '', image: '', description: '', rating: '' });
    } catch (err) {
      toast.error(err.message || 'Failed to add product');
    } finally {
      setSubmitting(false);
    }
  }

  const input =
    'mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 ' +
    'focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500';

  return (
    <main className="min-h-screen bg-white">
      <Toaster position="top-right" />
      {/* Header */}
      <section className="bg-cyan-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-3xl font-bold">Add a new product</h1>
          <p className="mt-1 text-white/90">
            Fill in the details and save. Image is optional.
          </p>
        </div>
      </section>

      {/* Form Card */}
      <section className="mx-auto max-w-3xl px-4 py-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          {/* Top: preview (if image) */}
          <div className="mb-6 grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                className={input}
                placeholder="Minimal Backpack"
                value={v.name}
                onChange={(e) => setV({ ...v, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Price</label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  className={`${input} pl-7`}
                  placeholder="49.99"
                  type="number"
                  step="0.01"
                  min="0"
                  value={v.price}
                  onChange={(e) => setV({ ...v, price: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700">Category (optional)</label>
              <input
                className={input}
                placeholder="e.g. Electronics"
                value={v.category}
                onChange={(e) => setV({ ...v, category: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Rating (0–5, optional)</label>
              <input
                className={input}
                placeholder="4.5"
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={v.rating}
                onChange={(e) => setV({ ...v, rating: e.target.value })}
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm font-medium text-gray-700">Image URL (optional)</label>
            <input
              className={input}
              placeholder="https://example.com/image.jpg"
              value={v.image}
              onChange={(e) => setV({ ...v, image: e.target.value })}
            />
            {/* Live preview */}
            {v.image ? (
              <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200">
                <img
                  src={v.image}
                  alt="Preview"
                  className="h-56 w-full object-cover"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
            ) : (
              <div className="mt-4 grid h-56 place-content-center rounded-2xl border border-dashed border-gray-300 text-sm text-gray-500">
                Image preview will appear here
              </div>
            )}
          </div>

          <div className="mt-6">
            <label className="text-sm font-medium text-gray-700">Description (optional)</label>
            <textarea
              className={input}
              rows={4}
              placeholder="Short details about the product..."
              value={v.description}
              onChange={(e) => setV({ ...v, description: e.target.value })}
            />
          </div>

          <div className="mt-8">
            <button
              onClick={onSubmit}
              disabled={submitting}
              className="w-full rounded-2xl bg-cyan-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-cyan-700 disabled:opacity-60"
            >
              {submitting ? 'Saving…' : 'Add product'}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
