import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-black min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-xs tracking-[0.25em] uppercase text-white/30 mb-6">
        404
      </p>
      <h1 className="text-5xl font-light tracking-tight text-white mb-10">
        Page not found
      </h1>
      <Link
        href="/"
        className="text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-300 border border-white/20 hover:border-white/60 px-6 py-3"
      >
        Back to Work
      </Link>
    </main>
  );
}
