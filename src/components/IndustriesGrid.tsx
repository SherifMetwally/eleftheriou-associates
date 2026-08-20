import Link from "next/link";
import { SECTORS } from "@/data/content";

const ROW_SIZES = [8, 8, 9];

function Icon({ i }: { i: number }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-4 w-4 shrink-0",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const n = i % 8;
  if (n === 0)
    return (
      <svg {...common}>
        <path d="M12 3v18M8 7c2 2 6 2 8 0M8 17c2-2 6-2 8 0" />
      </svg>
    );
  if (n === 1)
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l2.5 1.5" />
      </svg>
    );
  if (n === 2)
    return (
      <svg {...common}>
        <path d="M4 19V7l8-4 8 4v12" />
        <path d="M9 19v-6h6v6" />
      </svg>
    );
  if (n === 3)
    return (
      <svg {...common}>
        <path d="M5 12h14M12 5v14" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    );
  if (n === 4)
    return (
      <svg {...common}>
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    );
  if (n === 5)
    return (
      <svg {...common}>
        <path d="M12 3 4 8v8l8 5 8-5V8l-8-5Z" />
      </svg>
    );
  if (n === 6)
    return (
      <svg {...common}>
        <path d="M4 17h16M7 17V9l5-4 5 4v8" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M5 19h14M7 19V9h10v10M9 9V6h6v3" />
    </svg>
  );
}

function splitRows(items: string[]) {
  const out: string[][] = [];
  let i = 0;
  for (const n of ROW_SIZES) {
    out.push(items.slice(i, i + n));
    i += n;
  }
  return out;
}

function Pill({ name, i, ghost }: { name: string; i: number; ghost?: boolean }) {
  return (
    <Link
      href="/sectors"
      className="sector-pill shrink-0"
      tabIndex={ghost ? -1 : undefined}
      aria-hidden={ghost || undefined}
    >
      <Icon i={i} />
      <span>{name}</span>
    </Link>
  );
}

export default function IndustriesGrid() {
  const lines = splitRows(SECTORS);

  return (
    <section className="bg-[#f4f6fa] py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5">
        <div data-reveal className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold-2)] mb-3">
            Coverage by industry
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--navy)]">
            Industries we serve
          </h2>
          <p className="mt-3 text-[var(--muted)] max-w-xl mx-auto">
            {SECTORS.length} sectors. The same desk — irrespective of industry.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 md:w-40 bg-gradient-to-r from-[#f4f6fa] from-20% to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 md:w-40 bg-gradient-to-l from-[#f4f6fa] from-20% to-transparent" />
        <div className="space-y-3.5">
          {lines.map((line, r) => (
            <div key={r} className="industry-row">
              <div
                className={`industry-track ${r % 2 === 1 ? "reverse" : ""}`}
                style={{ animationDuration: `${38 + r * 6}s` }}
              >
                <div className="flex gap-3 pr-3">
                  {line.map((name) => (
                    <Pill key={name} name={name} i={SECTORS.indexOf(name)} />
                  ))}
                </div>
                <div className="flex gap-3 pr-3" aria-hidden>
                  {line.map((name) => (
                    <Pill
                      key={`${name}-dup`}
                      name={name}
                      i={SECTORS.indexOf(name)}
                      ghost
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/sectors"
          className="link-arrow text-xs uppercase tracking-[0.16em] text-[var(--gold-2)] font-semibold"
        >
          All sectors →
        </Link>
      </div>
    </section>
  );
}
