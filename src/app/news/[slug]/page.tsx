import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { NEWS } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = NEWS.find((n) => n.slug === slug);
  return { title: article?.title ?? "Article" };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = NEWS.find((n) => n.slug === slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/news" className="text-sm text-[var(--gold-2)]">
        ← News &amp; insights
      </Link>
      <p className="mt-6 text-xs uppercase tracking-wide text-[var(--gold-2)]">
        {article.category} · {article.date}
      </p>
      <h1 className="font-serif text-4xl text-[var(--navy)] mt-3 mb-8">
        {article.title}
      </h1>
      {article.image && (
        <div className="relative aspect-[16/9] min-h-[220px] mb-10 overflow-hidden">
          <SiteImage src={article.image} alt="" fill className="object-cover" />
        </div>
      )}
      <p className="text-[var(--muted)] leading-relaxed text-lg">{article.body}</p>
    </article>
  );
}
