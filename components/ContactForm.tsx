
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";

const inputStyle =
  "w-full rounded-lg border border-border bg-surface px-4 py-3 outline-none focus:border-brand";

export default function ContactForm() {
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
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

  async function onSubmit(values: ContactFormValues) {
    setStatus(null);
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send enquiry.");
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setServerError(
        error instanceof Error ? error.message : "Something went wrong."
      );
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
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
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

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-brand px-8 py-3 font-medium text-brand-foreground disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
