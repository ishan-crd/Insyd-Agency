"use client";

import Link from "next/link";
import { HeroScene } from "@/components/Scene3D";

export default function HomeHero() {
	return (
		<section className="hero">
			<HeroScene className="hero__canvas" />
			<div className="container hero__inner">
				<div className="hero__meta">
					<div className="mono">INSYD / IN — Est. 2019</div>
					<div className="mono">Studio for digital products</div>
				</div>

				<h1 className="hero__headline display">
					We build
					<br />
					<span className="italic">calm software</span>
					<br />
					for ambitious
					<br />
					<span className="accent">companies.</span>
				</h1>

				<div className="hero__sub">
					<p>
						A design-led studio that ships the hard stuff: category-defining
						products, financial systems, agent tooling, and the ordinary apps
						people can&apos;t put down.
					</p>
					<div className="hero__ctas">
						<Link
							href="/projects"
							className="btn btn-primary"
							data-cursor="button"
						>
							<span className="dot" /> See the work
						</Link>
						<Link href="/contact" className="btn" data-cursor="button">
							Book a call →
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
