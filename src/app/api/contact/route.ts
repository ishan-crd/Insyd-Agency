import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import ContactConfirmation from "@/emails/ContactConfirmation";
import ContactNotification from "@/emails/ContactNotification";

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

		const ownerSubject = `New enquiry from ${name}${company ? ` — ${company}` : ""}`;
		const clientSubject = `Thanks for reaching out, ${name.split(" ")[0]} — Insyd`;

		const ownerHtml = await render(
			ContactNotification({
				name,
				email,
				company: company || "—",
				services: servicesList,
				budget: budget || "—",
				about,
				timestamp,
			}),
		);

		const clientHtml = await render(
			ContactConfirmation({
				name,
				services: servicesList,
				budget: budget || "—",
				about,
			}),
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
			console.log("=== CONTACT FORM (no RESEND_API_KEY) ===");
			console.log("Owner:", ownerSubject);
			console.log("Client:", clientSubject);
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
