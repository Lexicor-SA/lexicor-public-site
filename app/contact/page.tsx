import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Lexicor",
  description:
    "Contact Lexicor regarding company and trust secretarial administration, governance, ownership and statutory compliance.",
};

export default function ContactPage() {
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

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9C8A8]">
            Lexicor / Contact
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <h1 className="heading-editorial max-w-3xl text-4xl md:text-5xl lg:text-[3.75rem]">
              Every enquiry begins
              <span className="block text-[#D9C8A8]">
                a conversation.
              </span>
            </h1>

            <p className="max-w-lg text-base leading-8 text-white/75 md:text-lg">
              Contact Lexicor to discuss your company or trust
              secretarial requirements, statutory records,
              governance documentation or ongoing compliance
              administration.
            </p>
          </div>
        </div>
      </section>

      {/* Contact information and enquiry form */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* Contact information */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Get in Touch
            </p>

            <h2 className="heading-editorial mt-5 text-3xl md:text-4xl">
              How can we assist?
            </h2>

            <p className="mt-6 max-w-md leading-8 text-muted">
              Whether you require assistance with a specific
              filing or ongoing entity administration, you
              can contact us directly or submit an enquiry.
            </p>

            <div className="mt-10 space-y-8 border-t border-border pt-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                  Email
                </p>

                <a
                  href="mailto:info@lexicor.co.za"
                  className="mt-3 block w-fit text-lg font-medium text-brand hover:underline"
                >
                  info@lexicor.co.za
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                  Telephone
                </p>

                <a
                  href="tel:+27689187207"
                  className="mt-3 block w-fit text-lg font-medium text-brand hover:underline"
                >
                  068 918 7207
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                  Location
                </p>

                <p className="mt-3 text-lg text-brand">
                  South Africa
                </p>
              </div>
            </div>

            <div className="mt-12 border-l-2 border-[#B29B77] pl-5">
              <p className="text-sm leading-7 text-muted">
                Please provide a brief description of your
                requirements. We may contact you to request
                additional information before confirming
                the scope of assistance.
              </p>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-8 border-b border-border pb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                Online Enquiry
              </p>

              <h2 className="heading-editorial mt-4 text-3xl">
                Send us a message.
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                Complete the form below and we will review
                your enquiry.
              </p>
            </div>

            <Suspense
              fallback={
                <p className="text-sm text-muted" role="status">
                  Loading enquiry form...
                </p>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Privacy and correspondence notice */}
      <section className="border-t border-border bg-surface py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold text-brand">
              Information submitted to Lexicor
            </h2>

            <p className="mt-3 text-sm leading-7 text-muted">
              Information submitted through our enquiry form
              is used to review your request and communicate
              with you about the assistance requested.
              Please do not include passwords, identity
              documents or other sensitive information
              in your initial message.
            </p>

            <p className="mt-3 text-sm leading-7 text-muted">
              Submitting an enquiry does not automatically
              establish a client relationship or confirm
              acceptance of any instruction.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
