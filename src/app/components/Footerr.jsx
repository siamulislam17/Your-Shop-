// app/components/Footer.jsx
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16  border-t border-cyan-700/20 bg-cyan-600 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* Top: 4 columns */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-white/20">
                YS
              </span>
              Your Shop
            </div>
            <p className="mt-3 text-sm text-white/90">
              Quality products at fair prices. Fast shipping, easy returns.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="rounded-full bg-white/15 p-2 transition hover:bg-white/25"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter / X"
                className="rounded-full bg-white/15 p-2 transition hover:bg-white/25"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="rounded-full bg-white/15 p-2 transition hover:bg-white/25"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com"
                aria-label="GitHub"
                className="rounded-full bg-white/15 p-2 transition hover:bg-white/25"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide">Support</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:underline">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter (visual only) */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide">Stay in the loop</h4>
            <p className="mt-3 text-sm text-white/90">
              Get product updates and offers. No spam.
            </p>
            <div className="mt-3 flex overflow-hidden rounded-xl bg-white/10 p-1">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-lg bg-white/10 px-3 py-2 text-sm placeholder-white/70 outline-none"
                // no handlers here to keep this a Server Component
              />
              <button
                type="button"
                className="ml-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-cyan-700 transition hover:bg-white/90"
                title="Demo only"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-2 text-xs text-white/80">Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row">
          <p className="text-xs text-white/90">
            © {new Date().getFullYear()} Your Shop. All rights reserved.
          </p>
          <div className="space-x-4 text-xs">
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
