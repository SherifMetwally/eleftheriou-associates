/**
 * Per-country market pages.
 *
 * The service mix is assigned by the role a market plays for EAC, following the
 * client agenda: "Exportation services will only target EU clients, franchises
 * and or foreign agencies will be targeting Egyptian and or Arab country
 * nationals / investors." Country-specific lists from EAC's own sheet can
 * replace SERVICES_BY_ROLE without touching the pages.
 */

import { servicesBySlug, type Service } from "@/data/content";
import type { TerritoryId } from "@/data/territories";
import { TERRITORIES } from "@/data/territories";

export type Market = {
  slug: string;
  name: string;
  iso: number;
  region: TerritoryId;
  /** Globe centre for this market. */
  lon: number;
  lat: number;
  /** Factual note only — an EAC office, nothing implied about clients. */
  note?: string;
};

export const MARKETS: Market[] = [
  { slug: "egypt", name: "Egypt", iso: 818, region: "egypt", lon: 30, lat: 26, note: "Headquarters — Alexandria" },

  { slug: "libya", name: "Libya", iso: 434, region: "northAfrica", lon: 17, lat: 27 },
  { slug: "tunisia", name: "Tunisia", iso: 788, region: "northAfrica", lon: 9.5, lat: 34 },
  { slug: "algeria", name: "Algeria", iso: 12, region: "northAfrica", lon: 2.6, lat: 28 },
  { slug: "morocco", name: "Morocco", iso: 504, region: "northAfrica", lon: -6, lat: 32 },
  { slug: "mauritania", name: "Mauritania", iso: 478, region: "northAfrica", lon: -10.5, lat: 20 },
  { slug: "western-sahara", name: "Western Sahara", iso: 732, region: "northAfrica", lon: -13, lat: 24.5 },

  { slug: "spain", name: "Spain", iso: 724, region: "medEurope", lon: -3.7, lat: 40 },
  { slug: "portugal", name: "Portugal", iso: 620, region: "medEurope", lon: -8, lat: 39.5 },
  { slug: "france", name: "France", iso: 250, region: "medEurope", lon: 2.3, lat: 46.5 },
  { slug: "italy", name: "Italy", iso: 380, region: "medEurope", lon: 12.5, lat: 42.5 },
  { slug: "greece", name: "Greece", iso: 300, region: "medEurope", lon: 22, lat: 39, note: "European office — Palaio Faliro, Athens" },
  { slug: "cyprus", name: "Cyprus", iso: 196, region: "medEurope", lon: 33.2, lat: 35 },
  { slug: "malta", name: "Malta", iso: 470, region: "medEurope", lon: 14.4, lat: 35.9 },
  { slug: "croatia", name: "Croatia", iso: 191, region: "medEurope", lon: 15.5, lat: 45.1 },
  { slug: "slovenia", name: "Slovenia", iso: 705, region: "medEurope", lon: 14.8, lat: 46.1 },
  { slug: "albania", name: "Albania", iso: 8, region: "medEurope", lon: 20, lat: 41 },
  { slug: "montenegro", name: "Montenegro", iso: 499, region: "medEurope", lon: 19.3, lat: 42.7 },
  { slug: "bosnia-and-herzegovina", name: "Bosnia and Herzegovina", iso: 70, region: "medEurope", lon: 17.8, lat: 44 },

  { slug: "turkey", name: "Turkey", iso: 792, region: "mideast", lon: 35, lat: 39 },
  { slug: "lebanon", name: "Lebanon", iso: 422, region: "mideast", lon: 35.8, lat: 33.9 },
  { slug: "syria", name: "Syria", iso: 760, region: "mideast", lon: 38, lat: 35 },
  { slug: "jordan", name: "Jordan", iso: 400, region: "mideast", lon: 36.2, lat: 31 },
  { slug: "iraq", name: "Iraq", iso: 368, region: "mideast", lon: 43.7, lat: 33 },
  { slug: "palestine", name: "Palestine", iso: 275, region: "mideast", lon: 35.2, lat: 31.9 },
  { slug: "yemen", name: "Yemen", iso: 887, region: "mideast", lon: 47.5, lat: 15.5 },

  { slug: "saudi-arabia", name: "Saudi Arabia", iso: 682, region: "gulf", lon: 45, lat: 24 },
  { slug: "united-arab-emirates", name: "United Arab Emirates", iso: 784, region: "gulf", lon: 54, lat: 24 },
  { slug: "kuwait", name: "Kuwait", iso: 414, region: "gulf", lon: 47.6, lat: 29.3 },
  { slug: "qatar", name: "Qatar", iso: 634, region: "gulf", lon: 51.2, lat: 25.3 },
  { slug: "bahrain", name: "Bahrain", iso: 48, region: "gulf", lon: 50.6, lat: 26 },
  { slug: "oman", name: "Oman", iso: 512, region: "gulf", lon: 56, lat: 21 },
];

