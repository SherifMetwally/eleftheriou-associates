import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { SERVICES, type Service } from "@/data/content";

type Props = {
  hrefFor: (slug: string) => string;
  actionLabel: string;
  services?: Service[];
};

const GROUP_SIZE = 3;

function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

function Caption({
  index,
  service,
  hrefFor,
  actionLabel,
  size = "sm",
}: {
  index: number;
  service: Service;
  hrefFor: (slug: string) => string;
  actionLabel: string;
  size?: "sm" | "lg";
}) {
  return (
    <>
      <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold-2)] mb-3">
        {String(index).padStart(2, "0")}
      </p>
      <h3
        className={`font-serif text-[var(--navy)] mb-3 leading-snug ${
          size === "lg" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
        }`}
      >
        {service.title}
      </h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
        {service.summary}
      </p>
      <Link
        href={hrefFor(service.slug)}
        className="link-arrow text-[var(--gold-2)] text-xs uppercase tracking-[0.16em] font-semibold w-fit"
      >
        {actionLabel} →
      </Link>
    </>
  );
}

export default function ServiceRoster({
  hrefFor,
  actionLabel,
  services = SERVICES,
}: Props) {
  const groups = chunk([...services], GROUP_SIZE);

  return (
    <div className="space-y-14 md:space-y-20">
      {groups.map((group, g) => {
        const offset = g * GROUP_SIZE;
        const layout = g % 3;

        if (layout === 0) {
          return (
            <div
              key={g}
              data-stagger
              className="divide-y divide-[var(--line)] border-y border-[var(--line)]"
            >
              {group.map((s, i) => (
                <article
                  key={s.slug}
                  id={s.slug}
                  className="scroll-mt-24 grid md:grid-cols-2 items-stretch bg-white py-6 md:py-10"
                >
                  <div className="zoom-img relative min-h-[220px] md:min-h-[280px] overflow-hidden">
                    <SiteImage
                      src={s.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center px-6 py-8 md:px-14 md:py-12 lg:px-16">
                    <Caption
                      index={offset + i + 1}
                      service={s}
                      hrefFor={hrefFor}
                      actionLabel={actionLabel}
                      size="lg"
                    />
                  </div>
                </article>
              ))}
            </div>
          );
        }

        if (layout === 1) {
          return (
            <div key={g} data-stagger className="grid md:grid-cols-3 gap-8 md:gap-10">
              {group.map((s, i) => (
                <article
                  key={s.slug}
                  id={s.slug}
                  className="scroll-mt-24 hover-lift p-5 md:p-7"
                >
                  <div className="zoom-img relative aspect-square overflow-hidden mb-6">
                    <SiteImage
                      src={s.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <Caption
                    index={offset + i + 1}
                    service={s}
                    hrefFor={hrefFor}
                    actionLabel={actionLabel}
                  />
                </article>
              ))}
            </div>
          );
        }

        return (
          <div key={g} data-stagger className="grid md:grid-cols-2 gap-8 md:gap-10">
            {group.map((s, i) => (
              <article
                key={s.slug}
                id={s.slug}
                className={`scroll-mt-24 hover-lift p-5 md:p-7 ${
                  i === 2 ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-10 md:items-center" : ""
                }`}
              >
                <div
                  className={`zoom-img relative overflow-hidden mb-6 ${
                    i === 2 ? "aspect-[16/9] md:aspect-[4/3] md:mb-0" : "aspect-[4/3]"
                  }`}
                >
                  <SiteImage
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className={i === 2 ? "pt-6 md:pt-0 md:pr-4" : "pt-1"}>
                  <Caption
                    index={offset + i + 1}
                    service={s}
                    hrefFor={hrefFor}
                    actionLabel={actionLabel}
                    size={i === 2 ? "lg" : "sm"}
                  />
                </div>
              </article>
            ))}
          </div>
        );
      })}
    </div>
  );
}
