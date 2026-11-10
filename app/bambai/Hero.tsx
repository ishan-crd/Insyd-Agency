"use client";
import { useEffect, useRef, useState } from "react";
import { Logo } from "../site/ui";
import { onStickyProgress, scrollToTarget } from "./Smooth";
import { Waitlist } from "./Waitlist";
import Link from "next/link";

const LINKS = [
  { href: "#reel", label: "Gameplay" },
  { href: "#city", label: "The city" },
  { href: "#garage", label: "Garage" },
  { href: "#people", label: "People" },
];

function joinWaitlist() {
  scrollToTarget("#top");
  setTimeout(() => document.querySelector<HTMLInputElement>("#hero-waitlist input[type=email]")?.focus({ preventScroll: true }), 900);
}

export function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => document.documentElement.classList.toggle("scrolled", window.scrollY > 40);
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
  }, [open]);

  return (
    <header className="bnav">
      <a href="#top" className="bnav-brand" aria-label="Insyd, back to top" onClick={() => setOpen(false)}>
        <Logo />
        <span className="bnav-games">studios</span>
      </a>
      <nav className="bnav-links" aria-label="Sections">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
        <Link href="/other-projects" className="bnav-other">
          Other projects
        </Link>
      </nav>
      <button type="button" className="bnav-cta" onClick={joinWaitlist}>
        Join the waitlist
      </button>
      <button
        type="button"
        className="bnav-burger"
        aria-expanded={open}
        aria-controls="bnav-sheet"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <i />
        <i />
      </button>
      <div id="bnav-sheet" className="bnav-sheet" hidden={!open}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <Link href="/other-projects">Other projects</Link>
        <button
          type="button"
          className="bnav-sheet-cta"
          onClick={() => {
            setOpen(false);
            joinWaitlist();
          }}
        >
          Join the waitlist
        </button>
      </div>
    </header>
  );
}

function MumbaiClock() {
  const [t, setT] = useState<string | null>(null);
  useEffect(() => {
    const f = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit" });
    const up = () => setT(f.format(new Date()));
    up();
    const id = setInterval(up, 15000);
    return () => clearInterval(id);
  }, []);
  return <span className="hero-clock">{t ? `${t} IST` : "IST"}</span>;
}

const WORD = "BAMBAI".split("");

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const media = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return onStickyProgress(el, (p) => media.current?.style.setProperty("--hp", p.toFixed(4)));
  }, []);

  return (
    <section ref={ref} className="hero-b" id="top">
      <div className="hero-b-sticky">
        <div ref={media} className="hero-b-media" aria-hidden>
          <video autoPlay muted loop playsInline preload="auto" poster="/bambai/img/hero-poster.jpg">
            <source src="/bambai/video/hero_m.mp4" type="video/mp4" media="(max-width: 760px)" />
            <source src="/bambai/video/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-b-shade" />
        </div>

        <div className="hero-b-meta" aria-hidden>
          <span>18.9220° N · 72.8347° E</span>
          <MumbaiClock />
        </div>

        <div className="hero-b-body">
          <p className="hero-b-deva" lang="mr">
            बम्बई
          </p>
          <h1 className="hero-b-word" aria-label="Bambai">
            {WORD.map((c, i) => (
              <span key={i} aria-hidden style={{ animationDelay: `${0.15 + i * 0.07}s` }}>
                {c}
              </span>
            ))}
          </h1>
          <div className="hero-b-row">
            <p className="hero-b-sub">
              An open-world game set in Mumbai. Every street from Colaba to Churchgate, rebuilt in Unreal Engine 5.
            </p>
            <div className="hero-b-form">
              <Waitlist id="hero-waitlist" />
            </div>
          </div>
          <p className="hero-b-plat">
            <span className="dot" /> In development for PC · by Insyd
          </p>
        </div>
      </div>
    </section>
  );
}
