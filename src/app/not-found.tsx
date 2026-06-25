import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="max-w-prose mx-auto px-6 py-24 md:py-32 text-center">
      <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
        Page not found
      </h1>
      <p className="font-sans text-[17px] md:text-[18px] leading-relaxed text-muted mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block font-sans font-semibold text-base bg-accent text-white px-8 py-4 rounded-sm hover:bg-accent-light transition-colors"
      >
        Return home
      </Link>
    </div>
  );
}
