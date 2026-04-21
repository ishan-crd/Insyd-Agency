import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import FAQ from "./FAQ";
import HomeHero from "./HomeHero";
import WorkList from "./WorkList";

export default function HomePage() {
	return (
		<>
			<Header page="home" />
			<main>
				{/* HERO */}
				<HomeHero />

				{/* TICKER */}
				<div className="ticker" aria-hidden>
					<div className="ticker-track">
						{[0, 1].map((k) => (
							<span key={k}>
								{[
									"Strategy",
									"Product Design",
									"Brand Systems",
									"Engineering",
									"Motion",
									"AI Interfaces",
								].map((s) => (
									<span key={`${k}-${s}`} className="ticker-item">
										<span className="ticker-dot" />
										{s}
									</span>
								))}
							</span>
						))}
					</div>
				</div>

				{/* FEATURED WORK */}
				<section className="section">
					<div className="container">
						<ScrollReveal>
							<div className="section-head">
								<div className="section-head__label">
									<span className="mono">(01) Selected work</span>
								</div>
								<div>
									<h2 className="section-head__title display">
										Things
										<br />
										we&apos;ve made.
									</h2>
									<p className="section-head__intro">
										A selection of recent releases — from deep productivity
										tools to on-chain treasuries. Hover any entry for a peek.
									</p>
								</div>
							</div>
						</ScrollReveal>

						<ScrollReveal>
							<WorkList />
						</ScrollReveal>

						<div
							style={{
								marginTop: 60,
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<a href="/projects" className="btn" data-cursor="button">
								All projects →
							</a>
						</div>
					</div>
				</section>

				{/* CAPABILITIES */}
				<section className="section" style={{ paddingTop: 40 }}>
					<div className="container">
						<ScrollReveal>
							<div className="section-head">
								<div className="section-head__label">
									<span className="mono">(02) Capabilities</span>
								</div>
								<div>
									<h2 className="section-head__title display">
										Three disciplines,
										<br />
										<span className="display" style={{ fontStyle: "italic" }}>
											one team.
										</span>
									</h2>
									<p className="section-head__intro">
										We don&apos;t hand off between departments. The same small
										team that scopes a problem writes the TypeScript that ships.
									</p>
								</div>
							</div>
						</ScrollReveal>

						<ScrollReveal>
							<div className="cap-grid">
								<div className="cap-cell">
									<div className="cap-cell__head">
										<span className="cap-cell__num">S / 01</span>
										<span className="mono">Strategy</span>
									</div>
									<h3 className="cap-cell__title">
										Frame the
										<br />
										right problem.
									</h3>
									<ul className="cap-cell__list">
										<li>Product discovery</li>
										<li>Market positioning</li>
										<li>Roadmap shaping</li>
										<li>User research</li>
									</ul>
								</div>
								<div className="cap-cell">
									<div className="cap-cell__head">
										<span className="cap-cell__num">D / 02</span>
										<span className="mono">Design</span>
									</div>
									<h3 className="cap-cell__title">
										Craft
										<br />
										the interface.
									</h3>
									<ul className="cap-cell__list">
										<li>Product design</li>
										<li>Brand systems</li>
										<li>Motion &amp; prototyping</li>
										<li>Design systems</li>
									</ul>
								</div>
								<div className="cap-cell">
									<div className="cap-cell__head">
										<span className="cap-cell__num">E / 03</span>
										<span className="mono">Engineering</span>
									</div>
									<h3 className="cap-cell__title">
										Ship it
										<br />
										for real.
									</h3>
									<ul className="cap-cell__list">
										<li>Web &amp; native apps</li>
										<li>Backends &amp; infra</li>
										<li>AI pipelines</li>
										<li>DX tooling</li>
									</ul>
								</div>
							</div>
						</ScrollReveal>
					</div>
				</section>

				{/* PROCESS */}
				<section className="section" style={{ paddingTop: 40 }}>
					<div className="container">
						<ScrollReveal>
							<div className="section-head">
								<div className="section-head__label">
									<span className="mono">(03) Process</span>
								</div>
								<div>
									<h2 className="section-head__title display">
										How a project
										<br />
										actually runs.
									</h2>
									<p className="section-head__intro">
										Small team. Weekly shipping. Everything visible to you,
										always.
									</p>
								</div>
							</div>
						</ScrollReveal>
						<ScrollReveal>
							<div className="process">
								{[
									{
										week: "Week 01–02",
										num: "01",
										title: "Discover",
										desc: "Two-week sprint where we interview, audit, and write the brief you didn't know you needed.",
									},
									{
										week: "Week 03–06",
										num: "02",
										title: "Design",
										desc: "High-fidelity product design in public. You see the file every Friday; we iterate together.",
									},
									{
										week: "Week 07–14",
										num: "03",
										title: "Build",
										desc: "Engineering starts in parallel with design. Weekly deploys to staging; nothing big-bang.",
									},
									{
										week: "Week 15+",
										num: "04",
										title: "Launch & tend",
										desc: "We stay on for the first quarter — analytics, iteration, and the thousand small fixes launches need.",
									},
								].map((step) => (
									<div key={step.num} className="process-step">
										<div className="mono">{step.week}</div>
										<h3 className="process-step__num display">{step.num}</h3>
										<h4 className="process-step__title display">
											{step.title}
										</h4>
										<p className="process-step__desc">{step.desc}</p>
									</div>
								))}
							</div>
						</ScrollReveal>
					</div>
				</section>

				{/* TRUST / TESTIMONIAL */}
				<section className="section" style={{ paddingTop: 40 }}>
					<div className="container">
						<ScrollReveal>
							<div className="trust">
								<blockquote className="trust__quote display">
									&ldquo;Insyd took our messy internal tool and shipped
									something our customers{" "}
									<span className="italic">actually open for fun</span>. They
									work the way a great in-house team should.&rdquo;
								</blockquote>
								<div className="trust__author">
									<div className="mono">— Client</div>
									<div className="trust__author-name">Priya Ramanathan</div>
									<div className="trust__author-role">
										Co-founder &amp; CPO, Unmesa
									</div>
								</div>
							</div>
						</ScrollReveal>

						<ScrollReveal>
							<div className="trust__logos">
								{[
									"Unmesa",
									"Helix Labs",
									"Mira Protocol",
									"Fieldnote",
									"Prism Systems",
									"Arclight",
								].map((name) => (
									<div key={name} className="trust__logo">
										{name}
									</div>
								))}
							</div>
						</ScrollReveal>
					</div>
				</section>

				{/* FAQ */}
				<section className="section" style={{ paddingTop: 40 }}>
					<div className="container">
						<ScrollReveal>
							<div className="section-head">
								<div className="section-head__label">
									<span className="mono">(04) FAQ</span>
								</div>
								<div>
									<h2 className="section-head__title display">
										Things
										<br />
										clients ask.
									</h2>
								</div>
							</div>
						</ScrollReveal>
						<ScrollReveal>
							<FAQ />
						</ScrollReveal>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
