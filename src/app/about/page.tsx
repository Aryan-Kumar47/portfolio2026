"use client";
import React, { FC, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { GilroyLight, twisterFont } from "@/src/utlis/fonts";
import AnimatedLine from "@/src/components/UI/AnimatedLine";
import ArrowBadge from "@/src/components/UI/ArrowBadge";
import Text from "@/src/components/UI/Text";
import AboutSection from "@/src/components/AboutSection";
import Test from "@/src/components/Text";
import WhatIMake from "@/src/components/WhatIMake";
import Footer from "@/src/components/FooterDennis";

interface pageProps {}
const phrase = `“Be yourself; everyone else is already taken.”`;
const About: FC<pageProps> = ({}) => {
  return (
    <>
      <Footer />
      <div className={`w-full relative bg-white`}>
        {/* <div
          className="pt-[calc(clamp(5em,21vh,12em)*1.33)]
  max-[720px]:pt-[calc(12vh*1.95)]
 w-full"
        /> */}
        <div
          className="pt-[calc(clamp(5em,21vh,12em)*1.33)]
  max-[720px]:pt-[calc(12vh*1.95)] pb-[calc(clamp(5em,21vh,12em)*0.66)]
  max-[720px]:pb-[calc(12vh*0.75)] w-full md:px-[calc(7vw+5rem)] px-[calc(3vw+1rem)]"
        >
          <div className={` w-full flex items-center justify-between gap-x-4`}>
            <Text delay={0.9}>
              <h1
                className="leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(3rem, 7.7vw, 8rem)" }}
              >
                A
                <span className={`${twisterFont.className} text-purple-600`}>
                  B
                </span>
                out
              </h1>
            </Text>
            <ArrowBadge
              animation="scale"
              animateOnView={false}
              delay={1}
              className="bg-purple-600"
            />
          </div>
          <Text delay={0.9}>
            <p
              className="leading-[1.3]"
              style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}
            >
              {phrase}
            </p>
          </Text>
        </div>
        <div className="md:px-[calc(7vw+5rem)] px-[3vw]">
          <AnimatedLine
            className="bg-gray-400"
            animateOnScroll={false}
            delay={1}
          />
        </div>
        <AboutSection source="About" />
        <Test />
        <WhatIMake source="About" />
        {/* <div className="h-[50vh] bg-white"></div> */}
      </div>
      <div className="footer_trigger w-full mb-[100vh] pointer-events-none" />
    </>
  );
};

export default About;
