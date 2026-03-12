"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-black min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-xs tracking-[0.25em] uppercase text-white/30 mb-6">
        Something went wrong
      </p>
      <h1 className="text-5xl font-light tracking-tight text-white mb-10">
        Unexpected Error
      </h1>
      <button
        onClick={reset}
        className="text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-300 border border-white/20 hover:border-white/60 px-6 py-3"
      >
        Try again
      </button>
    </main>
  );
}
