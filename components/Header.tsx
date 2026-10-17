
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative z-50 border-b border-border bg-surface">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          aria-label="Lexicor home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/brand/lexicor_w_navy.png"
            alt="Lexicor"
            width={180}
            height={60}
            className="h-auto max-h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                pathname === item.href ? "page" : undefined
              }
              className={`text-sm font-medium transition hover:text-brand ${
                pathname === item.href
                  ? "text-brand"
                  : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <span className="rounded-lg border border-border px-4 py-2 text-sm text-muted">
            Client Login — Coming Soon
          </span>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-border md:hidden"
        >
          {menuOpen ? (
            // Close icon
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full border-b border-border bg-surface px-6 py-6 shadow-lg md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={
                  pathname === item.href ? "page" : undefined
                }
                className={`rounded-lg px-4 py-3 text-base font-medium transition hover:bg-surface-muted ${
                  pathname === item.href
                    ? "bg-surface-muted text-brand"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 border-t border-border pt-5">
              <span className="block rounded-lg border border-border px-4 py-3 text-center text-sm text-muted">
                Client Login — Coming Soon
              </span>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
