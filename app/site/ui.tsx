"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** The insyd wordmark: a dotless i under the pink dot. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`logo ${className}`}>
      <span className="logo-i">
        ı<i className="logo-dot" />
      </span>
      nsyd
    </span>
  );
}

export function Arrow({ dir = "up-right" }: { dir?: "up-right" | "down" | "right" }) {
  const rot = dir === "down" ? 135 : dir === "right" ? 45 : 0;
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden style={{ rotate: `${rot}deg` }}>
      <path d="M4 10 10 4M5 4h5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="cmd"
      onClick={() => {
        navigator.clipboard?.writeText(command).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        });
      }}
      aria-label={`Copy: ${command}`}
    >
      <span className="cmd-dollar">$</span>
      <code>{command}</code>
      <span className="cmd-copy">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

/** Pulls its child a little toward the pointer while hovered. */
export function Magnetic({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const leave = () => (el.style.transform = "");
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [strength]);
  return (
    <span ref={ref} className="magnetic">
      {children}
    </span>
  );
}

/** Splits a sentence into masked words that slide up when the parent gets `.in`. */
export function Words({ text, serif, delay = 0 }: { text: string; serif?: boolean; delay?: number }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span className="w" key={i}>
          <span className={serif ? "serif" : undefined} style={{ transitionDelay: `${delay + i * 55}ms` }}>
            {w}
          </span>
        </span>
      )).flatMap((el, i) => (i ? [" ", el] : [el]))}
    </>
  );
}
