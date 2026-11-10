"use client";
import { useEffect, useRef } from "react";
import { PLACES } from "./data";
import { onStickyProgress } from "./Smooth";

/** The landmarks, as a horizontal strip pinned while you scroll down (desktop) or swiped (phones). */
export function City() {
  const ref = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const tr = track.current;
    if (!el || !tr) return;
    const wide = matchMedia("(min-width: 900px)");
    let off: (() => void) | undefined;
    const setup = () => {
      off?.();
      off = undefined;
      tr.style.transform = "";
      if (!wide.matches) {
        el.style.height = "";
        return;
      }
      const size = () => {
        const dist = tr.scrollWidth - window.innerWidth;
        el.style.height = `${window.innerHeight + Math.max(0, dist)}px`;
        return dist;
      };
      let dist = size();
      const ro = new ResizeObserver(() => (dist = size()));
      ro.observe(tr);
      const stop = onStickyProgress(el, (p) => {
        tr.style.transform = `translate3d(${(-p * dist).toFixed(1)}px,0,0)`;
        tr.style.setProperty("--cp", p.toFixed(4));
      });
      off = () => {
        ro.disconnect();
        stop();
      };
    };
    setup();
    wide.addEventListener("change", setup);
    return () => {
      wide.removeEventListener("change", setup);
      off?.();
    };
  }, []);

  return (
    <section ref={ref} className="city" id="city" aria-label="The city">
      <div className="city-sticky">
        <div ref={track} className="city-track">
          <header className="city-intro">
            <h2 className="bh2">
              South Mumbai,
              <br />
              <span className="taxi">to scale.</span>
            </h2>
            <p className="blede">
              The map is built from the real streets: the Fort, Colaba, Churchgate and the whole of the Queen&apos;s
              Necklace. Landmarks stand where they stand.
            </p>
            <p className="city-hint" aria-hidden>
              Keep scrolling
              <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
                <path d="M0 5h26M22 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </p>
          </header>
          {PLACES.map((p, i) => (
            <figure key={p.id} className="place" style={{ ["--i" as string]: i }}>
              <div className="place-media">
                <video data-autoplay muted loop playsInline preload="none" poster={p.img}>
                  <source src={p.video} type="video/mp4" />
                </video>
              </div>
              <figcaption>
                <span className="place-name">{p.name}</span>
                <span className="place-local" lang="mr">
                  {p.local}
                </span>
                <span className="place-line">{p.line}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
