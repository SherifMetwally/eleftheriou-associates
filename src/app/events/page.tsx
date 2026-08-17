import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Events & Activities" };

export default function EventsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold-2)] mb-3">
        Addendum D
      </p>
      <h1 className="font-serif text-5xl text-[var(--navy)] mb-6">
        Events &amp; activities
      </h1>
      <p className="text-[var(--muted)] leading-relaxed mb-8">
        Events EAC has participated in — pictures, articles and, where
        available, video — in descending chronological order. GE supplies the
        archive; the CMS will let EAC add new events without the designer.
      </p>
      <Link href="/news" className="btn-gold">
        Related insights
      </Link>
    </article>
  );
}
