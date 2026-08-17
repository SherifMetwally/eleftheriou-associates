import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-serif text-4xl text-[var(--navy)] mb-6">Privacy Policy</h1>
      <p className="text-[var(--muted)] leading-relaxed">
        Inquiry forms collect name, email, company, and message solely to
        respond to your request. Data is not sold. Contact Eleftheriou
        Associates to request deletion of a stored inquiry. This page will be
        updated with the final legal text EAC approves.
      </p>
    </article>
  );
}
