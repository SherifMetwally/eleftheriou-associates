import Image from "next/image";
import Link from "next/link";
import HeroGlobe from "@/components/HeroGlobe";
import StatsStrip from "@/components/StatsStrip";
import { NEWS, PILLARS, PROCESS, SECTORS, SERVICES, WHY_EAC } from "@/data/content";

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
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#services" className="btn-gold">
                Explore our services →
              </Link>
              <Link href="/contact" className="btn-outline">
                Let&apos;s connect
              </Link>
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
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-[var(--gold)]/30" />
            <div data-stagger className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
              {PROCESS.map((p) => (
                <div key={p.step} className="text-center px-2">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--navy)] font-serif text-xl text-[var(--gold)]">
                    {p.step}
                  </div>
                  <h3 className="font-serif text-xl mb-2">{p.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
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
              A brief of each service on the landing page — open the full Services
              page for process and outcomes.
            </p>
          </div>
          <div data-stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {SERVICES.map((s) => (
              <article
                key={s.slug}
                className="hover-lift bg-white border border-[var(--line)] border-t-[3px] border-t-[var(--navy)] hover:border-[var(--gold)] hover:border-t-[var(--gold)]"
              >
                <div className="zoom-img relative h-48 overflow-hidden">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[var(--navy)] mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 line-clamp-3">
                    {s.summary}
                  </p>
                  <Link
                    href={`/services#${s.slug}`}
                    className="link-arrow text-[var(--gold-2)] text-xs uppercase tracking-[0.16em] font-semibold"
                  >
                    Learn more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-14 flex justify-end">
            <Link
              href="/services"
              className="link-arrow text-[var(--gold-2)] text-xs uppercase tracking-[0.16em] font-semibold"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)] text-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.22em] text-[var(--gold)] mb-3"
          >
            Differentiation
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl md:text-5xl mb-10"
          >
            Why you need to work with us
          </h2>
          <div data-stagger className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {WHY_EAC.map((item) => (
              <article key={item.title} className="border-t border-[var(--gold)]/50 pt-5">
                <h3 className="font-serif text-2xl text-[var(--gold)] mb-3">
                  {item.title}
                </h3>
                <p className="text-white/75 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
          <Link href="/contact" className="btn-gold w-fit mt-12">
            Book a discussion →
          </Link>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--paper)] py-10">
        <div data-reveal className="mx-auto max-w-6xl px-5">
          <div className="flex items-end justify-between mb-4">
            <h2 className="font-serif text-2xl text-[var(--navy)]">Industries we serve</h2>
            <Link
              href="/sectors"
              className="link-arrow text-xs uppercase tracking-[0.16em] text-[var(--gold-2)]"
            >
              All sectors →
            </Link>
          </div>
          <p className="text-sm text-[var(--navy)] leading-relaxed">
            {SECTORS.join(" · ")}
          </p>
        </div>
      </section>

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
          <div data-stagger className="grid md:grid-cols-3 gap-8">
            {NEWS.map((n) => (
              <Link
                key={n.slug}
                href={`/news/${n.slug}`}
                className="hover-lift bg-white border border-[var(--line)] hover:border-[var(--gold)]"
              >
                <div className="zoom-img relative h-48 overflow-hidden">
                  <Image src={n.image} alt="" fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-[var(--navy)] mb-2">{n.title}</h3>
                  <p className="text-sm text-[var(--muted)] line-clamp-3 mb-4">{n.excerpt}</p>
                  <p className="text-[var(--gold-2)] text-xs uppercase tracking-[0.16em] font-semibold">
                    Read more →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
