"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [theme, setTheme] = useState<string>(() => {
		if (typeof window !== "undefined") {
			return (
				document.documentElement.getAttribute("data-theme") ||
				localStorage.getItem("insyd-theme") ||
				"light"
			);
		}
		return "light";
	});

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		try {
			localStorage.setItem("insyd-theme", theme);
		} catch {}
	}, [theme]);

	return (
		<button
			type="button"
			className="theme-toggle"
			onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
			data-cursor="button"
			aria-label="Toggle theme"
		>
			{/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon */}
			<svg width="22" height="22" viewBox="0 0 16 16" fill="none">
				{theme === "light" ? (
					<path d="M14 9.2A6 6 0 016.8 2 6 6 0 1014 9.2z" fill="currentColor" />
				) : (
					<>
						<circle cx="8" cy="8" r="3" fill="currentColor" />
						{[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
							const a = (i * Math.PI) / 4;
							const x1 = 8 + Math.cos(a) * 5;
							const y1 = 8 + Math.sin(a) * 5;
							const x2 = 8 + Math.cos(a) * 6.5;
							const y2 = 8 + Math.sin(a) * 6.5;
							return (
								<line
									key={i}
									x1={x1}
									y1={y1}
									x2={x2}
									y2={y2}
									stroke="currentColor"
									strokeWidth="1.2"
									strokeLinecap="round"
								/>
							);
						})}
					</>
				)}
			</svg>
		</button>
	);
}
