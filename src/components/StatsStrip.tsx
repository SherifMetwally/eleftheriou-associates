"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/data/content";

const DURATION = 1500;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Counts up once the strip is on screen. Renders the final figure without JS. */
function Counter({ to, live }: { to: number; live: boolean }) {
  const [shown, setShown] = useState(to);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    setShown(0);
  }, []);

  useEffect(() => {
    if (!live) return;
    if (prefersReducedMotion()) {
      setShown(to);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - p, 3);
      setShown(Math.round(to * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [live, to]);

  return <span className="tabular-nums">{shown}</span>;
}

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setLive(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        setLive(true);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[var(--navy)] text-white">
      <div
        ref={ref}
        data-stagger
        className="mx-auto max-w-6xl px-5 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10"
      >
        {STATS.map((s) => (
          <div key={s.label} className="px-4 py-7 text-center">
            <p className="font-serif text-2xl md:text-3xl text-[var(--gold)] leading-tight">
              {s.count !== undefined ? (
                <Counter to={s.count} live={live} />
              ) : (
                <span className={`stat-text${live ? " is-live" : ""}`}>{s.value}</span>
              )}
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/65">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
