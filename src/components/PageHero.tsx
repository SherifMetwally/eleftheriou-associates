import type { ReactNode } from "react";
import SiteImage from "@/components/SiteImage";

type Props = {
  eyebrow: string;
  title: string;
  image: string;
  children?: ReactNode;
  actions?: ReactNode;
  mark?: string;
};

/** Dark inner-page hero: copy on the left, faded photograph on the right. */
export default function PageHero({
  eyebrow,
  title,
  image,
  children,
  actions,
  mark,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#05070d] text-white">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] md:block">
        <SiteImage
          src={image}
          alt=""
          fill
          priority
          className="object-cover opacity-55"
          sizes="48vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070d] via-[#05070d]/70 to-[#05070d]/20" />
      </div>
      {mark ? (
        <p className="pointer-events-none absolute right-[-0.06em] top-8 hidden select-none font-serif text-[11rem] leading-none text-white/[0.06] lg:block">
          {mark}
        </p>
      ) : null}
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="hero-rise max-w-xl">
          <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
            <span className="hidden h-px w-8 bg-[var(--gold)] sm:block" />
            {eyebrow}
          </p>
          <h1 className="font-serif text-4xl leading-[1.08] md:text-5xl lg:text-[3.3rem]">
            {title}
          </h1>
          {children ? (
            <div className="mt-6 max-w-lg text-white/80 leading-relaxed">{children}</div>
          ) : null}
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
