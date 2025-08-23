import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  price: { type: Number, required: true, min: 0 },
  image: { type: String, default: '' },
  category: { type: String, default: 'General' },
  rating: { type: Number, default: 4.5, min: 0, max: 5 },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
