
import Link from "next/link";
import { getAllArticles } from "@/lib/knowledge";

const topics = [
  {
    number: "01",
    title: "Corporate Governance",
    description:
      "Company administration, governance practices, director responsibilities and statutory records.",
  },
  {
    number: "02",
    title: "Beneficial Ownership",
    description:
      "Ownership transparency, disclosure requirements and the maintenance of beneficial ownership information.",
  },
  {
    number: "03",
    title: "Statutory Compliance",
    description:
      "Recurring filings, company secretarial obligations and regulatory developments affecting South African entities.",
  },
];

export default async function KnowledgePreview() {
  const articles = (await getAllArticles()).slice(0, 3);
  return (
    <section
      aria-labelledby="knowledge-heading"
      className="bg-background py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section introduction */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Lexicor Knowledge
            </p>

            <h2
              id="knowledge-heading"
              className="heading-editorial mt-5 max-w-xl text-4xl md:text-5xl"
            >
              Clarity through
              <span className="block">knowledge.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base leading-8 text-muted md:text-lg">
              Explore practical insights into company and trust
              administration, governance and statutory obligations
              in South Africa.
            </p>

            <p className="mt-3 text-sm leading-7 text-muted">
              Our Knowledge section is being developed to provide
              articles, explanations and updates on matters relevant
              to legal-entity administration.
            </p>
          </div>
        </div>

        
        {/* Knowledge topics or latest published articles */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {articles.length > 0
            ? articles.map((article) => (
                <article
                  key={article.slug}
                  className="flex flex-col rounded-xl border border-border bg-surface p-7 md:p-8"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                    {article.category}
                  </p>

                  <div
                    aria-hidden="true"
                    className="mt-6 h-px w-14 bg-[#B29B77]"
                  />

                  <h3 className="heading-editorial mt-7 text-2xl leading-snug">
                    <Link
                      href={`/knowledge/${article.slug}`}
                      className="hover:underline"
                    >
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-muted">
                    {article.description}
                  </p>

                  <Link
                    href={`/knowledge/${article.slug}`}
                    className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand hover:underline"
                  >
                    Read article <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))
            : topics.map((topic) => (
                <article
                  key={topic.number}
                  className="rounded-xl border border-border bg-surface p-7 md:p-8"
                >
                  <span className="text-xs font-semibold tracking-[0.15em] text-muted">
                    {topic.number}
                  </span>

                  <div
                    aria-hidden="true"
                    className="mt-6 h-px w-14 bg-[#B29B77]"
                  />

                  <h3 className="heading-editorial mt-7 text-2xl leading-snug">
                    {topic.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {topic.description}
                  </p>
                </article>
              ))}
        </div>


        {/* Link to Knowledge page */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-8">
          <p className="max-w-lg text-sm leading-6 text-muted">
            Articles and resources will be introduced as the
            Lexicor Knowledge library develops.
          </p>

          <Link
            href="/knowledge"
            className="inline-flex items-center justify-center gap-3 rounded-lg border border-brand px-7 py-3 font-medium text-brand transition hover:bg-brand hover:text-white"
          >
            Explore Knowledge
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
