import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { NEWS } from "@/data/content";

export type NewsItem = (typeof NEWS)[number];

function dateBadge(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  const label = new Date(year, month - 1, day).toLocaleString("en-GB", {
    month: "short",
  });
  return { day: String(day).padStart(2, "0"), month: label.toUpperCase() };
}

export default function NewsCard({ item }: { item: NewsItem }) {
  const badge = dateBadge(item.date);

  return (
    <Link
      href={`/news/${item.slug}`}
      className="news-card hover-lift group block h-full bg-[var(--paper)] p-5 md:p-6"
    >
      <div className="zoom-img relative aspect-[16/10] overflow-hidden mb-5">
        <SiteImage src={item.image} alt="" fill className="object-cover" />
        <div className="photo-veil" />
        <div className="absolute top-3 left-3 z-[1] flex flex-col items-center bg-[var(--navy)] text-white min-w-[3.25rem] px-2 py-1.5">
          <span className="font-serif text-xl leading-none">{badge.day}</span>
          <span className="text-[9px] uppercase tracking-[0.16em] text-[var(--gold)] mt-1">
            {badge.month}
          </span>
        </div>
      </div>
      <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--gold-2)] mb-2">
        {item.category}
      </p>
      <h3 className="font-serif text-xl text-[var(--navy)] mb-3 leading-snug group-hover:text-[var(--gold-2)] transition-colors">
        {item.title}
      </h3>
      <p className="text-sm text-[var(--muted)] line-clamp-3 mb-4">{item.excerpt}</p>
      <p className="text-[var(--gold-2)] text-xs uppercase tracking-[0.16em] font-semibold">
        Read more →
      </p>
    </Link>
  );
}
