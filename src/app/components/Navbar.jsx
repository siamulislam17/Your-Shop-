'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes, FaStore, FaUser } from 'react-icons/fa';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    pathname === href || (href !== '/' && pathname?.startsWith(href));

  return (
    <nav className="sticky top-0 z-50 border-b border-cyan-700/20 bg-cyan-600 text-white backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <FaStore className="text-2xl" />
            <span>Your Shop</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={`
                      group relative rounded-lg px-3 py-2 text-sm font-medium transition
                      ${active ? 'text-white' : 'text-white/90 hover:text-white'}
                      hover:bg-white/10
                    `}
                  >
                    {label}
                    {/* animated underline */}
                    <span
                      className={`
                        pointer-events-none absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full
                        bg-white transform transition-transform duration-200
                        ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                        origin-center
                      `}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right (desktop) */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm ring-1 ring-inset ring-white/30 transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <FaUser /> Login
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'} border-t border-cyan-700/20 bg-cyan-600/95 backdrop-blur`}>
        <ul className="space-y-1 px-4 py-3">
          {LINKS.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={`
                    block rounded-md px-3 py-2 text-sm font-medium transition
                    ${active ? 'bg-white/15 text-white' : 'text-white/90 hover:bg-white/10 hover:text-white'}
                  `}
                >
                  {label}
                </Link>
              </li>
            );
          })}

          <li className="pt-2">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-white px-3 py-2 text-center text-sm font-semibold text-cyan-700 shadow-sm transition hover:bg-white/90"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
