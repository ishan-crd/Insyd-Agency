"use client";
// Page-wide behaviour for Bambai: Lenis smooth scrolling (with anchor links), reveal-on-scroll, and
// videos that only play while they are on screen.
import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export const prefersReduced = () =>
  typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Scrolls to a selector or element through Lenis when it is running. */
export function scrollToTarget(target: string | HTMLElement, offset = 0) {
  const el = typeof target === "string" ? document.querySelector<HTMLElement>(target) : target;
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset, duration: 1.4 });
  else el.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth" });
}

export function Smooth({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("js");
    document.documentElement.dataset.theme = "bambai";
    let lenis: Lenis | undefined;
    let raf = 0;
    if (!prefersReduced()) {
      lenis = new Lenis({ duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 4), wheelMultiplier: 0.9 });
      window.__lenis = lenis;
      const loop = (t: number) => {
        lenis!.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href")!;
      if (id.length < 2) return;
      const el = document.querySelector<HTMLElement>(id);
      if (!el) return;
      e.preventDefault();
      scrollToTarget(el);
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis?.destroy();
      delete window.__lenis;
    };
  }, []);

  // reveal [data-reveal] once, and play [data-autoplay] videos only while visible
  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            e.target.classList.add("in");
            reveal.unobserve(e.target);
          }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    const play = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting) {
            if (v.preload === "none") v.preload = "auto";
            v.play().catch(() => {});
          } else v.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );
    const seen = new WeakSet<Element>();
    const scan = () => {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        if (!seen.has(el)) {
          seen.add(el);
          reveal.observe(el);
        }
      });
      document.querySelectorAll("video[data-autoplay]").forEach((el) => {
        if (!seen.has(el)) {
          seen.add(el);
          play.observe(el);
        }
      });
    };
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      reveal.disconnect();
      play.disconnect();
      mo.disconnect();
    };
  }, []);

  return <>{children}</>;
}

/** Calls `cb` with 0..1 progress of a tall sticky section (0 = its top at the viewport top, 1 = its bottom at the viewport bottom). */
export function onStickyProgress(el: HTMLElement, cb: (p: number) => void) {
  let raf = 0;
  let last = -1;
  const tick = () => {
    raf = 0;
    const r = el.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - window.innerHeight)));
    if (Math.abs(p - last) < 0.0004) return;
    last = p;
    cb(p);
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
}
