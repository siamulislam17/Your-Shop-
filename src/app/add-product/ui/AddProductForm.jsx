'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function AddProductForm() {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    description: '',
    rating: '',
  });

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          price: Number(values.price),
          category: values.category || undefined,
          image: values.image || undefined,
          description: values.description || undefined,
          rating: values.rating ? Number(values.rating) : undefined,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      toast.success('Product added');
      setValues({ name: '', price: '', category: '', image: '', description: '', rating: '' });
    } catch {
      toast.error('Failed to add product');
    } finally {
      setLoading(false);
    }
  }

  const inputCls =
    'mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 ' +
    'focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500';

  return (
    <>
      <Toaster position="top-right" />
      <form
        onSubmit={onSubmit}
        className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        {/* Name */}
        <div>
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input
            className={inputCls}
            placeholder="Product name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            required
          />
        </div>

        {/* Two-cols: Price / Category */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-gray-700">Price</label>
            <input
              className={inputCls}
              placeholder="0.00"
              type="number"
              step="0.01"
              value={values.price}
              onChange={(e) => setValues({ ...values, price: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Category (optional)</label>
            <input
              className={inputCls}
              placeholder="e.g. Electronics"
              value={values.category}
              onChange={(e) => setValues({ ...values, category: e.target.value })}
            />
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="text-sm font-medium text-gray-700">Image URL (optional)</label>
          <input
            className={inputCls}
            placeholder="https://..."
            value={values.image}
            onChange={(e) => setValues({ ...values, image: e.target.value })}
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium text-gray-700">Description (optional)</label>
          <textarea
            className={inputCls}
            rows={4}
            placeholder="A short description of the product..."
            value={values.description}
            onChange={(e) => setValues({ ...values, description: e.target.value })}
          />
        </div>

        {/* Rating */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-gray-700">Rating (0–5, optional)</label>
            <input
              className={inputCls}
              placeholder="4.5"
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={values.rating}
              onChange={(e) => setValues({ ...values, rating: e.target.value })}
            />
          </div>
        </div>

        <div className='mt-6'>
            <button
                disabled={loading}
                className="w-full rounded-lg  bg-cyan-600 px-4 py-2 font-semibold text-white hover:bg-cyan-700 disabled:opacity-60"
                >
                {loading ? 'Saving...' : 'Add product'}
            </button>
        </div>
      </form>
    </>
  );
}
