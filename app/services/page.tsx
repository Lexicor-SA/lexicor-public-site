
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Secretarial Services",
  description:
    "Integrated company and trust secretarial services covering entity administration, ownership, governance and statutory compliance.",
};

const serviceGroups = [
  {
    id: "establishment",
    number: "01",
    title: "Entity Establishment & Changes",
    description:
      "Services relating to the formation, administration and amendment of legal entities.",
    items: [
      "Company registrations",
      "Company name changes",
      "Registered office amendments",
      "Director appointments and resignations",
      "Trustee appointment and change administration",
      "Other company and trust record amendments",
    ],
  },
  {
    id: "ownership",
    number: "02",
    title: "Ownership & Control",
    description:
      "Maintenance of ownership and control information across legal entities.",
    items: [
      "Shareholder records",
      "Share allotments and transfers",
      "Share certificates",
      "Securities registers",
      "Beneficial ownership records",
      "Beneficial ownership submissions",
    ],
  },
  {
    id: "governance",
    number: "03",
    title: "Governance & Statutory Records",
    description:
      "Preparation and maintenance of records supporting entity governance.",
    items: [
      "Director and trustee resolutions",
      "Corporate statutory registers",
      "Trust documentation",
      "Company records",
      "Governance record maintenance",
    ],
  },
  {
    id: "compliance",
    number: "04",
    title: "Recurring Compliance",
    description:
      "Administration of recurring statutory filings and obligations.",
    items: [
      "CIPC annual returns",
      "Compliance checklists",
      "Beneficial ownership updates",
      "Statutory deadline monitoring",
      "Recurring secretarial administration",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Page introduction */}
      <section className="relative overflow-hidden bg-brand text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9C8A8]">
            Lexicor / Services
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
            <h1 className="heading-editorial max-w-3xl text-4xl md:text-5xl lg:text-[3.75rem]">
              The foundations of
              <span className="block text-[#D9C8A8]">
                sound governance.
              </span>
            </h1>

            <p className="max-w-lg text-base leading-8 text-white/75 md:text-lg">
              Integrated secretarial administration for South
              African companies and trusts, covering entity
              establishment, ownership, governance and
              recurring statutory obligations.
            </p>
          </div>

          {/* Service navigation */}
          <nav
            aria-label="Service categories"
            className="mt-12 grid gap-3 border-t border-white/20 pt-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {serviceGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="group flex min-h-24 flex-col justify-between rounded-lg border border-white/20 bg-white/5 p-4 transition-colors hover:border-[#D9C8A8] hover:bg-white/10"
              >
                <span className="text-xs font-semibold text-[#D9C8A8]">
                  {group.number}
                </span>

                <span className="mt-4 flex items-end justify-between gap-3 text-sm font-medium text-white">
                  {group.title}

                  <span
                    aria-hidden="true"
                    className="text-[#D9C8A8]"
                  >
                    ↓
                  </span>
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Detailed service categories */}
      {serviceGroups.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          aria-labelledby={`${group.id}-heading`}
          className={
            index % 2 === 0
              ? "scroll-mt-24 bg-background py-16 lg:py-20"
              : "scroll-mt-24 bg-surface py-16 lg:py-20"
          }
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              {/* Category introduction */}
              <div>
                <span className="text-sm font-semibold tracking-[0.18em] text-[#927750]">
                  {group.number} / 04
                </span>

                <h2
                  id={`${group.id}-heading`}
                  className="heading-editorial mt-6 max-w-md text-3xl md:text-4xl"
                >
                  {group.title}
                </h2>

                <div
                  aria-hidden="true"
                  className="mt-7 h-px w-20 bg-[#B29B77]"
                />

                <p className="mt-7 max-w-md leading-8 text-muted">
                  {group.description}
                </p>
              </div>

              {/* Service details */}
              <div>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Areas of Assistance
                </p>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex min-h-20 items-center gap-4 rounded-lg border border-border bg-white p-5"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B29B77]"
                      />

                      <span className="text-sm font-medium leading-6 text-brand">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contact?service=${group.id}`}
                  className="mt-7 inline-flex items-center gap-3 border-b-2 border-[#B29B77] pb-2 text-sm font-semibold text-brand transition hover:gap-5"
                >
                  Enquire about these services
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Integrated approach */}
      <section className="border-y border-border bg-[#EEF0F1] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              An Integrated Approach
            </p>

            <h2 className="heading-editorial mt-5 text-3xl md:text-4xl">
              Connected records.
              <span className="block">
                Consistent administration.
              </span>
            </h2>
          </div>

          <p className="leading-8 text-muted">
            Entity changes, ownership information, governance
            documentation and statutory filings are closely
            connected. Lexicor approaches these responsibilities
            as parts of a continuing administrative process,
            rather than isolated transactions.
          </p>
        </div>
      </section>

      {/* Final contact invitation */}
      <section className="bg-background px-6 py-16 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-2xl bg-brand px-8 py-12 text-white md:px-12 md:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9C8A8]">
              Contact Lexicor
            </p>

            <h2 className="heading-editorial mt-5 max-w-2xl text-3xl md:text-4xl">
              Let&apos;s discuss your
              <span className="block text-[#D9C8A8]">
                entity requirements.
              </span>
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-lg bg-white px-7 py-3 font-semibold text-brand transition hover:bg-[#F7F5F0]"
          >
            Contact Lexicor
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
