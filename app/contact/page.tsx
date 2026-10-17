
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Lexicor regarding company and trust secretarial services.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted">
            Contact Lexicor
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight">
            How can we assist?
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted">
            Enquire about company and trust secretarial
            administration, corporate records, ownership,
            governance or statutory compliance.
          </p>

          <div className="mt-10 space-y-4">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@lexicor.co.za"
                className="text-brand hover:underline"
              >
                info@lexicor.co.za
              </a>
            </p>

            <p>
              <strong>Telephone:</strong>{" "}
              <a
                href="tel:+27689187207"
                className="text-brand hover:underline"
              >
                068 918 7207
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8">
          <h2 className="mb-8 text-2xl font-semibold">
            Send an Enquiry
          </h2>

          <ContactForm />
        </div>
      </div>
    </main>
  );
}
