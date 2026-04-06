import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import Transition from "../components/Transition";
import { GilroyLight } from "../utlis/fonts";

export const metadata: Metadata = {
  title: "Aryan Kumar — Software Developer & Designer",
  description:
    "Aryan Kumar is a software developer from India who crafts production-ready web & mobile applications. Specializing in React, Next.js, React Native, and Node.js.",
  keywords: [
    "Aryan Kumar",
    "Software Developer",
    "Web Developer",
    "Mobile Developer",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Aryan Kumar" }],
  creator: "Aryan Kumar",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GilroyLight.className} antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
        <Transition />
      </body>
    </html>
  );
}
