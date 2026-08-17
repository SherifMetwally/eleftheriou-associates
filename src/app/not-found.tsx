import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold-2)] mb-3">
        404
      </p>
      <h1 className="font-serif text-4xl text-[var(--navy)] mb-4">
        Page not found
      </h1>
      <p className="text-[var(--muted)] mb-8">
        The page you requested is not part of this site.
      </p>
      <Link href="/" className="btn-gold">
        Back to home
      </Link>
    </div>
  );
}
