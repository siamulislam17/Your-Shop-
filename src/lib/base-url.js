// src/lib/base-url.js
export function getBaseUrl() {
  // Browser: relative URL works
  if (typeof window !== 'undefined') return '';
  // Vercel server runtime
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  // Optional: custom base for other hosts
  if (process.env.NEXT_PUBLIC_BASE_URL) return process.env.NEXT_PUBLIC_BASE_URL;
  // Local dev
  return 'http://localhost:3000';
}
