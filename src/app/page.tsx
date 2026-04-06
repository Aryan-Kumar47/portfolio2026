"use client";

import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Test from "../components/Text";
import WhatIMake from "../components/WhatIMake";
import WhatIMade from "../components/work/WhatIMade";

export default function Home() {
  return (
    <>
      <Footer />
      <main className="bg-white relative">
        <Hero />
        <AboutSection />
        <WhatIMade />
        <Test />
        <WhatIMake />
      </main>
      <div className="footer_trigger w-full mb-[100vh] pointer-events-none" />
    </>
  );
}
