import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
	title: "Privacy Policy — Insyd",
	description:
		"How Insyd collects, uses, shares and protects personal information across insyd.in and the Insyd family of mobile applications.",
};

const UPDATED = "22 August 2026";
const CONTACT = "ishan@insyd.in";

export default function PrivacyPage() {
	return (
		<>
			<Header page="privacy" />
			<main>
				<section
					className="section"
					style={{ paddingTop: 160, paddingBottom: 40 }}
				>
					<div className="container">
						<div className="mono" style={{ marginBottom: 24 }}>
							(P) Legal — Privacy
						</div>
						<h1
							className="display"
							style={{
								fontSize: "clamp(44px, 7vw, 104px)",
								margin: 0,
								letterSpacing: "-0.03em",
								lineHeight: 0.98,
							}}
						>
							Privacy
							<br />
							<span style={{ fontStyle: "italic" }}>Policy</span>
						</h1>
						<p
							style={{
								fontSize: 20,
								maxWidth: 640,
								marginTop: 40,
								color: "var(--ink-2)",
								textWrap: "pretty" as const,
							}}
						>
							This policy explains what personal information Insyd collects,
							why we collect it, who we share it with, and the controls you
							have over it — across our website and every app we publish.
						</p>
						<div className="legal__updated">Last updated: {UPDATED}</div>
					</div>
				</section>

				<section
					className="section"
					style={{ paddingTop: 0, paddingBottom: 120 }}
				>
					<div className="container">
						<div className="legal">
							<h2 className="display">1. Who we are and what this covers</h2>
							<p>
								Insyd (&ldquo;Insyd&rdquo;, &ldquo;we&rdquo;,
								&ldquo;us&rdquo;, &ldquo;our&rdquo;) is a design and engineering
								studio based in India. This Privacy Policy applies to:
							</p>
							<ul>
								<li>
									our website at <strong>insyd.in</strong>, including the
									contact and call-booking forms;
								</li>
								<li>
									the <strong>mobile and desktop applications we publish</strong>{" "}
									under the Insyd name on the Apple App Store and other app
									stores (each, an &ldquo;App&rdquo;); and
								</li>
								<li>
									any related support, email and communication channels we
									operate.
								</li>
							</ul>
							<p>
								Together these are the &ldquo;Services&rdquo;. For the purposes
								of the EU/UK General Data Protection Regulation and India&apos;s
								Digital Personal Data Protection Act, 2023, Insyd is the{" "}
								<strong>data controller</strong> (Data Fiduciary) for personal
								information processed through the Services.
							</p>
							<p>
								Individual Apps may publish a supplementary privacy notice that
								describes data practices unique to that App. Where a
								supplementary notice conflicts with this policy, the
								App-specific notice governs for that App. Your use of the
								Services is also subject to our{" "}
								<Link href="/terms">Terms &amp; Conditions</Link>.
							</p>

							<h2 className="display">2. Information we collect</h2>

							<h3>2.1 Information you give us</h3>
							<ul>
								<li>
									<strong>Account information.</strong> When you create an
									account in an App, we collect your name, email address, and
									the authentication identifier associated with your chosen
									sign-in method (for example email one-time codes, Sign in with
									Apple, or Google Sign-In). We may also collect optional
									profile details such as a username, avatar, pronouns, date of
									birth or location where an App&apos;s functionality requires
									it.
								</li>
								<li>
									<strong>User content.</strong> Content you create, upload or
									submit through an App — including photos, videos, audio, text
									posts, comments, messages, documents and files — together with
									any metadata you choose to attach to it.
								</li>
								<li>
									<strong>Enquiries and bookings.</strong> When you use the
									contact or call-booking form on insyd.in, we collect your
									name, email address, company name (optional), the services you
									are interested in, your indicated budget range, your project
									description, and your selected call date and time.
								</li>
								<li>
									<strong>Support correspondence.</strong> The contents of
									emails and support messages you send us, and our replies.
								</li>
							</ul>

							<h3>2.2 Information collected automatically</h3>
							<ul>
								<li>
									<strong>Usage and analytics data.</strong> How you interact
									with the Services — screens and pages viewed, features used,
									session length, referring page, and approximate coarse
									location derived from your IP address (city or region level,
									not precise GPS).
								</li>
								<li>
									<strong>Device and diagnostic data.</strong> Device model,
									operating system and version, app version, language and
									region settings, and crash reports containing stack traces and
									the device state at the time of a crash.
								</li>
								<li>
									<strong>Identifiers.</strong> A randomly generated
									installation or device identifier used to associate analytics
									and crash events with a single installation. We do not use
									Apple&apos;s Advertising Identifier (IDFA) and we do not
									request App Tracking Transparency permission, because we do
									not track you across apps or websites owned by other
									companies.
								</li>
								<li>
									<strong>Push notification tokens.</strong> If you enable
									notifications, we store the token your device&apos;s push
									service issues so we can deliver notifications to you.
								</li>
								<li>
									<strong>Server logs.</strong> IP address, request timestamps,
									and requested URLs, retained for security, abuse prevention
									and debugging.
								</li>
							</ul>

							<h3>2.3 Purchases and subscriptions</h3>
							<p>
								Where an App offers in-app purchases or subscriptions, the
								payment itself is processed by the platform operator —{" "}
								<strong>Apple</strong> for the App Store, or{" "}
								<strong>Google</strong> for Google Play. We never receive or
								store your full card number, CVV, or bank details. We receive
								only a transaction receipt, product identifier, purchase and
								renewal dates, and subscription status, which we use to unlock
								and maintain your entitlements. Where an App accepts payment
								outside an app store, payment is handled by a PCI-DSS compliant
								processor and we receive only the transaction reference, the
								last four digits of the card, and the payment status.
							</p>

							<h3>2.4 Information we do not collect</h3>
							<p>
								We do not knowingly collect government identification numbers,
								precise background location, health or biometric data, or
								special category data, unless an App explicitly requests it,
								explains why, and obtains your consent first.
							</p>

							<h2 className="display">3. Why we use your information</h2>
							<p>
								We process personal information only where we have a lawful
								basis to do so. The table below sets out each purpose and the
								corresponding basis under GDPR; under the DPDP Act we rely on
								your consent or on legitimate uses as defined in that Act.
							</p>
							<ul>
								<li>
									<strong>To provide the Services</strong> — create and
									authenticate your account, store and display your content,
									deliver core App functionality, and process your enquiry or
									booking. <em>Basis: performance of a contract.</em>
								</li>
								<li>
									<strong>To communicate with you</strong> — send transactional
									emails such as booking confirmations, account notices, and
									replies to your enquiries.{" "}
									<em>Basis: performance of a contract; legitimate interests.</em>
								</li>
								<li>
									<strong>To send push notifications</strong> about activity
									relevant to you. <em>Basis: consent, which you may withdraw
									at any time in your device settings.</em>
								</li>
								<li>
									<strong>To improve and debug the Services</strong> — analyse
									aggregate usage, diagnose crashes, and measure the performance
									of features. <em>Basis: legitimate interests; consent where
									required by local law.</em>
								</li>
								<li>
									<strong>To process payments and manage entitlements</strong> —
									validate receipts and maintain subscription status.{" "}
									<em>Basis: performance of a contract.</em>
								</li>
								<li>
									<strong>To keep the Services safe</strong> — detect and
									prevent fraud, abuse, spam and security incidents, and enforce
									our Terms. <em>Basis: legitimate interests; legal
									obligation.</em>
								</li>
								<li>
									<strong>To comply with law</strong> — respond to lawful
									requests and meet tax, accounting and regulatory obligations.{" "}
									<em>Basis: legal obligation.</em>
								</li>
							</ul>
							<p>
								<strong>
									We do not sell your personal information, we do not share it
									for cross-context behavioural advertising, and we do not use
									it to build advertising profiles.
								</strong>{" "}
								We do not use your content to train machine learning models
								without your separate, explicit, opt-in consent.
							</p>

							<h2 className="display">4. How your information is shared</h2>
							<p>
								We share personal information only in the circumstances
								described below.
							</p>
							<ul>
								<li>
									<strong>With other users.</strong> In Apps with social or
									collaborative features, the profile details and content you
									choose to make visible are shown to other users as described
									in that App. Your email address, date of birth and precise
									location are never displayed to other users unless you
									explicitly publish them.
								</li>
								<li>
									<strong>With service providers (processors)</strong> who
									operate infrastructure on our behalf under written contracts
									that restrict them to processing data only on our
									instructions. These include cloud hosting and database
									providers, authentication and file storage providers, email
									delivery providers (we use <strong>Resend</strong> for
									transactional email from insyd.in), push notification
									delivery services, and analytics and crash reporting
									providers.
								</li>
								<li>
									<strong>With platform operators.</strong> Apple and Google
									process purchases, subscriptions and app-store account
									functions in accordance with their own privacy policies.
								</li>
								<li>
									<strong>For legal reasons.</strong> Where we believe in good
									faith that disclosure is required by applicable law, legal
									process or an enforceable governmental request, or is
									necessary to protect the rights, property or safety of Insyd,
									our users, or the public.
								</li>
								<li>
									<strong>In a business transfer.</strong> If Insyd is involved
									in a merger, acquisition, financing or sale of assets, your
									information may be transferred as part of that transaction. We
									will notify you before your information becomes subject to a
									materially different privacy policy.
								</li>
							</ul>

							<h2 className="display">5. International transfers</h2>
							<p>
								Insyd operates from India and our service providers may store
								and process data in the United States, the European Union and
								other countries. Where we transfer personal information out of
								the EEA, the UK or another jurisdiction with transfer
								restrictions, we rely on appropriate safeguards — typically the
								European Commission&apos;s Standard Contractual Clauses, the UK
								International Data Transfer Addendum, or an adequacy decision.
								You may request a copy of the safeguards we use by emailing{" "}
								<a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
							</p>

							<h2 className="display">6. How long we keep information</h2>
							<ul>
								<li>
									<strong>Account and content data:</strong> for as long as your
									account is active. On deletion, we remove or irreversibly
									anonymise it within <strong>30 days</strong>, except where
									retention is legally required.
								</li>
								<li>
									<strong>Enquiry and booking data:</strong> up to{" "}
									<strong>24 months</strong> from your last contact with us, so
									we can maintain continuity of the conversation.
								</li>
								<li>
									<strong>Analytics and crash data:</strong> up to{" "}
									<strong>14 months</strong>, in aggregated or pseudonymised
									form.
								</li>
								<li>
									<strong>Server and security logs:</strong> up to{" "}
									<strong>90 days</strong>.
								</li>
								<li>
									<strong>Transaction records:</strong> for the period required
									by applicable tax and accounting law, typically{" "}
									<strong>8 years</strong> in India.
								</li>
							</ul>
							<p>
								Backups are cycled on a rolling schedule and residual copies are
								purged within 90 days of deletion.
							</p>

							<h2 className="display">7. Your rights and choices</h2>

							<h3>7.1 Deleting your account</h3>
							<p>
								Every Insyd App that supports account creation provides{" "}
								<strong>in-app account deletion</strong>, normally under{" "}
								<strong>Settings → Account → Delete Account</strong>. Deleting
								your account permanently removes your profile and the content
								associated with it. You may also request deletion at any time by
								emailing <a href={`mailto:${CONTACT}`}>{CONTACT}</a> from the
								address associated with your account; we will action verified
								requests within 30 days.
							</p>

							<h3>7.2 Rights under GDPR, the DPDP Act and similar laws</h3>
							<p>
								Depending on where you live, you may have the right to: access
								the personal information we hold about you; correct inaccurate
								or incomplete information; request erasure; restrict or object
								to processing; receive your data in a portable, machine-readable
								format; withdraw consent at any time without affecting the
								lawfulness of prior processing; nominate another person to
								exercise your rights in the event of death or incapacity (DPDP
								Act); and not be subject to solely automated decision-making
								with legal or similarly significant effects — which we do not
								carry out.
							</p>
							<p>
								To exercise any of these rights, email{" "}
								<a href={`mailto:${CONTACT}`}>{CONTACT}</a>. We respond within
								30 days and will never charge you or degrade your service for
								making a request. If you are unsatisfied with our response, you
								may complain to your local supervisory authority, or in India to
								the Data Protection Board established under the DPDP Act.
							</p>

							<h3>7.3 Rights under US state privacy laws</h3>
							<p>
								If you are a resident of California, Colorado, Connecticut,
								Virginia or another US state with a comprehensive privacy law,
								you have the rights to know, access, delete, correct and port
								your personal information, and to opt out of sale, sharing and
								targeted advertising. As stated above,{" "}
								<strong>
									we do not sell or share personal information and do not
									conduct targeted advertising
								</strong>
								, so there is nothing to opt out of. We do not discriminate
								against you for exercising any right.
							</p>

							<h3>7.4 Notifications, tracking and cookies</h3>
							<p>
								You can disable push notifications at any time in your device
								settings, and analytics collection where an App offers that
								control. insyd.in uses only strictly necessary storage: a single{" "}
								<code>localStorage</code> entry (<code>insyd-theme</code>) that
								remembers your light or dark theme preference. We set{" "}
								<strong>no advertising or tracking cookies</strong>. The site
								loads fonts from Google Fonts, which receives your IP address as
								part of serving those files.
							</p>

							<h2 className="display">8. Security</h2>
							<p>
								We protect personal information with encryption in transit
								(TLS), encryption at rest for stored content, authenticated
								access with row-level authorisation so users can only reach
								their own data, least-privilege access controls for our team,
								and secrets held in managed environment configuration rather
								than source code. No method of transmission or storage is
								perfectly secure, and we cannot guarantee absolute security. If
								a personal data breach is likely to result in a risk to your
								rights, we will notify you and the relevant authorities within
								the timeframes required by applicable law — 72 hours under GDPR,
								and as prescribed under the DPDP Act.
							</p>

							<h2 className="display">9. Children&apos;s privacy</h2>
							<p>
								Our Services are not directed to children under{" "}
								<strong>13</strong> (or the higher minimum age set in an
								App&apos;s store listing or supplementary notice, and the
								minimum digital consent age in your country — 16 in parts of the
								EEA). We do not knowingly collect personal information from
								children below that age. Where the DPDP Act applies, we do not
								process the personal data of a child under 18 without verifiable
								parental consent, and we do not undertake tracking, behavioural
								monitoring or targeted advertising directed at children. If you
								believe a child has provided us information, email{" "}
								<a href={`mailto:${CONTACT}`}>{CONTACT}</a> and we will delete
								it promptly.
							</p>

							<h2 className="display">10. Third-party links and services</h2>
							<p>
								The Services may link to third-party websites, apps or
								integrations that we do not control. This policy does not apply
								to them, and we are not responsible for their content or privacy
								practices. Review their policies before providing information.
							</p>

							<h2 className="display">11. Changes to this policy</h2>
							<p>
								We may update this policy as our Services evolve or as the law
								changes. We will revise the &ldquo;Last updated&rdquo; date at
								the top of this page, and for material changes we will provide
								prominent notice in the affected App or by email before the
								change takes effect. Continued use of the Services after that
								date constitutes acceptance of the updated policy.
							</p>

							<h2 className="display">12. Contact us</h2>
							<p>
								For any privacy question, request or complaint — including to
								reach our privacy contact and grievance officer — email{" "}
								<a href={`mailto:${CONTACT}`}>{CONTACT}</a>. Please include
								enough detail for us to identify your account and the nature of
								your request. We acknowledge requests within 7 days and resolve
								them within 30 days.
							</p>

							<hr />

							<p>
								See also our <Link href="/terms">Terms &amp; Conditions</Link>.
							</p>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
