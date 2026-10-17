
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secretarial Services",
  description:
    "Integrated company and trust secretarial services covering entity administration, ownership, governance and statutory compliance.",
};

const serviceGroups = [
  {
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
    <>
      <main>
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted">
              Lexicor Services
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-6xl">
              Secretarial services for legal entities.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
              Lexicor supports the establishment, maintenance
              and ongoing administration of South African
              companies and trusts through integrated
              secretarial services.
            </p>
          </div>
        </section>

        <section className="border-t border-border bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12">
              {serviceGroups.map((group) => (
                <article
                  key={group.title}
                  className="grid gap-8 border-b border-border pb-12 lg:grid-cols-2"
                >
                  <div>
                    <h2 className="text-2xl font-semibold">
                      {group.title}
                    </h2>

                    <p className="mt-4 max-w-lg leading-relaxed text-muted">
                      {group.description}
                    </p>
                  </div>

                  <ul className="grid gap-4 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm"
                      >
                        <span
                          className="text-brand"
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
