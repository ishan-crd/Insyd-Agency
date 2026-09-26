"use client";
// Page-wide behaviour: smooth scrolling, reveal-on-scroll, the colour theme that follows the section
// under the middle of the screen, the reading-progress bar and the "View" cursor over project media.
import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";
import { reduced } from "./motion";

export function Shell({ children }: { children: ReactNode }) {
  const barRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // smooth scroll + in-page anchor links
  useEffect(() => {
    document.documentElement.classList.add("js");
    if (reduced()) return;
    const lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), wheelMultiplier: 0.95 });
    let raf = requestAnimationFrame(function loop(t) {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    });
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const target = document.querySelector(a.getAttribute("href")!);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: 0 });
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  // reveal every [data-reveal] once it's on screen (including ones mounted later)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    const seen = new WeakSet<Element>();
    const scan = () =>
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        if (!seen.has(el)) {
          seen.add(el);
          io.observe(el);
        }
      });
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  // theme follows the [data-theme] section crossing the middle of the viewport; progress bar
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const mid = window.innerHeight * 0.5;
      let theme = "dark";
      for (const el of document.querySelectorAll<HTMLElement>("[data-theme]")) {
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom > mid) theme = el.dataset.theme!;
      }
      if (root.dataset.theme !== theme) root.dataset.theme = theme;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      barRef.current?.style.setProperty("transform", `scaleX(${max > 0 ? window.scrollY / max : 0})`);
      root.classList.toggle("scrolled", window.scrollY > 24);
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
  }, []);

  // a soft "View ↗" bubble that trails the pointer over anything marked [data-cursor]
  useEffect(() => {
    const c = cursorRef.current;
    if (!c || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      c.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = Math.abs(x - cx) + Math.abs(y - cy) > 0.3 ? requestAnimationFrame(loop) : 0;
    };
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      c.classList.toggle("on", !!t);
      if (t) c.dataset.label = t.dataset.cursor;
      if (!raf) raf = requestAnimationFrame(loop);
    };
    addEventListener("pointermove", move, { passive: true });
    return () => {
      removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="progress" aria-hidden>
        <div ref={barRef} />
      </div>
      <div className="grain" aria-hidden />
      {children}
      <div ref={cursorRef} className="cursor" aria-hidden />
    </>
  );
}
