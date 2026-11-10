import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Big_Shoulders, Instrument_Serif, Inter_Tight, JetBrains_Mono, Tiro_Devanagari_Marathi } from "next/font/google";

const display = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-display" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["italic", "normal"], variable: "--font-serif" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });
const sign = Big_Shoulders({ subsets: ["latin"], weight: ["600", "800", "900"], variable: "--font-sign" });
const deva = Tiro_Devanagari_Marathi({ subsets: ["devanagari", "latin"], weight: "400", variable: "--font-deva" });

const title = "Bambai: an open-world game set in South Mumbai · Insyd";
const description =
  "Bambai is an open-world game set in South Mumbai, built street by street in Unreal Engine 5 by Insyd. Fly over the Fort, walk Marine Drive in the monsoon, live the city. Join the waitlist.";

export const metadata: Metadata = {
  metadataBase: new URL("https://insyd.in"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "https://insyd.in", siteName: "Insyd", title, description, images: ["/bambai/img/og.jpg"] },
  twitter: { card: "summary_large_image", title, description, images: ["/bambai/img/og.jpg"] },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: { title: "insyd." },
};

export const viewport: Viewport = { themeColor: "#0A0A0B", colorScheme: "dark" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${display.variable} ${serif.variable} ${mono.variable} ${sign.variable} ${deva.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
