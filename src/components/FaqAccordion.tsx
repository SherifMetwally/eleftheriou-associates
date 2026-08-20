"use client";

import { useState } from "react";
import { FAQS } from "@/data/content";

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
      {FAQS.map((item, i) => {
        const active = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              aria-expanded={active}
              onClick={() => setOpen(active ? -1 : i)}
              className="flex w-full items-start gap-5 py-5 text-left"
            >
              <span className="font-serif text-2xl text-[var(--gold)] leading-none pt-0.5">
                {i + 1}.
              </span>
              <span className="flex-1 font-serif text-xl md:text-2xl text-[var(--navy)] leading-snug">
                {item.q}
              </span>
              <span
                className={`mt-1 text-[var(--gold-2)] text-xl leading-none transition-transform ${
                  active ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pl-11 md:pl-14 text-[var(--muted)] leading-relaxed max-w-2xl">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
