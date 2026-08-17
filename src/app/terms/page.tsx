import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-serif text-4xl text-[var(--navy)] mb-6">Terms of Use</h1>
      <p className="text-[var(--muted)] leading-relaxed">
        Content on this website is for general information about Eleftheriou
        Associates’ consultancy services. It does not constitute a binding
        offer. Final terms will be confirmed by EAC legal review before go-live.
      </p>
    </article>
  );
}
