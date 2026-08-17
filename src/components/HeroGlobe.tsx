"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  geoDistance,
  geoGraticule10,
  geoOrthographic,
  geoPath,
} from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { FeatureCollection, Geometry } from "geojson";
import {
  COUNTRY_MARKERS,
  ISO_TO_TERRITORY,
  TERRITORIES,
  type TerritoryId,
} from "@/data/territories";
import { ARC_CROSS, ARC_HUB, ARC_SPOKES, HUBS } from "@/data/hubs";
import { asset } from "@/lib/asset";

const SIZE = 900;
const R = SIZE / 2;
/** >1 pushes the globe past the viewBox so it reads as a cropped close-up. */
const ZOOM = 1.34;
const GLOBE_R = R * ZOOM;
const CX = SIZE * 0.5;
const CY = SIZE * 0.58;

const GOLD = "#c9a84c";
const GOLD_HOT = "#e6c874";
const LAND = "#39435c";
const LAND_EDGE = "#5c6883";

/** Where the globe turns to when a territory is chosen. */
const TERRITORY_VIEW: Record<TerritoryId, [number, number]> = {
  egypt: [30, 26],
  northAfrica: [8, 28],
  medEurope: [12, 42],
  mideast: [40, 33],
  gulf: [50, 24],
};

const DEFAULT_VIEW: [number, number] = [26, 25];

type CountryProps = { name?: string };
type CountryFeature = GeoJSON.Feature<Geometry, CountryProps> & {
  id?: number | string;
};

