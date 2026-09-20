import { Container } from "./Shell";
import { FOOTER_LINKS, ORIGIN_LINE, STUDIO } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative border-t border-hair py-14">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-ash/70">
              © {STUDIO.year} {STUDIO.name}
            </p>
            {/* the only place the name's origin is spelled out */}
            <p className="mt-3 font-mono text-[10px] tracking-[0.14em] text-ash/40">
              {ORIGIN_LINE}
            </p>
          </div>

          <ul className="flex items-center gap-8">
            {FOOTER_LINKS.map(({ label, href }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash/70 transition-colors hover:text-bone"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash/40">
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
