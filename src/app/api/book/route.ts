import { NextResponse } from "next/server";

const OWNER_EMAIL = "ishan@insyd.in";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { name, email, date, day, dateLabel } = body;

		if (!name || !email || !date) {
			return NextResponse.json(
				{ error: "Name, email, and date are required." },
				{ status: 400 },
			);
		}

		const slotDisplay = `${day} · ${dateLabel} · 14:00 IST`;

		// Email to Insyd
		const ownerSubject = `Call booked — ${name} · ${day} ${dateLabel}`;
		const ownerBody = [
			`New call booking received`,
			"",
			`Name: ${name}`,
			`Email: ${email}`,
			`Slot: ${slotDisplay}`,
			`Date: ${date}`,
			"",
			"Please confirm or follow up with the client.",
			"",
			"—",
			"Sent via insyd.in/contact",
		].join("\n");

		// Confirmation to the person
		const clientSubject = `Your call with Insyd is booked — ${day} ${dateLabel}`;
		const clientBody = [
			`Hi ${name.split(" ")[0]},`,
			"",
			`Your 30-minute call with Insyd has been booked:`,
			"",
			`Date: ${slotDisplay}`,
			"",
			"We'll send a meeting link closer to the date. If you need to reschedule, just reply to this email.",
			"",
			"Talk soon,",
			"Ishan",
			"Insyd — ishan@insyd.in",
		].join("\n");

		const resendKey = process.env.RESEND_API_KEY;

		if (resendKey) {
			await Promise.all([
				fetch("https://api.resend.com/emails", {
					method: "POST",
					headers: {
						Authorization: `Bearer ${resendKey}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						from: "Insyd <noreply@insyd.in>",
						to: [OWNER_EMAIL],
						subject: ownerSubject,
						text: ownerBody,
						reply_to: email,
					}),
				}),
				fetch("https://api.resend.com/emails", {
					method: "POST",
					headers: {
						Authorization: `Bearer ${resendKey}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						from: "Insyd <noreply@insyd.in>",
						to: [email],
						subject: clientSubject,
						text: clientBody,
					}),
				}),
			]);
		} else {
			console.log("=== CALL BOOKING ===");
			console.log("TO OWNER:", ownerSubject);
			console.log(ownerBody);
			console.log("TO CLIENT:", clientSubject);
			console.log(clientBody);
			console.log("====================");
			console.log("Set RESEND_API_KEY env var to enable email delivery.");
		}

		return NextResponse.json({ ok: true });
	} catch (err) {
		console.error("Booking error:", err);
		return NextResponse.json(
			{ error: "Something went wrong. Please try again." },
			{ status: 500 },
		);
	}
}
