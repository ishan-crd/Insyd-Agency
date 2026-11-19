import type { Metadata } from "next";
import Link from "next/link";
import { Doc } from "../bambai/Doc";
import { FACTS, FOUNDER, GAME, SCREENSHOTS, STUDIO } from "../studio";

const title = "Bambai press kit · Insyd Studios";
const description =
  "Press kit for Bambai, the open-world South Mumbai game by Insyd Studios: fact sheet, description, founder bio, screenshots, gameplay video and logo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/press" },
  openGraph: { url: "/press", title, description, images: ["/bambai/img/og.jpg"] },
};

const SHEET = [
  ["Game", GAME.name],
  ["Developer", STUDIO.name],
  ["Founder", FOUNDER.name],
  ["Based in", STUDIO.based],
  ["Platform", GAME.platform],
  ["Engine", GAME.engine],
  ["Status", GAME.status],
  ["Press contact", STUDIO.email],
];

export default function Press() {
  return (
    <Doc>
      <section className="bwrap doc-hero">
        <p className="doc-eyebrow">Press kit</p>
        <h1 className="bh2">
          Bambai<span className="taxi">.</span>
        </h1>
        <p className="blede">
          {GAME.tagline}, made by one developer in under five weeks. Everything you need to write about it is on this
          page, free to use with credit to {STUDIO.name}.
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

      <section className="bwrap doc-two" aria-labelledby="sheet-h">
        <div>
          <h2 id="sheet-h" className="doc-h">
            Fact sheet
          </h2>
          <dl className="doc-sheet">
            {SHEET.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{k === "Press contact" ? <a href={`mailto:${v}`}>{v}</a> : v}</dd>
              </div>
            ))}
            <div>
              <dt>Play</dt>
              <dd>
                <a href={GAME.itch} target="_blank" rel="noreferrer">
                  sneakypp.itch.io/bambai
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <h2 className="doc-h">About the game</h2>
          <p>
            Bambai is an open-world game set in South Mumbai. Not a city inspired by Mumbai, the city itself: Marine
            Drive, the Rajabai Clock Tower, the Taj, the Gateway of India and the lanes of the Fort, all at their real
            size and built from the real streets.
          </p>
          <p>
            Walk the sea face through crowds of hawkers, office goers and dabbawalas, drive a kaali-peeli taxi, ride the
            local train, or take a helicopter over the city as the monsoon rolls in off the Arabian Sea.
          </p>
          <h2 className="doc-h doc-h-gap">About the developer</h2>
          <p>
            {STUDIO.name} is an independent studio from India founded by {FOUNDER.name}. He built the first playable
            version of Bambai solo, with no team and no funding. Its gameplay reel passed {GAME.views} views on
            Instagram. <Link href="/about">More about Ishan</Link>
          </p>
        </div>
      </section>

      <section className="bwrap doc-block" aria-labelledby="shots-h">
        <h2 id="shots-h" className="doc-h">
          Screenshots
        </h2>
        <p className="doc-note">Captured in game, work in progress. Click any image for the full size.</p>
        <div className="doc-shots">
          {SCREENSHOTS.map((s) => (
            <a key={s.src} href={s.src} target="_blank" rel="noreferrer">
              <img src={s.src} alt={s.alt} width={1600} height={898} loading="lazy" />
            </a>
          ))}
        </div>
      </section>

      <section className="bwrap doc-block" aria-labelledby="video-h">
        <h2 id="video-h" className="doc-h">
          Gameplay video
        </h2>
        <video className="doc-video" src="/bambai/video/gameplay.mp4" poster="/bambai/img/gameplay-poster.jpg" controls playsInline preload="none" />
        <p className="doc-links-row">
          <a href="/bambai/video/gameplay.mp4" download>
            Download the gameplay video
          </a>
        </p>
      </section>

      <section className="bwrap doc-block" aria-labelledby="logo-h">
        <h2 id="logo-h" className="doc-h">
          Logo and photo
        </h2>
        <div className="doc-assets">
          <a href="/press/insyd-logo-512.png" download>
            <img src="/press/insyd-logo-512.png" alt="Insyd Studios logo" width={512} height={512} />
            <span>Insyd Studios logo, PNG</span>
          </a>
          <a href={FOUNDER.photo} download>
            <img src={FOUNDER.photo} alt="Ishan Gupta, founder of Insyd Studios" width={622} height={697} />
            <span>Ishan Gupta, founder</span>
          </a>
        </div>
      </section>

      <section className="bwrap doc-block">
        <h2 className="doc-h">Interviews and coverage</h2>
        <p className="blede">
          For interviews, early builds or more footage, write to{" "}
          <a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>.
        </p>
      </section>
    </Doc>
  );
}
