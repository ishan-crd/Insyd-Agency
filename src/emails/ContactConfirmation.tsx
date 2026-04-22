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
	services: string;
	budget: string;
	about: string;
}

export default function ContactConfirmation({
	name,
	services,
	budget,
	about,
}: Props) {
	const firstName = name.split(" ")[0];

	return (
		<Html>
			<Head>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: font links */}
				<style dangerouslySetInnerHTML={{ __html: fontLinks }} />
			</Head>
			<Preview>
				Thanks for reaching out — we'll get back to you within 24 hours.
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
						Hey {firstName}, we got your message.
					</Heading>

					<Text
						style={{
							color: colors.muted,
							fontSize: 15,
							lineHeight: 1.6,
							margin: "0 0 32px",
						}}
					>
						Thanks for reaching out. We'll review your enquiry and get back to
						you within 24 hours.
					</Text>

					{/* Summary card */}
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
							Your enquiry
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
											Services
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
											{services}
										</Text>
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
											Budget
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
											{budget}
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
											Project
										</Text>
									</td>
									<td style={{ padding: "10px 0" }}>
										<Text
											style={{
												color: colors.ink,
												fontSize: 15,
												lineHeight: 1.5,
												margin: 0,
											}}
										>
											{about}
										</Text>
									</td>
								</tr>
							</tbody>
						</table>
					</Section>

					<Hr style={{ borderColor: colors.lineSolid, margin: "32px 0" }} />

					<Text
						style={{
							color: colors.ink,
							fontSize: 15,
							lineHeight: 1.6,
							margin: "0 0 4px",
						}}
					>
						Talk soon,
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
