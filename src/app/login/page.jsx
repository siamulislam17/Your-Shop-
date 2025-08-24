// src/app/login/page.jsx
'use client';

import { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const { status } = useSession(); // optional: auto-redirect if already logged in
  const searchParams = useSearchParams();

  // Get callbackUrl from query (?callbackUrl=/dashboard). Default to "/"
  const rawCb = searchParams.get("callbackUrl");
  const callbackUrl = useMemo(() => {
    if (rawCb && rawCb.startsWith("/")) return rawCb; // prevent external redirects
    return "/";
  }, [rawCb]);

  // If user is already authenticated and hits /login, send them along
  useEffect(() => {
    if (status === "authenticated") {
      router.replace(callbackUrl);
    }
  }, [status, callbackUrl, router]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // demo
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      // Credentials sign-in without auto-redirect; we navigate manually
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl, // not used by NextAuth when redirect:false, but fine to include
      });

      if (res?.error) {
        setErr("Login failed. Please check your credentials.");
      } else {
        router.replace(callbackUrl); // <-- go to desired route
      }
    } finally {
      setLoading(false);
    }
  }



  return (
    <main className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-2xl font-semibold">Log in</h1>

      <form onSubmit={onSubmit} className="mt-6 space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        {err && <p className="rounded-lg bg-red-50 p-2 text-sm text-red-700">{err}</p>}

        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <button
          disabled={loading}
          className="w-full rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white hover:bg-cyan-700 disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>

      </form>
    </main>
  );
}
