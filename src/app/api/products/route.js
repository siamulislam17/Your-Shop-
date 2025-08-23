export const runtime = 'nodejs';

import { connectDB } from '../_db';
import Product from '../_product.model';

export async function GET() {
  await connectDB();
  console.log('GET /api/products using model type:', typeof Product); // should be "function"

  const items = await Product.find().sort({ createdAt: -1 }).lean();
  const data = items.map((p) => ({
    id: p._id.toString(),
    name: p.name,
    price: p.price,
    category: p.category,
    image: p.image,
    description: p.description,
    rating: p.rating,
    createdAt: p.createdAt,
  }));
  return Response.json(data);
}




export async function POST(req) {
  try {
    await connectDB();
    console.log('POST /api/products model type:', typeof Product); // should be "function"

    const body = await req.json();
    const { name, price, category, image, description, rating } = body || {};
    if (!name || price === undefined || price === null || isNaN(Number(price))) {
      return new Response('Missing or invalid name/price', { status: 400 });
    }

    const created = await Product.create({
      name,
      price: Number(price),
      category: category || 'General',
      image: image || '',
      description: description || '',
      rating: rating != null ? Number(rating) : undefined,
    });

    return Response.json(created.toJSON(), { status: 201 });
  } catch (err) {
    console.error('POST /api/products error:', err);
    return new Response(`Server error: ${err.message}`, { status: 500 });
  }
}
