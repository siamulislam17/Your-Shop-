'use client';
import { Toaster } from 'react-hot-toast';

export default function GlobalToaster() {
  return <Toaster position="top-right" toastOptions={{ duration: 2500 }} />;
}
