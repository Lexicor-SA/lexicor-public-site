
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand text-white">

      {/* Subtle decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      
        <div className="relative mx-auto grid min-h-[480px] max-w-7xl items-center gap-10 px-6 py-14 md:py-16 lg:min-h-[min(650px,calc(100svh-80px))] lg:grid-cols-[1.25fr_0.75fr] lg:gap-8 lg:py-12">


        {/* Left: Text content */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D9C8A8]">
            Corporate Governance & Entity Administration
          </p>

         <h1 className="heading-editorial max-w-[850px] text-[clamp(3rem,5vw,6rem)] leading-[1.12]">
            Governance begins
            <span className="mt-2 block text-[#D9C8A8]">
                with good records.
            </span>
        </h1>

          <p className="mt-6 max-w-[580px] text-base leading-relaxed text-white/75 md:text-lg">
            Integrated company and trust secretarial services
            built around accurate records, effective compliance
            and structured administration.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 font-semibold text-[#1F2A37] transition hover:bg-[#F7F5F0]"
            >
                Explore our services
            </Link>

            <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
                Contact Lexicor
            </Link>
          </div>
        </div>

        {/* Right: Brand-inspired graphic */}
        <div
          className="relative hidden h-[340px] items-center justify-center lg:flex"
          aria-hidden="true"
        >
          <div className="absolute h-[420px] w-[420px] rounded-full border border-white/15" />
          <div className="absolute h-[330px] w-[330px] rounded-full border border-white/10" />
          <div className="absolute h-[240px] w-[240px] rounded-full border border-white/10" />

            {/* Lexicor monogram */}
            <div className="relative flex h-[190px] w-[190px] items-center justify-center">
                <Image
                src="/brand/lexicor_b_white.png"
                alt=""
                width={190}
                height={190}
                className="h-full w-full object-contain opacity-90"
                />
            </div>
        </div>

      </div>
    </section>
  );
}
