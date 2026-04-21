import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactForm from "./ContactForm";
import ContactHero from "./ContactHero";

export const metadata = {
	title: "Contact — Insyd",
};

export default function ContactPage() {
	return (
		<>
			<Header page="contact" />
			<main>
				<ContactHero />
				<section>
					<div className="container">
						<div className="contact-grid">
							<ContactForm />
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
