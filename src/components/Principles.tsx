import { Container, SectionLabel } from "./Shell";
import { Reveal } from "./Reveal";
import { PRINCIPLES, PRINCIPLES_INTRO } from "@/lib/content";

export function Principles() {
  return (
    <section id="principles" className="relative py-24 md:py-32">
      <Container>
        <SectionLabel>Principles / 03</SectionLabel>

        <Reveal>
          <p className="mt-16 max-w-5xl text-[clamp(2rem,4.1vw,4.15rem)] font-normal leading-[1.16] tracking-[-0.03em]">
            {PRINCIPLES_INTRO.lead}
            <span className="underline decoration-accent decoration-[0.08em] underline-offset-[0.14em]">
              {PRINCIPLES_INTRO.life}
            </span>
            {PRINCIPLES_INTRO.bridge}
            <span className="underline decoration-accent decoration-[0.08em] underline-offset-[0.14em]">
              {PRINCIPLES_INTRO.purpose}
            </span>
          </p>
        </Reveal>

        <div className="mt-24 grid grid-cols-12 gap-y-14 md:gap-x-6">
          {PRINCIPLES.map((principle, i) => (
            <Reveal
              key={principle.numeral}
              delay={i * 90}
              className="col-span-12 md:col-span-4"
            >
              <div className="border-t border-hair pt-8">
                <span className="font-mono text-[11px] tracking-[0.28em] text-accent">
                  {principle.numeral}
                </span>
                <h3 className="mt-6 text-2xl font-medium tracking-[-0.02em]">
                  {principle.title}
                </h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-ash">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
