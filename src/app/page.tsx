import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import HeroGlobe from "@/components/HeroGlobe";
import IndustriesGrid from "@/components/IndustriesGrid";
import NewsCarousel from "@/components/NewsCarousel";
import ServiceCarousel from "@/components/ServiceCarousel";
import StatsStrip from "@/components/StatsStrip";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import { NEWS, PILLARS, PROCESS, SERVICES } from "@/data/content";

const PILLAR_ICONS = [
  <svg key="compass" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5 4.5-1.9Z" />
  </svg>,
  <svg key="institution" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5 12 4.5l9 5" />
    <path d="M5.5 10.5v7.5M9.8 10.5v7.5M14.2 10.5v7.5M18.5 10.5v7.5" />
    <path d="M3.5 18h17" />
  </svg>,
  <svg key="chart" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M4 19V5M4 19h16" />
    <path d="m7 14 4-4 3 3 5-6" />
  </svg>,
];

export default function HomePage() {
  return (
    <>
      <section className="relative bg-[#05070d] text-white overflow-hidden min-h-[440px] md:min-h-[470px] lg:min-h-[500px]">
        <HeroGlobe />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-full md:w-[58%] bg-gradient-to-r from-[#05070d] from-[42%] via-[#05070d]/85 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-[#05070d] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-[#05070d] to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 pt-12 pb-20 md:pt-14 md:pb-20 pointer-events-none">
          <div className="hero-rise max-w-xl pointer-events-auto">
            <p className="text-[var(--gold)] text-xs uppercase tracking-[0.28em] mb-5 flex items-center gap-3">
              <span className="hidden sm:block h-px w-8 bg-[var(--gold)]" />
              Cross-border perspective. Local advantage.
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08]">
              <span className="md:hidden">
                <span className="block">STRATEGY.</span>
                <span className="block">SOLUTIONS.</span>
                <span className="block text-[var(--gold)]">RESULTS.</span>
              </span>
              <span className="hidden md:block">
                How Eleftheriou Associates can help you
              </span>
            </h1>
            <p className="mt-5 text-white/82 leading-relaxed max-w-lg">
              One-stop business development: enter Egypt and the territory we
              cover, export from the region into Europe, or structure a joint
              venture when a market need has no local supplier.
            </p>
            <p className="mt-4 text-[var(--gold)] text-xs uppercase tracking-[0.18em]">
              Mediterranean Europe · North Africa · Mideast · GCC
            </p>
            <p className="mt-3 text-white/55 text-sm">
              Click a country on the globe to see the services we offer there.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link href="#services" className="btn-gold">
                Explore our services →
              </Link>
              <Link href="/contact" className="btn-outline">
                Let&apos;s connect
              </Link>
              <div className="hero-badge hidden sm:flex">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--gold)]">
                  Since
                </span>
                <span className="font-serif text-2xl text-white leading-none mt-0.5">
                  2001
                </span>
                <span className="text-[9px] uppercase tracking-[0.16em] text-white/70 mt-1">
                  Egypt HQ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p
            data-reveal
            className="text-center text-xs uppercase tracking-[0.22em] text-[var(--gold-2)] mb-3"
          >
            Our service pillars
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl md:text-5xl text-[var(--navy)] text-center mb-14"
          >
            Integrated solutions. Measurable impact.
          </h2>
          <div
            data-stagger
            className="grid md:grid-cols-3 gap-10 md:gap-0 md:divide-x divide-[var(--line)]"
          >
            {PILLARS.map((item, i) => (
              <div key={item.title} className="pillar text-center px-2 md:px-8">
                <div className="pillar-icon mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold-2)]">
                  {PILLAR_ICONS[i]}
                </div>
                <h3 className="pillar-title text-sm uppercase tracking-[0.16em] text-[var(--navy)] font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                  {item.summary}
                </p>
                <Link
                  href={item.href}
                  className="link-arrow text-[var(--gold-2)] text-xs uppercase tracking-[0.16em] font-semibold"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)] text-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p
            data-reveal
            className="text-center text-xs uppercase tracking-[0.22em] text-[var(--gold)] mb-3"
          >
            Our process
          </p>
          <h2 data-reveal className="font-serif text-4xl md:text-5xl text-center mb-14">
            A proven path to international growth
          </h2>
          <div data-stagger className="process-grid relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {PROCESS.map((p) => (
                <div key={p.step} className="process-step">
                  <span className="process-num">{p.step}</span>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--gold)] mb-3">
                    Process — {p.step}
                  </p>
                  <h3 className="font-serif text-2xl mb-3">{p.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      <section id="services" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div data-reveal className="mx-auto max-w-3xl text-center mb-14">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold-2)] mb-3">
              Window of services
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--navy)] mb-4">
              Everything we offer
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">
              Square photographs throughout. One slide holds three services, the
              next holds two — then it repeats. Use the arrows or swipe.
            </p>
          </div>
          <ServiceCarousel actionLabel="Learn more" />
          <div className="mt-14 flex justify-end">
            <Link
              href="/services"
              className="link-arrow text-[var(--gold-2)] text-xs uppercase tracking-[0.16em] font-semibold"
            >
              See all {SERVICES.length} services →
            </Link>
          </div>
        </div>
      </section>

      <WhyUs />

      <section className="bg-[var(--paper)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <p
              data-reveal
              className="text-xs uppercase tracking-[0.22em] text-[var(--gold-2)] mb-3"
            >
              Question answers
            </p>
            <h2
              data-reveal
              className="font-serif text-4xl md:text-5xl text-[var(--navy)] mb-5"
            >
              If you have any more questions, contact us.
            </h2>
            <p data-reveal className="text-[var(--muted)] leading-relaxed mb-8">
              Typical first questions from companies entering Egypt, exporting
              from the region, or structuring a joint venture around an unmet
              need.
            </p>
            <Link href="/contact" className="btn-gold w-fit">
              Ask the desk →
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p
              data-reveal
              className="text-xs uppercase tracking-[0.22em] text-[var(--gold-2)] mb-3"
            >
              What they are talking about
            </p>
            <h2
              data-reveal
              className="font-serif text-4xl md:text-5xl text-[var(--navy)] mb-5"
            >
              Sample notes from the work.
            </h2>
            <p data-reveal className="text-[var(--muted)] leading-relaxed">
              Layout quotes only — not named client references. Replace with
              text George supplies. Until then, these describe the three
              directions of the practice.
            </p>
          </div>
          <div className="lg:col-span-7">
            <Testimonials />
          </div>
        </div>
      </section>

      <IndustriesGrid />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div data-reveal className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold-2)] mb-2">
                News &amp; insights
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--navy)]">
                From the region
              </h2>
            </div>
            <Link
              href="/news"
              className="link-arrow text-xs uppercase tracking-[0.16em] text-[var(--gold-2)]"
            >
              View all insights →
            </Link>
          </div>
          <NewsCarousel items={NEWS} />
        </div>
      </section>
    </>
  );
}
