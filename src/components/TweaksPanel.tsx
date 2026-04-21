"use client";

import { useEffect, useState } from "react";

const pairings = [
	{
		id: "serif-grotesque",
		name: "Instrument Serif × Inter Tight",
		hint: "Editorial + clean",
	},
	{ id: "grotesque-mono", name: "Geist × Geist", hint: "Modern grotesque" },
	{ id: "editorial", name: "Fraunces × Inter Tight", hint: "Warm editorial" },
	{ id: "neue-classic", name: "Cormorant × DM Sans", hint: "Classic luxury" },
];

const fontPreview: Record<string, string> = {
	"serif-grotesque": "Instrument Serif, serif",
	"grotesque-mono": "Geist, sans-serif",
	editorial: "Fraunces, serif",
	"neue-classic": "Cormorant Garamond, serif",
};

export default function TweaksPanel() {
	const [open, setOpen] = useState(false);
	const [visible, setVisible] = useState(false);
	const [type, setType] = useState("serif-grotesque");
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		try {
			setType(localStorage.getItem("insyd-type") || "serif-grotesque");
			setTheme(localStorage.getItem("insyd-theme") || "light");
		} catch {}
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute("data-type", type);
		try {
			localStorage.setItem("insyd-type", type);
		} catch {}
	}, [type]);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		try {
			localStorage.setItem("insyd-theme", theme);
		} catch {}
	}, [theme]);

	useEffect(() => {
		const onMsg = (e: MessageEvent) => {
			if (!e.data || typeof e.data !== "object") return;
			if (e.data.type === "__activate_edit_mode") setVisible(true);
			if (e.data.type === "__deactivate_edit_mode") setVisible(false);
		};
		window.addEventListener("message", onMsg);
		window.parent.postMessage({ type: "__edit_mode_available" }, "*");
		return () => window.removeEventListener("message", onMsg);
	}, []);

	if (!visible) return null;

	return (
		<div className={`tweaks ${open ? "open" : ""}`}>
			<button
				type="button"
				className="tweaks__head"
				onClick={() => setOpen((o) => !o)}
			>
				<span className="mono">Tweaks</span>
				<span className="tweaks__chev">{open ? "—" : "+"}</span>
			</button>
			{open && (
				<div className="tweaks__body">
					<div className="tweaks__group">
						<div className="mono muted">Theme</div>
						<div className="tweaks__row">
							{(["light", "dark"] as const).map((t) => (
								<button
									type="button"
									key={t}
									className={`tweaks__chip ${theme === t ? "is-on" : ""}`}
									onClick={() => setTheme(t)}
								>
									{t}
								</button>
							))}
						</div>
					</div>
					<div className="tweaks__group">
						<div className="mono muted">Type pairing</div>
						<div className="tweaks__list">
							{pairings.map((p) => (
								<button
									type="button"
									key={p.id}
									className={`tweaks__pair ${type === p.id ? "is-on" : ""}`}
									onClick={() => setType(p.id)}
								>
									<span style={{ fontFamily: fontPreview[p.id], fontSize: 20 }}>
										Aa
									</span>
									<span>
										<div style={{ fontSize: 13, fontWeight: 500 }}>
											{p.name}
										</div>
										<div className="mono muted" style={{ fontSize: 10 }}>
											{p.hint}
										</div>
									</span>
								</button>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
