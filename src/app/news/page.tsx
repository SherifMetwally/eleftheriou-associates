import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NEWS } from "@/data/content";

export const metadata: Metadata = { title: "News & Insights" };

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold-2)] mb-3">
        Editorial
      </p>
      <h1 className="font-serif text-5xl text-[var(--navy)] mb-10">
        News &amp; insights
      </h1>
      <div data-stagger className="grid md:grid-cols-2 gap-6">
        {NEWS.map((n) => (
          <Link
            key={n.slug}
            href={`/news/${n.slug}`}
            className="hover-lift bg-white border border-[var(--line)] overflow-hidden hover:border-[var(--gold)]"
          >
            <div className="zoom-img relative h-48">
              <Image src={n.image} alt="" fill className="object-cover" />
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
  );
}
