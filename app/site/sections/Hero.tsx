"use client";
import Image from "next/image";
import { useRef } from "react";
import { PROJECTS } from "../data";
import { ease, seg, useScrollProgress } from "../motion";
import { Arrow, Logo } from "../ui";

export function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav-brand" aria-label="Insyd, back to top">
        <Logo />
      </a>
      <nav className="nav-links" aria-label="Sections">
        <a href="#work">Work</a>
        <a href="#films">Films</a>
        <a href="#services">Services</a>
        <a href="#process">Process</a>
      </nav>
      <a href="#contact" className="btn btn-solid nav-cta">
        Start a project <Arrow />
      </a>
    </header>
  );
}

const HEADLINE: { t: string; serif?: boolean }[][] = [
  [{ t: "Ideas" }, { t: "in." }],
  [{ t: "Products" }, { t: "out.", serif: true }],
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  useScrollProgress(ref, "sticky", (p) => {
    const s = stage.current;
    if (!s) return;
    s.style.setProperty("--t", ease(seg(p, 0.04, 0.6)).toFixed(4));
    s.style.setProperty("--h", seg(p, 0.02, 0.32).toFixed(4));
    s.style.setProperty("--c", ease(seg(p, 0.55, 0.8)).toFixed(4));
  });

  return (
    <section ref={ref} className="hero" id="top" data-theme="dark">
      <div ref={stage} className="hero-stage">
        <div className="hero-glow" aria-hidden>
          <i className="g1" />
          <i className="g2" />
          <i className="g3" />
        </div>

        <div className="hero-copy">
          <p className="pill rise" style={{ animationDelay: "0.1s" }}>
            <span className="live-dot" /> Independent product studio
          </p>
          <h1 className="hero-title">
            {HEADLINE.map((line, li) => (
              <span className="line" key={li}>
                {line.map((w, wi) => [
                  wi > 0 && " ",
                  <span className="w" key={wi}>
                    <span className={w.serif ? "serif" : undefined} style={{ animationDelay: `${0.18 + (li * 2 + wi) * 0.09}s` }}>
                      {w.t}
                    </span>
                  </span>,
                ])}
              </span>
            ))}
          </h1>
          <p className="hero-sub rise" style={{ animationDelay: "0.55s" }}>
            Insyd designs, builds and launches software: native apps, AI agents, developer tools, and the films that
            announce them.
          </p>
          <div className="hero-ctas rise" style={{ animationDelay: "0.7s" }}>
            <a href="#work" className="btn btn-solid btn-lg">
              See the work <Arrow dir="down" />
            </a>
            <a href="#contact" className="btn btn-ghost btn-lg">
              Start a project
            </a>
          </div>
        </div>

        <p className="hero-caption" aria-hidden>
          Three products. <span className="serif">Designed, built and launched</span> in-house.
        </p>

        <div className="hero-cards">
          {PROJECTS.map((p, i) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="hero-card"
              style={{ ["--k" as string]: i - 1, ["--i" as string]: i }}
              data-cursor="View"
            >
              <span className="hero-card-bar">
                <i />
                <i />
                <i />
                <span>{p.domain}</span>
              </span>
              <Image
                src={p.cover}
                alt={`${p.name} website`}
                width={2000}
                height={1250}
                sizes="(max-width: 760px) 80vw, 480px"
                priority
              />
              <span className="hero-card-name">
                {p.name} <Arrow />
              </span>
            </a>
          ))}
        </div>

        <div className="scroll-hint" aria-hidden>
          <span />
        </div>
      </div>
    </section>
  );
}
