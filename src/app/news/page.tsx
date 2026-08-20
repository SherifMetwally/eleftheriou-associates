import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import NewsCard from "@/components/NewsCard";
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
        <div data-stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS.map((n) => (
            <NewsCard key={n.slug} item={n} />
          ))}
        </div>
      </div>
    </>
  );
}
