import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "../site/ui";
import { STUDIO } from "../studio";
import "./bambai.css";

/** Plain page chrome for the studio's text pages (about, press): same look as the game page, no scroll effects. */
export function Doc({ children }: { children: ReactNode }) {
  return (
    <div className="bb doc">
      <header className="doc-nav bwrap">
        <Link href="/" className="bnav-brand" aria-label="Insyd Studios, home">
          <Logo />
          <span className="bnav-games">studios</span>
        </Link>
        <nav className="doc-links" aria-label="Pages">
          <Link href="/">Bambai</Link>
          <Link href="/about">About</Link>
          <Link href="/press">Press</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="doc-foot bwrap">
        <span>© {new Date().getFullYear()} {STUDIO.name}</span>
        <span>
          <Link href="/other-projects">Other projects</Link> · <a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>
        </span>
      </footer>
    </div>
  );
}
