"use client";

import { useEffect, useState } from "react";
import { Container } from "./Shell";
import { NAV_LINKS, STUDIO } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll spy — the section occupying the upper band of the viewport wins
  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // ids currently crossing the band, so the underline clears over the hero
    const inBand = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inBand.add(entry.target.id);
          else inBand.delete(entry.target.id);
        }

        const next = NAV_LINKS.find(({ id }) => inBand.has(id));
        setActive(next ? next.id : null);
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-hair bg-ink" : "border-b border-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.42em] text-bone">
              {STUDIO.wordmark}
            </span>
            <span
              aria-hidden
              className="led size-1.5 rounded-full bg-accent"
            />
            <span className="sr-only">{STUDIO.name} — home</span>
          </a>

          <ul className="flex items-center gap-6 md:gap-10">
            {NAV_LINKS.map(({ label, href, id }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group relative block py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ash transition-colors hover:text-bone"
                >
                  {label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 group-hover:w-full ${
                      active === id ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
