"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { MODELS } from "./data";

const GarageScene = dynamic(() => import("./three/GarageScene"), { ssr: false, loading: () => <Loader /> });

function Loader() {
  return (
    <div className="stage-loader" aria-hidden>
      <span />
    </div>
  );
}

/** Real game assets on a turntable: pick one, drag to turn it. */
export function Garage() {
  const [i, setI] = useState(0);
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const pre = new IntersectionObserver(([e]) => e.isIntersecting && setNear(true), { rootMargin: "120% 0px" });
    const vis = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "10% 0px" });
    pre.observe(el);
    vis.observe(el);
    return () => {
      pre.disconnect();
      vis.disconnect();
    };
  }, []);

  const m = MODELS[i];
  const go = (d: number) => setI((v) => (v + d + MODELS.length) % MODELS.length);

  return (
    <section className="garage" id="garage" aria-label="Garage">
      <div className="bwrap garage-head">
        <h2 className="bh2" data-reveal>
          Straight out of
          <br />
          <span className="taxi">the game.</span>
        </h2>
        <p className="blede" data-reveal style={{ ["--d" as string]: "120ms" }}>
          These are the actual models from Bambai, loaded live in your browser. Drag to turn them over.
        </p>
      </div>

      <div className="garage-body">
        <div
          ref={stage}
          className="stage"
          role="img"
          aria-label={`${m.name}, a 3D model from the game. Drag to rotate.`}
        >
          {near && <GarageScene index={i} active={visible} />}
          <div className="stage-label" aria-hidden>
            <span className="stage-kind">{m.kind}</span>
            <span className="stage-name">{m.name}</span>
            <span className="stage-line">{m.line}</span>
          </div>
          <div className="stage-arrows">
            <button type="button" onClick={() => go(-1)} aria-label="Previous model">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="M11 4 6 9l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next model">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="m7 4 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <p className="stage-drag" aria-hidden>
            Drag to rotate
          </p>
        </div>

        <ul className="garage-list" aria-label="Models">
          {MODELS.map((x, k) => (
            <li key={x.id}>
              <button type="button" aria-pressed={k === i} className={k === i ? "on" : ""} onClick={() => setI(k)}>
                <span className="gl-name">{x.name}</span>
                <span className="gl-kind">{x.kind}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