/**
 * Service mix by the role a market plays. From the client agenda:
 * exportation targets EU clients; franchises and agencies target Egyptian
 * and Arab nationals / investors. Per-country lists from EAC's sheet can
 * replace SERVICES_BY_MARKET without touching the pages.
 */
export const SERVICES_BY_ROLE: Record<TerritoryId, string[]> = {
  egypt: [
    "market-entry",
    "incorporation",
    "government",
    "joint-venture",
    "manufacturing",
    "franchise",
    "export",
  ],
  northAfrica: [
    "market-entry",
    "export",
    "matchmaking",
    "distributor",
    "agency",
    "sourcing",
    "joint-venture",
    "research",
  ],
  medEurope: [
    "market-entry",
    "joint-venture",
    "matchmaking",
    "ma",
    "distributor",
    "franchise",
    "investment-coach",
    "exhibitions",
    "research",
    "strategy",
  ],
  mideast: [
    "agency",
    "distributor",
    "matchmaking",
    "joint-venture",
    "trading",
    "exhibitions",
    "conflict",
    "research",
  ],
  gulf: [
    "investment-coach",
    "franchise",
    "agency",
    "ma",
    "joint-venture",
    "matchmaking",
    "trading",
    "research",
    "strategy",
  ],
};

/** `{name}` is replaced with the country. Claims stay at role level, never per country. */
export const ROLE_COPY: Record<
  TerritoryId,
  { eyebrow: string; lede: string; heading: string }
> = {
  egypt: {
    eyebrow: "Headquarters market",
    heading: "What we do in Egypt",
    lede: "Egypt is where the practice has operated since 2001 and where most files begin. Foreign companies enter through this desk; Egyptian companies use the same desk to reach Europe and the wider region.",
  },
  northAfrica: {
    eyebrow: "North Africa coverage",
    heading: "What we do in {name}",
    lede: "{name} falls inside our North Africa coverage. The work runs in both directions: establishing a position for companies coming in, and preparing local companies to export — Europe in particular.",
  },
  medEurope: {
    eyebrow: "Mediterranean Europe",
    heading: "What we do for {name}",
    lede: "For companies based in {name}, this desk opens Egypt, North Africa, the Mideast and the Gulf. For exporters in the region, {name} is a target market we can route into.",
  },
  mideast: {
    eyebrow: "Mideast coverage",
    heading: "What we do in {name}",
    lede: "{name} is part of our Mideast coverage: representation, joint ventures, and cross-border business development between regional and international partners.",
  },
  gulf: {
    eyebrow: "Arab Gulf",
    heading: "What we do in {name}",
    lede: "{name} is an Arab Gulf market, where the emphasis is capital and commercial partnership — investors, agencies, franchises, and joint ventures linking the Gulf with Egypt, North Africa and Europe.",
  },
};

/** Offices get their own counts: Egypt 7, Greece 10. Everyone else uses the region. */
export const SERVICES_BY_MARKET: Partial<Record<string, string[]>> = {
  egypt: SERVICES_BY_ROLE.egypt,
  greece: SERVICES_BY_ROLE.medEurope,
};

export const MARKET_BY_SLUG = new Map(MARKETS.map((m) => [m.slug, m]));
export const MARKET_BY_ISO = new Map(MARKETS.map((m) => [m.iso, m]));
export const MARKET_BY_NAME = new Map(MARKETS.map((m) => [m.name, m]));

export function servicesForMarket(market: Market): Service[] {
  const slugs = SERVICES_BY_MARKET[market.slug] ?? SERVICES_BY_ROLE[market.region];
  return servicesBySlug(slugs);
}

export function marketsByRegion(region: TerritoryId) {
  return MARKETS.filter((m) => m.region === region);
}

export function regionOf(market: Market) {
  return TERRITORIES.find((t) => t.id === market.region)!;
}

export function fill(template: string, name: string) {
  return template.replaceAll("{name}", name);
}
