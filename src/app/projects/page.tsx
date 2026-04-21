import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectsIndex from "./ProjectsIndex";

export const metadata = {
	title: "Work — Insyd",
};

export default function ProjectsPage() {
	return (
		<>
			<Header page="projects" />
			<main>
				<section
					className="section"
					style={{ paddingTop: 160, paddingBottom: 40 }}
				>
					<div className="container">
						<div className="mono" style={{ marginBottom: 24 }}>
							(W) Work — 2019 → 2026
						</div>
						<h1
							className="display"
							style={{
								fontSize: "clamp(72px, 12vw, 220px)",
								lineHeight: 0.88,
								letterSpacing: "-0.04em",
								margin: 0,
							}}
						>
							Every{" "}
							<span style={{ fontStyle: "italic", color: "var(--accent)" }}>
								thing
							</span>
							<br />
							we&apos;ve shipped.
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
							A running log of public work. Filter by what you&apos;re looking
							for — we&apos;ve made productivity apps, agent tooling, wallets,
							editors, and a handful of things that defy categorization.
						</p>
					</div>
				</section>

				<section className="section" style={{ paddingTop: 20 }}>
					<div className="container">
						<ProjectsIndex />
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
