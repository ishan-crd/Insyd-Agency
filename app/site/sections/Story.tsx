"use client";
import { useEffect, useRef } from "react";
import { CONTACT_EMAIL, FILMS, GITHUB, PROJECTS, SERVICES, STEPS } from "../data";
import { seg, useInView, useScrollProgress } from "../motion";
import { Arrow, GitHubIcon, Logo, Magnetic, Words } from "../ui";

/* ------------------------------------------------------------------ manifesto: words light up as you scroll */
const MANIFESTO =
  "We’re a small studio that ships. No decks, no handoffs, no six-month roadmaps. This year we built an MCP that lets Claude use an iPhone, a native IDE for coding agents, and a video editor that writes back to code. Yours could be next.";
const HIGHLIGHT = new Set(["ships.", "iPhone,", "agents,", "code.", "next."]);

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const words = useRef<HTMLSpanElement[]>([]);
  const list = MANIFESTO.split(" ");
  useScrollProgress(ref, "sticky", (p) => {
    const lit = seg(p, 0.05, 0.85) * list.length;
    words.current.forEach((el, i) => el && (el.style.opacity = String(0.14 + 0.86 * Math.min(1, Math.max(0, lit - i)))));
  });
  return (
    <section ref={ref} className="manifesto" data-theme="dark" aria-label="About Insyd">
      <div className="manifesto-stage">
        <p className="eyebrow">What we do</p>
        <p className="manifesto-text">
          {list.map((w, i) => (
            <span key={i} ref={(el) => void (el && (words.current[i] = el))} className={HIGHLIGHT.has(w) ? "hl" : undefined}>
              {w}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ films: a horizontal reel pinned while you scroll */
export function Films() {
  const ref = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useScrollProgress(ref, "sticky", (p) => {
    const t = track.current;
    if (!t || matchMedia("(max-width: 900px)").matches) return;
    const dist = t.scrollWidth - window.innerWidth;
    t.style.transform = `translate3d(${-p * dist}px, 0, 0)`;
  });
  return (
    <section ref={ref} className="films" id="films" data-theme="films">
      <div className="films-stage">
        <div ref={track} className="films-track">
          <div className="films-head">
            <p className="eyebrow">Launch films</p>
            <h2 className="h2 words" data-reveal="words">
              <Words text="Every launch" />{" "}
              <Words text="deserves a film." serif delay={110} />
            </h2>
            <p className="lede">
              We cut launch films in code with Remotion and our own editor, Studio. Every clip, sound and colour stays
              editable, so the video changes when the product does.
            </p>
            <a className="btn btn-ghost" href="https://studio.insyd.in" target="_blank" rel="noreferrer">
              Browse templates <Arrow />
            </a>
          </div>
          {FILMS.map((f, i) => (
            <Film key={f.src} film={f} index={i} />
          ))}
        </div>
        <div className="films-progress" aria-hidden>
          <i />
        </div>
      </div>
    </section>
  );
}

function Film({ film: f, index }: { film: (typeof FILMS)[number]; index: number }) {
  const [ref, inView] = useInView<HTMLVideoElement>("0px 200px");
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [inView, ref]);
  return (
    <figure className={`film ${f.ratio === "1 / 1" ? "film-square" : ""}`}>
      <div className="film-screen" style={{ aspectRatio: f.ratio }}>
        <video ref={ref} src={f.src} poster={f.poster} muted loop playsInline preload="none" aria-label={`${f.title} film`} />
        <span className="film-idx">0{index + 1}</span>
      </div>
      <figcaption>
        <strong>{f.title}</strong>
        <span>{f.meta}</span>
        <p>{f.note}</p>
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ services */
export function Services() {
  return (
    <section className="services" id="services" data-theme="dark">
      <div className="wrap">
        <p className="eyebrow" data-reveal>
          Services
        </p>
        <h2 className="h2 words" data-reveal="words">
          <Words text="From first sketch" />{" "}
          <Words text="to launch day." serif delay={165} />
        </h2>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <SpotCard key={s.title} index={i}>
              <span className="svc-num">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </SpotCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpotCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className="svc"
      data-reveal
      style={{ ["--d" as string]: `${index * 90}ms` }}
      onPointerMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        ref.current!.style.setProperty("--mx", `${e.clientX - r.left}px`);
        ref.current!.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ process */
export function Process() {
  const ref = useRef<HTMLElement>(null);
  const list = useRef<HTMLOListElement>(null);
  useScrollProgress(ref, "pass", (p) => {
    const l = list.current;
    if (!l) return;
    const fill = seg(p, 0.22, 0.7);
    l.style.setProperty("--fill", fill.toFixed(4));
    l.querySelectorAll("li").forEach((li, i, all) => li.classList.toggle("lit", fill >= i / all.length));
  });
  return (
    <section ref={ref} className="process" id="process" data-theme="light">
      <div className="wrap process-grid">
        <div className="process-head">
          <p className="eyebrow" data-reveal>
            Process
          </p>
          <h2 className="h2 words" data-reveal="words">
            <Words text="Small team." />{" "}
            <Words text="Short loops." serif delay={110} />
          </h2>
          <p className="lede" data-reveal>
            You work directly with the people building your product. We show working software every week, not status
            reports.
          </p>
        </div>
        <ol ref={list} className="process-steps">
          {STEPS.map((s, i) => (
            <li key={s.title} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
              <span className="step-num">0{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ contact */
export function Contact() {
  const ref = useRef<HTMLElement>(null);
  useScrollProgress(ref, "pass");
  return (
    <section ref={ref} className="contact" id="contact" data-theme="pink">
      <div className="wrap contact-inner">
        <p className="eyebrow" data-reveal>
          Start a project
        </p>
        <h2 className="contact-title words" data-reveal="words">
          <Words text="Got an idea?" />
          <br />
          <Words text="Let’s build it." serif delay={165} />
        </h2>
        <p className="lede" data-reveal>
          Tell us what you’re making, where it’s stuck, or what you wish existed. We read everything.
        </p>
        <div className="contact-ctas" data-reveal style={{ ["--d" as string]: "150ms" }}>
          <Magnetic>
            <a className="btn btn-ink btn-xl" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL} <Arrow />
            </a>
          </Magnetic>
          <a className="btn btn-line btn-xl" href={GITHUB} target="_blank" rel="noreferrer">
            <GitHubIcon /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ footer */
export function Footer() {
  return (
    <footer className="footer" data-theme="dark">
      <div className="wrap footer-top">
        <div className="footer-blurb">
          <Logo />
          <p>An independent product studio. We design, build and launch software.</p>
        </div>
        <div className="footer-cols">
          <div>
            <h4>Work</h4>
            {PROJECTS.map((p) => (
              <a key={p.slug} href={p.url} target="_blank" rel="noreferrer">
                {p.name} <Arrow />
              </a>
            ))}
          </div>
          <div>
            <h4>Studio</h4>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#films">Films</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <a href={GITHUB} target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`}>Email</a>
          </div>
        </div>
      </div>
      <div className="footer-mark" aria-hidden>
        <Logo />
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} Insyd</span>
        <a href="#top">
          Back to top <Arrow />
        </a>
      </div>
    </footer>
  );
}
