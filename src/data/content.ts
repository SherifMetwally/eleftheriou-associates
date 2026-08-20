export const OFFICES = [
  {
    city: "Alexandria",
    country: "Egypt",
    address: "35 Roushdi Pasha Street, Roushdi, Alexandria",
    note: "Headquarters",
  },
  {
    city: "Athens",
    country: "Greece",
    address: "11, Taxiarchon St., Palaio Faliro, Athens",
    note: "European office",
  },
];

export const CONTACT = {
  email: "md@eleftheriou-associates.eu",
  website: "www.eleftheriou-associates.eu",
};

/** Addendum B (A–I) plus core offerings from the July 2026 site structure. */
export const SERVICES = [
  {
    slug: "strategy",
    title: "Business Strategy & Planning",
    image: "/images/analytics.jpg",
    summary:
      "Tailored business development consultations, followed by hands-on cooperation to reach planned targets across industries and sectors.",
  },
  {
    slug: "market-entry",
    title: "Entering New Markets & FDI",
    image: "/images/globe.jpg",
    summary:
      "Eligibility, market intelligence, penetration strategy, lobbying during setup, and partnerships so foreign companies can command share in Egypt and the territory we cover.",
  },
  {
    slug: "joint-venture",
    title: "Joint Venture Formation",
    image: "/images/handshake.jpg",
    summary:
      "We research unmet local needs, identify foreign and local counterparts, and structure joint-venture cooperations.",
  },
  {
    slug: "matchmaking",
    title: "Business Matchmaking",
    image: "/images/meeting.jpg",
    summary:
      "Connecting international and regional companies for agencies, distribution, partnerships, and long-term cooperation.",
  },
  {
    slug: "ma",
    title: "Mergers & Acquisitions",
    image: "/images/architecture.jpg",
    summary:
      "Shortlists, market intelligence, and due-diligence support for market entry through merger or acquisition.",
  },
  {
    slug: "research",
    title: "Market Research",
    image: "/images/analytics.jpg",
    summary:
      "Tailor-made market intelligence reports on markets where reliable data is difficult to obtain.",
  },
  {
    slug: "conflict",
    title: "Conflict Resolution",
    image: "/images/boardroom.jpg",
    summary:
      "Using EAC’s network and lobbying power within certain markets to resolve commercial deadlocks and enable profitable continuation.",
  },
  {
    slug: "investment-coach",
    title: "Investment Coach",
    image: "/images/office.jpg",
    summary:
      "Guidance for entrepreneurs developing an SME or opening a new venture, tailored to capital, capability, and aspiration.",
  },
  {
    slug: "export",
    title: "Export Enablement",
    image: "/images/shipping.jpg",
    summary:
      "Assisting Egyptian and North African SMEs that lack the prerequisites to export goods and services, with emphasis on Europe.",
  },
  {
    slug: "incorporation",
    title: "Company Incorporation & Setup",
    image: "/images/skyline.jpg",
    summary:
      "Establishing the Egyptian legal entity and supporting the client in running the company locally.",
  },
  {
    slug: "franchise",
    title: "Franchise Network Development",
    image: "/images/conference.jpg",
    summary:
      "Establishment and business development of a franchising chain in Egypt and the wider territory.",
  },
  {
    slug: "sourcing",
    title: "Raw Material Location",
    image: "/images/factory.jpg",
    summary:
      "Helping local businesses procure raw materials and goods from abroad.",
  },
  {
    slug: "exhibitions",
    title: "Exhibition Management",
    image: "/images/conference.jpg",
    summary:
      "Support for exhibitions and events that open markets and create qualified commercial leads.",
  },
  {
    slug: "agency",
    title: "Agency Representation",
    image: "/images/handshake.jpg",
    summary:
      "Locating and appointing agents in Egypt and the Arab world, including credit-history checks on candidates.",
  },
  {
    slug: "distributor",
    title: "Distributor & Agent Sourcing",
    image: "/images/shipping.jpg",
    summary:
      "EAC assumes responsibility for finding distributors and agents matched to the client’s product and territory.",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing Unit Establishment",
    image: "/images/factory.jpg",
    summary:
      "Setting up a manufacturing unit in Egypt and supporting it through incorporation, staffing, and market development.",
  },
  {
    slug: "hr-training",
    title: "HR Training & Consulting",
    image: "/images/training.jpg",
    summary:
      "Training and consulting support so local teams can run the new operation to the client’s standard.",
  },
  {
    slug: "government",
    title: "Government Negotiation Support",
    image: "/images/columns.jpg",
    summary:
      "Lobbying and negotiation support with public stakeholders during setup and the business-development cycle.",
  },
  {
    slug: "trading",
    title: "Trading Services",
    image: "/images/hero-skyline.jpg",
    summary:
      "EAC can take on agencies itself and trade products in the Egyptian and Arab world markets where that is the right model.",
  },
];

