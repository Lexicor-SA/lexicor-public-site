
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="bg-background px-6 py-16 lg:py-20"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-brand px-8 py-14 text-white md:px-14 md:py-16 lg:px-20">
        {/* Subtle background grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Decorative circles */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-40 h-[440px] w-[440px] rounded-full border border-white/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-24 h-[300px] w-[300px] rounded-full border border-white/10"
        />

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9C8A8]">
            Get in Touch
          </p>

          <h2
            id="contact-cta-heading"
            className="heading-editorial mt-6 text-4xl leading-tight md:text-5xl lg:text-6xl"
          >
            Let&apos;s discuss
            <span className="block text-[#D9C8A8]">
              your entity requirements.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/75 md:text-lg">
            Whether you require assistance with entity
            establishment, ownership records, governance
            documentation or ongoing statutory administration,
            contact Lexicor to discuss your requirements.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 font-semibold text-brand transition hover:bg-[#F7F5F0]"
            >
              Contact Lexicor
              <span aria-hidden="true" className="ml-3">
                →
              </span>
            </Link>

            <a
              href="mailto:info@lexicor.co.za"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
