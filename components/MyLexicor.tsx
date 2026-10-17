
const principles = [
  {
    number: "01",
    title: "Accuracy & Accountability",
    description:
      "Corporate and trust records require careful attention. Our approach prioritises accurate information, supporting documentation and clear administrative processes.",
  },
  {
    number: "02",
    title: "Structured Administration",
    description:
      "From entity changes to recurring filings, we approach secretarial administration through organised workflows and consistent recordkeeping.",
  },
  {
    number: "03",
    title: "Continuity & Oversight",
    description:
      "Entity administration extends beyond individual transactions. We focus on maintaining continuity in records and supporting the management of ongoing statutory obligations.",
  },
];

export default function WhyLexicor() {
  return (
    <section
      aria-labelledby="why-lexicor-heading"
      className="relative overflow-hidden bg-brand py-20 text-white lg:py-24"
    >
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Introduction */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9C8A8]">
              The Lexicor Approach
            </p>

            <h2
              id="why-lexicor-heading"
              className="heading-editorial mt-5 text-4xl md:text-5xl"
            >
              Good governance requires
              <span className="block text-[#D9C8A8]">
                more than compliance.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/75 md:text-lg">
            Sound entity administration depends on reliable records,
            well-managed changes and attention to ongoing obligations.
            These principles guide how Lexicor approaches company
            and trust secretarial work.
          </p>
        </div>

        {/* Principles */}
        <div className="mt-16 grid gap-10 border-t border-white/20 pt-10 md:grid-cols-3 md:gap-8">
          {principles.map((principle) => (
            <article key={principle.number}>
              <span className="text-sm font-semibold tracking-[0.15em] text-[#D9C8A8]">
                {principle.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                {principle.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/70 md:text-base">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
