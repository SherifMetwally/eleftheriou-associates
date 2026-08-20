import Link from "next/link";

const ITEMS = [
  "Let's connect",
  "Since 2001",
  "Alexandria",
  "Athens",
  "Mediterranean Europe",
  "North Africa",
  "Mideast",
  "Arab Gulf",
];

export default function MarqueeBand({ href = "/contact" }: { href?: string }) {
  const line = ITEMS.join("   ·   ");
  return (
    <Link
      href={href}
      className="marquee block bg-[var(--navy)] text-[var(--gold)] overflow-hidden border-y border-[var(--gold)]/25"
      aria-label="Let's connect"
    >
      <div className="marquee-track font-serif text-3xl md:text-5xl tracking-wide py-5 md:py-7 whitespace-nowrap">
        <span className="px-8">{line}   ·  </span>
        <span className="px-8">{line}   ·  </span>
      </div>
    </Link>
  );
}
