"use client";

import { useEffect, useMemo, useState } from "react";

export default function ContactForm() {
	const [services, setServices] = useState(new Set(["Product design"]));
	const [budget, setBudget] = useState("₹20–40L");
	const [slot, setSlot] = useState<string | null>(null);
	const [toast, setToast] = useState(false);
	const [toastMsg, setToastMsg] = useState("Message received. We'll be in touch.");
	const [bookingName, setBookingName] = useState("");
	const [bookingEmail, setBookingEmail] = useState("");
	const [bookingTime, setBookingTime] = useState<string | null>(null);
	const [bookingSending, setBookingSending] = useState(false);

	const timeSlots = [
		"10:00", "10:30", "11:00", "11:30",
		"12:00", "12:30", "14:00", "14:30",
		"15:00", "15:30", "16:00", "16:30",
		"17:00", "17:30",
	];
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
				setToastMsg("Message received. We'll be in touch.");
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

	const [today, setToday] = useState(() => new Date().toISOString().slice(0, 10));

	// Refresh date at midnight so slots auto-update
	useEffect(() => {
		const check = () => {
			const now = new Date().toISOString().slice(0, 10);
			if (now !== today) {
				setToday(now);
				setSlot(null);
				setBookingTime(null);
			}
		};
		const id = setInterval(check, 30_000);
		return () => clearInterval(id);
	}, [today]);

	const slots = useMemo(() => {
		const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		const monthNames = [
			"Jan", "Feb", "Mar", "Apr", "May", "Jun",
			"Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		];
		const days: { key: string; day: string; date: string }[] = [];
		const d = new Date(today + "T00:00:00");
		for (let i = 0; i < 10; i++) {
			const current = new Date(d);
			current.setDate(d.getDate() + i);
			days.push({
				key: current.toISOString().slice(0, 10),
				day: dayNames[current.getDay()],
				date: `${current.getDate()} ${monthNames[current.getMonth()]}`,
			});
		}
		return days;
	}, [today]);

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
					<div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
						<input
							type="text"
							placeholder="Your name"
							value={bookingName}
							onChange={(e) => setBookingName(e.target.value)}
							style={{
								padding: "10px 14px",
								border: "1px solid var(--line)",
								borderRadius: 8,
								background: "transparent",
								color: "var(--ink)",
								fontSize: 14,
							}}
						/>
						<input
							type="email"
							placeholder="your@email.com"
							value={bookingEmail}
							onChange={(e) => setBookingEmail(e.target.value)}
							style={{
								padding: "10px 14px",
								border: "1px solid var(--line)",
								borderRadius: 8,
								background: "transparent",
								color: "var(--ink)",
								fontSize: 14,
							}}
						/>
					</div>
					<div className="contact-cal">
						{slots.map((s) => (
							<button
								type="button"
								key={s.key}
								className={`contact-cal-slot ${slot === s.key ? "is-on" : ""}`}
								onClick={() => setSlot(s.key)}
								data-cursor="button"
							>
								<span className="day">{s.day}</span>
								{s.date}
							</button>
						))}
					</div>
					{slot && (
						<>
							<div className="mono muted" style={{ marginTop: 20, marginBottom: 10, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em" }}>
								Pick a time
							</div>
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(4, 1fr)",
									gap: 6,
								}}
							>
								{timeSlots.map((t) => (
									<button
										type="button"
										key={t}
										className={`contact-cal-slot ${bookingTime === t ? "is-on" : ""}`}
										onClick={() => setBookingTime(t)}
										data-cursor="button"
										style={{ padding: "8px 4px", fontSize: 13 }}
									>
										{t}
									</button>
								))}
							</div>
						</>
					)}
					{slot && bookingTime && (
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
								{slots.find((s) => s.key === slot)?.date} · {bookingTime} IST
							</div>
						</div>
					)}
					{slot && bookingTime && bookingName && bookingEmail && (
						<button
							type="button"
							className="contact-submit"
							data-cursor="button"
							disabled={bookingSending}
							onClick={async () => {
								if (bookingSending) return;
								setBookingSending(true);
								try {
									const selectedSlot = slots.find((s) => s.key === slot);
									const res = await fetch("/api/book", {
										method: "POST",
										headers: { "Content-Type": "application/json" },
										body: JSON.stringify({
											name: bookingName,
											email: bookingEmail,
											date: slot,
											time: bookingTime,
											day: selectedSlot?.day,
											dateLabel: selectedSlot?.date,
										}),
									});
									if (res.ok) {
										setToastMsg("Call booked! Check your email for confirmation.");
										setToast(true);
										setTimeout(() => setToast(false), 4000);
										setSlot(null);
										setBookingTime(null);
										setBookingName("");
										setBookingEmail("");
									}
								} catch {
									// silently fail
								} finally {
									setBookingSending(false);
								}
							}}
							style={{ marginTop: 16, width: "100%" }}
						>
							<span
								style={{
									width: 8,
									height: 8,
									background: "var(--accent)",
									borderRadius: "50%",
								}}
							/>
							{bookingSending ? "Booking…" : "Confirm booking"}
							<span style={{ marginLeft: 8 }}>→</span>
						</button>
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
					{toastMsg}
				</div>
			)}
		</>
	);
}
