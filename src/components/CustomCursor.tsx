"use client";

import { useEffect } from "react";

export default function CustomCursor() {
	useEffect(() => {
		const dot = document.createElement("div");
		dot.className = "cursor";
		const ring = document.createElement("div");
		ring.className = "cursor-ring";
		document.body.appendChild(dot);
		document.body.appendChild(ring);

		let mx = -100,
			my = -100,
			rx = -100,
			ry = -100;

		const onMove = (e: MouseEvent) => {
			mx = e.clientX;
			my = e.clientY;
			dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
		};

		let rafId: number;
		const tick = () => {
			rx += (mx - rx) * 0.18;
			ry += (my - ry) * 0.18;
			ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
			rafId = requestAnimationFrame(tick);
		};
		tick();

		const onOver = (e: MouseEvent) => {
			const hit = (e.target as HTMLElement).closest("[data-cursor], a, button");
			if (hit) {
				dot.classList.add("hover");
				ring.style.opacity = "0";
				const label = hit.getAttribute("data-cursor");
				if (label === "drag") dot.setAttribute("data-label", "drag");
				else dot.removeAttribute("data-label");
			} else {
				dot.classList.remove("hover");
				ring.style.opacity = "0.5";
				dot.removeAttribute("data-label");
			}
		};

		document.addEventListener("mousemove", onMove);
		document.addEventListener("mouseover", onOver);

		return () => {
			cancelAnimationFrame(rafId);
			document.removeEventListener("mousemove", onMove);
			document.removeEventListener("mouseover", onOver);
			dot.remove();
			ring.remove();
		};
	}, []);

	return null;
}
