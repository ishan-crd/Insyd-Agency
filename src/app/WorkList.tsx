"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PROJECTS } from "@/data/projects";

export default function WorkList() {
	const projects = PROJECTS.filter((p) => p.featured);
	const [hovered, setHovered] = useState<string | null>(null);
	const [mouse, setMouse] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);

	return (
		<>
			<div className="work-list">
				{projects.map((p, i) => (
					<Link
						key={p.slug}
						href={`/project/${p.slug}`}
						className="work-item"
						data-cursor="drag"
						onMouseEnter={() => setHovered(p.slug)}
						onMouseLeave={() => setHovered(null)}
					>
						<div className="work-item__row">
							<div className="work-item__num">0{i + 1}</div>
							<h3 className="work-item__name">{p.name}</h3>
							<div className="work-item__meta">
								<div>{p.category}</div>
								<div className="mono" style={{ marginTop: 4 }}>
									{p.year}
								</div>
							</div>
							<div className="work-item__arrow">→</div>
						</div>
					</Link>
				))}
			</div>
			{projects.map((p) => (
				<div
					key={`preview-${p.slug}`}
					className={`work-item__preview ${hovered === p.slug ? "is-visible" : ""}`}
					style={{
						transform: `translate(${mouse.x + 20}px, ${mouse.y - 110}px)`,
						background: p.color,
					}}
				>
					{p.images[0] ? (
						<Image
							src={p.images[0]}
							alt={p.name}
							width={400}
							height={260}
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
					) : (
						<div
							className="work-item__preview-art"
							style={{ color: p.accentInk }}
						>
							{p.name}
						</div>
					)}
				</div>
			))}
		</>
	);
}
