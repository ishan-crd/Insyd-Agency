import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Other projects · Insyd",
  description:
    "Software from Insyd beyond Bambai: thumb MCP, InsyDE and Studio. Native apps, AI agents, developer tools and launch films.",
  alternates: { canonical: "/other-projects" },
};

export default function OtherProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
