// app/about/page.jsx
import { FaBolt, FaShieldAlt, FaSmile, FaLeaf, FaBoxOpen, FaTruck } from "react-icons/fa";

export const metadata = {
  title: "About | My Shop",
  description: "Who we are and how we work.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-cyan-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="text-sm/6 opacity-90">Get to know us</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">About My Shop</h1>
          <p className="mt-3 max-w-2xl text-white/90">
            We keep shopping simple—clear pricing, quick shipping, and helpful support.
          </p>
        </div>
      </section>

      {/* Intro + Mission */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Who we are</h2>
            <p className="mt-3 text-gray-600">
              We’re a small team focused on curating useful, reliable products. Every item
              we list is reviewed for quality and value—so you don’t have to spend hours comparing.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-6 text-gray-600">
              <li>No gimmicks—just clear, honest pricing</li>
              <li>Fast dispatch and straightforward returns</li>
              <li>Friendly support that actually helps</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Our mission</h2>
            <p className="mt-3 text-gray-600">
              Make online shopping feel effortless. From browsing to checkout and delivery,
              we remove friction and keep you informed the whole way.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <FaBolt className="mt-1 text-cyan-600" />
                <div>
                  <p className="font-medium text-gray-900">Fast experience</p>
                  <p className="text-sm text-gray-600">Snappy pages, quick checkout.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <FaShieldAlt className="mt-1 text-cyan-600" />
                <div>
                  <p className="font-medium text-gray-900">Secure & trusted</p>
                  <p className="text-sm text-gray-600">Payments protected end-to-end.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <FaSmile className="mt-1 text-cyan-600" />
                <div>
                  <p className="font-medium text-gray-900">Friendly support</p>
                  <p className="text-sm text-gray-600">Real people, real solutions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <FaLeaf className="mt-1 text-cyan-600" />
                <div>
                  <p className="font-medium text-gray-900">Thoughtful picks</p>
                  <p className="text-sm text-gray-600">Quality over quantity, always.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="mx-auto max-w-6xl px-4 pb-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Products curated", value: "120+", icon: FaBoxOpen },
            { label: "Avg. shipping time", value: "48h", icon: FaTruck },
            { label: "Customer rating", value: "4.8/5", icon: FaSmile },
            { label: "Orders delivered", value: "5k+", icon: FaBolt },
          ].map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                <Icon />
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">{value}</p>
                <p className="text-sm text-gray-600">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team preview (simple placeholders) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold text-gray-900">Meet the team</h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          Small, dedicated, and focused on making your experience smooth.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Aisha Rahman", role: "Operations" },
            { name: "Zahid Khan", role: "Customer Success" },
            { name: "Maya Sen", role: "Product Curation" },
          ].map((m) => (
            <div key={m.name} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-content-center rounded-full bg-gradient-to-br from-cyan-200 to-cyan-400 text-white">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{m.name}</p>
                  <p className="text-sm text-gray-600">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900">Have questions?</h3>
          <p className="mt-1 text-gray-600">
            We’re happy to help. Reach out and we’ll get back quickly.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block rounded-xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-cyan-500/20 transition hover:bg-cyan-700"
          >
            Contact us
          </a>
        </div>
      </section>
    </main>
  );
}
