import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StatsStrip from "@/components/StatsStrip";
import {
  ABOUT_PATHS,
  ABOUT_VALUES,
  OFFICES,
  PROCESS,
} from "@/data/content";

export const metadata: Metadata = { title: "About EAC" };

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#05070d] text-white">
        <div className="pointer-events-none absolute -right-8 top-0 hidden h-full w-[46%] md:block">
          <Image
            src="/images/skyline.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-45"
            sizes="46vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070d] via-[#05070d]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-[#05070d]/40" />
        </div>
        <p className="pointer-events-none absolute right-[-0.06em] top-8 hidden select-none font-serif text-[11rem] leading-none text-white/[0.06] lg:block">
          2001
        </p>
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="hero-rise max-w-xl">
            <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
              <span className="hidden h-px w-8 bg-[var(--gold)] sm:block" />
              Since 2001 · Alexandria · Athens
            </p>
            <h1 className="font-serif text-4xl leading-[1.08] md:text-5xl lg:text-[3.4rem]">
              Independent counsel across a region of 450 million consumers.
            </h1>
            <p className="mt-6 max-w-lg text-white/80 leading-relaxed">
              Eleftheriou Associates is a consultancy operating in Egypt since
              2001, covering Mediterranean Europe, North Africa, the Mideast,
              and the Arab Gulf. We advise organisations in the public and
              private sectors — then stay to execute.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gold">
                Request a consultation
              </Link>
              <Link href="/services" className="btn-outline">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <p
              data-reveal
              className="text-xs uppercase tracking-[0.22em] text-[var(--gold-2)] mb-3"
            >
              Who we are
            </p>
            <h2
              data-reveal
              className="font-serif text-4xl md:text-5xl text-[var(--navy)] mb-6"
            >
              A one-stop desk, not a slide deck.
            </h2>
            <div data-reveal className="space-y-5 text-[var(--muted)] leading-relaxed">
              <p className="text-lg text-[var(--navy)]">
                We represent clients and help them establish leads in the region
                we operate in, with particular focus on Egypt and North Africa.
              </p>
              <p>
                Foreign companies enter Egypt and the territory we cover through
                one advisor. Egyptian and North African companies reach world
                markets — especially Europe — through the same desk. The work is
                independent management consultancy: eligibility, intelligence,
                counterparts, then hands-on setup.
              </p>
              <p>
                Sometimes we identify a need in the Egyptian or regional market
                that nobody has attempted before. We research the world for a
                supplier of that need, then structure joint-venture cooperation
                between the foreign and local counterpart.
              </p>
            </div>
          </div>
          <div data-reveal className="lg:col-span-6 relative h-[420px] overflow-hidden">
            <Image
              src="/images/boardroom.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--paper)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p
            data-reveal
            className="text-center text-xs uppercase tracking-[0.22em] text-[var(--gold-2)] mb-3"
          >
            Three directions of work
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl text-[var(--navy)] text-center mb-12"
          >
            How we put the practice to use
          </h2>
          <div data-stagger className="grid md:grid-cols-3 gap-px bg-[var(--line)]">
            {ABOUT_PATHS.map((item, i) => (
              <article key={item.title} className="bg-white p-8 md:p-10">
                <p className="font-serif text-4xl text-[var(--gold)] mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold-2)] mb-2">
                  {item.kicker}
                </p>
                <h3 className="font-serif text-2xl text-[var(--navy)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-8">
          <article
            data-reveal
            className="bg-[var(--navy)] text-white p-8 md:p-12"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)] mb-4">
              Vision
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-5">
              The trusted desk between Europe and the region.
            </h2>
            <p className="text-white/75 leading-relaxed">
              To be the one-stop shop for cross-border business development
              between Europe, Egypt, North Africa, the Mideast and the GCC —
              pragmatic, impartial, and measured by results rather than
              presentations.
            </p>
          </article>
          <article
            data-reveal
            className="border border-[var(--line)] border-t-[3px] border-t-[var(--navy)] p-8 md:p-12"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold-2)] mb-4">
              Mission
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--navy)] mb-5">
              Open the market. Then stay until it trades.
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">
              Research the market, advise on the course of action, implement
              the chosen path, establish the legal entity where required, and
              cooperate in increasing market share and profitability.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[var(--navy)] text-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p
            data-reveal
            className="text-center text-xs uppercase tracking-[0.22em] text-[var(--gold)] mb-3"
          >
            Methodology of work
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl md:text-5xl text-center mb-14"
          >
            Research. Advise. Connect. Establish. Grow.
          </h2>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-[var(--gold)]/30" />
            <div data-stagger className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
              {PROCESS.map((p) => (
                <div key={p.step} className="text-center px-2">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--navy)] font-serif text-xl text-[var(--gold)]">
                    {p.step}
                  </div>
                  <h3 className="font-serif text-xl mb-2">{p.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p
            data-reveal
            className="text-center text-xs uppercase tracking-[0.22em] text-[var(--gold-2)] mb-3"
          >
            Company values
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl text-[var(--navy)] text-center mb-12"
          >
            How we hold ourselves
          </h2>
          <div data-stagger className="grid md:grid-cols-3 gap-10 md:divide-x divide-[var(--line)]">
            {ABOUT_VALUES.map((v) => (
              <article key={v.title} className="text-center px-2 md:px-8">
                <h3 className="font-serif text-2xl text-[var(--navy)] mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--paper)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-12 gap-10 items-center">
          <div data-reveal className="lg:col-span-5 relative h-80 overflow-hidden">
            <Image
              src="/images/meeting.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="lg:col-span-7">
            <p
              data-reveal
              className="text-xs uppercase tracking-[0.22em] text-[var(--gold-2)] mb-3"
            >
              Leadership
            </p>
            <h2
              data-reveal
              className="font-serif text-4xl text-[var(--navy)] mb-3"
            >
              George Eleftheriou
            </h2>
            <p data-reveal className="text-sm uppercase tracking-[0.16em] text-[var(--gold-2)] mb-6">
              Managing Director
            </p>
            <p data-reveal className="text-[var(--muted)] leading-relaxed mb-6">
              The practice is led from Alexandria, with a European office in
              Palaio Faliro, Athens. The Managing Director’s full message and
              profile will be published here as supplied. Until then, the
              standard of the office is the one we already work to: independent
              counsel, confidential files, and execution that does not stop at
              advice.
            </p>
            <blockquote
              data-reveal
              className="border-l-[3px] border-[var(--gold)] pl-5 text-[var(--navy)] font-serif text-2xl leading-snug"
            >
              Client matters are confidential. No disclosure of client work to
              third parties without written consent.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p
                data-reveal
                className="text-xs uppercase tracking-[0.22em] text-[var(--gold-2)] mb-3"
              >
                Offices
              </p>
              <h2
                data-reveal
                className="font-serif text-4xl text-[var(--navy)]"
              >
                Two desks. One territory.
              </h2>
            </div>
            <Link
              href="/territories"
              className="link-arrow text-xs uppercase tracking-[0.16em] text-[var(--gold-2)]"
            >
              View territories →
            </Link>
          </div>
          <div data-stagger className="grid md:grid-cols-2 gap-8">
            {OFFICES.map((o) => (
              <article
                key={o.city}
                className="hover-lift border border-[var(--line)] border-t-[3px] border-t-[var(--navy)] p-8 md:p-10"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold-2)] mb-2">
                  {o.note}
                </p>
                <h3 className="font-serif text-4xl text-[var(--navy)] mb-1">
                  {o.city}
                </h3>
                <p className="text-sm text-[var(--muted)] mb-5">{o.country}</p>
                <p className="text-[var(--navy)] leading-relaxed">{o.address}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)] text-white py-16 md:py-20">
        <div data-reveal className="mx-auto max-w-6xl px-5 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)] mb-3">
              Next step
            </p>
            <h2 className="font-serif text-4xl mb-4">
              Bring the requirement. We will tell you if we can move it.
            </h2>
            <p className="text-white/70 leading-relaxed">
              Market entry, export enablement, or a joint venture around an
              unmet need. Serious inquiries only.
            </p>
          </div>
          <Link href="/contact" className="btn-gold w-fit">
            Request a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
