import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Site Map" };

const GROUPS = [
  {
    title: "Primary",
    links: [
      ["Home", "/"],
      ["About us", "/about"],
      ["Services", "/services"],
      ["Territories & markets", "/territories"],
      ["Sectors", "/sectors"],
      ["Investment opportunities", "/investment"],
      ["News & insights", "/news"],
      ["Success stories", "/success-stories"],
      ["Events & activities", "/events"],
      ["Careers", "/careers"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy policy", "/privacy"],
      ["Terms of use", "/terms"],
    ],
  },
];

export default function HtmlSitemapPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold-2)] mb-3">
        Index
      </p>
      <h1 className="font-serif text-5xl text-[var(--navy)] mb-10">Site map</h1>
      {GROUPS.map((g) => (
        <section key={g.title} className="mb-10">
          <h2 className="font-serif text-2xl text-[var(--navy)] mb-4">{g.title}</h2>
          <ul className="space-y-2 text-[var(--navy)]">
            {g.links.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-[var(--gold-2)]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
