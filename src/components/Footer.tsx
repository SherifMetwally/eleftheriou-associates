import Link from "next/link";
import { CONTACT, OFFICES, PILLARS } from "@/data/content";
import { TERRITORIES } from "@/data/territories";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white/80">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-white text-xl mb-3">Eleftheriou Associates</p>
          <p className="text-sm leading-relaxed">
            Business development consultants operating in Egypt since 2001.
            Covering Mediterranean Europe, North Africa, the Mideast, and the
            Arab Gulf.
          </p>
        </div>
        <div>
          <p className="text-[var(--gold)] text-xs uppercase tracking-[0.18em] mb-3">
            Quick links
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-white">
                Insights
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/success-stories" className="hover:text-white">
                Success stories
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/site-map" className="hover:text-white">
                Site map
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[var(--gold)] text-xs uppercase tracking-[0.18em] mb-3">
            Territories
          </p>
          <ul className="space-y-2 text-sm">
            {TERRITORIES.map((t) => (
              <li key={t.id}>
                <Link href="/territories" className="hover:text-white">
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-[var(--gold)] text-xs uppercase tracking-[0.18em] mt-6 mb-3">
            Services
          </p>
          <ul className="space-y-2 text-sm">
            {PILLARS.map((p) => (
              <li key={p.title}>
                <Link href={p.href} className="hover:text-white">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[var(--gold)] text-xs uppercase tracking-[0.18em] mb-3">
            Contact
          </p>
          <ul className="space-y-3 text-sm">
            {OFFICES.map((o) => (
              <li key={o.city}>
                <span className="text-white">{o.city}</span>
                <span className="block text-white/70">{o.address}</span>
              </li>
            ))}
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex gap-3 pt-2">
              <span className="text-white/50">FB</span>
              <span className="text-white/50">X</span>
              <span className="text-white/50">LinkedIn</span>
            </li>
          </ul>
          <p className="text-xs mt-6">© 2001–2026 Eleftheriou Associates</p>
          <p className="text-xs mt-2 space-x-3">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
