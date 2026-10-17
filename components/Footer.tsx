
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-20">

          {/* Brand information */}
          <div>
            <Link
              href="/"
              aria-label="Lexicor homepage"
              className="inline-flex items-center gap-4"
            >
              <Image
                src="/brand/lexicor_b_white.png"
                alt=""
                width={52}
                height={52}
                className="h-13 w-13 object-contain"
              />

              <span className="text-2xl font-semibold tracking-[0.12em] text-white">
                LEXICOR
              </span>
            </Link>

            <div
              aria-hidden="true"
              className="mt-7 h-px w-16 bg-[#B29B77]"
            />

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
              Integrated company and trust secretarial services
              focused on accurate records, structured
              administration and ongoing statutory compliance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D9C8A8]">
              Explore
            </h3>

            <nav
              aria-label="Footer navigation"
              className="mt-6 flex flex-col gap-4"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-white/65 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company information */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D9C8A8]">
              Contact & Company
            </h3>

            <div className="mt-6 space-y-4 text-sm text-white/65">
              <p className="font-medium text-white">
                Lexicor (Pty) Ltd
              </p>

              <p>South Africa</p>

              <a
                href="mailto:info@lexicor.co.za"
                className="block w-fit transition-colors hover:text-white"
              >
                info@lexicor.co.za
              </a>

              <a
                href="tel:+27689187207"
                className="block w-fit transition-colors hover:text-white"
              >
                068 918 7207
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-5 border-t border-white/15 pt-7 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Lexicor (Pty) Ltd.
            All rights reserved.
          </p>

          <nav
            aria-label="Legal information"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms of Use
            </Link>

            <Link
              href="/paia"
              className="transition-colors hover:text-white"
            >
              PAIA
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
