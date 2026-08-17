import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteImage from "@/components/SiteImage";
import { NEWS } from "@/data/content";

export const metadata: Metadata = { title: "News & Insights" };

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Editorial"
        title="News & insights"
        image="/images/column-capital.jpg"
      >
        Notes from the region as the practice restarts.
      </PageHero>
      <div className="mx-auto max-w-6xl px-5 py-16">
        {NEWS.map((n) => (
          <Link
            key={n.slug}
            href={`/news/${n.slug}`}
            className="hover-lift bg-white border border-[var(--line)] overflow-hidden hover:border-[var(--gold)]"
          >
            <div className="zoom-img relative h-48">
              <SiteImage src={n.image} alt="" fill className="object-cover" />
            </div>
            <div className="p-7">
              <p className="text-xs text-[var(--gold-2)] uppercase mb-2">
                {n.category} · {n.date}
              </p>
              <h2 className="font-serif text-2xl text-[var(--navy)] mb-3">
                {n.title}
              </h2>
              <p className="text-sm text-[var(--muted)]">{n.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}
