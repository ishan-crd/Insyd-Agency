import { NextResponse } from "next/server";

const OWNER_EMAIL = "ishan@insyd.in";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { name, email, company, services, budget, about } = body;

		if (!name || !email || !about) {
			return NextResponse.json(
				{ error: "Name, email, and project details are required." },
				{ status: 400 },
			);
		}

		const servicesList = (services as string[])?.join(", ") || "—";
		const timestamp = new Date().toLocaleString("en-IN", {
			timeZone: "Asia/Kolkata",
			dateStyle: "full",
			timeStyle: "short",
		});

		// Email to Insyd (you)
		const ownerSubject = `New enquiry from ${name}${company ? ` — ${company}` : ""}`;
		const ownerBody = [
			`New project enquiry received on ${timestamp}`,
			"",
			`Name: ${name}`,
			`Email: ${email}`,
			`Company: ${company || "—"}`,
			`Services: ${servicesList}`,
			`Budget: ${budget || "—"}`,
			"",
			"Project details:",
			about,
			"",
			"—",
			"Sent via insyd.in/contact",
		].join("\n");

		// Confirmation email to the person
		const clientSubject = `Thanks for reaching out, ${name.split(" ")[0]} — Insyd`;
		const clientBody = [
			`Hi ${name.split(" ")[0]},`,
			"",
			"Thanks for getting in touch! We've received your enquiry and will get back to you within 24 hours.",
			"",
			"Here's a summary of what you submitted:",
			"",
			`Services: ${servicesList}`,
			`Budget: ${budget || "—"}`,
			`Project: ${about}`,
			"",
			"Talk soon,",
			"Ishan",
			"Insyd — ishan@insyd.in",
		].join("\n");

		const resendKey = process.env.RESEND_API_KEY;

		if (resendKey) {
			// Send both emails via Resend
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
			// Fallback: log to console when no API key is set
			console.log("=== CONTACT FORM SUBMISSION ===");
			console.log("TO OWNER:", ownerSubject);
			console.log(ownerBody);
			console.log("TO CLIENT:", clientSubject);
			console.log(clientBody);
			console.log("===============================");
			console.log(
				"Set RESEND_API_KEY env var to enable email delivery.",
			);
		}

		return NextResponse.json({ ok: true });
	} catch (err) {
		console.error("Contact form error:", err);
		return NextResponse.json(
			{ error: "Something went wrong. Please try again." },
			{ status: 500 },
		);
	}
}
