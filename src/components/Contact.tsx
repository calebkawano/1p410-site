"use client";

import { useState, type FormEvent } from "react";
import { Container, SectionLabel } from "./Shell";

const FIELD =
  "w-full border border-hair bg-transparent px-4 py-3.5 text-sm text-bone caret-accent transition-colors duration-200 outline-none placeholder:text-ash/60 focus:border-accent";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
          company: String(data.get("company") ?? ""),
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        setError(result?.error ?? "Something went wrong. Try again?");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setError("Network trouble. Try again?");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <Container>
        <SectionLabel>Contact / 05</SectionLabel>

        <div className="mt-16 grid grid-cols-12 gap-y-10 md:gap-x-6">
          <div className="col-span-12 md:col-span-5">
            <h2 className="text-3xl font-medium tracking-[-0.02em] md:text-4xl">
              What&rsquo;s on your mind?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ash">
              Ask about an app, tell us what you&rsquo;re building, or share
              something you think we should see. There&rsquo;s a person on the
              other side, and we read every note.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="col-span-12 flex flex-col gap-4 md:col-span-6 md:col-start-7"
          >
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ash">
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@domain.com"
                className={`${FIELD} mt-3`}
              />
            </label>

            <label className="block">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ash">
                Message
              </span>
              <textarea
                name="message"
                rows={5}
                required
                maxLength={5000}
                placeholder="A few lines is plenty. What are your thoughts?"
                className={`${FIELD} mt-3 resize-none`}
              />
            </label>

            {/* honeypot — hidden from people, catnip for bots */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="pointer-events-none absolute -left-[9999px] size-px opacity-0"
            />

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="border border-hair px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:border-accent disabled:cursor-not-allowed disabled:text-ash disabled:hover:border-hair"
              >
                {status === "sending" ? "Sending" : "Send"}
              </button>

              <span
                role="status"
                aria-live="polite"
                className={`font-mono text-xs uppercase tracking-[0.18em] ${
                  status === "error" ? "text-accent" : "text-ash"
                }`}
              >
                {status === "sent" && "Sent — we'll be in touch."}
                {status === "error" && error}
              </span>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
