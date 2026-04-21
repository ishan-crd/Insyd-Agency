"use client";

import { OrbScene } from "@/components/Scene3D";

export default function ContactHero() {
	return (
		<section className="contact-hero">
			<OrbScene className="contact-hero__canvas" accent="#E8593A" />
			<div className="container contact-hero__inner">
				<div className="mono" style={{ marginBottom: 24 }}>
					(C) Contact — say hello
				</div>
				<h1 className="contact-title display">
					Let&apos;s build
					<br />
					something{" "}
					<span style={{ fontStyle: "italic", color: "var(--accent)" }}>
						real.
					</span>
				</h1>
				<p
					style={{
						fontSize: 20,
						maxWidth: 560,
						marginTop: 40,
						color: "var(--ink-2)",
						textWrap: "pretty" as const,
					}}
				>
					Tell us about your project. If it&apos;s a fit, we&apos;ll set up a
					30-minute call within 48 hours. If it&apos;s not, we&apos;ll say so —
					and point you at someone great.
				</p>
			</div>
		</section>
	);
}
