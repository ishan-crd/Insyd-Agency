import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Link,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import { colors, fonts } from "./styles";

interface Props {
	name: string;
	day: string;
	dateLabel: string;
	time: string;
}

export default function BookingConfirmation({ name, day, dateLabel, time }: Props) {
	const firstName = name.split(" ")[0];

	return (
		<Html>
			<Head />
			<Preview>Your call with Insyd is confirmed — {day} {dateLabel} at {time} IST</Preview>
			<Body style={{ backgroundColor: colors.bg, margin: 0, padding: 0, fontFamily: fonts.sans }}>
				<Container style={{ maxWidth: 560, margin: "0 auto", padding: "48px 24px" }}>
					<Section>
						<Text style={{ color: colors.ink, fontSize: 20, fontWeight: 600, letterSpacing: "-0.03em", margin: 0 }}>
							Insyd
						</Text>
					</Section>

					<Hr style={{ borderColor: colors.line, margin: "32px 0" }} />

					<Heading style={{ color: colors.ink, fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.3, margin: "0 0 16px" }}>
						You&apos;re booked, {firstName}.
					</Heading>

					<Text style={{ color: colors.muted, fontSize: 15, lineHeight: 1.6, margin: "0 0 32px" }}>
						Your 30-minute call with Insyd has been confirmed. We&apos;ll send a meeting link closer to the date.
					</Text>

					{/* Booking card */}
					<Section style={{ backgroundColor: colors.surface, borderRadius: 12, padding: "32px 24px", border: `1px solid ${colors.line}`, textAlign: "center" as const }}>
						<Text style={{ color: colors.muted, fontSize: 11, fontFamily: fonts.mono, textTransform: "uppercase" as const, letterSpacing: "0.08em", margin: "0 0 16px" }}>
							Your slot
						</Text>
						<Text style={{ color: colors.accent, fontSize: 36, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1, margin: "0 0 8px" }}>
							{time} IST
						</Text>
						<Text style={{ color: colors.ink, fontSize: 18, margin: "0 0 4px" }}>
							{day} · {dateLabel}
						</Text>
						<Text style={{ color: colors.muted, fontSize: 13, margin: "8px 0 0" }}>
							30 minutes · Video call
						</Text>
					</Section>

					<Text style={{ color: colors.muted, fontSize: 14, lineHeight: 1.6, margin: "24px 0 0" }}>
						Need to reschedule? Just reply to this email and we&apos;ll sort it out.
					</Text>

					<Hr style={{ borderColor: colors.line, margin: "32px 0" }} />

					<Text style={{ color: colors.ink, fontSize: 15, lineHeight: 1.6, margin: "0 0 4px" }}>
						See you then,
					</Text>
					<Text style={{ color: colors.ink, fontSize: 15, fontWeight: 500, margin: "0 0 24px" }}>
						Ishan
					</Text>

					<Text style={{ color: colors.muted, fontSize: 12, lineHeight: 1.5, margin: 0 }}>
						Insyd · All Your IT Solutions. One Stop.
						<br />
						<Link href="mailto:ishan@insyd.in" style={{ color: colors.accent, textDecoration: "none" }}>
							ishan@insyd.in
						</Link>
						{" · "}
						<Link href="https://insyd.in" style={{ color: colors.accent, textDecoration: "none" }}>
							insyd.in
						</Link>
					</Text>
				</Container>
			</Body>
		</Html>
	);
}
