
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Entity Establishment & Changes",
    description:
      "Registration, establishment and ongoing amendments to company and trust information.",
    features: [
      "Company registrations",
      "Company amendments",
      "Director and trustee changes",
      "Entity information updates",
    ],
  },
  {
    number: "02",
    title: "Ownership & Control",
    description:
      "Maintenance of ownership structures, beneficial ownership information and related records.",
    features: [
      "Shareholder records",
      "Securities registers",
      "Share certificates and transfers",
      "Beneficial ownership records",
    ],
  },
  {
    number: "03",
    title: "Governance & Records",
    description:
      "Structured administration of corporate and trust governance documentation.",
    features: [
      "Corporate and trustee resolutions",
      "Statutory registers",
      "Trust records and documentation",
      "Corporate record maintenance",
    ],
  },
  {
    number: "04",
    title: "Statutory Compliance",
    description:
      "Administration of recurring filing requirements and statutory obligations.",
    features: [
      "Annual returns",
      "Compliance checklists",
      "Beneficial ownership filings",
      "Recurring compliance administration",
    ],
  },
];


export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-border bg-background pt-14 pb-12 md:pt-20 md:pb-14 lg:pt-24 lg:pb-16"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section introduction */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Our Services
            </p>

            <h2
              id="services-heading"
              className="heading-editorial mt-5 max-w-xl text-4xl md:text-5xl"
            >
              Integrated entity
              <span className="block">secretarial services.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-muted md:text-lg">
            Lexicor provides company and trust secretarial
            administration through a coordinated approach
            to governance, ownership, statutory records
            and recurring compliance.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-9 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-5">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface p-5 transition-colors duration-200 hover:border-[#B29B77] sm:p-7 md:p-9"
            >
              {/* Small heritage accent */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-1 w-20 bg-[#B29B77]"
              />

              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.15em] text-brand">
                  {service.number}
                </span>
              </div>

              <h3 className="heading-editorial mt-5 text-[1.5rem] leading-snug sm:mt-8 sm:text-[1.65rem] md:text-[1.9rem]">
                {service.title}
              </h3>

              <p className="mt-4 max-w-lg leading-7 text-muted">
                {service.description}
              </p>

              <div className="my-5 h-px bg-border md:my-7" />

              <ul className="grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-6"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B29B77]"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Section call to action */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-8">
          <p className="max-w-lg text-sm leading-6 text-muted">
            Explore our services and the administrative support
            available for companies and trusts.
          </p>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-brand px-7 py-3 font-medium text-brand-foreground transition hover:opacity-90"
          >
            Explore all services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

