"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PROJECTS } from "@/data/projects";

export default function ProjectsIndex() {
	const all = PROJECTS;
	const categories = [
		"All",
		...Array.from(new Set(all.map((p) => p.category))),
	];
	const [cat, setCat] = useState("All");
	const [view, setView] = useState<"grid" | "list">("grid");

	const filtered = cat === "All" ? all : all.filter((p) => p.category === cat);

	return (
		<>
			<div className="proj-filter-bar">
				<div className="proj-filters">
					{categories.map((c) => (
						<button
							type="button"
							key={c}
							className={`proj-filter ${cat === c ? "is-on" : ""}`}
							onClick={() => setCat(c)}
							data-cursor="button"
						>
							{c}{" "}
							<span className="mono" style={{ opacity: 0.5, marginLeft: 6 }}>
								{c === "All"
									? all.length
									: all.filter((p) => p.category === c).length}
							</span>
						</button>
					))}
				</div>
				<div className="proj-view-toggle">
					<button
						type="button"
						className={view === "grid" ? "is-on" : ""}
						onClick={() => setView("grid")}
						data-cursor="button"
					>
						Grid
					</button>
					<button
						type="button"
						className={view === "list" ? "is-on" : ""}
						onClick={() => setView("list")}
						data-cursor="button"
					>
						Index
					</button>
				</div>
			</div>

			{view === "grid" ? (
				<div className="proj-grid">
					{filtered.map((p) => (
						<Link
							key={p.slug}
							href={`/project/${p.slug}`}
							className="proj-card"
							data-cursor="drag"
						>
							<div
								className="proj-card__art"
								style={{ background: p.color, color: p.accentInk }}
							>
								<div className="proj-card__head">
									<span className="mono" style={{ opacity: 0.7 }}>
										{p.category}
									</span>
									<span className="mono" style={{ opacity: 0.7 }}>
										{p.year}
									</span>
								</div>
								<div style={{ position: "relative", zIndex: 2 }}>
									<h3
										className="display"
										style={{
											fontSize: "clamp(48px, 6vw, 88px)",
											letterSpacing: "-0.03em",
											lineHeight: 1,
											margin: 0,
										}}
									>
										{p.name}
									</h3>
									<div
										style={{
											marginTop: 10,
											fontSize: 15,
											opacity: 0.85,
											maxWidth: 360,
										}}
									>
										{p.tagline}
									</div>
								</div>
								{p.images[0] ? (
									<Image
										src={p.images[0]}
										alt={p.name}
										width={600}
										height={400}
										className="proj-card__image"
										style={{
											position: "absolute",
											bottom: 0,
											right: 0,
											width: "60%",
											height: "auto",
											objectFit: "contain",
											opacity: 0.25,
											zIndex: 1,
										}}
									/>
								) : (
									<div className="proj-card__glyph">{p.name[0]}</div>
								)}
							</div>
							<div className="proj-card__body">
								<div
									style={{
										fontSize: 14,
										color: "var(--ink-2)",
										textWrap: "pretty" as const,
									}}
								>
									{p.summary}
								</div>
								<div className="proj-card__meta">
									<span>{p.role}</span>
									<span>View →</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			) : (
				<div className="proj-list">
					{filtered.map((p, i) => (
						<Link
							key={p.slug}
							href={`/project/${p.slug}`}
							className="proj-list-row"
							data-cursor="drag"
						>
							<div className="proj-list-row__num">0{i + 1}</div>
							<h3 className="proj-list-row__name">{p.name}</h3>
							<div className="proj-list-row__meta">{p.category}</div>
							<div className="proj-list-row__meta mono">{p.year}</div>
							<div className="proj-list-row__arrow">→</div>
						</Link>
					))}
				</div>
			)}

			<div
				style={{
					marginTop: 80,
					paddingTop: 40,
					borderTop: "1px solid var(--line)",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "baseline",
					flexWrap: "wrap",
					gap: 20,
				}}
			>
				<div className="mono" style={{ color: "var(--muted)" }}>
					Showing {filtered.length} of {all.length}
				</div>
				<Link href="/contact" className="btn btn-primary" data-cursor="button">
					<span className="dot" /> Start a project
				</Link>
			</div>
		</>
	);
}
