import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="row-start-1">
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
      </header>
      <main className="row-start-2">
        <p className="text-lg">Get started by editing <code>src/app/page.js</code>.</p>
      </main>
      <footer className="row-start-3">
        <p className="text-sm">© 2023 Next.js</p>
      </footer>
    </div>
  );
}
