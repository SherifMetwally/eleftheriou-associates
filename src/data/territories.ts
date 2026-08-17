/**
 * EAC operating territories, taken from:
 * - Company brief (Egypt, North Africa, Med Europe, Mideast, Arab Gulf)
 * - July 2026 website document / contract
 *
 * ISO numeric IDs match Natural Earth / world-atlas country features.
 * Egypt is HQ / primary market and is colored separately so it stands out.
 *
 * Small states (Malta, Bahrain, Qatar, etc.) also have map markers because
 * their land polygons are easy to miss even on a 50m atlas.
 */

export type TerritoryId =
  | "egypt"
  | "northAfrica"
  | "medEurope"
  | "mideast"
  | "gulf";

export type Territory = {
  id: TerritoryId;
  name: string;
  short: string;
  color: string;
  hover: string;
  summary: string;
  countries: string[];
  isoNumeric: number[];
};

/** Tiny states that need a visible marker. lon/lat so they show even if the atlas omits the polygon. */
export const COUNTRY_MARKERS: {
  iso: number;
  name: string;
  region: TerritoryId;
  lon: number;
  lat: number;
}[] = [
  { iso: 48, name: "Bahrain", region: "gulf", lon: 50.56, lat: 26.07 },
  { iso: 196, name: "Cyprus", region: "medEurope", lon: 33.43, lat: 35.13 },
  { iso: 275, name: "Palestine", region: "mideast", lon: 35.2, lat: 31.95 },
  { iso: 414, name: "Kuwait", region: "gulf", lon: 47.48, lat: 29.31 },
  { iso: 422, name: "Lebanon", region: "mideast", lon: 35.5, lat: 33.89 },
  { iso: 470, name: "Malta", region: "medEurope", lon: 14.38, lat: 35.94 },
  { iso: 499, name: "Montenegro", region: "medEurope", lon: 19.26, lat: 42.71 },
  { iso: 634, name: "Qatar", region: "gulf", lon: 51.18, lat: 25.35 },
  { iso: 784, name: "United Arab Emirates", region: "gulf", lon: 54.38, lat: 24.45 },
];

export const TERRITORIES: Territory[] = [
  {
    id: "egypt",
    name: "Egypt",
    short: "Headquarters & primary market",
    color: "#c9a84c",
    hover: "#e0c36a",
    summary:
      "Operating in Egypt since 2001. The primary market for foreign market entry, joint ventures, and support to Egyptian companies seeking to export.",
    countries: ["Egypt"],
    isoNumeric: [818],
  },
  {
    id: "northAfrica",
    name: "North Africa",
    short: "Maghreb & neighbouring markets",
    color: "#2f6f6a",
    hover: "#3d8a84",
    summary:
      "Coverage across North Africa for market entry, matchmaking, and SME export enablement — with particular focus on Egypt and the wider North African market.",
    countries: [
      "Libya",
      "Tunisia",
      "Algeria",
      "Morocco",
      "Mauritania",
      "Western Sahara",
    ],
    isoNumeric: [434, 788, 12, 504, 478, 732],
  },
  {
    id: "medEurope",
    name: "Mediterranean Europe",
    short: "Med Europe",
    color: "#1a3a6e",
    hover: "#2a5299",
    summary:
      "European counterparts — especially Mediterranean Europe — for inbound investment into Egypt and the region, and for Egyptian / North African companies entering Europe.",
    countries: [
      "Spain",
      "Portugal",
      "France",
      "Italy",
      "Greece",
      "Cyprus",
      "Malta",
      "Croatia",
      "Slovenia",
      "Albania",
      "Montenegro",
      "Bosnia and Herzegovina",
    ],
    isoNumeric: [724, 620, 250, 380, 300, 196, 470, 191, 705, 8, 499, 70],
  },
  {
    id: "mideast",
    name: "Mideast",
    short: "Levant & wider Middle East",
    color: "#6b3a4a",
    hover: "#8a4d61",
    summary:
      "Middle East coverage for representation, joint ventures, and cross-border business development between regional and international partners.",
    countries: [
      "Turkey",
      "Lebanon",
      "Syria",
      "Jordan",
      "Iraq",
      "Palestine",
      "Yemen",
    ],
    isoNumeric: [792, 422, 760, 400, 368, 275, 887],
  },
  {
    id: "gulf",
    name: "Arab Gulf",
    short: "GCC markets",
    color: "#8a6a2a",
    hover: "#b08938",
    summary:
      "Arab Gulf markets for investors, agencies, franchises, and partnerships linking Gulf capital and companies with Egypt, North Africa, and Europe.",
    countries: [
      "Saudi Arabia",
      "United Arab Emirates",
      "Kuwait",
      "Qatar",
      "Bahrain",
      "Oman",
    ],
    isoNumeric: [682, 784, 414, 634, 48, 512],
  },
];

/** Reach mentioned in World Opportunities — not core operating HQ territory. */
export const GLOBAL_REACH = [
  { name: "Far East", note: "Matchmaking and international market connections" },
  { name: "United States & Canada", note: "Inbound investors and export counterparts" },
];

export const ISO_TO_TERRITORY = new Map<number, TerritoryId>();
for (const t of TERRITORIES) {
  for (const iso of t.isoNumeric) ISO_TO_TERRITORY.set(iso, t.id);
}

export function territoryById(id: TerritoryId) {
  return TERRITORIES.find((t) => t.id === id)!;
}

export const COVERED_COUNTRY_COUNT = TERRITORIES.reduce(
  (n, t) => n + t.countries.length,
  0
);
