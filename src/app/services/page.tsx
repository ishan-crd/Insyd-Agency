import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesCards from "./ServicesCards";

export const metadata = {
	title: "Services — Insyd",
};

export default function ServicesPage() {
	return (
		<>
			<Header page="services" />
			<main>
				<section className="svc-hero">
					<div className="container">
						<div className="mono" style={{ marginBottom: 24 }}>
							(S) Services — what we actually do
						</div>
						<h1 className="svc-hero__title display">
							Strategy, <span style={{ fontStyle: "italic" }}>design</span>,
							<br />
							and engineering —
							<br />
							<span style={{ color: "var(--accent)" }}>one team.</span>
						</h1>
						<p
							style={{
								fontSize: 20,
								maxWidth: 620,
								marginTop: 40,
								color: "var(--ink-2)",
								textWrap: "pretty" as const,
							}}
						>
							We offer three entry points. Pick the one that matches where you
							are, or send us a note and we&apos;ll propose the right shape.
						</p>
					</div>
				</section>

				<section className="section" style={{ paddingTop: 40 }}>
					<div className="container">
						<ServicesCards />
					</div>
				</section>

				<section className="section" style={{ paddingTop: 40 }}>
					<div className="container">
						<div className="section-head">
							<div className="section-head__label">
								<span className="mono">(T) Toolkit</span>
							</div>
							<div>
								<h2 className="section-head__title display">
									What we
									<br />
									reach for.
								</h2>
								<p className="section-head__intro">
									We&apos;re opinionated but not religious. The right tool for
									the problem, end-of.
								</p>
							</div>
						</div>

						<div className="cap-grid">
							<div className="cap-cell">
								<div className="cap-cell__head">
									<span className="cap-cell__num">T / 01</span>
									<span className="mono">Design</span>
								</div>
								<h3 className="cap-cell__title">Design.</h3>
								<ul className="cap-cell__list">
									<li>Figma · FigJam</li>
									<li>Rive · After Effects</li>
									<li>Cavalry for motion</li>
									<li>Principle for micro</li>
								</ul>
							</div>
							<div className="cap-cell">
								<div className="cap-cell__head">
									<span className="cap-cell__num">T / 02</span>
									<span className="mono">Engineering</span>
								</div>
								<h3 className="cap-cell__title">Build.</h3>
								<ul className="cap-cell__list">
									<li>TypeScript · React · Svelte</li>
									<li>Swift · Kotlin</li>
									<li>Go · Rust · Python</li>
									<li>Postgres · Redis · SQLite</li>
								</ul>
							</div>
							<div className="cap-cell">
								<div className="cap-cell__head">
									<span className="cap-cell__num">T / 03</span>
									<span className="mono">Infra &amp; AI</span>
								</div>
								<h3 className="cap-cell__title">Ship.</h3>
								<ul className="cap-cell__list">
									<li>AWS · GCP · Cloudflare</li>
									<li>Terraform · Pulumi</li>
									<li>Modal · Replicate</li>
									<li>OpenAI · Anthropic · local</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section className="section" style={{ paddingTop: 40 }}>
					<div className="container">
						<div className="trust">
							<blockquote className="trust__quote display">
								We work with founders who treat software as a{" "}
								<span className="italic">craft</span>, not an output. If
								you&apos;re one of those people, we should talk.
							</blockquote>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: 20,
								}}
							>
								<Link
									href="/contact"
									className="btn btn-primary"
									data-cursor="button"
									style={{ alignSelf: "flex-start" }}
								>
									<span className="dot" /> Start a conversation
								</Link>
								<div className="mono" style={{ color: "var(--muted)" }}>
									Response within 24 hours, usually sooner.
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
