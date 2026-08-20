"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import ServiceRoster from "@/components/ServiceRoster";
import { SERVICES, servicesBySlug } from "@/data/content";
import {
  MARKET_BY_SLUG,
  marketsByRegion,
  SERVICES_BY_ROLE,
  servicesForMarket,
} from "@/data/markets";
import { TERRITORIES, type TerritoryId } from "@/data/territories";

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`border px-4 py-2 text-sm transition-colors ${
        active
          ? "border-[var(--navy)] bg-[var(--navy)] text-white"
          : "border-[var(--line)] bg-white text-[var(--navy)] hover:border-[var(--gold)] hover:text-[var(--gold-2)]"
      }`}
    >
      {children}
    </button>
  );
}

export default function ServicesCatalogue() {
  const [territoryId, setTerritoryId] = useState<TerritoryId | null>(null);
  const [countrySlug, setCountrySlug] = useState<string | null>(null);

  const territory = TERRITORIES.find((t) => t.id === territoryId) ?? null;
  const countries = territoryId ? marketsByRegion(territoryId) : [];
  const market = countrySlug ? MARKET_BY_SLUG.get(countrySlug) : undefined;

  const services = useMemo(() => {
    if (market) return servicesForMarket(market);
    if (territoryId) return servicesBySlug(SERVICES_BY_ROLE[territoryId]);
    return SERVICES;
  }, [market, territoryId]);

  function pickTerritory(id: TerritoryId) {
    if (territoryId === id) {
      setTerritoryId(null);
      setCountrySlug(null);
      return;
    }
    setTerritoryId(id);
    const list = marketsByRegion(id);
    setCountrySlug(list.length === 1 ? list[0].slug : null);
  }

  function pickCountry(slug: string) {
    setCountrySlug((current) => (current === slug ? null : slug));
  }

  function clear() {
    setTerritoryId(null);
    setCountrySlug(null);
  }

  const heading = market
    ? `Services in ${market.name}`
    : territory
      ? `Services across ${territory.name}`
      : "All services";

  const lede = market
    ? `${services.length} offerings for ${market.name}. Choose another country in this territory, or clear the filter to see the full catalogue.`
    : territory
      ? `${services.length} offerings for this territory. Select a country to see the mix for that market.`
      : "The full catalogue. Choose a territory, then a country, to see only what we offer there.";

  return (
    <div>
      <div className="mb-14 border border-[var(--line)] bg-[var(--paper)] p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold-2)] mb-3">
          Filter by market
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-[var(--navy)] mb-2">
          Where are you looking to work?
        </h2>
        <p className="text-sm text-[var(--muted)] mb-8 max-w-2xl leading-relaxed">
          Choose a territory first, then a country. The list below updates to
          the services we offer in that market.
        </p>

        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--navy)] mb-3">
              01 · Territory
            </p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Territory">
              <Chip active={!territoryId} onClick={clear}>
                All services
              </Chip>
              {TERRITORIES.map((t) => (
                <Chip
                  key={t.id}
                  active={territoryId === t.id}
                  onClick={() => pickTerritory(t.id)}
                >
                  {t.name}
                </Chip>
              ))}
            </div>
          </div>

          {territory ? (
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--navy)] mb-3">
                02 · Country
                <span className="ml-2 font-normal tracking-normal normal-case text-[var(--muted)]">
                  {territory.short}
                </span>
              </p>
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label={`Countries in ${territory.name}`}
              >
                {countries.map((c) => (
                  <Chip
                    key={c.slug}
                    active={countrySlug === c.slug}
                    onClick={() => pickCountry(c.slug)}
                  >
                    {c.name}
                  </Chip>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted)]">
            Showing{" "}
            <span className="text-[var(--navy)] font-semibold">
              {services.length}
            </span>{" "}
            of {SERVICES.length} services
            {market ? ` for ${market.name}` : territory ? ` in ${territory.name}` : ""}.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            {market ? (
              <Link
                href={`/markets/${market.slug}`}
                className="link-arrow text-[var(--gold-2)] text-xs uppercase tracking-[0.16em] font-semibold"
              >
                {market.name} market page →
              </Link>
            ) : null}
            {territoryId ? (
              <button
                type="button"
                onClick={clear}
                className="text-xs uppercase tracking-[0.16em] font-semibold text-[var(--navy)] hover:text-[var(--gold-2)]"
              >
                Clear filter
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold-2)] mb-3">
          Catalogue
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--navy)] mb-3">
          {heading}
        </h2>
        <p className="text-[var(--muted)] leading-relaxed max-w-2xl">{lede}</p>
      </div>

      <ServiceRoster
        services={services}
        hrefFor={() => "/contact"}
        actionLabel="Enquire"
        instant
      />
    </div>
  );
}
