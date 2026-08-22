import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
	title: "Terms & Conditions — Insyd",
	description:
		"The terms that govern your use of insyd.in and the Insyd family of applications, including the end user licence agreement, subscription terms and community standards.",
};

const UPDATED = "22 August 2026";
const CONTACT = "ishan@insyd.in";

export default function TermsPage() {
	return (
		<>
			<Header page="terms-and-conditions" />
			<main>
				<section
					className="section"
					style={{ paddingTop: 160, paddingBottom: 40 }}
				>
					<div className="container">
						<div className="mono" style={{ marginBottom: 24 }}>
							(T) Legal — Terms
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
							Terms{" "}
							<span style={{ fontStyle: "italic" }}>&amp;</span>
							<br />
							Conditions
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
							These terms are the agreement between you and Insyd covering our
							website and every app we publish. They also serve as the end user
							licence agreement for our applications.
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
							<h2 className="display">1. Agreement to these terms</h2>
							<p>
								These Terms &amp; Conditions (the &ldquo;Terms&rdquo;) form a
								binding agreement between you and <strong>Insyd</strong>{" "}
								(&ldquo;Insyd&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a
								design and engineering studio based in India. They govern your
								access to and use of:
							</p>
							<ul>
								<li>
									our website at <strong>insyd.in</strong>; and
								</li>
								<li>
									each <strong>application we publish</strong> under the Insyd
									name on the Apple App Store, Google Play and other
									distribution platforms (each, an &ldquo;App&rdquo;).
								</li>
							</ul>
							<p>
								Together these are the &ldquo;Services&rdquo;.{" "}
								<strong>
									By downloading, installing, accessing or using any of the
									Services, you accept these Terms.
								</strong>{" "}
								If you do not agree, do not use the Services. An individual App
								may publish supplementary terms; where they conflict, the
								App-specific terms govern for that App. Our{" "}
								<Link href="/privacy-policy">Privacy Policy</Link> is incorporated into
								these Terms by reference.
							</p>

							<h2 className="display">2. Eligibility</h2>
							<p>
								You must be at least <strong>13 years old</strong>, or the
								higher minimum age stated in an App&apos;s store listing or
								required by the law of your country, and you must be legally
								capable of entering into a binding contract. If you are under
								the age of majority where you live, you may use the Services
								only with the involvement and consent of a parent or guardian,
								who accepts these Terms on your behalf. You may not use the
								Services if you are barred from doing so under applicable law or
								if we have previously terminated your account.
							</p>

							<h2 className="display">3. Licence to use the Apps</h2>
							<p>
								Subject to your compliance with these Terms, Insyd grants you a{" "}
								<strong>
									limited, non-exclusive, non-transferable, non-sublicensable,
									revocable licence
								</strong>{" "}
								to download and use one copy of each App on a device that you
								own or control, solely for your personal, non-commercial use
								(or, where an App is sold for business use, for your internal
								business use). Where the App is obtained from the Apple App
								Store, this licence is further limited to use on Apple-branded
								devices you own or control, as permitted by the Usage Rules in
								the Apple Media Services Terms of Service, including the Family
								Sharing provisions of those rules.
							</p>
							<p>
								This is a licence, <strong>not a sale</strong>. Insyd and its
								licensors retain all right, title and interest in and to the
								Services, including all software, source code, designs,
								interfaces, text, graphics, logos and trade marks. You are
								granted no rights other than those expressly stated here.
							</p>

							<h2 className="display">4. Your account</h2>
							<p>
								Some Services require an account. You agree to provide accurate
								and current information, to keep your sign-in credentials
								confidential, and to be responsible for all activity that occurs
								under your account. You must notify us at{" "}
								<a href={`mailto:${CONTACT}`}>{CONTACT}</a> immediately if you
								suspect unauthorised access. You may not create an account for
								anyone else, impersonate any person or entity, share your
								account, or maintain more than one account to evade a
								restriction.
							</p>

							<h2 className="display">5. Your content</h2>
							<p>
								<strong>You retain ownership of the content you submit</strong>{" "}
								to the Services — photos, video, audio, text, files and anything
								else you create or upload (&ldquo;User Content&rdquo;).
							</p>
							<p>
								You grant Insyd a worldwide, non-exclusive, royalty-free,
								sublicensable licence to host, store, reproduce, transmit,
								adapt, reformat and display your User Content{" "}
								<strong>solely to the extent necessary to operate</strong>,
								provide, secure and improve the Services — for example, to store
								your files, generate thumbnails, sync across your devices, and
								display your content to the people you have shared it with.
								This licence ends when you delete the content or your account,
								except for content others have already shared or copies retained
								in routine backups pending deletion.{" "}
								<strong>
									We do not use your User Content for advertising, and we do not
									use it to train machine learning models without your separate
									opt-in consent.
								</strong>
							</p>
							<p>
								You represent that you own or have all necessary rights to your
								User Content, and that it does not infringe any third party&apos;s
								rights or violate any law. You are solely responsible for your
								User Content and for backing it up.
							</p>

							<h2 className="display">
								6. Community standards and objectionable content
							</h2>
							<p>
								Insyd operates a{" "}
								<strong>
									zero-tolerance policy for objectionable content and abusive
									behaviour
								</strong>
								. You agree not to submit, transmit or share content, and not to
								behave in a manner, that:
							</p>
							<ul>
								<li>
									harasses, threatens, bullies, stalks, defames or incites
									hatred or violence against any person or group;
								</li>
								<li>
									is sexually explicit, pornographic or obscene, or that
									sexualises, exploits or endangers a minor in any way;
								</li>
								<li>
									depicts or promotes graphic violence, self-harm, terrorism, or
									illegal drugs, weapons or goods;
								</li>
								<li>
									is fraudulent, deceptive, impersonating, spam, a scam, a
									pyramid scheme or an unsolicited commercial solicitation;
								</li>
								<li>
									infringes any copyright, trade mark, trade secret, privacy,
									publicity or other right; or
								</li>
								<li>
									contains malware, or is designed to disrupt or compromise any
									system or user.
								</li>
							</ul>
							<p>
								<strong>Reporting and moderation.</strong> Apps that host
								user-generated content provide in-app mechanisms to{" "}
								<strong>report</strong> objectionable content and to{" "}
								<strong>block</strong> abusive users. You may also report to{" "}
								<a href={`mailto:${CONTACT}`}>{CONTACT}</a>. We review every
								report and, where content or conduct violates these Terms,{" "}
								<strong>
									remove the content and eject the offending user within 24
									hours
								</strong>{" "}
								of the report. We may also suspend or terminate accounts,
								restrict features, and report unlawful conduct to law
								enforcement. We are not obliged to monitor content proactively,
								but we may do so at our discretion.
							</p>

							<h2 className="display">7. Acceptable use</h2>
							<p>You agree not to:</p>
							<ul>
								<li>
									reverse engineer, decompile, disassemble or attempt to derive
									the source code of the Services, except to the extent this
									restriction is prohibited by applicable law;
								</li>
								<li>
									copy, modify, distribute, sell, rent, lease, sublicense or
									create derivative works from the Services;
								</li>
								<li>
									scrape, crawl, harvest or bulk-download data from the
									Services, or use automated means to access them, without our
									written permission;
								</li>
								<li>
									circumvent, disable or interfere with security, rate limits,
									authentication or paywalls;
								</li>
								<li>
									probe, scan, overload, or disrupt the Services or the
									infrastructure they run on;
								</li>
								<li>
									use the Services to build a competing product or service; or
								</li>
								<li>
									use the Services in violation of any applicable law, export
									control, or sanctions regime.
								</li>
							</ul>

							<h2 className="display">
								8. Purchases, subscriptions and auto-renewal
							</h2>
							<p>
								Some Services offer paid features, one-time purchases or
								auto-renewing subscriptions. Where you purchase through an app
								store, the following applies:
							</p>
							<ul>
								<li>
									<strong>Payment</strong> is charged to your Apple ID or Google
									Play account at confirmation of purchase, at the price and
									billing period disclosed at the point of sale.
								</li>
								<li>
									<strong>Auto-renewal.</strong> Subscriptions renew
									automatically at the end of each period unless auto-renew is
									turned off <strong>at least 24 hours before</strong> the
									period ends. Your account is charged for renewal within the 24
									hours before the current period ends.
								</li>
								<li>
									<strong>Managing and cancelling.</strong> You can manage or
									cancel a subscription at any time in your app store account
									settings — for Apple, <strong>Settings → Apple Account →
									Subscriptions</strong>. Deleting the App does not cancel a
									subscription.
								</li>
								<li>
									<strong>Free trials.</strong> Where a free trial is offered,
									any unused portion is forfeited when you purchase a
									subscription to that content, as required by the app
									store&apos;s rules.
								</li>
								<li>
									<strong>Refunds</strong> for app store purchases are handled
									by Apple or Google under their own policies, not by Insyd.
									Except where required by law, fees are non-refundable.
								</li>
								<li>
									<strong>Price changes.</strong> We may change prices
									prospectively. Where a change affects an active subscription,
									we will give notice as required by the app store and
									applicable law, and it takes effect only from your next
									renewal.
								</li>
							</ul>
							<p>
								You are responsible for any taxes, and for charges from your
								mobile network or internet provider incurred in using the
								Services.
							</p>

							<h2 className="display">9. Availability and changes</h2>
							<p>
								We may add, modify, suspend or discontinue any part of the
								Services at any time, with reasonable notice where a change
								materially and adversely affects paid features. The Services may
								be unavailable during maintenance or because of factors outside
								our control. We do not guarantee uninterrupted or error-free
								operation.
							</p>

							<h2 className="display">10. Third-party services</h2>
							<p>
								The Services may interoperate with or link to third-party
								products, platforms and content that we do not control. Your use
								of those is governed by their own terms, and Insyd is not
								responsible or liable for them. Access to third-party material
								through the Services is provided as a convenience only.
							</p>

							<h2 className="display">11. Intellectual property and feedback</h2>
							<p>
								The Insyd name, logo, and the design, code and content of the
								Services are owned by Insyd and protected by intellectual
								property law. Work shown in our portfolio may belong to our
								clients and is displayed with permission. If you send us
								suggestions or feedback, you grant us a perpetual, irrevocable,
								royalty-free right to use it without obligation or compensation
								to you.
							</p>

							<h2 className="display">
								12. Copyright complaints
							</h2>
							<p>
								If you believe content on the Services infringes your copyright,
								email <a href={`mailto:${CONTACT}`}>{CONTACT}</a> with:
								identification of the work, the location of the infringing
								material, your contact details, a statement of good-faith belief
								that the use is unauthorised, a statement that your notice is
								accurate, and your physical or electronic signature. We remove
								infringing material promptly and terminate the accounts of
								repeat infringers.
							</p>

							<h2 className="display">13. Termination</h2>
							<p>
								You may stop using the Services and delete your account at any
								time, normally from{" "}
								<strong>Settings → Account → Delete Account</strong> in the App,
								or by emailing <a href={`mailto:${CONTACT}`}>{CONTACT}</a>. We
								may suspend or terminate your access, with or without notice, if
								you breach these Terms, if your conduct risks harm to other
								users or to Insyd, or if we are required to do so by law. On
								termination, your licence ends immediately, and Sections 5, 11
								and 14 through 18 survive.
							</p>

							<h2 className="display">14. Disclaimers</h2>
							<p>
								To the maximum extent permitted by law, the Services are
								provided <strong>&ldquo;as is&rdquo;</strong> and{" "}
								<strong>&ldquo;as available&rdquo;</strong>, without warranties
								of any kind, whether express, implied or statutory, including
								the implied warranties of merchantability, fitness for a
								particular purpose, title, accuracy and non-infringement. We do
								not warrant that the Services will meet your requirements, be
								uninterrupted, secure or error-free, or that data will not be
								lost. Nothing in these Terms excludes any warranty or right that
								cannot lawfully be excluded — some jurisdictions do not allow
								certain exclusions, so parts of this section may not apply to
								you.
							</p>

							<h2 className="display">15. Limitation of liability</h2>
							<p>
								To the maximum extent permitted by law, Insyd and its directors,
								employees and suppliers will not be liable for any indirect,
								incidental, special, consequential, exemplary or punitive
								damages, or for any loss of profits, revenue, goodwill, data or
								business opportunity, arising out of or relating to the
								Services, whether based in contract, tort, negligence, strict
								liability or otherwise, even if advised of the possibility of
								such damages.
							</p>
							<p>
								Our total aggregate liability arising out of or relating to the
								Services is limited to the{" "}
								<strong>
									greater of (a) the amount you paid Insyd for the relevant
									Service in the 12 months before the event giving rise to the
									claim, or (b) INR 5,000
								</strong>
								. These limits do not apply to liability for death or personal
								injury caused by negligence, for fraud or fraudulent
								misrepresentation, or to any other liability that cannot be
								limited under applicable law.
							</p>

							<h2 className="display">16. Indemnity</h2>
							<p>
								You agree to indemnify and hold harmless Insyd and its
								personnel from any claim, demand, loss or expense (including
								reasonable legal fees) arising out of your User Content, your
								use of the Services, or your breach of these Terms or of any law
								or third-party right.
							</p>

							<h2 className="display">
								17. Apple App Store — additional terms
							</h2>
							<p>
								Where you obtain an App from the Apple App Store, the following
								additional terms apply and prevail over any conflicting
								provision above:
							</p>
							<ul>
								<li>
									These Terms are between <strong>you and Insyd only</strong>,
									not with Apple. Insyd, not Apple, is solely responsible for
									the App and its content.
								</li>
								<li>
									Apple has <strong>no obligation to provide maintenance or
									support</strong> for the App.
								</li>
								<li>
									If the App fails to conform to any applicable warranty, you
									may notify Apple and Apple will refund the purchase price;
									to the maximum extent permitted by law, Apple has{" "}
									<strong>no other warranty obligation</strong> whatsoever with
									respect to the App.
								</li>
								<li>
									Apple is <strong>not responsible</strong> for addressing any
									claim by you or a third party relating to the App, including
									product liability claims, claims that the App fails to conform
									to a legal or regulatory requirement, and claims arising under
									consumer protection, privacy or similar legislation.
								</li>
								<li>
									If a third party claims the App or your use of it infringes
									their intellectual property, <strong>Insyd</strong>, not
									Apple, is solely responsible for the investigation, defence,
									settlement and discharge of that claim.
								</li>
								<li>
									You represent that you are{" "}
									<strong>
										not located in a country subject to a US Government embargo
									</strong>{" "}
									or designated as a &ldquo;terrorist supporting&rdquo; country,
									and that you are not on any US Government list of prohibited
									or restricted parties.
								</li>
								<li>
									Apple and its subsidiaries are{" "}
									<strong>third-party beneficiaries</strong> of these Terms and,
									upon your acceptance, will have the right to enforce them
									against you.
								</li>
								<li>
									You must comply with any applicable third-party terms when
									using the App.
								</li>
							</ul>

							<h2 className="display">18. Governing law and disputes</h2>
							<p>
								These Terms are governed by the laws of{" "}
								<strong>India</strong>, without regard to conflict-of-law rules.
								Subject to the paragraph below, the courts at{" "}
								<strong>
									Gautam Buddh Nagar (Noida), Uttar Pradesh, India
								</strong>{" "}
								have exclusive
								jurisdiction over any dispute arising out of or relating to
								these Terms or the Services.
							</p>
							<p>
								If you are a consumer resident in the European Economic Area,
								the United Kingdom, or another jurisdiction whose law grants you
								the right to bring proceedings in your local courts and to the
								protection of mandatory consumer provisions, nothing in this
								section deprives you of those rights.
							</p>
							<p>
								Before filing a claim, please contact us at{" "}
								<a href={`mailto:${CONTACT}`}>{CONTACT}</a> — most issues are
								resolved informally within 30 days.
							</p>

							<h2 className="display">19. General</h2>
							<p>
								These Terms, together with the{" "}
								<Link href="/privacy-policy">Privacy Policy</Link> and any App-specific
								terms, are the entire agreement between you and Insyd regarding
								the Services. If any provision is held unenforceable, the rest
								remains in effect and the unenforceable provision is modified to
								the minimum extent necessary. Our failure to enforce a provision
								is not a waiver of it. You may not assign these Terms; we may
								assign them in connection with a merger, acquisition or sale of
								assets. There are no third-party beneficiaries other than Apple
								as stated in Section 17.
							</p>

							<h2 className="display">20. Changes to these terms</h2>
							<p>
								We may update these Terms from time to time. We will update the
								&ldquo;Last updated&rdquo; date above and, for material changes,
								provide notice in the affected App or by email before they take
								effect. Continued use of the Services after that date means you
								accept the updated Terms. If you do not accept them, stop using
								the Services and delete your account.
							</p>

							<h2 className="display">21. Contact</h2>
							<p>
								Questions about these Terms? Email{" "}
								<a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
							</p>

							<hr />

							<p>
								See also our <Link href="/privacy-policy">Privacy Policy</Link>.
							</p>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
