import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroGlobe from "@/components/HeroGlobe";
import ServiceRoster from "@/components/ServiceRoster";
import {
  fill,
  MARKETS,
  MARKET_BY_SLUG,
  marketsByRegion,
  regionOf,
  ROLE_COPY,
  servicesForMarket,
} from "@/data/markets";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return MARKETS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const market = MARKET_BY_SLUG.get(slug);
  return { title: market ? `Services in ${market.name}` : "Market" };
}

export default async function MarketPage({ params }: Props) {
  const { slug } = await params;
  const market = MARKET_BY_SLUG.get(slug);
  if (!market) notFound();

  const region = regionOf(market);
  const copy = ROLE_COPY[market.region];
  const services = servicesForMarket(market);
  const neighbours = marketsByRegion(market.region).filter((m) => m.slug !== market.slug);

  return (
    <>
      <section className="relative bg-[#05070d] text-white overflow-hidden min-h-[520px] md:min-h-[560px] lg:min-h-[620px]">
        <HeroGlobe variant="page" focusIso={market.iso} />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-full md:w-[58%] bg-gradient-to-r from-[#05070d] from-[42%] via-[#05070d]/85 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-[#05070d] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-t from-[#05070d] to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 pt-14 pb-24 md:pt-16 md:pb-28 pointer-events-none">
          <div className="hero-rise max-w-xl pointer-events-auto">
            <p className="text-[var(--gold)] text-xs uppercase tracking-[0.28em] mb-5 flex items-center gap-3">
              <span className="hidden sm:block h-px w-8 bg-[var(--gold)]" />
              {copy.eyebrow}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08]">
              {fill(copy.heading, market.name)}
            </h1>
            <p className="mt-5 text-white/82 leading-relaxed max-w-lg">
              {fill(copy.lede, market.name)}
            </p>
            {market.note ? (
              <p className="mt-4 text-[var(--gold)] text-xs uppercase tracking-[0.18em]">
                {market.note}
              </p>
            ) : (
              <p className="mt-4 text-[var(--gold)] text-xs uppercase tracking-[0.18em]">
                {region.name} · {services.length} services
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#services" className="btn-gold">
                View services →
              </Link>
              <Link href="/contact" className="btn-outline">
                Discuss this market
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-16 md:py-20 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5">
          <div data-reveal className="mx-auto max-w-3xl text-center mb-14">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold-2)] mb-3">
              {market.name}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--navy)] mb-4">
              Services for this market
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">
              {services.length} offerings for {market.name}. Click another
              country on the globe to switch markets, or open the full catalogue.
            </p>
          </div>
          <ServiceRoster
            services={services}
            hrefFor={(s) => `/services#${s}`}
            actionLabel="Learn more"
          />
          <div className="mt-14 flex flex-wrap gap-6 justify-between items-center">
            <Link
              href="/services"
              className="link-arrow text-[var(--gold-2)] text-xs uppercase tracking-[0.16em] font-semibold"
            >
              All services →
            </Link>
            <Link href="/contact" className="btn-gold">
              Enquire about {market.name}
            </Link>
          </div>
        </div>
      </section>

      {neighbours.length > 0 ? (
        <section className="bg-[var(--paper)] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <p
              data-reveal
              className="text-xs uppercase tracking-[0.22em] text-[var(--gold-2)] mb-3"
            >
              Same territory
            </p>
            <h2
              data-reveal
              className="font-serif text-3xl md:text-4xl text-[var(--navy)] mb-8"
            >
              Other {region.name} markets
            </h2>
            <div data-stagger className="flex flex-wrap gap-x-6 gap-y-3">
              {neighbours.map((m) => (
                <Link
                  key={m.slug}
                  href={`/markets/${m.slug}`}
                  className="link-arrow text-sm text-[var(--navy)] hover:text-[var(--gold-2)]"
                >
                  {m.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
