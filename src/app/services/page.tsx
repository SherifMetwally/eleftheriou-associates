import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServicesCatalogue from "@/components/ServicesCatalogue";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Services"
        image="/images/columns.jpg"
      >
        A one-stop shop for foreign companies entering Egypt and our territory,
        and for regional companies reaching world markets. Filter by territory,
        then by country, to see only the services we offer there.
      </PageHero>
      <div className="mx-auto max-w-6xl px-5 py-16">
        <ServicesCatalogue />
        <div className="mt-12">
          <Link href="/contact" className="btn-gold">
            Discuss this service
          </Link>
        </div>
      </div>
    </>
  );
}
