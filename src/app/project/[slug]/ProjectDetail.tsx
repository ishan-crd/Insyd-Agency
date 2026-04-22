"use client";

import Image from "next/image";
import Link from "next/link";
import { OrbScene } from "@/components/Scene3D";
import type { CaseStudyContent, Project } from "@/data/projects";

export default function ProjectDetail({
	project,
	content,
	next,
}: {
	project: Project;
	content: CaseStudyContent;
	next: Project;
}) {
	const hasVideo = !!content.heroVideo;
	const isAppShowcase =
		project.images.length >= 3 && project.slug === "clipstake";

	return (
		<>
			<section
				className="proj-hero"
				style={{
					background: `color-mix(in oklab, ${project.color} 8%, var(--bg))`,
				}}
			>
				<OrbScene className="proj-hero__canvas" accent={project.color} />
				<div className="container proj-hero__inner">
					<div className="proj-hero__meta">
						<span className="mono">(Case study) {project.category}</span>
						<span className="mono" style={{ color: "var(--muted)" }}>
							{project.year} · {project.duration}
						</span>
					</div>
					<h1 className="proj-hero__title display">{project.name}</h1>
					<p className="proj-hero__tagline">{project.tagline}</p>
					<div className="proj-specs">
						<div className="proj-specs__cell">
							<span className="proj-specs__label">Client</span>
							<span className="proj-specs__val">{project.client}</span>
						</div>
						<div className="proj-specs__cell">
							<span className="proj-specs__label">Role</span>
							<span className="proj-specs__val">{project.role}</span>
						</div>
						<div className="proj-specs__cell">
							<span className="proj-specs__label">Year</span>
							<span className="proj-specs__val">{project.year}</span>
						</div>
						<div className="proj-specs__cell">
							<span className="proj-specs__label">Engagement</span>
							<span className="proj-specs__val">{project.duration}</span>
						</div>
					</div>
					<div className="proj-specs" style={{ marginTop: 16 }}>
						<div className="proj-specs__cell">
							<span className="proj-specs__label">Tech</span>
							<span className="proj-specs__val">
								{project.tech.join(" · ")}
							</span>
						</div>
						{project.liveUrl && (
							<div className="proj-specs__cell">
								<span className="proj-specs__label">Live</span>
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="proj-specs__val"
									data-cursor="link"
									style={{
										textDecoration: "underline",
										textUnderlineOffset: 4,
									}}
								>
									Visit site →
								</a>
							</div>
						)}
					</div>
				</div>
			</section>

			{/* Scope — what we worked on */}
			<section style={{ padding: "80px 0 0" }}>
				<div className="container">
					<div className="mono muted" style={{ marginBottom: 24 }}>
						What we worked on
					</div>
					<div className="scope-row">
						{project.scope.map((s) => (
							<div key={s.label} className="scope-cell">
								<div
									className="scope-cell__value display"
									style={{ color: project.color }}
								>
									{s.label}
								</div>
								<div className="scope-cell__label">{s.value}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Hero video — landing page showcase */}
			{hasVideo && (
				<section style={{ padding: "60px 0 0" }}>
					<div className="container">
						<div className="proj-image-frame">
							<video
								src={content.heroVideo}
								autoPlay
								loop
								muted
								playsInline
								style={{
									width: "100%",
									height: "auto",
									borderRadius: 12,
									display: "block",
								}}
							/>
							<div className="proj-image-label mono">Landing page</div>
						</div>
					</div>
				</section>
			)}

			<section className="proj-block">
				<div className="container">
					<div className="proj-block__head">
						<span className="proj-block__label">(01) Challenge</span>
						<h2 className="proj-block__title display">
							The problem
							<br />
							we started with.
						</h2>
					</div>
					<p
						className="proj-block__body"
						style={{
							margin: "0 auto 0 0",
							marginLeft: "calc((100% - 1376px) / 2 + 33.33%)",
						}}
					>
						{content.challenge}
					</p>
				</div>
			</section>

			{/* First screen image (non-video projects) */}
			{!hasVideo && content.screens[0] && (
				<section style={{ padding: "60px 0" }}>
					<div className="container">
						<div className="proj-image-frame">
							<Image
								src={content.screens[0].src}
								alt={content.screens[0].label}
								width={1400}
								height={800}
								style={{
									width: "100%",
									height: "auto",
									borderRadius: 12,
								}}
							/>
							<div className="proj-image-label mono">
								{content.screens[0].label}
							</div>
						</div>
					</div>
				</section>
			)}

			<section className="proj-block">
				<div className="container">
					<div className="proj-block__head">
						<span className="proj-block__label">(02) Approach</span>
						<h2 className="proj-block__title display">
							How we
							<br />
							worked on it.
						</h2>
					</div>
					<p
						className="proj-block__body"
						style={{ marginLeft: "calc((100% - 1376px) / 2 + 33.33%)" }}
					>
						{content.approach}
					</p>
				</div>
			</section>

			{/* App screenshots gallery — horizontal scroll for Clipstake */}
			{isAppShowcase && (
				<section style={{ padding: "60px 0" }}>
					<div className="container">
						<div className="mono muted" style={{ marginBottom: 24 }}>
							App design — Light &amp; Dark mode
						</div>
						<div className="app-gallery">
							{project.images.map((src) => (
								<div key={src} className="app-gallery__item">
									<Image
										src={src}
										alt={`${project.name} app screenshot`}
										width={320}
										height={693}
										style={{
											width: "100%",
											height: "auto",
											borderRadius: 24,
										}}
									/>
								</div>
							))}
						</div>
					</div>
				</section>
			)}

			{/* Standard 2-up screens for non-app projects */}
			{!isAppShowcase && content.screens.length > 1 && (
				<section style={{ padding: "40px 0" }}>
					<div
						className="container"
						style={{
							display: "grid",
							gridTemplateColumns:
								content.screens.length > 2 ? "1fr 1fr" : "1fr",
							gap: 32,
						}}
					>
						{content.screens
							.slice(hasVideo ? 0 : 1, hasVideo ? 2 : 3)
							.map((screen) => (
								<div key={screen.label} className="proj-image-frame">
									<Image
										src={screen.src}
										alt={screen.label}
										width={700}
										height={440}
										style={{
											width: "100%",
											height: "auto",
											borderRadius: 12,
										}}
									/>
									<div className="proj-image-label mono">{screen.label}</div>
								</div>
							))}
					</div>
				</section>
			)}

			{/* Remaining screens if there are more than 3 */}
			{content.screens.length > 3 && !isAppShowcase && (
				<section style={{ padding: "40px 0" }}>
					<div
						className="container"
						style={{
							display: "grid",
							gridTemplateColumns: "1fr 1fr",
							gap: 32,
						}}
					>
						{content.screens.slice(3, 5).map((screen) => (
							<div key={screen.label} className="proj-image-frame">
								<Image
									src={screen.src}
									alt={screen.label}
									width={700}
									height={440}
									style={{
										width: "100%",
										height: "auto",
										borderRadius: 12,
									}}
								/>
								<div className="proj-image-label mono">{screen.label}</div>
							</div>
						))}
					</div>
				</section>
			)}

			<section className="proj-block">
				<div className="container">
					<div className="proj-block__head">
						<span className="proj-block__label">(03) Outcome</span>
						<h2 className="proj-block__title display">
							What
							<br />
							happened next.
						</h2>
					</div>
					<p
						className="proj-block__body"
						style={{
							marginLeft: "calc((100% - 1376px) / 2 + 33.33%)",
							marginBottom: 60,
						}}
					>
						{content.outcome}
					</p>
					<div className="kpi-row">
						{project.kpis.map((k) => (
							<div key={k.label} className="kpi-cell">
								<div className="kpi-value" style={{ color: project.color }}>
									{k.value}
								</div>
								<div className="kpi-label">{k.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="proj-block" style={{ paddingBottom: 140 }}>
				<div className="container">
					<Link
						href={`/project/${next.slug}`}
						data-cursor="drag"
						style={{
							display: "block",
							padding: "80px 48px",
							background: next.color,
							color: next.accentInk,
							borderRadius: 14,
							position: "relative",
							overflow: "hidden",
						}}
					>
						<div className="mono" style={{ opacity: 0.7 }}>
							Next project →
						</div>
						<div
							className="display"
							style={{
								fontSize: "clamp(56px, 10vw, 160px)",
								letterSpacing: "-0.035em",
								lineHeight: 0.95,
								marginTop: 24,
							}}
						>
							{next.name}
						</div>
						<div
							style={{
								marginTop: 12,
								fontSize: 18,
								opacity: 0.85,
								maxWidth: 520,
							}}
						>
							{next.tagline}
						</div>
					</Link>
				</div>
			</section>
		</>
	);
}
