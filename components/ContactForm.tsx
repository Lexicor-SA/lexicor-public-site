"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";
import {
  Turnstile,
  type TurnstileInstance,
} from "@marsidev/react-turnstile";

const inputStyle =
  "w-full rounded-lg border border-border bg-surface px-4 py-3 outline-none focus:border-brand";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service");
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      category: "general",
      message: "",
      website: "",
    },
  });

  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState("");

  const turnstileSiteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  
  useEffect(() => {
    const serviceCategories: Record<
      string,
      ContactFormValues["category"]
    > = {
      establishment: "entity-changes",
      ownership: "ownership",
      governance: "governance",
      compliance: "compliance",
    };

    if (requestedService) {
      const category = serviceCategories[requestedService];

      if (category) {
        setValue("category", category);
      }
    }
  }, [requestedService, setValue]);


  
  async function onSubmit(values: ContactFormValues) {
    setStatus(null);
    setServerError("");
    setTurnstileError("");

    if (!turnstileToken) {
      setTurnstileError(
        "Please complete the security verification before submitting."
      );
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          turnstileToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send your enquiry."
        );
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setServerError(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      // Tokens are single-use, so refresh after every attempt.
      setTurnstileToken("");
      turnstileRef.current?.reset();
    }
  }


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="mb-2 block font-medium">
          Full Name *
        </label>
        <input
          id="name"
          autoComplete="name"
          className={inputStyle}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />

        {errors.name && (
          <p
            id="name-error"
            role="alert"
            className="mt-2 text-sm text-red-700"
          >
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-medium">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={inputStyle}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block font-medium">
          Telephone Number
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          className={inputStyle}
          {...register("phone")}
        />
      </div>

      <div>
        <label htmlFor="category" className="mb-2 block font-medium">
          Enquiry Type *
        </label>
        <select
          id="category"
          className={inputStyle}
          {...register("category")}
        >
          <option value="general">General Enquiry</option>
          <option value="entity-changes">Entity Establishment & Changes</option>
          <option value="ownership">Ownership & Control</option>
          <option value="governance">Governance & Records</option>
          <option value="compliance">Statutory Compliance</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-medium">
          Your Message *
        </label>
        <textarea
          id="message"
          rows={6}
          className={inputStyle}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Hidden spam-detection field */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px]"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {status === "success" && (
        <p role="status" className="rounded-lg bg-green-50 p-4 text-green-800">
          Your enquiry has been submitted successfully.
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="rounded-lg bg-red-50 p-4 text-red-700">
          {serverError}
        </p>
      )}

      
      {/* Cloudflare Turnstile security verification */}
      <div className="space-y-3">
        {turnstileSiteKey ? (
          <Turnstile
            ref={turnstileRef}
            siteKey={turnstileSiteKey}
            options={{
              theme: "light",
              size: "flexible",
            }}
            onSuccess={(token) => {
              setTurnstileToken(token);
              setTurnstileError("");
            }}
            onExpire={() => {
              setTurnstileToken("");
            }}
            onError={() => {
              setTurnstileToken("");
              setTurnstileError(
                "Security verification could not be completed. Please try again."
              );
            }}
          />
        ) : (
          <p role="alert" className="text-sm text-red-700">
            Security verification is currently unavailable.
          </p>
        )}

        {turnstileError && (
          <p role="alert" className="text-sm text-red-700">
            {turnstileError}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !turnstileSiteKey}
        className="rounded-lg bg-brand px-8 py-3 font-medium text-brand-foreground disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