export type Service = (typeof SERVICES)[number];

export const SERVICE_BY_SLUG = new Map(SERVICES.map((s) => [s.slug, s]));

/** Keeps the given order and silently drops slugs that no longer exist. */
export function servicesBySlug(slugs: string[]): Service[] {
  return slugs
    .map((slug) => SERVICE_BY_SLUG.get(slug))
    .filter((s): s is Service => Boolean(s));
}

export const SECTORS = [
  "Agriculture",
  "Automotive",
  "Beauty & Well Being",
  "Chemicals",
  "Construction",
  "Education & Training",
  "Electrical",
  "Energy",
  "Environmental & Renewables",
  "Exhibitions Management",
  "Food & Beverages",
  "Franchise Development",
  "Furniture",
  "Health Care",
  "IT & Software",
  "Logistics",
  "Machinery",
  "Marketing & PR",
  "Media",
  "Paper & Packaging",
  "Real Estate",
  "Telecommunications",
  "Textiles & Linen",
  "Tourism & Travel",
  "Yachting & Leisure Boats",
];

export const PILLARS = [
  {
    title: "Strategy & Market Entry",
    summary:
      "Market intelligence, entry strategy, and business setup tailored to local realities.",
    href: "/services#market-entry",
  },
  {
    title: "Government & Stakeholder Relations",
    summary:
      "High-level engagement and advocacy to navigate regulatory environments and unlock opportunities.",
    href: "/services#government",
  },
  {
    title: "Investment & Growth Advisory",
    summary:
      "M&A support, partnerships, and growth advisory to scale and sustain your business.",
    href: "/services#ma",
  },
];

/**
 * Headline figures. Deliberately no invented client counts.
 * `count` marks the figures that animate up from zero.
 */
export const STATS: { value: string; count?: number; label: string }[] = [
  { value: "Since 2001", label: "Operating in Egypt" },
  { value: "32", count: 32, label: "Markets covered" },
  { value: "5", count: 5, label: "Operating territories" },
  { value: "Alexandria · Athens", label: "Offices" },
];

/** EAC's own methodology of work, as five steps. */
export const PROCESS = [
  {
    step: "01",
    title: "Research",
    body: "We build the market intelligence: demand, competition, regulation, and the counterparts worth talking to.",
  },
  {
    step: "02",
    title: "Advise",
    body: "We recommend the course of action — entry model, partner, joint venture, acquisition, or export route.",
  },
  {
    step: "03",
    title: "Connect",
    body: "We open doors. Our network and lobbying power put you in front of the people who decide.",
  },
  {
    step: "04",
    title: "Establish",
    body: "We set up the legal entity, licences, and local team so the operation can actually trade.",
  },
  {
    step: "05",
    title: "Grow",
    body: "We stay alongside you, developing market share and profitability rather than handing over a report.",
  },
];

export const WHY_EAC = [
  {
    title: "One-stop shop since 2001",
    body: "Foreign companies enter Egypt and our territory through one advisor. Egyptian and North African companies reach world markets — especially Europe — through the same desk.",
  },
  {
    title: "Results, with risk contained",
    body: "A proprietary work methodology: eligibility, market intelligence, local counterparts, then hands-on execution. We do not stop at a slide deck.",
  },
  {
    title: "Network that moves files",
    body: "Lobbying power and long relationships in Egypt, North Africa, the Mideast and the GCC — so setup and partnerships do not stall in the corridor.",
  },
  {
    title: "Independent, not a startup pitch",
    body: "Impartial advice to public and private clients. Heritage, experience and success stories across industries — not a youthful template site.",
  },
];

