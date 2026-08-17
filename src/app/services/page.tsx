import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteImage from "@/components/SiteImage";
import { SERVICES } from "@/data/content";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Services"
        image="/images/columns.jpg"
      >
        A one-stop shop for foreign companies entering Egypt and our territory,
        and for regional companies reaching world markets.
      </PageHero>
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div data-stagger className="grid md:grid-cols-2 gap-8">
        {SERVICES.map((s, i) => (
          <article
            key={s.slug}
            id={s.slug}
            className="hover-lift bg-white scroll-mt-24"
          >
            <div className="zoom-img relative h-52 overflow-hidden">
              <SiteImage
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
    </>
  );
}
