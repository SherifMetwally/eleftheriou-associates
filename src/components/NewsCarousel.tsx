"use client";

import { useEffect, useRef, useState } from "react";
import NewsCard, { type NewsItem } from "@/components/NewsCard";

export default function NewsCarousel({ items }: { items: NewsItem[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const hover = useRef(false);

  function cardWidth() {
    const el = scroller.current;
    if (!el) return 0;
    const card = el.querySelector<HTMLElement>("[data-news-slide]");
    if (!card) return el.clientWidth;
    const style = window.getComputedStyle(el);
    const gap = parseFloat(style.columnGap || style.gap || "24") || 24;
    return card.getBoundingClientRect().width + gap;
  }

  function go(dir: 1 | -1) {
    const el = scroller.current;
    if (!el) return;
    const w = cardWidth();
    const max = el.scrollWidth - el.clientWidth;
    let next = el.scrollLeft + dir * w;
    if (next > max - 8) next = 0;
    if (next < 0) next = max;
    el.scrollTo({ left: next, behavior: "smooth" });
  }

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const onScroll = () => {
      const w = cardWidth() || 1;
      setPage(Math.round(el.scrollLeft / w) % items.length);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [items.length]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tick = window.setInterval(() => {
      if (!hover.current) go(1);
    }, 5200);
    return () => window.clearInterval(tick);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        hover.current = true;
      }}
      onMouseLeave={() => {
        hover.current = false;
      }}
    >
      <div
        ref={scroller}
        className="news-scroller flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory"
      >
        {items.map((item) => (
          <div
            key={item.slug}
            data-news-slide
            className="snap-start shrink-0 w-[86%] sm:w-[70%] md:w-[48%] lg:w-[38%]"
          >
            <NewsCard item={item} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {items.map((item, i) => (
            <button
              key={item.slug}
              type="button"
              aria-label={`Go to article ${i + 1}`}
              onClick={() => {
                const el = scroller.current;
                if (!el) return;
                el.scrollTo({ left: i * cardWidth(), behavior: "smooth" });
              }}
              className={`h-2 w-2 rounded-full transition-colors ${
                page === i ? "bg-[var(--gold)]" : "bg-[var(--line)]"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous articles"
            onClick={() => go(-1)}
            className="news-arrow"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next articles"
            onClick={() => go(1)}
            className="news-arrow"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
