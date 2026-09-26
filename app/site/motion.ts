"use client";
// Scroll motion helpers. Progress is written straight to the DOM (CSS vars / styles) so scrolling never re-renders React.
import { useEffect, useRef, useState, type RefObject } from "react";

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
/** 0..1 of `p` between `a` and `b` */
export const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
export const ease = (t: number) => 1 - (1 - t) ** 3;
export const reduced = () =>
  typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Calls `cb` with the scroll progress of a section on every frame it changes.
 *   "sticky": 0 when its top reaches the top of the viewport, 1 when its bottom reaches the bottom
 *   "pass":   0 when its top enters from below, 1 when its bottom leaves at the top
 * Also mirrors the value into `--p` on the element.
 */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  mode: "sticky" | "pass",
  cb?: (p: number) => void,
) {
  const cbRef = useRef(cb);
  useEffect(() => {
    cbRef.current = cb;
  });
  useEffect(() => {
    let raf = 0;
    let last = -1;
    const tick = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const v = clamp(mode === "sticky" ? -r.top / Math.max(1, r.height - vh) : (vh - r.top) / (r.height + vh));
      if (Math.abs(v - last) < 0.0005) return;
      last = v;
      el.style.setProperty("--p", v.toFixed(4));
      cbRef.current?.(v);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    addEventListener("scroll", on, { passive: true });
    addEventListener("resize", on);
    return () => {
      removeEventListener("scroll", on);
      removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, [ref, mode]);
}

/** true while the element is (at least partly) on screen */
export function useInView<T extends HTMLElement>(margin = "0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: margin });
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);
  return [ref, inView] as const;
}
