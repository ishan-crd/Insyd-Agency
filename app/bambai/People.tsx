"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { PEOPLE } from "./data";
import { onStickyProgress } from "./Smooth";

const PeopleScene = dynamic(() => import("./three/PeopleScene"), { ssr: false });

/** The crowd: scroll walks the camera down a line of the game's people. */
export function People() {
  const ref = useRef<HTMLElement>(null);
  const focus = useRef(0);
  const [idx, setIdx] = useState(0);
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const pre = new IntersectionObserver(([e]) => e.isIntersecting && setNear(true), { rootMargin: "150% 0px" });
    const vis = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "0px" });
    pre.observe(el);
    vis.observe(el);
    let last = -1;
    const off = onStickyProgress(el, (p) => {
      const f = Math.min(PEOPLE.length - 1, Math.max(0, (p - 0.04) / 0.92) * (PEOPLE.length - 1));
      focus.current = f;
      const r = Math.round(f);
      if (r !== last) {
        last = r;
        setIdx(r);
      }
    });
    return () => {
      pre.disconnect();
      vis.disconnect();
      off();
    };
  }, []);

  const p = PEOPLE[idx];
  return (
    <section ref={ref} className="people" id="people" aria-label="The people">
      <div className="people-sticky">
        <div className="people-canvas">{near && <PeopleScene focus={focus} active={visible} />}</div>
        <div className="people-copy">
          <h2 className="bh2">
            Twelve million people.
            <br />
            <span className="taxi">Meet a few.</span>
          </h2>
        </div>
        <div className="people-tag" aria-live="polite">
          <span key={p.id} className="people-tag-in">
            <span className="people-name">{p.name}</span>
            <span className="people-line">{p.line}</span>
          </span>
        </div>
        <ol className="people-dots" aria-hidden>
          {PEOPLE.map((x, k) => (
            <li key={x.id} className={k === idx ? "on" : ""} />
          ))}
        </ol>
      </div>
    </section>
  );
}
