import React from 'react';

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 to-white">
      {/* soft decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-16 h-80 w-80 rounded-full bg-cyan-300/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-fuchsia-300/30 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:py-24 md:grid-cols-2">
        {/* Text */}
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-cyan-900 ring-1 ring-cyan-200">
            Simple • Fast • Clean
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Your Shop, simplified.
          </h1>
          <p className="mt-4 max-w-xl text- text-gray-600">
            Quality products with clear pricing and a smooth experience.
          </p>
        </div>

        {/* Illustration block (no external deps) */}
        <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 rounded-xl bg-gray-100 p-4">
              <div className="h-4 w-1/2 rounded bg-gray-300" />
              <div className="mt-3 h-3 w-2/3 rounded bg-gray-200" />
              <div className="mt-6 h-28 rounded-lg bg-gray-200" />
            </div>
            <div className="space-y-3">
              <div className="h-20 rounded-xl bg-gray-100" />
              <div className="h-20 rounded-xl bg-gray-100" />
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 translate-y-1/2">
            <div className="mx-auto h-24 w-3/4 rounded-3xl bg-cyan-500/30 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
