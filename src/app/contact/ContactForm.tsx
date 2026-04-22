"use client";

import { useMemo, useState } from "react";

export default function ContactForm() {
	const [services, setServices] = useState(new Set(["Product design"]));
	const [budget, setBudget] = useState("₹20–40L");
	const [slot, setSlot] = useState<string | null>(null);
	const [toast, setToast] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		company: "",
		about: "",
	});

	const toggleService = (s: string) => {
		const next = new Set(services);
		if (next.has(s)) next.delete(s);
		else next.add(s);
		setServices(next);
	};

	const [sending, setSending] = useState(false);

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (sending) return;
		setSending(true);

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					...form,
					services: Array.from(services),
					budget,
				}),
			});

			if (res.ok) {
				setToast(true);
				setTimeout(() => setToast(false), 4000);
				setForm({ name: "", email: "", company: "", about: "" });
				setServices(new Set(["Product design"]));
				setBudget("₹20–40L");
				setSlot(null);
			}
		} catch {
			// silently fail — toast won't show
		} finally {
			setSending(false);
		}
	};

	const slots = useMemo(() => {
		const days: {
			key: string;
			day: string;
			date: string;
			full: boolean;
		}[] = [];
		const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		const monthNames = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		const d = new Date();
		d.setDate(d.getDate() + 1);
		while (days.length < 10) {
			const dow = d.getDay();
			if (dow !== 0 && dow !== 6) {
				days.push({
					key: d.toISOString().slice(0, 10),
					day: dayNames[dow],
					date: `${d.getDate()} ${monthNames[d.getMonth()]}`,
					full: days.length === 1 || days.length === 4,
				});
			}
			d.setDate(d.getDate() + 1);
		}
		return days;
	}, []);

	return (
		<>
			<form className="contact-form" onSubmit={onSubmit}>
				<div className="contact-field">
					<label htmlFor="name">Your name</label>
					<input
						id="name"
						type="text"
						placeholder="Priya Ramanathan"
						value={form.name}
						onChange={(e) => setForm({ ...form, name: e.target.value })}
					/>
				</div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: 28,
					}}
				>
					<div className="contact-field">
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							placeholder="you@company.com"
							value={form.email}
							onChange={(e) => setForm({ ...form, email: e.target.value })}
						/>
					</div>
					<div className="contact-field">
						<label htmlFor="company">Company</label>
						<input
							id="company"
							type="text"
							placeholder="Acme"
							value={form.company}
							onChange={(e) => setForm({ ...form, company: e.target.value })}
						/>
					</div>
				</div>
				<fieldset className="contact-field" aria-label="What kind of help?">
					<span className="contact-field__label">What kind of help?</span>
					<div className="contact-chip-row">
						{[
							"Strategy sprint",
							"Product design",
							"Brand system",
							"Engineering",
							"Full product",
							"Retainer",
						].map((s) => (
							<button
								type="button"
								key={s}
								className={`contact-chip ${services.has(s) ? "is-on" : ""}`}
								onClick={() => toggleService(s)}
								data-cursor="button"
							>
								{s}
							</button>
						))}
					</div>
				</fieldset>
				<fieldset className="contact-field" aria-label="Budget">
					<span className="contact-field__label">Budget</span>
					<div className="contact-chip-row">
						{["< ₹10L", "₹10–20L", "₹20–40L", "₹40L+", "Not sure yet"].map(
							(b) => (
								<button
									type="button"
									key={b}
									className={`contact-chip ${budget === b ? "is-on" : ""}`}
									onClick={() => setBudget(b)}
									data-cursor="button"
								>
									{b}
								</button>
							),
						)}
					</div>
				</fieldset>
				<div className="contact-field">
					<label htmlFor="about">About the project</label>
					<textarea
						id="about"
						rows={5}
						placeholder="What are you building? What's the hardest part right now?"
						value={form.about}
						onChange={(e) => setForm({ ...form, about: e.target.value })}
					/>
				</div>
				<button
					type="submit"
					className="contact-submit"
					data-cursor="button"
					disabled={sending}
				>
					<span
						style={{
							width: 8,
							height: 8,
							background: "var(--accent)",
							borderRadius: "50%",
						}}
					/>
					{sending ? "Sending…" : "Send enquiry"}
					<span style={{ marginLeft: 8 }}>→</span>
				</button>
			</form>

			<aside className="contact-sidebar">
				<div className="contact-side-block">
					<h3 className="display">Or book a call directly.</h3>
					<p>
						Pick a 30-minute slot — we&apos;ll confirm by email. All times IST.
					</p>
					<div className="contact-cal">
						{slots.map((s) => (
							<button
								type="button"
								key={s.key}
								className={`contact-cal-slot ${s.full ? "full" : ""} ${slot === s.key ? "is-on" : ""}`}
								onClick={() => !s.full && setSlot(s.key)}
								data-cursor="button"
							>
								<span className="day">{s.day}</span>
								{s.date}
							</button>
						))}
					</div>
					{slot && (
						<div
							style={{
								marginTop: 14,
								padding: 14,
								border: "1px solid var(--line)",
								borderRadius: 10,
								fontSize: 13,
							}}
						>
							<div className="mono muted" style={{ marginBottom: 6 }}>
								Selected
							</div>
							<div>
								{slots.find((s) => s.key === slot)?.day} ·{" "}
								{slots.find((s) => s.key === slot)?.date} · 14:00 IST
							</div>
						</div>
					)}
				</div>
				<div className="contact-side-block">
					<h3 className="display">Prefer email?</h3>
					<p>
						We read everything that lands at{" "}
						<a href="mailto:ishan@insyd.in" style={{ color: "var(--accent)" }}>
							ishan@insyd.in
						</a>
						. Responses within 24 hours, Monday to Friday.
					</p>
				</div>
				<div className="contact-side-block">
					<h3 className="display">Not for us? That&apos;s ok.</h3>
					<p>
						We&apos;re honest about fit. If your project isn&apos;t a match,
						we&apos;ll point you toward studios and freelancers we trust.
					</p>
				</div>
				<div className="contact-side-block">
					<h3 className="display">Currently</h3>
					<p>
						<span className="live-dot" /> Accepting two projects for Q3 2026.
						<br />
						Discovery sprints available sooner.
					</p>
				</div>
			</aside>
			{toast && (
				<div className="toast is-visible">
					<span
						style={{
							width: 8,
							height: 8,
							background: "var(--accent)",
							borderRadius: "50%",
						}}
					/>
					Message received. We&apos;ll be in touch.
				</div>
			)}
		</>
	);
}
