"use client";

import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Test from "../components/Text";
import WhatIMake from "../components/WhatIMake";
import WhatIMade from "../components/work/WhatIMade";

export default function Home() {
  // const arrow = useDrawSvgOnScroll({ scrub: true });
  return (
    <>
      <Footer />
      <div className=" bg-white relative">
        <Hero />
        {/* <div className="h-screen z-20"></div> */}
        <AboutSection />
        <WhatIMade />
        <Test />
        <WhatIMake />
        {/* <div className="h-[50vh] bg-white z-10"></div> */}
      </div>
      <div className="footer_trigger w-full mb-[100vh] pointer-events-none" />
    </>
  );
}
