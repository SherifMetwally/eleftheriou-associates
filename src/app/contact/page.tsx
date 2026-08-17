import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { CONTACT, OFFICES } from "@/data/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact"
        image="/images/columns.jpg"
      >
        Tell us about your market-entry, export, or joint-venture requirement.
        We will respond to serious inquiries.
      </PageHero>
      <div className="mx-auto max-w-6xl px-5 py-16 grid md:grid-cols-2 gap-12">
        <ul className="text-sm text-[var(--navy)] space-y-5">
          {OFFICES.map((o) => (
            <li key={o.city}>
              <p className="font-semibold">
                {o.city}, {o.country}
              </p>
              <p className="text-[var(--muted)]">{o.note}</p>
              <p className="text-[var(--muted)]">{o.address}</p>
            </li>
          ))}
          <li>
            <p className="font-semibold">Email</p>
            <a href={`mailto:${CONTACT.email}`} className="text-[var(--gold-2)]">
              {CONTACT.email}
            </a>
          </li>
          <li>
            <p className="font-semibold">Appointment</p>
            <p className="text-[var(--muted)]">
              Request a call via this form. Calendly will be linked when EAC
              provides the account.
            </p>
          </li>
          <li>
            <p className="font-semibold">WhatsApp</p>
            <p className="text-[var(--muted)]">
              Number to be confirmed by EAC; the button will go live on the
              same number.
            </p>
          </li>
        </ul>
      <form
        className="bg-white border border-[var(--line)] p-6 space-y-4"
        action={`mailto:${CONTACT.email}`}
        method="post"
        encType="text/plain"
      >
        <label className="block text-sm">
          Name
          <input
            required
            name="name"
            className="mt-1 w-full border border-[var(--line)] px-3 py-2 bg-[var(--paper)]"
          />
        </label>
        <label className="block text-sm">
          Email
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full border border-[var(--line)] px-3 py-2 bg-[var(--paper)]"
          />
        </label>
        <label className="block text-sm">
          Company
          <input
            name="company"
            className="mt-1 w-full border border-[var(--line)] px-3 py-2 bg-[var(--paper)]"
          />
        </label>
        <label className="block text-sm">
          Inquiry type
          <select
            name="type"
            className="mt-1 w-full border border-[var(--line)] px-3 py-2 bg-[var(--paper)]"
          >
            <option>General inquiry</option>
            <option>Market entry</option>
            <option>Export assistance</option>
            <option>Joint venture / matchmaking</option>
            <option>Request a call / appointment</option>
            <option>Careers / CV</option>
          </select>
        </label>
        <label className="block text-sm">
          Message
          <textarea
            required
            name="message"
            rows={5}
            className="mt-1 w-full border border-[var(--line)] px-3 py-2 bg-[var(--paper)]"
          />
        </label>
        <button type="submit" className="btn-gold">
          Send inquiry
        </button>
      </form>
    </div>
    </>
  );
}
