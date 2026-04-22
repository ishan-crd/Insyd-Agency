"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
	const [time, setTime] = useState("");

	useEffect(() => {
		const tick = () => {
			const d = new Date();
			const fmt = d.toLocaleTimeString("en-IN", {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: false,
				timeZone: "Asia/Kolkata",
			});
			setTime(fmt);
		};
		tick();
		const id = setInterval(tick, 1000);
		return () => clearInterval(id);
	}, []);

	return (
		<footer className="site-footer">
			<div className="site-footer__marquee" aria-hidden>
				<div className="marquee-track">
					<span className="display marquee-content">
						All Your IT Solutions · One Stop · Design · Engineering · Strategy ·
						All Your IT Solutions · One Stop · Design · Engineering · Strategy
						·&nbsp;
					</span>
					<span className="display marquee-content">
						All Your IT Solutions · One Stop · Design · Engineering · Strategy ·
						All Your IT Solutions · One Stop · Design · Engineering · Strategy
						·&nbsp;
					</span>
				</div>
			</div>
			<div className="site-footer__grid container">
				<div className="site-footer__lead">
					<div className="mono muted">Next step</div>
					<Link
						href="/contact"
						className="display site-footer__cta"
						data-cursor="link"
					>
						Let&apos;s build
						<br />
						something real. <span className="arrow">→</span>
					</Link>
				</div>
				<div className="site-footer__cols">
					<div>
						<div className="mono muted">Explore</div>
						<ul>
							<li>
								<Link href="/" data-cursor="link">
									Index
								</Link>
							</li>
							<li>
								<Link href="/projects" data-cursor="link">
									Work
								</Link>
							</li>
							<li>
								<Link href="/services" data-cursor="link">
									Services
								</Link>
							</li>
							<li>
								<Link href="/contact" data-cursor="link">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<div className="mono muted">Connect</div>
						<ul>
							<li>
								<a href="mailto:ishan@insyd.in" data-cursor="link">
									ishan@insyd.in
								</a>
							</li>
							<li>
								<a href="#" data-cursor="link">
									LinkedIn
								</a>
							</li>
							<li>
								<a href="#" data-cursor="link">
									Read.cv
								</a>
							</li>
							<li>
								<a href="#" data-cursor="link">
									Dribbble
								</a>
							</li>
						</ul>
					</div>
					<div>
						<div className="mono muted">Studio</div>
						<ul>
							<li>Remote-first</li>
							<li>Accepting 2 projects — Q3 2026</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="site-footer__bottom container">
				<div className="mono">
					Insyd © 2026 — All Your IT Solutions. One Stop.
				</div>
				<div className="mono">
					<span className="live-dot" /> {time} IST
				</div>
			</div>
		</footer>
	);
}
