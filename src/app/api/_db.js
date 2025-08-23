import mongoose from 'mongoose';

let cached = global._mongoose;
if (!cached) cached = global._mongoose = { conn: null, promise: null };

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri || !(uri.startsWith('mongodb://') || uri.startsWith('mongodb+srv://'))) {
    throw new Error('MONGODB_URI must start with mongodb:// or mongodb+srv://');
  }
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    console.log('Connecting to MongoDB...');
    cached.promise = mongoose.connect(uri, {
      dbName: process.env.MONGODB_DB || undefined,
      bufferCommands: false,
    }).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
