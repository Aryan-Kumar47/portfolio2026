import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aryan Kumar. Let's start a project together — open for freelance and full-time opportunities.",
  keywords: [
    "Contact Aryan Kumar",
    "Hire React developer",
    "Freelance developer",
    "Full-stack developer contact",
  ],
  openGraph: {
    title: "Contact — Aryan Kumar",
    description: "Let's start a project together.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    title: "Contact — Aryan Kumar",
    description: "Let's start a project together.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
