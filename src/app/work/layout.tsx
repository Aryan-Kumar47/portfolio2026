import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Aryan Kumar — production-ready web & mobile applications across e-commerce, SaaS, and real-time experiences.",
  keywords: [
    "Aryan Kumar projects",
    "Web development portfolio",
    "Mobile app projects",
    "React projects",
    "Next.js projects",
  ],
  openGraph: {
    title: "Work — Aryan Kumar",
    description:
      "Selected projects across web & mobile — built with React, Next.js, React Native, and Node.js.",
    url: "/work",
    type: "website",
  },
  twitter: {
    title: "Work — Aryan Kumar",
    description:
      "Selected projects across web & mobile — built with React, Next.js, React Native, and Node.js.",
  },
  alternates: {
    canonical: "/work",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
