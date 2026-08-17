import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/data/content";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold-2)] mb-3">
        What we offer
      </p>
      <h1 className="font-serif text-5xl text-[var(--navy)] mb-4">Services</h1>
      <p className="text-[var(--muted)] max-w-2xl mb-12 leading-relaxed">
        A one-stop shop for foreign companies entering Egypt and our territory,
        and for regional companies reaching world markets. Each brief below
        follows Addendum B of the EAC brief. Dedicated microsites can be
        expanded in Stage 2.
      </p>
      <div data-stagger className="grid md:grid-cols-2 gap-8">
        {SERVICES.map((s, i) => (
          <article
            key={s.slug}
            id={s.slug}
            className="hover-lift bg-white scroll-mt-24"
          >
            <div className="zoom-img relative h-52 overflow-hidden">
              <Image
                src={s.image}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-7 border border-[var(--line)] border-t-0">
              <p className="text-xs text-[var(--gold-2)] mb-2">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-serif text-2xl text-[var(--navy)] mb-3">
                {s.title}
              </h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
                {s.summary}
              </p>
              <Link
                href="/contact"
                className="link-arrow text-[var(--gold-2)] text-xs uppercase tracking-[0.16em] font-semibold"
              >
                Enquire →
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12">
        <Link href="/contact" className="btn-gold">
          Discuss this service
        </Link>
      </div>
    </div>
  );
}
