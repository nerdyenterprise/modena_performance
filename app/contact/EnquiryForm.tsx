"use client";

import type { FormEvent } from "react";

export function EnquiryForm({ email }: { email: string }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const subject = `MODENA ${form.get("interest") ?? "enquiry"}`;
    const body = [
      `Name: ${form.get("name") ?? ""}`,
      `Email: ${form.get("email") ?? ""}`,
      `Telephone: ${form.get("telephone") ?? ""}`,
      `Interested in: ${form.get("interest") ?? ""}`,
      "",
      `${form.get("message") ?? ""}`,
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>

      <label>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>

      <label>
        <span>Telephone</span>
        <input name="telephone" type="tel" autoComplete="tel" required />
      </label>

      <fieldset>
        <legend>I&apos;m interested in:</legend>
        <div>
          {["Buying", "Selling", "Sourcing"].map((interest) => (
            <label key={interest}>
              <input
                name="interest"
                type="radio"
                value={interest}
                required={interest === "Buying"}
              />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label>
        <span>Message</span>
        <textarea name="message" rows={5} required />
      </label>

      <button type="submit">Submit enquiry →</button>
    </form>
  );
}
