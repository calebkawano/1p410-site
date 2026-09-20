import Image from "next/image";
import { Container, SectionLabel } from "./Shell";
import { Reveal } from "./Reveal";
import { PROJECTS } from "@/lib/content";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <Container>
        <SectionLabel>Portfolio / 02</SectionLabel>

        <div className="mt-16 space-y-6">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.name}
              delay={i * 90}
              className="w-full"
            >
              <article className="project-card group relative grid overflow-hidden border border-hair lg:grid-cols-[0.8fr_1.2fr]">
                <span className="project-border-trace" aria-hidden="true">
                  <span className="project-border-trace__segment project-border-trace__left" />
                  <span className="project-border-trace__segment project-border-trace__top" />
                  <span className="project-border-trace__segment project-border-trace__bottom" />
                  <span className="project-border-trace__segment project-border-trace__right-top" />
                  <span className="project-border-trace__segment project-border-trace__right-bottom" />
                </span>
                <span className="project-card-pulse" aria-hidden="true" />
                <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs tracking-[0.2em] text-ash">
                        0{i + 1}
                      </span>
                      <ul className="flex flex-wrap justify-end gap-2">
                        {project.tags.map((tag) => (
                          <li
                            key={tag}
                            className="border border-hair px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-ash"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <h3 className="mt-16 text-4xl font-medium leading-[1] tracking-[-0.035em] md:text-6xl">
                      <span>
                        {project.name}
                        {project.descriptor ? ":" : ""}
                      </span>
                      {project.descriptor && (
                        <span className="mt-3 block text-2xl tracking-[-0.025em] text-ash md:text-3xl">
                          {project.descriptor}
                        </span>
                      )}
                    </h3>
                    <p className="mt-5 max-w-md text-lg leading-snug text-bone md:text-xl">
                      {project.tagline}
                    </p>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-ash">
                      {project.body}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                      {"website" in project && project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noreferrer"
                          className="group/link inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-bone"
                        >
                          {"websiteLabel" in project
                            ? project.websiteLabel
                            : "Visit site"}
                          <span
                            aria-hidden
                            className="transition-transform duration-300 group-hover/link:translate-x-1"
                          >
                            ↗
                          </span>
                        </a>
                      )}
                      {project.appStore && (
                        <a
                          href={project.appStore}
                          target="_blank"
                          rel="noreferrer"
                          className="group/link inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-bone"
                        >
                          App Store
                          <span
                            aria-hidden
                            className="transition-transform duration-300 group-hover/link:translate-x-1"
                          >
                            ↗
                          </span>
                        </a>
                      )}
                    </div>
                  </div>

                  <span className="mt-16 font-mono text-xs uppercase tracking-[0.18em] text-ash">
                    {project.availability}
                  </span>
                </div>

                <div className={`project-gallery project-gallery--${project.slug}`}>
                  {project.preview === "brand" && project.artwork ? (
                    <>
                      <span className="pair-note pair-note--one">
                        One list, together
                      </span>
                      <div className="pair-lockup">
                        <Image
                          src={project.artwork}
                          alt="pAIr smiling pear app icon"
                          width={1024}
                          height={1024}
                          sizes="(max-width: 768px) 62vw, 28vw"
                          unoptimized
                        />
                      </div>
                      <span className="pair-note pair-note--two">
                        Meals from what you have
                      </span>
                      <span className="pair-note pair-note--three">
                        Less waste, less guesswork
                      </span>
                    </>
                  ) : (
                    project.images.map((src, imageIndex) => (
                      <div key={src} className="project-screen">
                        <Image
                          src={src}
                          alt={`${project.fullName} app screen ${imageIndex + 1}`}
                          width={1320}
                          height={2868}
                          sizes="(max-width: 768px) 42vw, 18vw"
                          loading={i === 0 ? "eager" : "lazy"}
                          unoptimized
                        />
                      </div>
                    ))
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
