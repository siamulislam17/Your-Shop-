
import Product from '@/app/models/Product';
import { connectToDB } from '@/lib/mongodb';


export const runtime = 'nodejs'; // ensure Node runtime (not edge)

export async function GET() {
  await connectToDB();
  const items = await Product.find().sort({ createdAt: -1 }).lean();
  const data = items.map((p) => ({
    id: p._id.toString(),
    name: p.name,
    price: p.price,
    description: p.description,
    image: p.image,
    category: p.category,
    rating: p.rating,
    createdAt: p.createdAt,
  }));
  return Response.json(data);
}

export async function POST(req) {
  await connectToDB();
  const body = await req.json();
  const { name, price, description, image, category, rating } = body || {};

  if (!name || price === undefined || price === null || isNaN(Number(price))) {
    return new Response('Missing or invalid name/price', { status: 400 });
  }

  const created = await Product.create({
    name,
    price: Number(price),
    description: description ?? '',
    image:
      image ??
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
    category: category ?? 'General',
    rating: rating != null ? Number(rating) : undefined,
  });

  return Response.json(created.toJSON(), { status: 201 });
}
