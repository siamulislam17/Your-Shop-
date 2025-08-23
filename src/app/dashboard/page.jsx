// src/app/dashboard/page.jsx
import { auth } from '@/auth';            // from your NextAuth setup
import { redirect } from 'next/navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Dashboard | Your Shop',
};

export default async function DashboardPage() {
  // ✅ Server-side protection
  const session = await auth();
  if (!session) {
    redirect('/login?callbackUrl=/dashboard');
  }

  const user = session.user ?? {};

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-600">
          Signed in as{' '}
          <span className="font-medium">
            {user.name || user.email || 'user'}
          </span>
        </p>
      </header>

      {/* Action cards */}
      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/add-products"
          className="
            group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm
            transition hover:border-cyan-300 hover:shadow-md
          "
        >
          <h2 className="text-lg font-semibold text-gray-900">Add Product</h2>
          <p className="mt-2 text-sm text-gray-600">
            Create a new product and save it to MongoDB.
          </p>
          <span className="mt-4 inline-block rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white group-hover:bg-cyan-700">
            Open form
          </span>
        </Link>

        <Link
          href="/products"
          className="
            group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm
            transition hover:border-cyan-300 hover:shadow-md
          "
        >
          <h2 className="text-lg font-semibold text-gray-900">All Products</h2>
          <p className="mt-2 text-sm text-gray-600">
            View the full catalog and product details.
          </p>
          <span className="mt-4 inline-block rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white group-hover:bg-black">
            Browse
          </span>
        </Link>

        <Link
          href="/"
          className="
            group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm
            transition hover:border-cyan-300 hover:shadow-md
          "
        >
          <h2 className="text-lg font-semibold text-gray-900">Back to Home</h2>
          <p className="mt-2 text-sm text-gray-600">
            Return to the landing page.
          </p>
          <span className="mt-4 inline-block rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 group-hover:bg-gray-50">
            Go home
          </span>
        </Link>
      </section>
    </main>
  );
}
