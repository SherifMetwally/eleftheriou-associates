import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Investment Opportunities" };

export default function InvestmentPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold-2)] mb-3">
        For entrepreneurs
      </p>
      <h1 className="font-serif text-5xl text-[var(--navy)] mb-6">
        Investment opportunities
      </h1>
      <ul className="space-y-6 text-[var(--muted)] leading-relaxed mb-10">
        <li>
          <strong className="text-[var(--navy)]">Investment coach.</strong> For
          entrepreneurs developing an SME or opening a new venture, tailored to
          capital, capability and aspiration.
        </li>
        <li>
          <strong className="text-[var(--navy)]">Real estate offerings.</strong>{" "}
          Listings to be added by EAC in the CMS when available.
        </li>
        <li>
          <strong className="text-[var(--navy)]">Residency in the EU.</strong>{" "}
          Services EAC can offer toward acquisition eligibility — wording to be
          supplied by GE.
        </li>
      </ul>
      <Link href="/contact" className="btn-gold">
        Request a discussion
      </Link>
    </article>
  );
}
