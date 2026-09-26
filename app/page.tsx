import { Shell } from "./site/Shell";
import { Hero, Nav } from "./site/sections/Hero";
import { Work } from "./site/sections/Work";
import { Contact, Films, Footer, Manifesto, Process, Services } from "./site/sections/Story";

export default function Home() {
  return (
    <Shell>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Work />
        <Films />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </Shell>
  );
}
