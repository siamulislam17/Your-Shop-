import mongoose from 'mongoose';

let uri = process.env.MONGODB_URI || '';
// strip accidental quotes/semicolon if present
uri = uri.trim().replace(/^['"]/, '').replace(/['"];?$/, '');

console.log('Connecting to:', uri); // you already saw this—keep it

if (!uri.startsWith('mongodb://') && !uri.startsWith('mongodb+srv://')) {
  throw new Error('MONGODB_URI must start with mongodb:// or mongodb+srv://');
}

let cached = global._mongoose;
if (!cached) cached = (global._mongoose = { conn: null, promise: null });

export async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri, {
        dbName: process.env.MONGODB_DB || undefined,
        bufferCommands: false,
      })
      .then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
