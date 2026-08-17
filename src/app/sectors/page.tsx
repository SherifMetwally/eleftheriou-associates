import type { Metadata } from "next";
import { SECTORS } from "@/data/content";

export const metadata: Metadata = { title: "Sectors" };

export default function SectorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold-2)] mb-3">
        Industries
      </p>
      <h1 className="font-serif text-5xl text-[var(--navy)] mb-4">
        Sectors we serve
      </h1>
      <p className="text-[var(--muted)] max-w-2xl mb-12">
        EAC works across industries. Foreign market entry and regional export
        support are not limited to a single sector.
      </p>
      <ul data-stagger className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {SECTORS.map((s) => (
          <li
            key={s}
            className="bg-white border border-[var(--line)] px-4 py-3 text-[var(--navy)] transition-colors hover:border-[var(--gold)]"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
