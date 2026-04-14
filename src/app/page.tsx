"use client";

import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WhatIMade from "../components/work/WhatIMade";

export default function Home() {
  return (
    <>
      <main className="bg-white relative">
        <Hero />
        <AboutSection />
        <WhatIMade />
      </main>
      <Footer />
    </>
  );
}
