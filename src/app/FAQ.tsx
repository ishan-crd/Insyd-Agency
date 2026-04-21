"use client";

import { useState } from "react";

const items = [
	{
		q: "How long does a typical engagement last?",
		a: "Most projects run 3 to 6 months end-to-end. We offer a two-week paid discovery sprint so we can scope accurately before committing to a full engagement.",
	},
	{
		q: "Do you work with early-stage startups?",
		a: "Yes — about half of our work is with pre-seed and seed-stage companies. We have a founder-friendly engagement model that trades cash for equity or deferred fees where it makes sense.",
	},
	{
		q: "Can you work with our existing team?",
		a: "Absolutely. We often embed alongside in-house designers and engineers. We've led design while your team handled engineering, and vice versa.",
	},
	{
		q: "What does it cost?",
		a: "Strategy sprints start at ₹8L (~$10K). Full product engagements start at ₹35L (~$42K). We publish indicative ranges on the Services page — final scope depends on the problem.",
	},
	{
		q: "Where are you based?",
		a: "Bengaluru, India. We work remote-first across Europe, the US, and India. Two of us are in London half the year.",
	},
];

export default function FAQ() {
	const [open, setOpen] = useState<number | null>(null);

	return (
		<div className="faq-list">
			{items.map((it, i) => (
				<div key={it.q} className={`faq-item ${open === i ? "is-open" : ""}`}>
					<button
						type="button"
						className="faq-q display"
						onClick={() => setOpen(open === i ? null : i)}
						data-cursor="button"
					>
						<span>{it.q}</span>
						<span className="faq-q__icon">+</span>
					</button>
					<div className="faq-a">
						<div className="faq-a__inner">{it.a}</div>
					</div>
				</div>
			))}
		</div>
	);
}
