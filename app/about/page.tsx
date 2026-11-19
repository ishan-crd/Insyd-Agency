import type { Metadata } from "next";
import Link from "next/link";
import { Doc } from "../bambai/Doc";
import { FACTS, FOUNDER, GAME, STUDIO } from "../studio";

const title = "Ishan Gupta, founder of Insyd Studios · About";
const description =
  "Insyd Studios is an independent game studio from India, founded by Ishan Gupta. Its first game, Bambai, is an open world set in South Mumbai, built solo in Unreal Engine 5.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { type: "profile", url: "/about", title, description, images: [FOUNDER.photo] },
  twitter: { card: "summary_large_image", title, description, images: [FOUNDER.photo] },
};

export default function About() {
  return (
    <Doc>
      <section className="bwrap doc-hero">
        <p className="doc-eyebrow">About the studio</p>
        <h1 className="bh2">
          Insyd <span className="taxi">Studios</span>
        </h1>
        <p className="blede">
          An independent game studio from India, making open worlds out of real Indian cities. Our first game is{" "}
          <Link href="/">Bambai</Link>, South Mumbai rebuilt street by street.
        </p>
      </section>

      <section className="bwrap doc-facts" aria-label="Bambai in numbers">
        {FACTS.map((f) => (
          <div key={f.label}>
            <strong>{f.value}</strong>
            <span>{f.label}</span>
          </div>
        ))}
      </section>

      <section className="bwrap doc-founder" id="ishan" aria-labelledby="founder-h">
        <img src={FOUNDER.photo} alt="Ishan Gupta" width={622} height={697} />
        <div>
          <p className="doc-eyebrow">Founder</p>
          <h2 id="founder-h" className="doc-h">
            Ishan Gupta
          </h2>
          <p>
            Ishan Gupta is the founder of {STUDIO.name}. He built the first playable version of {GAME.name} on his own
            in under five weeks, with no team and no funding: Marine Drive, the Fort, the Taj, the Gateway of India,
            taxis, crowds and the monsoon, all at real scale in {GAME.engine}.
          </p>
          <p>
            Its gameplay reel reached{" "}
            <a href={GAME.reel} target="_blank" rel="noreferrer">
              {GAME.views} views on Instagram
            </a>{" "}
            with no ads, and studio owners and developers from across the industry reached out to ask how it was made.
          </p>
          <p>
            Before games, Ishan shipped production software as a full stack engineer: founding engineer at Clipstake,
            where he built the first iOS and Android apps solo, a streaming platform at Den.show that reached 20,000+
            users, and client work for Zomato, OYO and Lenskart. He holds a BCA from Jaypee Institute of Information Technology, Noida.
          </p>
          <p className="doc-links-row">
            <a href={FOUNDER.website} target="_blank" rel="noreferrer">
              ishandev.in
            </a>
            <a href={FOUNDER.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={FOUNDER.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </section>

      <section className="bwrap doc-block" aria-labelledby="next-h">
        <h2 id="next-h" className="doc-h">
          What&apos;s next
        </h2>
        <p className="blede">
          {GAME.name} is in development for PC, with a free playable build on{" "}
          <a href={GAME.itch} target="_blank" rel="noreferrer">
            itch.io
          </a>
          . After Mumbai, Insyd Studios will take the same approach to more Indian cities and stories.
        </p>
        <p className="doc-links-row">
          <Link href="/press">Press kit</Link>
          <a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>
        </p>
      </section>
    </Doc>
  );
}
