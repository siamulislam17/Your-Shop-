export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="animate-pulse grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-4 h-40 w-full rounded-xl bg-gray-200" />
            <div className="h-4 w-2/3 rounded bg-gray-200" />
            <div className="mt-2 h-3 w-full rounded bg-gray-200" />
            <div className="mt-2 h-3 w-1/2 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </main>
  );
}
