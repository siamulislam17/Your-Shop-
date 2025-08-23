import mongoose from 'mongoose';

console.log('Loaded Product model file'); // should print once on first request

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, default: 'General' },
    image: { type: String, default: '' },
    description: { type: String, default: '' },
    rating: { type: Number, default: 4.5, min: 0, max: 5 },
  },
  { timestamps: true }
);

ProductSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
  },
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
