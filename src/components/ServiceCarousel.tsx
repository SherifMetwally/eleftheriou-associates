"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { SERVICES, type Service } from "@/data/content";

type Props = {
  hrefPrefix?: string;
  actionLabel?: string;
  services?: Service[];
};

/** 3, then 2, then 3, then 2… */
function chunkAlt<T>(items: T[]): T[][] {
  const out: T[][] = [];
  let i = 0;
  let takeThree = true;
  while (i < items.length) {
    const n = takeThree ? 3 : 2;
    out.push(items.slice(i, i + n));
    i += n;
    takeThree = !takeThree;
  }
  return out;
}

function indexOf(pages: Service[][], page: number, i: number) {
  let n = 1;
  for (let p = 0; p < page; p++) n += pages[p].length;
  return n + i;
}

export default function ServiceCarousel({
  hrefPrefix = "/services#",
  actionLabel = "Learn more",
  services = SERVICES,
}: Props) {
  const pages = chunkAlt([...services]);
  const count = pages.length;
  const [pos, setPos] = useState(1);
  const [motion, setMotion] = useState(true);
  const [touchX, setTouchX] = useState<number | null>(null);

  const track = count > 1 ? [pages[count - 1], ...pages, pages[0]] : pages;
  const logical = ((pos - 1 + count) % count + count) % count;

  function go(dir: 1 | -1) {
    if (count < 2) return;
    setMotion(true);
    setPos((p) => p + dir);
  }

  useEffect(() => {
    if (motion) return;
    const id = requestAnimationFrame(() => setMotion(true));
    return () => cancelAnimationFrame(id);
  }, [motion, pos]);

  return (
    <div
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        setTouchX(null);
        if (dx > 56) go(-1);
        if (dx < -56) go(1);
      }}
    >
      <div className="overflow-hidden">
        <div
          className={`flex ${motion ? "svc-track" : ""}`}
          style={{
            width: `${track.length * 100}%`,
            transform: `translateX(-${(pos * 100) / track.length}%)`,
          }}
          onTransitionEnd={(e) => {
            if (e.target !== e.currentTarget) return;
            if (pos === 0) {
              setMotion(false);
              setPos(count);
            } else if (pos === count + 1) {
              setMotion(false);
              setPos(1);
            }
          }}
        >
          {track.map((group, slide) => {
            const pageIndex =
              slide === 0 ? count - 1 : slide === count + 1 ? 0 : slide - 1;
            return (
            <div
              key={`slide-${slide}`}
              className="shrink-0"
              style={{ width: `${100 / track.length}%` }}
            >
              <div
                className={`grid gap-6 md:gap-8 items-stretch ${
                  group.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
                }`}
              >
                {group.map((s, i) => (
                  <article
                    key={`${slide}-${s.slug}`}
                    className="hover-lift flex h-full flex-col bg-[var(--paper)] p-5 md:p-6"
                  >
                    <div className="zoom-img relative mb-5 h-52 w-full shrink-0 overflow-hidden md:h-56">
                      <SiteImage
                        src={s.image}
                        alt=""
                        fill
                        sizes={
                          group.length === 2
                            ? "(min-width: 768px) 50vw, 100vw"
                            : "(min-width: 768px) 33vw, 100vw"
                        }
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold-2)] mb-3">
                      {String(indexOf(pages, pageIndex, i)).padStart(2, "0")}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl text-[var(--navy)] mb-3 leading-snug line-clamp-2 min-h-[3.5rem]">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed mb-5 line-clamp-3 min-h-[4.5rem]">
                      {s.summary}
                    </p>
                    <Link
                      href={`${hrefPrefix}${s.slug}`}
                      className="link-arrow mt-auto text-[var(--gold-2)] text-xs uppercase tracking-[0.16em] font-semibold w-fit"
                    >
                      {actionLabel} →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
          {String(logical + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </p>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-2">
            {pages.map((_, n) => (
              <button
                key={n}
                type="button"
                aria-label={`Services page ${n + 1}`}
                onClick={() => {
                  setMotion(true);
                  setPos(n + 1);
                }}
                className={`h-2 w-2 rounded-full ${
                  n === logical ? "bg-[var(--gold)]" : "bg-[var(--line)]"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button type="button" aria-label="Previous services" className="news-arrow" onClick={() => go(-1)}>
              ←
            </button>
            <button type="button" aria-label="Next services" className="news-arrow" onClick={() => go(1)}>
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
