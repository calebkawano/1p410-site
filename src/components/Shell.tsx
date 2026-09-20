import type { ReactNode } from "react";

/** Consistent horizontal frame — every section snaps to this. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16 ${className}`}
    >
      {children}
    </div>
  );
}

/** Exposed 12-column structure — hairlines behind the content, never in front. */
export function GridLines() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
    >
      <Container className="h-full">
        <div className="grid h-full grid-cols-12 gap-x-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-hair/40" />
          ))}
        </div>
      </Container>
    </div>
  );
}

/** Mono label that heads every section, e.g. `PORTFOLIO / 02`. */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs uppercase tracking-[0.22em] text-ash">
        {children}
      </span>
      <span className="h-px flex-1 bg-hair" />
    </div>
  );
}
