import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
	title: "Circle — Privacy Policy & Terms",
	description:
		"Privacy Policy, Terms of Use and safety information for the Circle app.",
	robots: { index: false, follow: false },
};

const UPDATED = "8 July 2026";
const CONTACT = "ishan@insyd.in";

export default function CircleLegalPage() {
	return (
		<>
			<Header page="circle" />
			<main>
				<section
					className="section"
					style={{ paddingTop: 160, paddingBottom: 40 }}
				>
					<div className="container">
						<div className="mono" style={{ marginBottom: 24 }}>
							(C) Circle — Legal &amp; Privacy
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
							Privacy Policy
							<br />
							<span style={{ fontStyle: "italic" }}>&amp;</span> Terms of Use
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
							Circle is a make-friends app — you see one profile at a time,
							connect over shared interests, and start talking once you both say
							hi. This page explains what we collect, how we use it, and the
							rules for using Circle.
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
							{/* ─────────────  PRIVACY POLICY  ───────────── */}
							<h2 className="display">Privacy Policy</h2>

							<p>
								Circle (&ldquo;Circle&rdquo;, &ldquo;we&rdquo;,
								&ldquo;us&rdquo;) is operated by Insyd. This policy describes
								the information we collect through the Circle mobile app, how we
								use and share it, and the choices you have. By creating an
								account you agree to this policy.
							</p>

							<h3>Information you give us</h3>
							<ul>
								<li>
									<strong>Profile details:</strong> your first name, date of
									birth (we use this to calculate and display your age — your
									date of birth is never shown to other members), pronouns, the
									city you&apos;re based in, what you do, a short bio, your
									answers to prompts, your selected interests, and the photos
									you upload.
								</li>
								<li>
									<strong>Account &amp; sign-in:</strong> your email address
									(for email one-time-code sign-in), or the identifier provided
									when you choose <strong>Sign in with Apple</strong> or{" "}
									<strong>Continue with Google</strong>.
								</li>
								<li>
									<strong>Activity:</strong> the profiles you like or pass, your
									matches, and the messages you send to your matches.
								</li>
							</ul>

							<h3>Information collected automatically</h3>
							<ul>
								<li>
									<strong>Approximate location:</strong> only when you use the
									location picker or tap &ldquo;Detect my location&rdquo; during
									onboarding, we access your device&apos;s approximate location
									to set the city on your profile. Circle does{" "}
									<strong>not</strong> track your location in the background.
								</li>
								<li>
									<strong>Push notification token:</strong> if you enable
									notifications, we store a push token so we can notify you
									about new likes, matches and messages.
								</li>
							</ul>

							<h3>How we use your information</h3>
							<ul>
								<li>To create your profile and show it to other members.</li>
								<li>
									To suggest people you may want to meet, ranked by shared
									interests.
								</li>
								<li>To enable liking, matching and messaging.</li>
								<li>
									To send notifications about likes, matches and messages (you
									can turn these off).
								</li>
								<li>
									To keep Circle safe and secure and to enforce our Terms of
									Use.
								</li>
							</ul>

							<h3>How your information is shared</h3>
							<ul>
								<li>
									<strong>With other members:</strong> your profile (name, age,
									city, occupation, bio, prompts, interests and photos) is
									visible to other members, and your messages are shared with
									the people you match with. Your email, date of birth and exact
									location are never shown.
								</li>
								<li>
									<strong>With service providers</strong> who help us run
									Circle: <strong>Supabase</strong> (database, authentication,
									photo storage and realtime messaging), <strong>Expo</strong>{" "}
									(push notification delivery), <strong>Apple</strong> (Sign in
									with Apple, push delivery via APNs, and converting map
									coordinates into a city name on iOS), <strong>Google</strong>{" "}
									(Sign in with Google), and{" "}
									<strong>OpenStreetMap / Nominatim</strong> (place search in
									the location picker). These providers process data only to
									provide their service to us.
								</li>
								<li>
									<strong>Legal:</strong> we may disclose information if
									required by law or to protect the rights, safety and property
									of Circle, our members or the public.
								</li>
							</ul>
							<p>
								<strong>We do not sell your personal data</strong>, and we do
								not use it for third-party advertising.
							</p>

							<h3>Photos</h3>
							<p>
								Photos you add are stored securely on our infrastructure
								(Supabase Storage) and are shown to other members as part of
								your profile. Removing a photo in the app deletes it from your
								profile.
							</p>

							<h3>Data retention &amp; deletion</h3>
							<p>
								You can edit your profile at any time in the app. You can{" "}
								<strong>delete your account</strong> from{" "}
								<strong>Profile → Delete Account</strong>, which permanently
								clears your profile, photos, prompts and interests. You may also
								request deletion by emailing us at{" "}
								<a href={`mailto:${CONTACT}`}>{CONTACT}</a>. We retain
								information only as long as needed to provide the service or as
								required by law.
							</p>

							<h3>Security &amp; where your data is stored</h3>
							<p>
								Data is encrypted in transit, access is protected by
								authentication and row-level security, and only you can modify
								your own data. Your information is stored on our provider&apos;s
								cloud infrastructure, which may be located outside your country;
								by using Circle you consent to this. No system is perfectly
								secure, but we work to protect your information.
							</p>

							<h3>Children</h3>
							<p>
								Circle is not directed to children. You must be at least{" "}
								<strong>13 years old</strong> to use Circle. If we learn that we
								have collected information from a child under 13, we will delete
								it.
							</p>

							<h3>Your rights</h3>
							<p>
								You can access and correct your information by editing your
								profile, and delete it by deleting your account. To exercise any
								privacy right, contact us at{" "}
								<a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
							</p>

							<h3>Changes to this policy</h3>
							<p>
								We may update this policy from time to time. Material changes
								will be reflected by updating the &ldquo;Last updated&rdquo;
								date at the top of this page.
							</p>

							<hr />

							{/* ─────────────  TERMS OF USE  ───────────── */}
							<h2 className="display">Terms of Use</h2>

							<p>
								These Terms of Use (the &ldquo;Terms&rdquo;) are a legal
								agreement between you and Insyd governing your use of the Circle
								app. By using Circle you agree to these Terms. If you do not
								agree, do not use Circle.
							</p>

							<h3>1. Eligibility</h3>
							<p>
								You must be at least 13 years old and legally able to enter into
								this agreement. You are responsible for the accuracy of the
								information on your profile.
							</p>

							<h3>2. Your account</h3>
							<p>
								You are responsible for activity on your account and for keeping
								your sign-in method secure. You may not impersonate anyone,
								create an account for someone else, or use another member&apos;s
								account.
							</p>

							<h3>3. Your content</h3>
							<p>
								You keep ownership of the photos and text you add to Circle. By
								posting content you grant us a limited, non-exclusive licence to
								host and display it within Circle so the app can function (for
								example, showing your profile to other members). You are
								responsible for the content you post and confirm you have the
								right to share it.
							</p>

							<h3>4. Objectionable content &amp; community standards</h3>
							<p>
								Circle has{" "}
								<strong>
									zero tolerance for objectionable content or abusive behaviour
								</strong>
								. You agree not to post, send or share content that is:
							</p>
							<ul>
								<li>harassing, threatening, hateful or bullying;</li>
								<li>
									sexually explicit, nude, or otherwise obscene, or that
									sexualises minors;
								</li>
								<li>violent, illegal, or that promotes illegal activity;</li>
								<li>
									false, impersonating, spam, or a solicitation, scam or
									commercial pitch;
								</li>
								<li>
									infringing on someone else&apos;s intellectual property or
									privacy.
								</li>
							</ul>
							<p>
								You may <strong>unmatch</strong> anyone at any time to stop
								communicating with them. To report objectionable content or an
								abusive member, email{" "}
								<a href={`mailto:${CONTACT}`}>{CONTACT}</a> with details. We
								review reports and will remove content and/or remove the
								offending member&apos;s access, typically{" "}
								<strong>within 24 hours</strong>.
							</p>

							<h3>5. Acceptable use</h3>
							<p>
								You agree not to misuse Circle, including by scraping or
								harvesting data, reverse-engineering the app, interfering with
								its operation or security, or using it for any unlawful purpose.
							</p>

							<h3>6. Safety</h3>
							<p>
								Circle helps you meet new people, but we do not conduct
								background checks and are not responsible for the conduct of any
								member. Use good judgement, meet in public places, and
								don&apos;t share sensitive personal or financial information.
							</p>

							<h3>7. Termination</h3>
							<p>
								You may stop using Circle and delete your account at any time.
								We may suspend or terminate your access if you violate these
								Terms or to protect Circle and its members.
							</p>

							<h3>8. Disclaimers &amp; limitation of liability</h3>
							<p>
								Circle is provided &ldquo;as is&rdquo; without warranties of any
								kind. To the fullest extent permitted by law, Insyd is not
								liable for any indirect, incidental or consequential damages
								arising from your use of Circle.
							</p>

							<h3>9. Changes to these Terms</h3>
							<p>
								We may update these Terms from time to time. Continued use of
								Circle after changes take effect means you accept the updated
								Terms.
							</p>

							<h3>10. Governing law</h3>
							<p>
								These Terms are governed by the laws of India, without regard to
								conflict-of-law rules.
							</p>

							<h3>11. Contact</h3>
							<p>
								Questions about this policy or these Terms? Email us at{" "}
								<a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
							</p>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
