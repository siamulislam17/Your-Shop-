export async function GET() {
  return Response.json({ ok: true, env: process.env.VERCEL ? 'vercel' : 'local' });
}
