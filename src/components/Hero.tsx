import { Container } from "./Shell";
import { HERO } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-12 lg:col-span-11">
            <p className="hero-enter hero-enter-1 font-mono text-xs uppercase tracking-[0.22em] text-ash">
              {HERO.index}
            </p>

            <h1 className="mt-8 text-[clamp(3rem,8.8vw,8.25rem)] font-medium leading-[0.92] tracking-[-0.055em]">
              {HERO.headline.map((line, index) => (
                <span
                  key={line}
                  className={`hero-headline-line hero-headline-line--${index + 1}`}
                >
                  <span className="hero-headline-line__inner">
                    {line}
                    {index === HERO.headline.length - 1 && (
                      <>
                        {" "}
                        <span className="hero-headline-accent">
                          {HERO.headlineAccent}
                        </span>
                      </>
                    )}
                  </span>
                </span>
              ))}
            </h1>

            <p className="hero-enter hero-enter-3 mt-10 max-w-3xl text-lg leading-relaxed text-ash md:text-xl">
              {HERO.subhead}
            </p>

            <a
              href={HERO.cta.href}
              className="hero-enter hero-enter-4 mt-12 inline-flex items-center gap-4 border border-hair px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:border-accent"
            >
              {HERO.cta.label}
              <span aria-hidden>↘</span>
            </a>
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-10 z-10">
        <Container>
          <div className="hero-enter hero-enter-5 flex items-center gap-3">
            <span aria-hidden className="led size-1 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-ash">
              {HERO.status}
            </span>
          </div>
        </Container>
      </div>
    </section>
  );
}
