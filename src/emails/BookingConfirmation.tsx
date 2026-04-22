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
import { colors, fontLinks, fonts } from "./styles";

interface Props {
	name: string;
	day: string;
	dateLabel: string;
	time: string;
}

export default function BookingConfirmation({
	name,
	day,
	dateLabel,
	time,
}: Props) {
	const firstName = name.split(" ")[0];

	return (
		<Html>
			<Head>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: font links */}
				<style dangerouslySetInnerHTML={{ __html: fontLinks }} />
			</Head>
			<Preview>
				Your call with Insyd is confirmed — {day} {dateLabel} at {time} IST
			</Preview>
			<Body
				style={{
					backgroundColor: colors.bg,
					margin: 0,
					padding: 0,
					fontFamily: fonts.sans,
					color: colors.ink,
				}}
			>
				<Container
					style={{ maxWidth: 560, margin: "0 auto", padding: "48px 24px" }}
				>
					<Heading
						style={{
							fontFamily: fonts.display,
							color: colors.ink,
							fontSize: 32,
							fontWeight: 400,
							letterSpacing: "-0.02em",
							lineHeight: 1.2,
							margin: "0 0 16px",
						}}
					>
						You&apos;re booked, {firstName}.
					</Heading>

					<Text
						style={{
							color: colors.muted,
							fontSize: 15,
							lineHeight: 1.6,
							margin: "0 0 32px",
						}}
					>
						Your 30-minute call with Insyd has been confirmed. We&apos;ll send a
						meeting link closer to the date.
					</Text>

					{/* Booking card */}
					<Section
						style={{
							backgroundColor: colors.white,
							borderRadius: 12,
							padding: "32px 24px",
							border: `1px solid ${colors.lineSolid}`,
							textAlign: "center" as const,
						}}
					>
						<Text
							style={{
								color: colors.muted,
								fontSize: 11,
								fontFamily: fonts.mono,
								textTransform: "uppercase" as const,
								letterSpacing: "0.08em",
								margin: "0 0 16px",
							}}
						>
							Your slot
						</Text>
						<Text
							style={{
								color: colors.accent,
								fontSize: 36,
								fontFamily: fonts.display,
								letterSpacing: "-0.02em",
								lineHeight: 1,
								margin: "0 0 8px",
							}}
						>
							{time} IST
						</Text>
						<Text
							style={{ color: colors.ink, fontSize: 18, margin: "0 0 4px" }}
						>
							{day} · {dateLabel}
						</Text>
						<Text
							style={{
								color: colors.muted,
								fontSize: 13,
								fontFamily: fonts.mono,
								margin: "8px 0 0",
							}}
						>
							30 minutes · Video call
						</Text>
					</Section>

					<Text
						style={{
							color: colors.muted,
							fontSize: 14,
							lineHeight: 1.6,
							margin: "24px 0 0",
						}}
					>
						Need to reschedule? Just reply to this email and we&apos;ll sort it
						out.
					</Text>

					<Hr style={{ borderColor: colors.lineSolid, margin: "32px 0" }} />

					<Text
						style={{
							color: colors.ink,
							fontSize: 15,
							lineHeight: 1.6,
							margin: "0 0 4px",
						}}
					>
						See you then,
					</Text>
					<Text
						style={{
							fontFamily: fonts.display,
							color: colors.ink,
							fontSize: 18,
							margin: "0 0 32px",
						}}
					>
						Ishan Gupta (Founder)
					</Text>

					{/* Footer */}
					<Text
						style={{
							color: colors.muted,
							fontSize: 12,
							fontFamily: fonts.mono,
							lineHeight: 1.6,
							margin: 0,
						}}
					>
						Insyd · All Your IT Solutions. One Stop.
					</Text>
					<Text style={{ fontSize: 12, margin: "4px 0 0" }}>
						<Link
							href="mailto:ishan@insyd.in"
							style={{
								color: colors.accent,
								textDecoration: "none",
								fontFamily: fonts.mono,
							}}
						>
							ishan@insyd.in
						</Link>
						<span style={{ color: colors.muted }}>{" · "}</span>
						<Link
							href="https://insyd.in"
							style={{
								color: colors.accent,
								textDecoration: "none",
								fontFamily: fonts.mono,
							}}
						>
							insyd.in
						</Link>
					</Text>
				</Container>
			</Body>
		</Html>
	);
}
