import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "Full archive of projects by Aryan Kumar — every shipped work across industries, technologies, and platforms.",
  keywords: [
    "Aryan Kumar archive",
    "All projects",
    "Full portfolio",
    "Case studies",
  ],
  openGraph: {
    title: "Archive — Aryan Kumar",
    description: "Full archive of shipped projects across the years.",
    url: "/archive",
    type: "website",
  },
  twitter: {
    title: "Archive — Aryan Kumar",
    description: "Full archive of shipped projects across the years.",
  },
  alternates: {
    canonical: "/archive",
  },
};

export default function ArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
