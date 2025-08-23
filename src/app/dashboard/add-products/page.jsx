import AddProductForm from "@/app/components/AddProductForm";



export const metadata = { title: 'Add Product | Dashboard' };

export default function AddProductPage() {
  return (
    <section className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-semibold">Add Product</h1>
      <p className="mt-1 text-sm text-gray-600">
        Fill in the details and save to MongoDB.
      </p>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <AddProductForm />
      </div>
    </section>
  );
}
