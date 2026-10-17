
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section
      aria-labelledby="about-preview-heading"
      className="border-t border-border bg-surface py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          {/* Left: Editorial introduction */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              About Lexicor
            </p>

            <h2
              id="about-preview-heading"
              className="heading-editorial mt-6 max-w-2xl text-4xl md:text-5xl lg:text-[3.5rem]"
            >
              Behind every entity
              <span className="block">
                is a responsibility
              </span>
              <span className="block text-[#927750]">
                to maintain it.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-9 h-px w-24 bg-[#B29B77]"
            />
          </div>

          {/* Right: Business introduction */}
          <div>
            <p className="text-lg leading-8 text-foreground">
              Lexicor provides company and trust secretarial
              administration with a focus on organised records,
              statutory requirements and ongoing entity maintenance.
            </p>

            <p className="mt-6 leading-8 text-muted">
              Our work brings together the administrative aspects
              of establishment, ownership, governance and compliance.
              Rather than treating these as isolated transactions,
              we recognise that each forms part of an entity&apos;s
              continuing responsibilities.
            </p>

            <p className="mt-6 leading-8 text-muted">
              As Lexicor develops, our objective is to make
              entity administration increasingly structured,
              accessible and easier to manage.
            </p>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-3 border-b-2 border-[#B29B77] pb-2 font-semibold text-brand transition hover:gap-5"
            >
              Discover Lexicor
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom signature strip */}
        <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-border pt-7">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Lexicor
          </span>

          <span
            aria-hidden="true"
            className="h-1 w-1 rounded-full bg-[#B29B77]"
          />

          <p className="text-sm text-muted">
            Corporate records. Governance. Continuity.
          </p>
        </div>
      </div>
    </section>
  );
}
