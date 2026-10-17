
import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/knowledge";

export const metadata: Metadata = {
  title: "Lexicor Knowledge",
  description:
    "Practical information and insights on corporate governance, trusts, statutory compliance and legal-entity administration in South Africa.",
};

const categories = [
  {
    number: "01",
    title: "Corporate Governance",
    description:
      "Explore company governance, director responsibilities, resolutions and the maintenance of corporate records.",
  },
  {
    number: "02",
    title: "Company Secretarial",
    description:
      "Understand company registrations, amendments, statutory registers and CIPC administration.",
  },
  {
    number: "03",
    title: "Trust Administration",
    description:
      "Learn about trustee appointments, trust documentation, administrative responsibilities and recordkeeping.",
  },
  {
    number: "04",
    title: "Beneficial Ownership",
    description:
      "Explore ownership transparency, beneficial ownership information and relevant filing obligations.",
  },
  {
    number: "05",
    title: "Statutory Compliance",
    description:
      "Understand annual returns, compliance checklists and ongoing statutory administration.",
  },
  {
    number: "06",
    title: "Regulatory Updates",
    description:
      "Follow relevant legislative changes, regulatory notices and developments affecting South African legal entities.",
  },
];

export default async function KnowledgePage() {
  const articles = await getAllArticles();
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
            Lexicor / Knowledge
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <h1 className="heading-editorial max-w-3xl text-4xl md:text-5xl lg:text-[3.75rem]">
              Understanding today.
              <span className="block text-[#D9C8A8]">
                Prepared for tomorrow.
              </span>
            </h1>

            <p className="max-w-lg text-base leading-8 text-white/75 md:text-lg">
              Practical information and insights on corporate
              governance, trusts, statutory compliance and
              legal-entity administration in South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Knowledge introduction */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              The Knowledge Library
            </p>

            <h2 className="heading-editorial mt-5 text-3xl md:text-4xl">
              Information that supports informed decisions.
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-muted">
            <p>
              Company and trust administration involves
              responsibilities that extend beyond individual
              registrations or statutory submissions.
            </p>

            <p>
              Lexicor Knowledge is being developed as a
              collection of practical articles, explanations
              and regulatory updates to help readers better
              understand entity governance and administration.
            </p>

            <p>
              Content will focus on South African requirements,
              with reference to relevant legislation, regulatory
              guidance and administrative processes.
            </p>
          </div>
        </div>
      </section>

      {/* Knowledge categories */}
      <section className="border-t border-border bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Areas of Knowledge
            </p>

            <h2 className="heading-editorial mt-5 text-3xl md:text-4xl">
              Explore our subject areas.
            </h2>

            <p className="mt-5 leading-8 text-muted">
              These subjects will form the foundation of
              the Lexicor Knowledge library as articles
              and resources are published.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category.number}
                className="rounded-xl border border-border bg-background p-7 md:p-8"
              >
                <span className="text-sm font-semibold tracking-[0.15em] text-brand">
                  {category.number}
                </span>

                <div
                  aria-hidden="true"
                  className="mt-6 h-px w-14 bg-[#B29B77]"
                />

                <h3 className="heading-editorial mt-7 text-2xl">
                  {category.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-muted">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      
      {/* Published article library */}
      <section
        id="articles"
        aria-labelledby="articles-heading"
        className="bg-background py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Articles & Insights
              </p>

              <h2
                id="articles-heading"
                className="heading-editorial mt-5 text-3xl md:text-4xl"
              >
                The latest from Lexicor.
              </h2>
            </div>

            {articles.length > 0 && (
              <p className="text-sm text-muted">
                {articles.length} published{" "}
                {articles.length === 1 ? "article" : "articles"}
              </p>
            )}
          </div>

          {articles.length === 0 ? (
            /* Empty state: no published articles yet */
            <div className="mt-10 rounded-xl border border-border bg-surface px-8 py-12 md:px-12">
              <p className="text-lg font-medium text-brand">
                Our article library is in development.
              </p>

              <p className="mt-4 max-w-2xl leading-8 text-muted">
                We are preparing practical resources covering
                company and trust administration, governance
                and statutory compliance.
              </p>

              <p className="mt-4 text-sm text-muted">
                Published articles will appear here as the
                library develops.
              </p>
            </div>
          ) : (
            /* Published articles */
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="flex h-full flex-col rounded-xl border border-border bg-surface p-7 transition-colors hover:border-[#B29B77] md:p-8"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-brand">
                      {article.category}
                    </span>

                    <time
                      dateTime={article.publishedAt}
                      className="text-xs text-muted"
                    >
                      {new Intl.DateTimeFormat("en-ZA", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        timeZone: "UTC",
                      }).format(
                        new Date(`${article.publishedAt}T00:00:00Z`)
                      )}
                    </time>
                  </div>

                  <div
                    aria-hidden="true"
                    className="mt-7 h-px w-14 bg-[#B29B77]"
                  />

                  <h3 className="heading-editorial mt-7 text-2xl leading-snug">
                    <Link
                      href={`/knowledge/${article.slug}`}
                      className="hover:underline hover:underline-offset-4"
                    >
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-5 flex-1 text-sm leading-7 text-muted">
                    {article.description}
                  </p>

                  <div className="mt-8 border-t border-border pt-5">
                    <Link
                      href={`/knowledge/${article.slug}`}
                      className="inline-flex items-center gap-3 text-sm font-semibold text-brand transition hover:gap-4"
                      aria-label={`Read ${article.title}`}
                    >
                      Read article
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
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
              Need assistance with
              <span className="block text-[#D9C8A8]">
                an entity requirement?
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
