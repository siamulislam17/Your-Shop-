'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // ignored in DEV demo
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,       // we'll navigate manually
      });
      if (res?.error) {
        setErr("Login failed");
      } else {
        router.push("/");      // <-- go to HOME now
      }
    } finally {
      setLoading(false);
    }
  }

  async function onGoogle() {
    setLoading(true);
    try {
      // Let NextAuth handle the redirect; send user to HOME after Google
      await signIn("google", { callbackUrl: "/" });
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
          <label className="text-sm font-medium text-gray-700">Password </label>
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
