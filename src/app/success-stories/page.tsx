import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Success Stories" };

export default function SuccessStoriesPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold-2)] mb-3">
        Addendum D
      </p>
      <h1 className="font-serif text-5xl text-[var(--navy)] mb-6">
        Success stories &amp; case studies
      </h1>
      <p className="text-[var(--muted)] leading-relaxed mb-8">
        Great achievements on difficult projects, in descending date order. Full
        text and client permissions will be supplied by EAC from the old site
        plus selected new cases. Until that pack arrives, this section is
        structured and ready.
      </p>
      <p className="text-sm text-[var(--navy)] mb-10">
        Filter by industry will be enabled once stories are entered in the CMS.
      </p>
      <Link href="/contact" className="btn-gold">
        Discuss a comparable mandate
      </Link>
    </article>
  );
}
