import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";

const display = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-display" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["italic", "normal"], variable: "--font-serif" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

const title = "Insyd: an independent product studio";
const description =
  "Insyd designs, builds and launches software: thumb MCP, InsyDE and Studio. Native apps, AI agents, developer tools and launch films.";

export const metadata: Metadata = {
  metadataBase: new URL("https://insyd.in"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "https://insyd.in", siteName: "Insyd", title, description, images: ["/work/ide-app.jpg"] },
  twitter: { card: "summary_large_image", title, description, images: ["/work/ide-app.jpg"] },
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
    <html lang="en" data-theme="dark" className={`${display.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
