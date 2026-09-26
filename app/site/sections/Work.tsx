"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PROJECTS, type Media, type Project } from "../data";
import { ease, seg, useInView, useScrollProgress } from "../motion";
import { Arrow, CopyCommand, GitHubIcon, Words } from "../ui";

export function WorkIntro() {
  return (
    <section className="work-intro" id="work" data-theme="dark">
      <div className="wrap">
        <p className="eyebrow" data-reveal>
          Selected work <span className="count">(03)</span>
        </p>
        <h2 className="h2 words" data-reveal="words">
          <Words text="Built here." />{" "}
          <Words text="Live now." serif delay={110} />
        </h2>
        <p className="lede" data-reveal style={{ ["--d" as string]: "200ms" }}>
          Every product below was designed, engineered and launched by Insyd, and each one is live on its own domain.
          Scroll through them.
        </p>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <>
      <WorkIntro />
      {PROJECTS.map((p, i) => (
        <ProjectSection key={p.slug} project={p} index={i} />
      ))}
    </>
  );
}

function ProjectSection({ project: p, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const n = p.media.length;

  useScrollProgress(ref, "sticky", (v) => {
    const s = stage.current;
    if (!s) return;
    // media frame settles in during the first stretch, then steps through each screen
    s.style.setProperty("--in", ease(seg(v, 0, 0.18)).toFixed(4));
    const i = Math.min(n - 1, Math.floor(seg(v, 0.12, 0.92) * n));
    setActive((a) => (a === i ? a : i));
  });

  const [head, tail] = splitAccent(p.headline, p.accent);

  return (
    <section
      ref={ref}
      className={`project project-${p.theme}`}
      id={p.slug}
      data-theme={p.theme}
      style={{ ["--steps" as string]: n }}
    >
      <div ref={stage} className="project-stage">
        <div className="project-ghost" aria-hidden>
          {p.name}
        </div>

        <div className="project-info">
          <p className="project-meta" data-reveal>
            <span className="project-num">0{index + 1}</span>
            <span>{p.kind}</span>
          </p>
          <h3 className="project-title words" data-reveal="words">
            <Words text={head} />{" "}
            {tail && <Words text={tail} serif delay={head.split(" ").length * 55} />}
          </h3>
          <p className="project-body" data-reveal style={{ ["--d" as string]: "120ms" }}>
            {p.body}
          </p>

          <ul className="chips" data-reveal style={{ ["--d" as string]: "180ms" }}>
            {p.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          {p.command && (
            <div data-reveal style={{ ["--d" as string]: "220ms" }}>
              <CopyCommand command={p.command} />
            </div>
          )}

          <div className="project-links" data-reveal style={{ ["--d" as string]: "260ms" }}>
            <a className="btn btn-solid" href={p.url} target="_blank" rel="noreferrer">
              Visit {p.domain} <Arrow />
            </a>
            <a className="btn btn-ghost" href={p.github} target="_blank" rel="noreferrer">
              <GitHubIcon /> Source
            </a>
          </div>
        </div>

        <div className="project-visual">
          <a className="frame" href={p.url} target="_blank" rel="noreferrer" data-cursor="Visit" aria-label={`Open ${p.domain}`}>
            <span className="frame-bar">
              <i />
              <i />
              <i />
              <span className="frame-url">
                <LockIcon /> {p.domain}
              </span>
            </span>
            <span className="frame-screen">
              {p.media.map((m, i) => (
                <MediaLayer key={m.src} media={m} on={i === active} eager={index === 0 && i === 0} />
              ))}
            </span>
          </a>

          <div className="steps" aria-hidden={n < 2}>
            {p.media.map((m, i) => (
              <span key={m.src} className={i === active ? "step on" : i < active ? "step done" : "step"}>
                <i />
                <span>{m.caption}</span>
              </span>
            ))}
          </div>

          <dl className="facts">
            {p.facts.map((f, i) => (
              <div key={f.label} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function MediaLayer({ media: m, on, eager }: { media: Media; on: boolean; eager: boolean }) {
  if (m.kind === "img")
    return (
      <Image
        className={on ? "layer on" : "layer"}
        src={m.src}
        alt={m.caption}
        width={m.w}
        height={m.h}
        sizes="(max-width: 900px) 92vw, 60vw"
        priority={eager}
      />
    );
  return <VideoLayer src={m.src} poster={m.poster} on={on} label={m.caption} />;
}

function VideoLayer({ src, poster, on, label }: { src: string; poster: string; on: boolean; label: string }) {
  const [ref, inView] = useInView<HTMLVideoElement>("200px");
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (on && inView) v.play().catch(() => {});
    else v.pause();
  }, [on, inView, ref]);
  return (
    <video
      ref={ref}
      className={on ? "layer on" : "layer"}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    />
  );
}

function LockIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden>
      <path d="M2.5 4.2V3a2.5 2.5 0 015 0v1.2h.4c.4 0 .6.3.6.6v4.1c0 .4-.2.6-.6.6H2.1c-.4 0-.6-.2-.6-.6V4.8c0-.3.2-.6.6-.6h.4zm1.2 0h2.6V3a1.3 1.3 0 00-2.6 0v1.2z" />
    </svg>
  );
}

function splitAccent(text: string, accent: string): [string, string] {
  const at = text.lastIndexOf(accent);
  if (at < 0) return [text, ""];
  return [text.slice(0, at).trim(), accent];
}
