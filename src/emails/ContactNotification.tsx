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
	email: string;
	company: string;
	services: string;
	budget: string;
	about: string;
	timestamp: string;
}

export default function ContactNotification({ name, email, company, services, budget, about, timestamp }: Props) {
	return (
		<Html>
			<Head />
			<Preview>New enquiry from {name}{company ? ` — ${company}` : ""}</Preview>
			<Body style={{ backgroundColor: colors.bg, margin: 0, padding: 0, fontFamily: fonts.sans }}>
				<Container style={{ maxWidth: 560, margin: "0 auto", padding: "48px 24px" }}>
					<Section>
						<Text style={{ color: colors.ink, fontSize: 20, fontWeight: 600, letterSpacing: "-0.03em", margin: 0 }}>
							Insyd
						</Text>
					</Section>

					<Hr style={{ borderColor: colors.line, margin: "32px 0" }} />

					<Section style={{ backgroundColor: colors.accent, borderRadius: 8, padding: "12px 16px", marginBottom: 24 }}>
						<Text style={{ color: "#fff", fontSize: 13, fontFamily: fonts.mono, fontWeight: 500, margin: 0 }}>
							NEW ENQUIRY
						</Text>
					</Section>

					<Heading style={{ color: colors.ink, fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.3, margin: "0 0 8px" }}>
						{name}
					</Heading>
					{company && (
						<Text style={{ color: colors.muted, fontSize: 15, margin: "0 0 4px" }}>{company}</Text>
					)}
					<Text style={{ color: colors.muted, fontSize: 13, margin: "0 0 24px" }}>
						{timestamp}
					</Text>

					<Section style={{ backgroundColor: colors.surface, borderRadius: 12, padding: "28px 24px", border: `1px solid ${colors.line}` }}>
						<table style={{ width: "100%", borderCollapse: "collapse" as const }}>
							<tbody>
								<tr>
									<td style={{ padding: "8px 0", verticalAlign: "top", width: 100 }}>
										<Text style={{ color: colors.muted, fontSize: 12, fontFamily: fonts.mono, margin: 0 }}>Email</Text>
									</td>
									<td style={{ padding: "8px 0" }}>
										<Link href={`mailto:${email}`} style={{ color: colors.accent, fontSize: 15, textDecoration: "none" }}>{email}</Link>
									</td>
								</tr>
								<tr>
									<td style={{ padding: "8px 0", verticalAlign: "top" }}>
										<Text style={{ color: colors.muted, fontSize: 12, fontFamily: fonts.mono, margin: 0 }}>Services</Text>
									</td>
									<td style={{ padding: "8px 0" }}>
										<Text style={{ color: colors.ink, fontSize: 15, margin: 0 }}>{services}</Text>
									</td>
								</tr>
								<tr>
									<td style={{ padding: "8px 0", verticalAlign: "top" }}>
										<Text style={{ color: colors.muted, fontSize: 12, fontFamily: fonts.mono, margin: 0 }}>Budget</Text>
									</td>
									<td style={{ padding: "8px 0" }}>
										<Text style={{ color: colors.ink, fontSize: 15, margin: 0 }}>{budget}</Text>
									</td>
								</tr>
							</tbody>
						</table>

						<Hr style={{ borderColor: colors.line, margin: "16px 0" }} />

						<Text style={{ color: colors.muted, fontSize: 12, fontFamily: fonts.mono, margin: "0 0 8px" }}>Project details</Text>
						<Text style={{ color: colors.ink, fontSize: 15, lineHeight: 1.6, margin: 0 }}>{about}</Text>
					</Section>

					<Hr style={{ borderColor: colors.line, margin: "32px 0" }} />

					<Text style={{ color: colors.muted, fontSize: 12, margin: 0 }}>
						Reply directly to respond to{" "}
						<Link href={`mailto:${email}`} style={{ color: colors.accent, textDecoration: "none" }}>{email}</Link>
					</Text>
				</Container>
			</Body>
		</Html>
	);
}
