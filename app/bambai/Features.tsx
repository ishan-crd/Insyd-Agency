"use client";
import { useEffect, useRef, useState } from "react";
import { Logo } from "../site/ui";
import { CONTACT_EMAIL, FEATURES } from "./data";
import { Waitlist } from "./Waitlist";
import Link from "next/link";

/** What you do in Bambai: a list on the left, the matching footage pinned on the right. */
export function Features() {
  const [active, setActive] = useState(0);
  const rows = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    rows.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section className="feat" aria-label="What you do">
      <div className="bwrap feat-grid">
        <div>
          <h2 className="bh2 feat-h" data-reveal>
            Live the city.
          </h2>
          <ol className="feat-list">
            {FEATURES.map((f, i) => (
              <li
                key={f.id}
                ref={(el) => {
                  rows.current[i] = el;
                }}
                data-i={i}
                className={`feat-row${i === active ? " on" : ""}`}
              >
                <h3>{f.title}</h3>
                <p>{f.line}</p>
                <div className="feat-inline">
                  <video data-autoplay muted loop playsInline preload="none">
                    <source src={f.video} type="video/mp4" />
                  </video>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="feat-media" aria-hidden>
          <div className="feat-sticky">
            {FEATURES.map((f, i) => (
              <video key={f.id} data-autoplay muted loop playsInline preload="none" className={i === active ? "on" : ""}>
                <source src={f.video} type="video/mp4" />
              </video>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Finale() {
  return (
    <section className="fin" id="waitlist" aria-label="Join the waitlist">
      <div className="fin-media" aria-hidden>
        <video data-autoplay muted loop playsInline preload="none" poster="/bambai/img/taj-poster.jpg">
          <source src="/bambai/video/taj.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="bwrap fin-body">
        <p className="fin-deva" lang="mr" data-reveal>
          मुंबई वाट पाहत आहे
        </p>
        <h2 className="fin-h" data-reveal style={{ ["--d" as string]: "80ms" }}>
          Mumbai is waiting.
        </h2>
        <p className="blede fin-lede" data-reveal style={{ ["--d" as string]: "160ms" }}>
          Bambai is in development for PC. Join the waitlist and we&apos;ll tell you the day you can play.
        </p>
        <div className="fin-form" data-reveal style={{ ["--d" as string]: "240ms" }}>
          <Waitlist size="lg" />
        </div>
      </div>
    </section>
  );
}

export function BFooter() {
  return (
    <footer className="bfoot">
      <div className="bwrap bfoot-row">
        <div className="bfoot-brand">
          <Logo />
          <p>Insyd is an independent studio. Bambai is our first game.</p>
        </div>
        <nav className="bfoot-links" aria-label="Footer">
          <a href="#reel">Gameplay</a>
          <a href="#city">The city</a>
          <a href="#garage">Garage</a>
          <a href="#people">People</a>
          <Link href="/other-projects">Other projects</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </nav>
      </div>
      <div className="bwrap bfoot-base">
        <span>© {new Date().getFullYear()} Insyd</span>
        <span>Footage captured in game. Work in progress.</span>
      </div>
      <p className="bfoot-word" aria-hidden>
        BAMBAI
      </p>
    </footer>
  );
}
