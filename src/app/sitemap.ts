import type { MetadataRoute } from "next";
import { MARKETS } from "@/data/markets";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.eleftheriou-associates.eu";
  const routes = [
    "",
    "/about",
    "/services",
    "/territories",
    "/sectors",
    "/news",
    "/investment",
    "/success-stories",
    "/events",
    "/careers",
    "/site-map",
    "/contact",
    "/privacy",
    "/terms",
    ...MARKETS.map((m) => `/markets/${m.slug}`),
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-08-16"),
  }));
}