/** Questions a first-time counterpart typically asks. */
export const FAQS = [
  {
    q: "How does a foreign company enter Egypt through this desk?",
    a: "Eligibility first, then market intelligence, then the local counterpart. We advise on the route — entity, partner, joint venture or acquisition — and stay through setup rather than stopping at a report.",
  },
  {
    q: "Do you only work in Egypt?",
    a: "Egypt is headquarters and the primary market, since 2001. Coverage also runs across North Africa, Mediterranean Europe, the Mideast and the Arab Gulf, with a European office in Athens.",
  },
  {
    q: "Can you help Egyptian and North African companies export?",
    a: "Yes. The same desk prepares SMEs that lack the usual export prerequisites, with particular emphasis on Europe — matchmaking, market development, and the practical path to trade.",
  },
  {
    q: "What if the local market has a need nobody has tried?",
    a: "We research globally for a supplier of that unmet need, then structure a joint venture between the foreign and local counterpart. That is a core part of the practice, not an exception.",
  },
  {
    q: "Are client matters confidential?",
    a: "Yes. Client files stay inside the room. We do not disclose work to third parties without written consent.",
  },
];

/**
 * Layout samples only. Replace with quotes George supplies.
 * No invented client names presented as real references.
 */
export const TESTIMONIALS = [
  {
    quote:
      "The work did not stop at a slide deck. Eligibility, the counterpart, then hands-on setup — one desk from first brief to the entity trading.",
    name: "Sample quote",
    role: "Inbound market entry — replace with client text",
  },
  {
    quote:
      "We needed a European route and did not have the export prerequisites in-house. The Alexandria–Athens desk opened the corridor and stayed through the first trades.",
    name: "Sample quote",
    role: "Export enablement — replace with client text",
  },
  {
    quote:
      "An unmet need in the local market, no existing supplier. They found the foreign counterpart and structured the joint venture rather than leaving us with a study.",
    name: "Sample quote",
    role: "Joint venture — replace with client text",
  },
];

export const MOBILE_EXPERTISE = [
  {
    title: "Strategy",
    summary: "Clear direction and actionable strategies for sustainable growth.",
  },
  {
    title: "Business Advisory",
    summary: "Practical insights and solutions to enhance performance and value.",
  },
  {
    title: "Market Entry",
    summary: "One-stop support for companies entering Egypt, the Gulf, Africa, the Mideast, and Europe.",
  },
];

