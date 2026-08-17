import type { Metadata } from "next";
import Link from "next/link";
import HeroGlobe from "@/components/HeroGlobe";
import {
  COVERED_COUNTRY_COUNT,
  GLOBAL_REACH,
  TERRITORIES,
} from "@/data/territories";

export const metadata: Metadata = { title: "Territories & Markets" };

export default function TerritoriesPage() {
  return (
    <>
      <section className="relative bg-[#05070d] text-white overflow-hidden min-h-[520px] md:min-h-[560px] lg:min-h-[620px]">
        <HeroGlobe variant="page" />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-full md:w-[58%] bg-gradient-to-r from-[#05070d] from-[42%] via-[#05070d]/85 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-[#05070d] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-t from-[#05070d] to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 pt-14 pb-24 md:pt-16 md:pb-28 pointer-events-none">
          <div className="hero-rise max-w-xl pointer-events-auto">
            <p className="text-[var(--gold)] text-xs uppercase tracking-[0.28em] mb-5 flex items-center gap-3">
              <span className="hidden sm:block h-px w-8 bg-[var(--gold)]" />
              Geographic coverage
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08]">
              Territories &amp; markets
            </h1>
            <p className="mt-5 text-white/82 leading-relaxed max-w-lg">
              Mediterranean Europe, North Africa, the Mideast, and the Arab
              Gulf — {COVERED_COUNTRY_COUNT} countries, with headquarters and
              primary focus on Egypt. Hover a country to light it; click a
              territory to turn the globe.
            </p>
            <p className="mt-4 text-[var(--gold)] text-xs uppercase tracking-[0.18em]">
              Mediterranean Europe · North Africa · Mideast · GCC
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#coverage" className="btn-gold">
                Country lists →
              </Link>
              <Link href="/contact" className="btn-outline">
                Discuss a market
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="coverage" className="bg-white py-16 md:py-20 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.22em] text-[var(--gold-2)] mb-3"
          >
            Operating regions
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl md:text-5xl text-[var(--navy)] mb-4"
          >
            Five territories. One desk.
          </h2>
          <p
            data-reveal
            className="text-[var(--muted)] max-w-2xl mb-12 leading-relaxed"
          >
            The same coverage as the globe above, with the country lists for
            each region. Smaller Gulf and Mediterranean states — Bahrain,
            Qatar, Kuwait, Malta, Cyprus — are included.
          </p>
          <div data-stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TERRITORIES.map((t) => (
              <article
                key={t.id}
                className="hover-lift bg-white border border-[var(--line)] border-t-[3px] border-t-[var(--navy)] hover:border-[var(--gold)] hover:border-t-[var(--gold)] p-7"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold-2)] mb-2">
                  {t.short}
                </p>
                <h3 className="font-serif text-2xl text-[var(--navy)] mb-3">
                  {t.name}
                </h3>
                <p className="text-sm text-[var(--muted)] mb-5 leading-relaxed">
                  {t.summary}
                </p>
                <p className="text-xs text-[var(--navy)] leading-relaxed">
                  {t.countries.join(" · ")}
                </p>
              </article>
            ))}
            <article className="hover-lift bg-[var(--navy)] text-white p-7">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)] mb-2">
                Beyond the core map
              </p>
              <h3 className="font-serif text-2xl mb-3">
                Wider international reach
              </h3>
              <p className="text-sm text-white/70 mb-5 leading-relaxed">
                Matchmaking also runs toward markets outside the five operating
                territories:
              </p>
              <ul className="text-sm space-y-3">
                {GLOBAL_REACH.map((g) => (
                  <li key={g.name}>
                    <span className="text-[var(--gold)]">{g.name}</span>
                    <span className="text-white/65"> — {g.note}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
