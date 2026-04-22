import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import TweaksPanel from "@/components/TweaksPanel";

export const metadata: Metadata = {
	title: "Insyd — Design-led digital products",
	description:
		"Insyd is a design-led studio building the next generation of digital products. Strategy, design, and engineering in one place.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){try{var t=localStorage.getItem("insyd-theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
					}}
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Fraunces:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@400;500&family=Cormorant+Garamond:wght@400;500&family=Geist:wght@400;500;600&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<div className="noise" />
				{children}
				<CustomCursor />
				<TweaksPanel />
			</body>
		</html>
	);
}