export const NEWS = [
  {
    slug: "restarting-eac-2026",
    title: "Eleftheriou Associates restarts operations",
    date: "2026-07-01",
    category: "EAC",
    image: "/images/boardroom.jpg",
    excerpt:
      "After a dormant period, EAC is relaunching its business development consultancy across Egypt, North Africa, Mediterranean Europe, the Mideast, and the Arab Gulf.",
    body: "Eleftheriou Associates has operated in Egypt since 2001 as an independent business development consultancy. We represent foreign clients seeking to establish leads in the region, and we assist Egyptian and North African companies — especially SMEs — with exporting goods and services through matchmaking and market development. This site will carry news, insights, and opportunities as the practice restarts.",
  },
  {
    slug: "egypt-market-entry",
    title: "Egypt remains the gateway for North African market entry",
    date: "2026-06-15",
    category: "Market Entry",
    image: "/images/skyline.jpg",
    excerpt:
      "Foreign investors looking at North Africa typically start in Egypt — the largest and most diversified market in the region.",
    body: "EAC’s one-stop-shop approach supports foreign companies entering Egypt regardless of industry: market intelligence, local counterparts, joint ventures, and practical setup support. Egyptian companies in turn use the same network to reach European and Gulf buyers.",
  },
  {
    slug: "jv-unmet-needs",
    title: "Identifying unmet needs and creating joint ventures",
    date: "2026-05-20",
    category: "Joint Ventures",
    image: "/images/globe.jpg",
    excerpt:
      "When we identify a market need that nobody has attempted before, we search globally for a supplier and structure a local joint venture.",
    body: "This is a core EAC activity: research the world for a supplier of an unmet Egyptian or regional need, then create joint-venture cooperation between the foreign and local counterpart.",
  },
  {
    slug: "export-to-europe",
    title: "Export enablement: from North Africa into Europe",
    date: "2026-04-28",
    category: "Export",
    image: "/images/shipping.jpg",
    excerpt:
      "Dummy insight. Egyptian and North African SMEs often have the product but not the route. The desk is built to open Europe first.",
    body: "Placeholder article for the insights carousel. EAC assists Egyptian and North African companies that lack the prerequisites to export goods and services, with particular emphasis on Europe. Replace this copy when George supplies editorial.",
  },
  {
    slug: "athens-european-desk",
    title: "The Athens office as a European counterpart desk",
    date: "2026-04-10",
    category: "Territories",
    image: "/images/architecture.jpg",
    excerpt:
      "Dummy insight. Palaio Faliro is the European office — a counterpart for companies in Greece and Mediterranean Europe looking at Egypt and the region.",
    body: "Placeholder article for the insights carousel. The practice is led from Alexandria, with a European office in Palaio Faliro, Athens. This note is sample content so the carousel can be reviewed. Replace when editorial is supplied.",
  },
  {
    slug: "gulf-capital-partnerships",
    title: "Gulf capital, Egyptian operations",
    date: "2026-03-22",
    category: "Arab Gulf",
    image: "/images/office.jpg",
    excerpt:
      "Dummy insight. Agencies, franchises and joint ventures that link Gulf investors with Egypt, North Africa and Europe.",
    body: "Placeholder article for the insights carousel. Arab Gulf markets are where the emphasis is capital and commercial partnership. Replace this copy with EAC editorial.",
  },
  {
    slug: "franchise-egypt",
    title: "Building a franchise chain in Egypt",
    date: "2026-03-04",
    category: "Franchise",
    image: "/images/conference.jpg",
    excerpt:
      "Dummy insight. Franchising is one of the routes for brands that want a local network without carrying every outlet themselves.",
    body: "Placeholder article for the insights carousel. EAC supports the establishment and business development of a franchising chain in Egypt and the wider territory. Sample copy only.",
  },
  {
    slug: "government-setup",
    title: "Public stakeholders during setup",
    date: "2026-02-18",
    category: "Government",
    image: "/images/columns.jpg",
    excerpt:
      "Dummy insight. Files stall in the corridor when nobody is in the room with the public side. Lobbying is part of the setup, not an extra.",
    body: "Placeholder article for the insights carousel. EAC provides lobbying and negotiation support with public stakeholders during setup and the business-development cycle. Replace when editorial is supplied.",
  },
  {
    slug: "matchmaking-notes",
    title: "How counterpart search actually starts",
    date: "2026-02-02",
    category: "Matchmaking",
    image: "/images/handshake.jpg",
    excerpt:
      "Dummy insight. Agencies, distributors and partners are not a list from a directory. Eligibility and credit history come before the introduction.",
    body: "Placeholder article for the insights carousel. Connecting international and regional companies for agencies, distribution, partnerships, and long-term cooperation. Sample copy for layout review.",
  },
  {
    slug: "manufacturing-egypt",
    title: "Setting up a manufacturing unit locally",
    date: "2026-01-15",
    category: "Manufacturing",
    image: "/images/factory.jpg",
    excerpt:
      "Dummy insight. Incorporation, staffing and market development have to travel together if a plant is going to trade, not sit idle.",
    body: "Placeholder article for the insights carousel. EAC supports setting up a manufacturing unit in Egypt through incorporation, staffing, and market development. Replace this copy with client-approved text.",
  },
];

export const ABOUT_PATHS = [
  {
    kicker: "Inbound",
    title: "Enter the region",
    body: "One-stop support for any foreign company looking to enter Egypt and the territory we cover — irrespective of industry.",
  },
  {
    kicker: "Outbound",
    title: "Reach world markets",
    body: "We assist Egyptian and North African companies — especially SMEs — that lack the prerequisites to export, with particular emphasis on Europe.",
  },
  {
    kicker: "Create",
    title: "Structure the unmet need",
    body: "When nobody has attempted a local need before, we search globally for a supplier and create the joint venture between the foreign and local counterpart.",
  },
];

export const ABOUT_VALUES = [
  {
    title: "Trustworthiness",
    body: "Client matters stay inside the room. We do not disclose work to third parties without written consent.",
  },
  {
    title: "Honesty",
    body: "We do not make unfair or misleading offers. Advice is impartial, to public and private clients alike.",
  },
  {
    title: "Partnership",
    body: "We are partners with our customers — from the first market brief through establishment and growth.",
  },
];
