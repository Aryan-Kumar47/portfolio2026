import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import Transition from "../components/Transition";
import { neueMontreal } from "../utlis/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://aryankumarportfolio.vercel.app"),
  title: {
    default: "Aryan Kumar — Software Developer & Designer",
    template: "%s | Aryan Kumar",
  },
  description:
    "Aryan Kumar is a software developer from India crafting production-ready web & mobile applications using React, Next.js, React Native, and Node.js.",
  keywords: [
    "Aryan Kumar",
    "Software Developer",
    "Web Developer",
    "Mobile Developer",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Frontend Developer",
    "Portfolio",
    "India",
  ],
  authors: [{ name: "Aryan Kumar" }],
  creator: "Aryan Kumar",
  publisher: "Aryan Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Aryan Kumar — Software Developer & Designer",
    description:
      "Crafting production-ready web & mobile applications with modern technologies.",
    siteName: "Aryan Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Kumar — Software Developer & Designer",
    description:
      "Crafting production-ready web & mobile applications with modern technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neueMontreal.className} antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
        <Transition />
      </body>
    </html>
  );
}
