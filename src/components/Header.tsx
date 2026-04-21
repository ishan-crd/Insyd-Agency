"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const nav = [
	{ id: "home", label: "Index", href: "/" },
	{ id: "projects", label: "Work", href: "/projects" },
	{ id: "services", label: "Services", href: "/services" },
	{ id: "contact", label: "Contact", href: "/contact" },
];

export default function Header({ page = "home" }: { page?: string }) {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header className={`site-header ${scrolled ? "scrolled" : ""}`}>
			<div className="site-header__inner">
				<Logo />
				<nav className="site-nav">
					{nav.map((n, i) => (
						<Link
							key={n.id}
							href={n.href}
							className={`site-nav__link ${page === n.id ? "is-active" : ""}`}
							data-cursor="link"
						>
							<span className="mono site-nav__num">0{i + 1}</span>
							<span>{n.label}</span>
						</Link>
					))}
				</nav>
				<div className="site-header__right">
					<ThemeToggle />
					<Link
						href="/contact"
						className="btn btn-primary"
						data-cursor="button"
					>
						<span className="dot" /> Book a call
					</Link>
				</div>
			</div>
		</header>
	);
}
