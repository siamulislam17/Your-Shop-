import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(creds) {
        // ⚠️ DEV-ONLY: accept ANY email (no real password check)
        // Return a user object to sign in; return null to reject.
        if (!creds?.email) return null;
        return {
          id: creds.email,                           // any stable id
          name: creds.email.split("@")[0] || "User", // display name
          email: creds.email,
        };
      },
    }),
  ],
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
});

export { handler as GET, handler as POST };
