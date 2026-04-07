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
import Footer from "@/src/components/Footer";

interface pageProps {}
const phrase = `“Be yourself; everyone else is already taken.”`;
const About: FC<pageProps> = ({}) => {
  return (
    <>
      <Footer />
      <div className={`w-full relative bg-white`}>
        <div className="section default-header about-header">
          <div className="container-custom medium">
            <div className={`w-full flex items-center justify-between gap-x-4`}>
              <Text delay={0.9}>
                <h1 className="md:text-[7.7vw] text-[16.7vw]">
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
              <p className="text-[calc(clamp(3.25em,5vw,4.5em)*0.65)] leading-[1.3] mt-8">
                {phrase}
              </p>
            </Text>
          </div>
        </div>
        <div className="container-custom medium">
          <AnimatedLine
            className="bg-(--color-gray)"
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
