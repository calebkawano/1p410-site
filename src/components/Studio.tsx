import { Container, SectionLabel } from "./Shell";
import { Reveal } from "./Reveal";

export function Studio() {
  return (
    <section id="studio" className="relative py-24 md:py-32">
      <Container>
        <SectionLabel>Studio / 04</SectionLabel>

        <Reveal>
          <div className="mt-16 grid grid-cols-12 gap-y-10 md:gap-x-6">
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Caleb Kawano
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-ash">
                Founder / Builder
              </p>
            </div>

            <div className="col-span-12 md:col-span-8 md:col-start-5">
              <p className="text-3xl leading-[1.35] tracking-[-0.03em] md:text-5xl md:leading-[1.18]">
                Caleb is an Applied Mathematics student at UC
                Berkeley building focused tools for needs he knows firsthand.
              </p>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-ash md:text-lg">
                Variance began with a simple question during quant interview
                prep: why can&rsquo;t this practice fit into the five minutes you
                already have? Bread grew from the desire to stay consistent in
                Scripture. pAIr is being built to make shared groceries and meal
                planning feel lighter for real households.
              </p>
              <a
                href="https://www.linkedin.com/in/caleb-kawano"
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
