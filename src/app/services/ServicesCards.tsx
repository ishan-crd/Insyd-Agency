import Link from "next/link";

const SERVICES = [
	{
		kind: "Engagement — 2 weeks",
		title: "Discovery\nsprint.",
		body: "A focused two-week sprint to audit your product, interview users, and return a strategic brief with a scoped roadmap. Often a prerequisite to a larger engagement, sometimes a standalone unblock.",
		deliverables: [
			"Product + UX audit",
			"8–12 user interviews",
			"Competitive landscape",
			"Written strategic brief",
			"Scoped 90-day roadmap",
		],
		price: "from ₹8L",
		note: "~$10K USD · fixed fee · 2 weeks",
	},
	{
		kind: "Engagement — 3 to 6 months",
		title: "Full product\nengagement.",
		body: "The main thing we do: take a product from a shaped problem to a shipped, polished release. Small embedded team — strategy, design, and engineering — working on a weekly shipping cadence.",
		deliverables: [
			"Dedicated small team (3–5)",
			"Weekly demos & deploys",
			"Design system built to order",
			"Production-grade codebase",
			"Hand-off & pairing with your team",
		],
		price: "from ₹35L",
		note: "~$42K USD · monthly · 3–6 months",
	},
	{
		kind: "Retainer — ongoing",
		title: "Studio\nretainer.",
		body: "For companies with a live product that deserves ongoing care. A reserved slice of our team, predictable cadence, low-ceremony engagement. We handle the things your in-house team doesn't have bandwidth for.",
		deliverables: [
			"Reserved weekly capacity",
			"Async-first operating model",
			"Design + engineering mix",
			"Monthly strategic review",
			"Pause or cancel any month",
		],
		price: "from ₹6L / mo",
		note: "~$7.2K USD · monthly · rolling",
	},
];

export default function ServicesCards() {
	return (
		<div>
			{SERVICES.map((s, i) => (
				<div key={s.title} className="svc-card">
					<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
						<span className="svc-card__num">0{i + 1} / 03</span>
						<span className="svc-card__kind">{s.kind}</span>
					</div>
					<div className="svc-card__head">
						<h3 className="svc-card__title" style={{ whiteSpace: "pre-line" }}>
							{s.title}
						</h3>
						<p className="svc-card__body">{s.body}</p>
						<ul className="svc-card__list">
							{s.deliverables.map((d, _j) => (
								<li key={d}>{d}</li>
							))}
						</ul>
					</div>
					<div className="svc-card__price">
						<span className="svc-card__price-label">Starting at</span>
						<span className="svc-card__price-val">{s.price}</span>
						<span className="svc-card__price-note">{s.note}</span>
						<Link
							href="/contact"
							className="btn"
							data-cursor="button"
							style={{ marginTop: 20, alignSelf: "flex-start" }}
						>
							Enquire →
						</Link>
					</div>
				</div>
			))}
		</div>
	);
}
