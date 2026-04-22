import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import BookingConfirmation from "@/emails/BookingConfirmation";
import BookingNotification from "@/emails/BookingNotification";

const OWNER_EMAIL = "ishan@insyd.in";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { name, email, date, time, day, dateLabel } = body;

		if (!name || !email || !date || !time) {
			return NextResponse.json(
				{ error: "Name, email, date, and time are required." },
				{ status: 400 },
			);
		}

		const ownerSubject = `Call booked — ${name} · ${day} ${dateLabel} at ${time}`;
		const clientSubject = `Your call with Insyd is confirmed — ${day} ${dateLabel}`;

		const ownerHtml = await render(
			BookingNotification({ name, email, day, dateLabel, time, date }),
		);

		const clientHtml = await render(
			BookingConfirmation({ name, day, dateLabel, time }),
		);

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
						html: ownerHtml,
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
						html: clientHtml,
					}),
				}),
			]);
		} else {
			console.log("=== CALL BOOKING (no RESEND_API_KEY) ===");
			console.log("Owner:", ownerSubject);
			console.log("Client:", clientSubject);
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
