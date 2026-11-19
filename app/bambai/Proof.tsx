import Link from "next/link";
import { FOUNDER, GAME, STUDIO } from "../studio";

const NUMBERS = [
  { value: GAME.views, label: "views on the Instagram reel", href: GAME.reel },
  { value: GAME.linkedinViews, label: "views on LinkedIn" },
  { value: "1", label: "developer" },
  { value: "5", label: "weeks from zero to playable" },
];

/** The traction strip: the numbers, the reel, and where to play. */
export function Proof() {
  return (
    <section className="proof" id="traction" aria-labelledby="proof-h">
      <div className="bwrap">
        <p className="proof-eyebrow" data-reveal>
          The response
        </p>
        <h2 id="proof-h" className="bh2 proof-h" data-reveal style={{ ["--d" as string]: "80ms" }}>
          Mumbai <span className="taxi">noticed.</span>
        </h2>
        <p className="blede proof-lede" data-reveal style={{ ["--d" as string]: "160ms" }}>
          One gameplay reel, no ads. {GAME.views} people watched it, and studio owners and developers from across the
          games industry wrote in asking how it was built.
        </p>
        <div className="proof-nums" data-reveal style={{ ["--d" as string]: "220ms" }}>
          {NUMBERS.map((n) => {
            const body = (
              <>
                <strong>{n.value}</strong>
                <span>{n.label}</span>
              </>
            );
            return n.href ? (
              <a key={n.label} href={n.href} target="_blank" rel="noreferrer" className="proof-num proof-num-link">
                {body}
                <em>Watch the reel ↗</em>
              </a>
            ) : (
              <div key={n.label} className="proof-num">
                {body}
              </div>
            );
          })}
        </div>
        <div className="proof-ctas" data-reveal style={{ ["--d" as string]: "280ms" }}>
          <a className="proof-btn proof-btn-solid" href={GAME.itch} target="_blank" rel="noreferrer">
            Play free on itch.io
          </a>
          <a className="proof-btn" href={GAME.reel} target="_blank" rel="noreferrer">
            Watch the 1.8M reel
          </a>
          <Link className="proof-btn" href="/press">
            Press kit
          </Link>
        </div>
      </div>
    </section>
  );
}

/** The founder strip: puts a name and a face to the studio, and links to the full story. */
export function Founder() {
  return (
    <section className="founder" aria-labelledby="founder-strip-h">
      <div className="bwrap founder-row" data-reveal>
        <img src={FOUNDER.photo} alt="Ishan Gupta, founder of Insyd Studios" width={622} height={697} loading="lazy" />
        <div>
          <p className="proof-eyebrow">Made by</p>
          <h2 id="founder-strip-h" className="founder-h">
            Ishan Gupta, founder of {STUDIO.name}
          </h2>
          <p className="blede">
            Bambai is built by Insyd Studios, an independent game studio from India founded by Ishan Gupta. He built the
            first playable version alone in about five weeks: a real slice of South Mumbai with cars, autos, buses, a
            helicopter, crowds, combat and a wanted system.
          </p>
          <p className="founder-links">
            <Link href="/about">The full story</Link>
            <a href={FOUNDER.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
