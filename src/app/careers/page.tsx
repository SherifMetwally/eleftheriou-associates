import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/data/content";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold-2)] mb-3">
        Join EAC
      </p>
      <h1 className="font-serif text-5xl text-[var(--navy)] mb-6">Careers</h1>
      <p className="text-[var(--muted)] leading-relaxed mb-8">
        When positions are open, they will be listed here. Send a CV to the
        address below with the role in the subject line. GE will supply the live
        vacancy list.
      </p>
      <div className="bg-white border border-[var(--line)] p-6 mb-8">
        <p className="text-sm text-[var(--navy)] mb-2">No advertised posts at present.</p>
        <p className="text-sm text-[var(--muted)]">
          Speculative applications are welcome.
        </p>
      </div>
      <a href={`mailto:${CONTACT.email}?subject=CV%20application`} className="btn-gold">
        Email your CV
      </a>
      <p className="text-xs text-[var(--muted)] mt-6">
        Related:{" "}
        <Link href="/contact" className="underline">
          Contact
        </Link>
      </p>
    </article>
  );
}
