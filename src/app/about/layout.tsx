import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Aryan Kumar — a full-stack developer focused on clarity, performance, and attention to detail. Designing and engineering web & mobile applications.",
  keywords: [
    "About Aryan Kumar",
    "Full-stack developer",
    "Web developer bio",
    "React developer India",
    "Mobile app developer",
  ],
  openGraph: {
    title: "About — Aryan Kumar",
    description:
      "Full-stack developer designing and engineering reliable web & mobile applications.",
    url: "/about",
    type: "profile",
  },
  twitter: {
    title: "About — Aryan Kumar",
    description:
      "Full-stack developer designing and engineering reliable web & mobile applications.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
