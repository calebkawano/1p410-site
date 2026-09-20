import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Principles } from "@/components/Principles";
import { Studio } from "@/components/Studio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { GridLines } from "@/components/Shell";

export default function Home() {
  return (
    <>
      <GridLines />
      <Nav />
      <main className="relative z-10 flex-1">
        <Hero />
        <Portfolio />
        <Principles />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
