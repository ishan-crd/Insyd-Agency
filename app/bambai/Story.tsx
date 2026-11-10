"use client";
import { useEffect, useRef, useState } from "react";
import { onStickyProgress } from "./Smooth";

const STATEMENT =
  "Not a city inspired by Mumbai. The city itself: its sea wall, its Gothic stone, its taxis, its rain, rebuilt street by street.";

/** A sentence whose words light up as it scrolls through the screen. */
export function Statement() {
  const ref = useRef<HTMLElement>(null);
  const words = STATEMENT.split(" ");
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = el.querySelectorAll<HTMLElement>(".st-w");
    return onStickyProgress(el, (p) => {
      const lit = p * 1.15 * spans.length;
      spans.forEach((s, i) => s.style.setProperty("--o", String(Math.min(1, Math.max(0.14, lit - i)))));
    });
  }, []);
  return (
    <section ref={ref} className="st" aria-label="About Bambai">
      <div className="st-sticky">
        <p className="st-text">
          {words.map((w, i) => (
            <span key={i} className={`st-w${/itself|street/.test(w) ? " st-hl" : ""}`}>
              {w}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

const CAPTIONS = [
  { t: "Walk Marine Drive", s: "The sea wall on one side, the whole city on the other." },
  { t: "After the rain", s: "Low clouds, wet tarmac, the Queen's Necklace in the mirror." },
  { t: "Break into a run", s: "Weave past hawkers and walkers, cross at the signal, keep going." },
];

/** The gameplay reel: a framed video that opens up to full-bleed as you scroll, plus the full gameplay player. */
export function Reel() {
  const ref = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const [cap, setCap] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let last = -1;
    return onStickyProgress(el, (p) => {
      const open = Math.min(1, p / 0.45);
      const e = 1 - Math.pow(1 - open, 3);
      frame.current?.style.setProperty("--open", e.toFixed(4));
      const c = p < 0.42 ? 0 : p < 0.72 ? 1 : 2;
      if (c !== last) {
        last = c;
        setCap(c);
      }
    });
  }, []);

  return (
    <section ref={ref} className="reel" id="reel" aria-label="Gameplay">
      <div className="reel-sticky">
        <div ref={frame} className="reel-frame">
          <video data-autoplay muted loop playsInline preload="none" poster="/bambai/img/marinedrive-poster.jpg">
            <source src="/bambai/video/marinedrive.mp4" type="video/mp4" />
          </video>
          <div className="reel-shade" />
          <div className="reel-caps" aria-live="off">
            {CAPTIONS.map((c, i) => (
              <div key={i} className={`reel-cap${i === cap ? " on" : ""}`}>
                <h2>{c.t}</h2>
                <p>{c.s}</p>
              </div>
            ))}
          </div>
          <button type="button" className="reel-play" onClick={() => setPlaying(true)}>
            <span className="reel-play-ico" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path d="M5 3.5v11l9-5.5z" fill="currentColor" />
              </svg>
            </span>
            Watch the gameplay <span className="reel-len">1:52</span>
          </button>
        </div>
      </div>
      {playing && <Player onClose={() => setPlaying(false)} />}
    </section>
  );
}

function Player({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current!;
    d.showModal();
    window.__lenis?.stop();
    const close = () => onClose();
    d.addEventListener("close", close);
    return () => {
      d.removeEventListener("close", close);
      window.__lenis?.start();
    };
  }, [onClose]);
  return (
    <dialog
      ref={ref}
      className="player"
      aria-label="Bambai gameplay"
      onClick={(e) => {
        if (e.target === ref.current) ref.current.close();
      }}
    >
      <div className="player-box">
        <video src="/bambai/video/gameplay.mp4" poster="/bambai/img/gameplay-poster.jpg" controls autoPlay playsInline />
        <button type="button" className="player-x" onClick={() => ref.current?.close()} aria-label="Close video">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
            <path d="M4 4l10 10M14 4 4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <p className="player-note">Captured in game, work in progress.</p>
    </dialog>
  );
}
