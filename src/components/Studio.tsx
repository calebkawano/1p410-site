import { Container, SectionLabel } from "./Shell";
import { Reveal } from "./Reveal";
import { FOUNDER } from "@/lib/content";

export function Studio() {
  return (
    <section id="studio" className="relative py-24 md:py-32">
      <Container>
        <SectionLabel>Studio / 04</SectionLabel>

        <Reveal>
          <div className="mt-16 grid grid-cols-12 gap-y-10 md:gap-x-6">
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {FOUNDER.name}
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-ash">
                {FOUNDER.role}
              </p>
            </div>

            <div className="col-span-12 md:col-span-8 md:col-start-5">
              <p className="text-3xl leading-[1.35] tracking-[-0.03em] md:text-5xl md:leading-[1.18]">
                {FOUNDER.lead}
              </p>

              <ul className="mt-10 max-w-2xl space-y-4">
                {FOUNDER.highlights.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span
                      aria-hidden
                      className="mt-2.5 size-1 shrink-0 bg-accent"
                    />
                    <span className="text-base leading-relaxed text-ash md:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-10 max-w-2xl text-base leading-relaxed text-ash md:text-lg">
                {FOUNDER.studioNote}
              </p>

              <a
                href={FOUNDER.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-block font-mono text-xs uppercase tracking-[0.18em] text-ash transition-colors hover:text-bone"
              >
                Connect with the founder ↗
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
