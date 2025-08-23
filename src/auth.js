import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

// Simple demo user (replace with real DB lookup later if you want)
const demoUser = { id: "1", name: "Demo User", email: "demo@demo.com", password: "demo123" };

export const {
  handlers,  // { GET, POST }
  auth,      // server: get session
  signIn,    // server signIn if needed
  signOut,   // server signOut if needed
} = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(creds) {
        if (creds?.email === demoUser.email && creds?.password === demoUser.password) {
          return { id: demoUser.id, name: demoUser.name, email: demoUser.email };
        }
        return null; // invalid
      },
    }),
  ],
  pages: { signIn: "/login" },   // our custom login page
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
});
