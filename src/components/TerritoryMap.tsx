"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { FeatureCollection, Geometry } from "geojson";
import {
  COUNTRY_MARKERS,
  GLOBAL_REACH,
  ISO_TO_TERRITORY,
  TERRITORIES,
  type TerritoryId,
} from "@/data/territories";
import { asset } from "@/lib/asset";

const WIDTH = 960;
const HEIGHT = 520;

const GOLD = "#c9a84c";
const GOLD_HOT = "#e6c874";

type CountryProps = { name?: string };
type CountryFeature = GeoJSON.Feature<Geometry, CountryProps> & {
  id?: number | string;
};

export default function TerritoryMap() {
  const uid = useId().replace(/:/g, "");
  const [countries, setCountries] = useState<CountryFeature[]>([]);
  const [failed, setFailed] = useState(false);
  const [hovered, setHovered] = useState<TerritoryId | null>(null);
  const [country, setCountry] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    fetch(asset("/maps/countries-50m.json"))
      .then((res) => {
        if (!res.ok) throw new Error("map load failed");
        return res.json();
      })
      .then((topo: Topology<{ countries: GeometryCollection }>) => {
        if (cancelled) return;
        const fc = feature(
          topo,
          topo.objects.countries
        ) as unknown as FeatureCollection<Geometry, CountryProps>;
        setCountries(fc.features as CountryFeature[]);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const { path, projection, covered, context } = useMemo(() => {
    const covered = countries.filter((c) => ISO_TO_TERRITORY.has(Number(c.id)));
    const context = countries.filter((c) => !ISO_TO_TERRITORY.has(Number(c.id)));

    const fitTarget: FeatureCollection<Geometry, CountryProps> = {
      type: "FeatureCollection",
      features: [
        ...covered,
        ...COUNTRY_MARKERS.map((m) => ({
          type: "Feature" as const,
          properties: { name: m.name },
          geometry: { type: "Point" as const, coordinates: [m.lon, m.lat] },
        })),
      ],
    };

    const projection = geoMercator();
    if (covered.length > 0) {
      projection.fitExtent(
        [
          [18, 18],
          [WIDTH - 18, HEIGHT - 18],
        ],
        fitTarget
      );
    }

    return { path: geoPath(projection), projection, covered, context };
  }, [countries]);

  const activeTerritory = hovered
    ? TERRITORIES.find((t) => t.id === hovered)
    : undefined;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] items-start">
      <div
        className="overflow-hidden bg-[#070b14]"
        onMouseLeave={() => setHovered(null)}
      >
        {failed ? (
          <div className="h-[320px] flex items-center justify-center text-sm text-white/70">
            Map could not be loaded. Country lists remain available alongside.
          </div>
        ) : (
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            role="img"
            aria-label="Map of the territories covered by Eleftheriou Associates"
            className="w-full h-auto block"
          >
            <title>Hover a country to highlight the whole territory</title>
            <defs>
              <radialGradient id={`${uid}-sea`} cx="50%" cy="45%" r="75%">
                <stop offset="0%" stopColor="#141c2e" />
                <stop offset="100%" stopColor="#070b14" />
              </radialGradient>
            </defs>
            <rect width={WIDTH} height={HEIGHT} fill={`url(#${uid}-sea)`} />

            {context.map((c, i) => (
              <path
                key={`x-${i}`}
                d={path(c) || undefined}
                fill="#161d2c"
                stroke="#222b3d"
                strokeWidth={0.4}
              />
            ))}

            {covered.map((c, i) => {
              const iso = Number(c.id);
              const region = ISO_TO_TERRITORY.get(iso)!;
              const name = c.properties?.name ?? String(iso);
              const isHot = region === hovered;
              return (
                <path
                  key={`v-${i}`}
                  d={path(c) || undefined}
                  fill={isHot ? GOLD : "#3a445c"}
                  stroke={isHot ? GOLD_HOT : "#5c6883"}
                  strokeWidth={isHot ? 1.1 : 0.5}
                  className="cursor-pointer"
                  style={{ transition: "fill 160ms ease" }}
                  onMouseEnter={() => {
                    setHovered(region);
                    setCountry(name);
                  }}
                  onClick={() => {
                    setHovered(region);
                    setCountry(name);
                  }}
                >
                  <title>{name}</title>
                </path>
              );
            })}

            {covered.length > 0 &&
              COUNTRY_MARKERS.map((m) => {
              const [x, y] = projection([m.lon, m.lat]) ?? [0, 0];
              const isHot = m.region === hovered;
              return (
                <circle
                  key={`m-${m.iso}`}
                  cx={x}
                  cy={y}
                  r={isHot ? 6 : 4}
                  fill={isHot ? GOLD_HOT : GOLD}
                  fillOpacity={isHot ? 1 : 0.75}
                  className="cursor-pointer"
                  onMouseEnter={() => {
                    setHovered(m.region);
                    setCountry(m.name);
                  }}
                  onClick={() => {
                    setHovered(m.region);
                    setCountry(m.name);
                  }}
                >
                  <title>{m.name}</title>
                </circle>
              );
            })}
          </svg>
        )}

        <div className="flex flex-wrap gap-x-5 gap-y-2 px-4 py-3 border-t border-white/10 bg-[#0a1020]">
          {TERRITORIES.map((t) => (
            <button
              key={t.id}
              type="button"
              onMouseEnter={() => setHovered(t.id)}
              onClick={() => {
                setHovered(t.id);
                setCountry(t.countries[0]);
              }}
              className={`inline-flex items-center gap-2 text-xs tracking-wide ${
                hovered === t.id
                  ? "text-[var(--gold)] font-semibold"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: hovered === t.id ? GOLD : "#6a7388" }}
              />
              {t.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        {activeTerritory ? (
          <>
            <h3 className="font-serif text-3xl text-[var(--navy)] mb-1">
              {activeTerritory.name}
            </h3>
            {country ? (
              <p className="text-sm text-[var(--gold-2)] mb-1">{country}</p>
            ) : null}
            <p className="text-sm text-[var(--gold-2)] mb-4">
              {activeTerritory.short}
            </p>
            <p className="text-[var(--muted)] leading-relaxed mb-5">
              {activeTerritory.summary}
            </p>
            <ul className="flex flex-wrap gap-2 mb-8">
              {activeTerritory.countries.map((c) => (
                <li key={c}>
                  <button
                    type="button"
                    onClick={() => setCountry(c)}
                    className={`text-xs border px-2.5 py-1 ${
                      country === c
                        ? "border-[var(--navy)] bg-[var(--navy)] text-white"
                        : "border-[var(--line)] text-[var(--navy)] bg-white"
                    }`}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-[var(--muted)] leading-relaxed mb-8">
            Hover or tap a country and the whole territory lights up — Egypt,
            North Africa, Mediterranean Europe, the Mideast, or the Arab Gulf.
            The country list for that territory appears here.
          </p>
        )}
        <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)] mb-2">
          Additional international reach
        </p>
        <p className="text-sm text-[var(--muted)]">
          {GLOBAL_REACH.map((g) => g.name).join(" · ")} — for matchmaking and
          counterpart search beyond the core operating territory.
        </p>
      </div>
    </div>
  );
}