export default function HeroGlobe({
  variant = "hero",
}: {
  variant?: "hero" | "page";
}) {
  const uid = useId().replace(/:/g, "");
  const [countries, setCountries] = useState<CountryFeature[]>([]);
  const [view, setView] = useState<[number, number]>(DEFAULT_VIEW);
  /** A single country lights up on hover; the legend lights a whole territory. */
  const [hoverKey, setHoverKey] = useState<string | null>(null);
  const [legendRegion, setLegendRegion] = useState<TerritoryId | null>(null);
  const [label, setLabel] = useState<string>("");
  const [labelRegion, setLabelRegion] = useState<TerritoryId | null>(null);
  const target = useRef<[number, number]>(DEFAULT_VIEW);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;
          fetch(asset("/maps/countries-110m.json"))
      .then((res) => res.json())
      .then((topo: Topology<{ countries: GeometryCollection }>) => {
        if (cancelled) return;
        const fc = feature(
          topo,
          topo.objects.countries
        ) as unknown as FeatureCollection<Geometry, CountryProps>;
        setCountries(fc.features as CountryFeature[]);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  function turnTo(next: [number, number]) {
    target.current = next;
    if (frame.current !== null) return;
    const step = () => {
      setView((current) => {
        const [tl, tp] = target.current;
        const dl = tl - current[0];
        const dp = tp - current[1];
        if (Math.abs(dl) < 0.15 && Math.abs(dp) < 0.15) {
          frame.current = null;
          return [tl, tp];
        }
        frame.current = requestAnimationFrame(step);
        return [current[0] + dl * 0.12, current[1] + dp * 0.12];
      });
    };
    frame.current = requestAnimationFrame(step);
  }

  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    },
    []
  );

  const { path, projection } = useMemo(() => {
    const projection = geoOrthographic()
      .rotate([-view[0], -view[1]])
      .scale(GLOBE_R)
      .translate([CX, CY]);
    return { path: geoPath(projection), projection };
  }, [view]);

  const center: [number, number] = [view[0], view[1]];
  const visible = (lon: number, lat: number) =>
    geoDistance([lon, lat], center) < Math.PI / 2 - 0.03;

  const hubPoints = HUBS.filter((h) => visible(h.lon, h.lat)).map((h) => {
    const [x, y] = projection([h.lon, h.lat]) ?? [0, 0];
    return { ...h, x, y };
  });

  /**
   * Arcs are drawn in screen space and bowed away from the globe centre, so
   * they lift off the surface instead of lying flat on it.
   */
  const arcs = useMemo(() => {
    const byName = new Map(HUBS.map((h) => [h.name, h]));
    const pairs: [string, string][] = [
      ...ARC_SPOKES.map((s) => [ARC_HUB, s] as [string, string]),
      ...ARC_CROSS,
    ];
    return pairs
      .map(([fromName, toName]) => {
        const from = byName.get(fromName);
        const to = byName.get(toName);
        if (!from || !to) return null;
        if (!visible(from.lon, from.lat) || !visible(to.lon, to.lat)) return null;

        const a = projection([from.lon, from.lat]);
        const b = projection([to.lon, to.lat]);
        if (!a || !b) return null;

        const mx = (a[0] + b[0]) / 2;
        const my = (a[1] + b[1]) / 2;
        const chord = Math.hypot(b[0] - a[0], b[1] - a[1]);
        const lift = chord * 0.34 + 18;

        let ox = mx - CX;
        let oy = my - CY;
        const away = Math.hypot(ox, oy);
        if (away < chord * 0.2) {
          ox = -(b[1] - a[1]);
          oy = b[0] - a[0];
        }
        const norm = Math.hypot(ox, oy) || 1;
        const cx = mx + (ox / norm) * lift;
        const cy = my + (oy / norm) * lift;

        const f = (n: number) => n.toFixed(2);
        return `M${f(a[0])},${f(a[1])} Q${f(cx)},${f(cy)} ${f(b[0])},${f(b[1])}`;
      })
      .filter((d): d is string => Boolean(d));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projection, view]);

  const graticule = path(geoGraticule10());
  const sphere = path({ type: "Sphere" });
  const loaded = countries.length > 0;

  return (
    <>
      <div
        className={
          variant === "page"
            ? "absolute -top-[6%] -bottom-[10%] right-[-10%] w-[115%] sm:right-[-6%] sm:w-[92%] md:right-[-4%] md:w-[72%] lg:w-[64%] hero-globe-fade"
            : "absolute -top-[20%] -bottom-[20%] right-[-22%] w-[125%] sm:right-[-14%] sm:w-[100%] md:right-[-8%] md:w-[78%] lg:right-[-4%] lg:w-[66%] hero-globe-fade"
        }
      >
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="h-full w-full"
        role="img"
        aria-label="Interactive globe of the markets covered by Eleftheriou Associates"
        onMouseLeave={() => {
          setHoverKey(null);
          setLegendRegion(null);
          setLabel("");
          setLabelRegion(null);
        }}
      >
        <title>Hover a country to highlight the territory it belongs to</title>
        <defs>
          <radialGradient id={`${uid}-ocean`} cx="38%" cy="30%" r="78%">
            <stop offset="0%" stopColor="#1d2739" />
            <stop offset="55%" stopColor="#111827" />
            <stop offset="100%" stopColor="#070b14" />
          </radialGradient>
          <radialGradient id={`${uid}-atmo`} cx="50%" cy="50%" r="50%">
            <stop offset="82%" stopColor="rgba(201,168,76,0)" />
            <stop offset="95%" stopColor="rgba(201,168,76,0.22)" />
            <stop offset="100%" stopColor="rgba(201,168,76,0)" />
          </radialGradient>
          <radialGradient id={`${uid}-shade`} cx="34%" cy="28%" r="86%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="72%" stopColor="rgba(0,0,0,0.12)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.55)" />
          </radialGradient>
          <filter id={`${uid}-glow`} x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="3.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx={R} cy={R} r={R - 6} fill={`url(#${uid}-atmo)`} />
        <path d={sphere || undefined} fill={`url(#${uid}-ocean)`} />
        <path
          d={graticule || undefined}
          fill="none"
          stroke="#ffffff"
          strokeOpacity={0.05}
          strokeWidth={0.6}
        />

        {countries.map((c, i) => {
          const iso = Number(c.id);
          const region = ISO_TO_TERRITORY.get(iso);
          const name = c.properties?.name ?? "";
          const key = `c-${i}`;
          const isHot =
            region !== undefined &&
            (hoverKey === key || (legendRegion !== null && region === legendRegion));
          return (
            <path
              key={key}
              d={path(c) || undefined}
              fill={isHot ? GOLD : LAND}
              fillOpacity={isHot ? 0.95 : region ? 0.95 : 0.62}
              stroke={isHot ? GOLD_HOT : LAND_EDGE}
              strokeWidth={isHot ? 1.1 : 0.5}
              strokeOpacity={region ? 0.75 : 0.35}
              style={{
                transition: "fill 180ms ease, fill-opacity 180ms ease",
                cursor: region ? "pointer" : "default",
              }}
              onMouseEnter={() => {
                if (!region) return;
                setHoverKey(key);
                setLegendRegion(null);
                setLabel(name);
                setLabelRegion(region);
              }}
              onClick={() => {
                if (!region) return;
                setHoverKey(key);
                setLegendRegion(null);
                setLabel(name);
                setLabelRegion(region);
                turnTo(TERRITORY_VIEW[region]);
              }}
            >
              {region ? <title>{name}</title> : null}
            </path>
          );
        })}

        {loaded &&
          COUNTRY_MARKERS.filter((m) => visible(m.lon, m.lat)).map((m) => {
          const [x, y] = projection([m.lon, m.lat]) ?? [0, 0];
          const key = `m-${m.iso}`;
          const isHot =
            hoverKey === key || (legendRegion !== null && m.region === legendRegion);
          return (
            <circle
              key={key}
              cx={x}
              cy={y}
              r={isHot ? 6 : 4.2}
              fill={isHot ? GOLD_HOT : GOLD}
              fillOpacity={isHot ? 1 : 0.75}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => {
                setHoverKey(key);
                setLegendRegion(null);
                setLabel(m.name);
                setLabelRegion(m.region);
              }}
              onClick={() => {
                setHoverKey(key);
                setLegendRegion(null);
                setLabel(m.name);
                setLabelRegion(m.region);
                turnTo(TERRITORY_VIEW[m.region]);
              }}
            >
              <title>{m.name}</title>
            </circle>
          );
        })}

        {loaded && (
          <g pointerEvents="none">
            {arcs.map((d, i) => (
              <g key={`arc-${i}`}>
                <path
                  d={d}
                  fill="none"
                  stroke={GOLD}
                  strokeOpacity={0.12}
                  strokeWidth={3}
                  strokeLinecap="round"
                />
                <path
                  d={d}
                  fill="none"
                  stroke={GOLD_HOT}
                  strokeOpacity={0.55}
                  strokeWidth={0.9}
                  strokeLinecap="round"
                />
              </g>
            ))}
            {hubPoints.map((h) => (
              <g key={h.name} filter={`url(#${uid}-glow)`}>
                <circle
                  cx={h.x}
                  cy={h.y}
                  r={h.major ? 3.4 : 2}
                  fill={h.major ? GOLD_HOT : GOLD}
                  fillOpacity={h.major ? 0.95 : 0.7}
                />
              </g>
            ))}
          </g>
        )}

        <path d={sphere || undefined} fill={`url(#${uid}-shade)`} pointerEvents="none" />
        <path
          d={sphere || undefined}
          fill="none"
          stroke={GOLD}
          strokeOpacity={0.28}
          strokeWidth={1.2}
          pointerEvents="none"
        />
      </svg>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-20">
        <div className="mx-auto max-w-6xl px-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          {TERRITORIES.map((t) => (
            <button
              key={t.id}
              type="button"
              onMouseEnter={() => {
                setLegendRegion(t.id);
                setHoverKey(null);
                setLabel(t.name);
                setLabelRegion(t.id);
              }}
              onClick={() => {
                setLegendRegion(t.id);
                setHoverKey(null);
                setLabel(t.name);
                setLabelRegion(t.id);
                turnTo(TERRITORY_VIEW[t.id]);
              }}
              className={`inline-flex items-center gap-2 text-xs tracking-wide ${
                labelRegion === t.id
                  ? "text-[var(--gold)] font-semibold"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: labelRegion === t.id ? GOLD : "#6a7388" }}
              />
              {t.name}
            </button>
          ))}
          <span className="text-white/45 text-xs">
            {label
              ? `${label}${
                  labelRegion && label !== TERRITORIES.find((t) => t.id === labelRegion)?.name
                    ? ` — ${TERRITORIES.find((t) => t.id === labelRegion)?.name}`
                    : ""
                }`
              : "Hover a country to highlight it"}
          </span>
        </div>
      </div>
    </>
  );
}
