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
	email: string;
	day: string;
	dateLabel: string;
	time: string;
	date: string;
}

export default function BookingNotification({
	name,
	email,
	day,
	dateLabel,
	time,
	date,
}: Props) {
	return (
		<Html>
			<Head>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: font links */}
				<style dangerouslySetInnerHTML={{ __html: fontLinks }} />
			</Head>
			<Preview>
				Call booked — {name} · {day} {dateLabel} at {time}
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
					<Section
						style={{
							backgroundColor: colors.accent,
							borderRadius: 8,
							padding: "12px 16px",
							marginBottom: 24,
						}}
					>
						<Text
							style={{
								color: "#fff",
								fontSize: 11,
								fontFamily: fonts.mono,
								fontWeight: 500,
								textTransform: "uppercase" as const,
								letterSpacing: "0.08em",
								margin: 0,
							}}
						>
							Call Booked
						</Text>
					</Section>

					<Heading
						style={{
							fontFamily: fonts.display,
							color: colors.ink,
							fontSize: 32,
							fontWeight: 400,
							letterSpacing: "-0.02em",
							lineHeight: 1.2,
							margin: "0 0 24px",
						}}
					>
						{name} booked a call
					</Heading>

					{/* Details card */}
					<Section
						style={{
							backgroundColor: colors.white,
							borderRadius: 12,
							padding: "28px 24px",
							border: `1px solid ${colors.lineSolid}`,
						}}
					>
						<Text
							style={{
								color: colors.muted,
								fontSize: 11,
								fontFamily: fonts.mono,
								textTransform: "uppercase" as const,
								letterSpacing: "0.08em",
								margin: "0 0 20px",
							}}
						>
							Booking details
						</Text>

						<table
							style={{ width: "100%", borderCollapse: "collapse" as const }}
						>
							<tbody>
								<tr>
									<td
										style={{
											padding: "10px 0",
											borderBottom: `1px solid ${colors.lineSolid}`,
											verticalAlign: "top",
											width: 90,
										}}
									>
										<Text
											style={{
												color: colors.muted,
												fontSize: 12,
												fontFamily: fonts.mono,
												margin: 0,
											}}
										>
											Email
										</Text>
									</td>
									<td
										style={{
											padding: "10px 0",
											borderBottom: `1px solid ${colors.lineSolid}`,
										}}
									>
										<Link
											href={`mailto:${email}`}
											style={{
												color: colors.accent,
												fontSize: 15,
												textDecoration: "none",
												fontFamily: fonts.mono,
											}}
										>
											{email}
										</Link>
									</td>
								</tr>
								<tr>
									<td
										style={{
											padding: "10px 0",
											borderBottom: `1px solid ${colors.lineSolid}`,
											verticalAlign: "top",
										}}
									>
										<Text
											style={{
												color: colors.muted,
												fontSize: 12,
												fontFamily: fonts.mono,
												margin: 0,
											}}
										>
											Date
										</Text>
									</td>
									<td
										style={{
											padding: "10px 0",
											borderBottom: `1px solid ${colors.lineSolid}`,
										}}
									>
										<Text
											style={{ color: colors.ink, fontSize: 15, margin: 0 }}
										>
											{day} · {dateLabel} ({date})
										</Text>
									</td>
								</tr>
								<tr>
									<td style={{ padding: "10px 0", verticalAlign: "top" }}>
										<Text
											style={{
												color: colors.muted,
												fontSize: 12,
												fontFamily: fonts.mono,
												margin: 0,
											}}
										>
											Time
										</Text>
									</td>
									<td style={{ padding: "10px 0" }}>
										<Text
											style={{
												color: colors.accent,
												fontSize: 22,
												fontFamily: fonts.display,
												margin: 0,
											}}
										>
											{time} IST
										</Text>
									</td>
								</tr>
							</tbody>
						</table>
					</Section>

					<Hr style={{ borderColor: colors.lineSolid, margin: "32px 0" }} />

					{/* Footer */}
					<Text
						style={{
							color: colors.muted,
							fontSize: 12,
							fontFamily: fonts.mono,
							margin: 0,
						}}
					>
						Reply directly to reach{" "}
						<Link
							href={`mailto:${email}`}
							style={{
								color: colors.accent,
								textDecoration: "none",
								fontFamily: fonts.mono,
							}}
						>
							{email}
						</Link>
					</Text>
				</Container>
			</Body>
		</Html>
	);
}
