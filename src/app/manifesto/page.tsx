import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Manifesto — 1P410 Technologies",
};

export default function Manifesto() {
  return (
    <main className="flex min-h-screen flex-1 items-center">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ash">
          Manifesto
        </p>
        <h1 className="mt-8 text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-[-0.04em]">
          Coming soon.
        </h1>
        <Link
          href="/"
          className="mt-14 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-ash transition-colors hover:text-bone"
        >
          ← Back
        </Link>
      </Container>
    </main>
  );
}
