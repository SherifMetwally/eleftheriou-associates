"use client";

import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  const n = TESTIMONIALS.length;
  const [pos, setPos] = useState(1);
  const [motion, setMotion] = useState(true);
  const track = n > 1 ? [TESTIMONIALS[n - 1], ...TESTIMONIALS, TESTIMONIALS[0]] : TESTIMONIALS;
  const logical = ((pos - 1 + n) % n + n) % n;

  function go(dir: 1 | -1) {
    if (n < 2) return;
    setMotion(true);
    setPos((p) => p + dir);
  }

  useEffect(() => {
    if (motion) return;
    const id = requestAnimationFrame(() => setMotion(true));
    return () => cancelAnimationFrame(id);
  }, [motion, pos]);

  return (
    <div className="flex gap-6 items-stretch">
      <div className="relative flex-1 overflow-hidden h-[22rem] md:h-[24rem]">
        <p className="pointer-events-none absolute -top-4 left-0 font-serif text-[8rem] leading-none text-[var(--gold)]/15">
          “
        </p>
        <div
          className={`flex flex-col ${motion ? "quote-track" : ""}`}
          style={{
            height: `${track.length * 100}%`,
            transform: `translateY(-${(pos * 100) / track.length}%)`,
          }}
          onTransitionEnd={(e) => {
            if (e.target !== e.currentTarget) return;
            if (pos === 0) {
              setMotion(false);
              setPos(n);
            } else if (pos === n + 1) {
              setMotion(false);
              setPos(1);
            }
          }}
        >
          {track.map((item, slide) => (
            <div
              key={`${slide}-${item.role}`}
              className="flex flex-col justify-center pr-2"
              style={{ height: `${100 / track.length}%` }}
            >
              <blockquote className="relative font-serif text-2xl md:text-3xl text-[var(--navy)] leading-snug">
                {item.quote}
              </blockquote>
              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[var(--gold-2)]">
                {item.name}
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 shrink-0">
        <button
          type="button"
          aria-label="Previous quote"
          className="news-arrow"
          onClick={() => go(-1)}
        >
          ↑
        </button>
        <div className="flex flex-col gap-2 py-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.role}
              type="button"
              aria-label={`Quote ${i + 1}`}
              onClick={() => {
                setMotion(true);
                setPos(i + 1);
              }}
              className={`h-2 w-2 rounded-full ${
                i === logical ? "bg-[var(--gold)]" : "bg-[var(--line)]"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next quote"
          className="news-arrow"
          onClick={() => go(1)}
        >
          ↓
        </button>
      </div>
    </div>
  );
}
