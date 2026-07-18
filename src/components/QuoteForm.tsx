"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/business";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot — bots tend to fill every field.
    if (data.company) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please call or text us instead.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please call or text us instead."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-brand-blue/30 bg-brand-blue-light p-6 text-center">
        <p className="font-display text-xl font-semibold text-ink">Request sent!</p>
        <p className="mt-2 text-slate">
          Thanks — we&apos;ve got your info and will text or call you back shortly during
          business hours (Mon–Fri, 8 AM–5 PM).
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your Name" name="name" required autoComplete="name" />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Vehicle Year" name="vehicleYear" required />
        <Field label="Make" name="vehicleMake" required />
        <Field label="Model" name="vehicleModel" required />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-ink">
          What do you need?
        </label>
        <select
          id="service"
          name="service"
          required
          className="mt-1.5 block w-full rounded-md border border-line bg-white px-3 py-2.5 text-ink shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Not sure">Not sure / other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Tell us more (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1.5 block w-full rounded-md border border-line bg-white px-3 py-2.5 text-ink shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
          placeholder="Size of the crack or chip, your city, best time to reach you, etc."
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-brand-blue px-6 py-3.5 text-base font-semibold text-white transition hover:bg-brand-blue-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Get My Free Quote"}
      </button>
      <p className="text-xs text-slate">
        We&apos;ll text or call you back during business hours. No spam, ever.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1.5 block w-full rounded-md border border-line bg-white px-3 py-2.5 text-ink shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
      />
    </div>
  );
}
