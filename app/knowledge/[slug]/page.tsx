
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getArticleBySlug,
  getAllArticles,
} from "@/lib/knowledge";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

export async function generateStaticParams() {
  const articles = await getAllArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      robots: { index: false },
    };
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/knowledge/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.reviewedAt ?? article.publishedAt,
    },
  };
}

export default async function KnowledgeArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      {/* Article introduction */}
      <section className="bg-brand text-white">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
          <Link
            href="/knowledge"
            className="text-sm text-white/75 transition hover:text-white"
          >
            ← Back to Knowledge
          </Link>

          <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-[#D9C8A8]">
            {article.category}
          </p>

          <h1 className="heading-editorial mt-5 max-w-4xl text-4xl md:text-5xl lg:text-6xl">
            {article.title}
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            {article.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-sm text-white/70">
            <span>By {article.author}</span>

            <time dateTime={article.publishedAt}>
              Published {formatDate(article.publishedAt)}
            </time>

            {article.reviewedAt && (
              <span>
                Last reviewed{" "}
                <time dateTime={article.reviewedAt}>
                  {formatDate(article.reviewedAt)}
                </time>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main article */}
      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <article className="knowledge-article">
            <MDXRemote source={article.content} />
          </article>

          {/* Source references */}
          {article.references.length > 0 && (
            <section
              aria-labelledby="article-references"
              className="mt-16 border-t border-border pt-8"
            >
              <h2
                id="article-references"
                className="heading-editorial text-2xl"
              >
                Sources & References
              </h2>

              <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm leading-7">
                {article.references.map((reference) => (
                  <li key={reference}>
                    <a
                      href={reference}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-words text-brand underline underline-offset-4"
                    >
                      {reference}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Editorial disclaimer */}
          <aside className="mt-12 rounded-xl border border-border bg-surface p-6">
            <p className="text-sm leading-7 text-muted">
              This article is provided for general
              informational purposes and does not
              constitute legal advice. Requirements
              may change, and readers should verify
              the current position with the relevant
              authority or an appropriately qualified
              professional.
            </p>
          </aside>

          <div className="mt-12 border-t border-border pt-8">
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-3 font-semibold text-brand hover:underline"
            >
              ← Return to Lexicor Knowledge
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
