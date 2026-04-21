"use client";

import Link from "next/link";
import { OrbScene } from "@/components/Scene3D";
import type { CaseStudyContent, Project } from "@/data/projects";

function ProjectScreen({
	screen,
	accent,
}: {
	screen: { label: string; variant: string; title: string };
	accent: string;
}) {
	const variantClass =
		screen.variant === "dark"
			? "screen-placeholder--dark"
			: screen.variant === "ink"
				? "screen-placeholder--ink"
				: "";
	const bg = screen.variant === "primary" ? accent : undefined;

	return (
		<div
			className={`screen-placeholder ${variantClass}`}
			style={bg ? { background: bg } : {}}
		>
			<div className="screen-placeholder__label">{screen.label}</div>
			<div
				className="screen-placeholder__title"
				style={{ whiteSpace: "pre-line" }}
			>
				{screen.title}
			</div>
			<div className="screen-placeholder__glyph">{screen.label[0]}</div>
		</div>
	);
}

export default function ProjectDetail({
	project,
	content,
	next,
}: {
	project: Project;
	content: CaseStudyContent;
	next: Project;
}) {
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
				</div>
			</section>

			<section className="proj-block">
				<div className="container">
					<div className="proj-block__head">
						<span className="proj-block__label">(01) Challenge</span>
						<h2 className="proj-block__title display">
							The problem
							<br />
							they arrived with.
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

			<section style={{ padding: "60px 0" }}>
				<div className="container">
					<ProjectScreen screen={content.screens[0]} accent={project.color} />
				</div>
			</section>

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

			<section style={{ padding: "40px 0" }}>
				<div
					className="container"
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: 32,
					}}
				>
					<ProjectScreen screen={content.screens[1]} accent={project.color} />
					<ProjectScreen screen={content.screens[2]} accent={project.color} />
				</div>
			</section>

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
