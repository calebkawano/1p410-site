"use client";

import { useState, type FormEvent } from "react";
import { Container, SectionLabel } from "./Shell";

const FIELD =
  "w-full border border-hair bg-transparent px-4 py-3.5 text-sm text-bone caret-accent transition-colors duration-200 outline-none placeholder:text-ash/60 focus:border-accent";

export function Contact() {
  const [sent, setSent] = useState(false);

  // MVP scaffold — nothing is transmitted.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
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
                placeholder="A few lines is plenty. What are your thoughts?"
                className={`${FIELD} mt-3 resize-none`}
              />
            </label>

            <div className="flex items-center gap-6">
              <button
                type="submit"
                className="border border-hair px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:border-accent"
              >
                Send
              </button>
              {sent && (
                <span
                  role="status"
                  className="font-mono text-xs uppercase tracking-[0.18em] text-ash"
                >
                  Queued — scaffold only
                </span>
              )}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
