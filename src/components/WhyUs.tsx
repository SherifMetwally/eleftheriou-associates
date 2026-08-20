"use client";

import { useState } from "react";
import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { WHY_EAC } from "@/data/content";

export default function WhyUs() {
  const [on, setOn] = useState(0);

  return (
    <section className="relative bg-[var(--navy)] text-white overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -left-4 -bottom-4 hidden md:block w-full h-full border border-[var(--gold)]/50" />
            <div className="relative min-h-[380px] md:min-h-[520px] overflow-hidden">
              <SiteImage
                src="/images/boardroom.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b3d] via-transparent to-transparent" />
            </div>
            <div className="absolute -right-4 bottom-8 bg-[var(--gold)] text-[var(--navy)] px-6 py-5 min-w-[9.5rem]">
              <p className="text-[10px] uppercase tracking-[0.22em] mb-1">Since</p>
              <p className="font-serif text-5xl leading-none">2001</p>
              <p className="text-[10px] uppercase tracking-[0.16em] mt-2">
                Egypt · Athens
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div>
              <p className="font-serif text-3xl md:text-4xl text-[var(--gold)]">32</p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/55 mt-1">
                Markets
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-[var(--gold)]">5</p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/55 mt-1">
                Territories
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-[var(--gold)]">2</p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/55 mt-1">
                Offices
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)] mb-3">
            Differentiation
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Why you need to work with us
          </h2>
          <p className="text-white/65 leading-relaxed mb-10 max-w-lg">
            One desk. Both directions. Hands-on after the advice — not a
            presentation and a handshake.
          </p>
          <div className="space-y-2">
            {WHY_EAC.map((item, i) => {
              const active = on === i;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setOn(i)}
                  className={`why-item w-full text-left ${active ? "is-on" : ""}`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-2xl text-[var(--gold)]/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-[var(--gold)]">
                      {item.title}
                    </h3>
                  </div>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-3 pb-1 pl-11 text-white/75 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <Link href="/contact" className="btn-gold w-fit mt-10">
            Book a discussion →
          </Link>
        </div>
      </div>
    </section>
  );
}
