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
	services: string;
	budget: string;
	about: string;
}

export default function ContactConfirmation({ name, services, budget, about }: Props) {
	const firstName = name.split(" ")[0];

	return (
		<Html>
			<Head />
			<Preview>Thanks for reaching out — we&apos;ll get back to you within 24 hours.</Preview>
			<Body style={{ backgroundColor: colors.bg, margin: 0, padding: 0, fontFamily: fonts.sans }}>
				<Container style={{ maxWidth: 560, margin: "0 auto", padding: "48px 24px" }}>
					{/* Logo */}
					<Section>
						<Text style={{ color: colors.ink, fontSize: 20, fontWeight: 600, letterSpacing: "-0.03em", margin: 0 }}>
							Insyd
						</Text>
					</Section>

					<Hr style={{ borderColor: colors.line, margin: "32px 0" }} />

					{/* Greeting */}
					<Heading style={{ color: colors.ink, fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.3, margin: "0 0 16px" }}>
						Hey {firstName}, we got your message.
					</Heading>

					<Text style={{ color: colors.muted, fontSize: 15, lineHeight: 1.6, margin: "0 0 32px" }}>
						Thanks for reaching out. We&apos;ll review your enquiry and get back to you within 24 hours.
					</Text>

					{/* Summary card */}
					<Section style={{ backgroundColor: colors.surface, borderRadius: 12, padding: "28px 24px", border: `1px solid ${colors.line}` }}>
						<Text style={{ color: colors.muted, fontSize: 11, fontFamily: fonts.mono, textTransform: "uppercase" as const, letterSpacing: "0.08em", margin: "0 0 16px" }}>
							Your enquiry
						</Text>

						<Section style={{ marginBottom: 16 }}>
							<Text style={{ color: colors.muted, fontSize: 12, fontFamily: fonts.mono, margin: "0 0 4px" }}>Services</Text>
							<Text style={{ color: colors.ink, fontSize: 15, margin: 0 }}>{services}</Text>
						</Section>

						<Section style={{ marginBottom: 16 }}>
							<Text style={{ color: colors.muted, fontSize: 12, fontFamily: fonts.mono, margin: "0 0 4px" }}>Budget</Text>
							<Text style={{ color: colors.ink, fontSize: 15, margin: 0 }}>{budget}</Text>
						</Section>

						<Section>
							<Text style={{ color: colors.muted, fontSize: 12, fontFamily: fonts.mono, margin: "0 0 4px" }}>Project</Text>
							<Text style={{ color: colors.ink, fontSize: 15, margin: 0, lineHeight: 1.5 }}>{about}</Text>
						</Section>
					</Section>

					<Hr style={{ borderColor: colors.line, margin: "32px 0" }} />

					{/* Sign off */}
					<Text style={{ color: colors.ink, fontSize: 15, lineHeight: 1.6, margin: "0 0 4px" }}>
						Talk soon,
					</Text>
					<Text style={{ color: colors.ink, fontSize: 15, fontWeight: 500, margin: "0 0 24px" }}>
						Ishan
					</Text>

					{/* Footer */}
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
