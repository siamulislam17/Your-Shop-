import AddProductForm from "./ui/AddProductForm";


export const metadata = { title: 'Add Product | My Shop' };

export default function AddProductPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-semibold">Add a new product</h1>
      <AddProductForm />
    </div>
  );
}
