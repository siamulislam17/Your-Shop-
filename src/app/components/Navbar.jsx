// src/app/components/Nav/Navbar.jsx
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; // <-- add useRouter
import { useState } from 'react';
import { FaBars, FaTimes, FaStore, FaUser } from 'react-icons/fa';
import { useSession, signOut } from 'next-auth/react';
import toast from 'react-hot-toast';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/products', label: 'Products' },
];

export default function Navbar() {
  const router = useRouter();                         // <-- add
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  const isActive = (href) =>
    pathname === href || (href !== '/' && pathname?.startsWith(href));

  // one place to handle logout
  async function handleLogout() {
    try {
      await signOut({ redirect: false });             // <-- no auto-redirect
      toast.success('Logged out successfully');       // <-- toast will render
      router.push('/');                               // <-- then navigate
    } catch {
      toast.error('Failed to logout');
    }
  }

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

          {/* Right (desktop): Login/Logout */}
          <div className="hidden items-center gap-3 md:flex">
            {status === 'loading' ? (
              <div className="h-9 w-24 animate-pulse rounded-xl bg-white/20" />
            ) : session ? (
              <button
                onClick={handleLogout}                // <-- use handler
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/30 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm ring-1 ring-inset ring-white/30 transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <FaUser /> Login
              </Link>
            )}
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
            {status === 'loading' ? (
              <div className="h-9 w-full animate-pulse rounded-lg bg-white/20" />
            ) : session ? (
              <button
                onClick={async () => {
                  setOpen(false);
                  await signOut({ redirect: false });
                  toast.success('Logged out successfully');
                  router.push('/');
                }}
                className="block w-full rounded-lg bg-white px-3 py-2 text-center text-sm font-semibold text-cyan-700 shadow-sm transition hover:bg-white/90"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-white px-3 py-2 text-center text-sm font-semibold text-cyan-700 shadow-sm transition hover:bg-white/90"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
