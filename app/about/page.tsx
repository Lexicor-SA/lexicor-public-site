
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Lexicor",
  description:
    "Learn about Lexicor, a South African company providing integrated company and trust secretarial administration.",
};

const principles = [
  {
    number: "01",
    title: "Accuracy",
    description:
      "Reliable entity administration begins with accurate information, carefully maintained records and appropriate supporting documentation.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Organised processes help bring consistency to entity changes, governance records and recurring statutory requirements.",
  },
  {
    number: "03",
    title: "Continuity",
    description:
      "Company and trust administration requires ongoing attention. Records and obligations must be managed beyond individual transactions.",
  },
];

export default function AboutPage() {
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

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9C8A8]">
            About Lexicor
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
            <h1 className="heading-editorial max-w-3xl text-4xl md:text-5xl lg:text-[3.75rem]">
              Built on records.
              <span className="block text-[#D9C8A8]">
                Guided by responsibility.
              </span>
            </h1>

            <p className="max-w-lg text-base leading-8 text-white/75 md:text-lg">
              Lexicor is a South African business focused
              on company and trust secretarial administration,
              governance records and ongoing statutory
              compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Who We Are
            </p>

            <h2 className="heading-editorial mt-5 text-4xl md:text-5xl">
              An integrated approach
              <span className="block">
                to entity administration.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-8 h-px w-24 bg-[#B29B77]"
            />
          </div>

          <div className="space-y-6 text-base leading-8 text-muted md:text-lg">
            <p>
              Established in 2016, Lexicor provides
              company and trust secretarial services
              in South Africa.
            </p>

            <p>
              Our work focuses on the administrative
              responsibilities associated with legal
              entities, including establishment and
              amendments, ownership information,
              governance documentation and recurring
              statutory obligations.
            </p>

            <p>
              We approach these functions as connected
              responsibilities. Changes in an entity&apos;s
              structure, ownership or management may
              affect its records, supporting documents
              and subsequent filings.
            </p>

            <p>
              Our objective is to assist clients in
              maintaining organised records and managing
              the ongoing administrative requirements
              of their entities.
            </p>
          </div>
        </div>
      </section>

      {/* Our philosophy */}
      <section className="border-y border-border bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Our Philosophy
            </p>

            <h2 className="heading-editorial mt-5 text-4xl md:text-5xl">
              Three principles.
              <span className="block">
                One consistent approach.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-3 md:gap-12">
            {principles.map((principle) => (
              <article key={principle.number}>
                <p className="text-sm font-semibold tracking-[0.15em] text-[#927750]">
                  {principle.number}
                </p>

                <h3 className="heading-editorial mt-6 text-2xl md:text-3xl">
                  {principle.title}
                </h3>

                <p className="mt-5 leading-8 text-muted">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our direction */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Looking Forward
            </p>

            <h2 className="heading-editorial mt-5 text-4xl md:text-5xl">
              Traditional responsibilities.
              <span className="block text-[#927750]">
                Modern possibilities.
              </span>
            </h2>
          </div>

          <div className="space-y-6 leading-8 text-muted">
            <p>
              Effective secretarial administration
              depends on sound records, clear processes
              and informed decisions.
            </p>

            <p>
              Lexicor&apos;s longer-term direction
              includes exploring technology that can
              improve the organisation, accessibility
              and management of entity information
              and statutory obligations.
            </p>

            <p>
              Our focus remains on providing practical
              administrative services while developing
              more structured ways to support clients
              over time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact invitation */}
      <section className="bg-background px-6 pb-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-2xl bg-brand px-8 py-12 text-white md:px-12 md:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9C8A8]">
              Contact Lexicor
            </p>

            <h2 className="heading-editorial mt-5 max-w-2xl text-3xl md:text-4xl">
              Let&apos;s discuss how
              <span className="block text-[#D9C8A8]">
                we can assist.
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
