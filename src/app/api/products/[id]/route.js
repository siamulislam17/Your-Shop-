export const runtime = 'nodejs';

import { connectDB } from '../../_db';
import Product from '../../_product.model';
import mongoose from 'mongoose';

export async function GET(_req, { params }) {
  await connectDB();

  const { id } = params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new Response('Invalid id', { status: 400 });
    }

  const p = await Product.findById(id).lean();
  if (!p) return new Response('Not found', { status: 404 });

  const data = {
    id: p._id.toString(),
    name: p.name,
    price: p.price,
    description: p.description,
    image: p.image,
    category: p.category,
    rating: p.rating,
    createdAt: p.createdAt,
  };
  return Response.json(data);
}
