// app/dashboard/layout.jsx  (your current file)
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaPlus, FaBoxOpen, FaBars, FaTimes } from 'react-icons/fa';

const NAV = [
  { label: 'Dashboard', href: '/dashboard', icon: FaHome },

  { label: 'Add Product', href: '/dashboard/add-products', icon: FaPlus },    
  { label: 'Return Home', href: '/', icon: FaHome },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const LinkItem = ({ href, label, Icon }) => {
    const active = pathname === href || (href !== '/' && pathname?.startsWith(href));
    return (
      <Link
        href={href}
        onClick={() => setOpen(false)}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition
        ${active ? 'bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100' : 'text-gray-700 hover:bg-gray-100'}`}
        aria-current={active ? 'page' : undefined}
      >
        <Icon className={active ? 'text-cyan-700' : 'text-gray-500'} />
        {label}
      </Link>
    );
  };

  return (
    <div className="min-h-screen mt-20 bg-gray-50">
      {/* fixed sidebar (md+) */}
      <aside className="fixed inset-y-0 mt-17 left-0 max-h-screen z-30 hidden w-64 border-r border-gray-200 bg-white p-3 shadow-sm md:block">
        <div className="sticky top-3">
          <nav className="space-y-1">
            {NAV.map((i) => (
              <LinkItem key={i.href} {...i} Icon={i.icon} />
            ))}
          </nav>
        </div>
      </aside>

      {/* content padded so it never hides under the sidebar */}
      <div className="md:pl-64 ">
        {/* mobile menu button */}
        <div className="p-4 md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm"
          >
            <FaBars /> Menu
          </button>
        </div>

        <main className="mx-auto max-w-7xl bg-white px-4 pb-8">{children}</main>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-72 rounded-r-2xl bg-white p-4 shadow-xl">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>
            <nav className="space-y-1">
              {NAV.map((i) => (
                <LinkItem key={i.href} {...i} Icon={i.icon} />
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
