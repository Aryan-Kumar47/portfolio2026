"use client";
import React, { FC, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import AnimatedLine from "@/src/components/UI/AnimatedLine";
import ArrowBadge from "@/src/components/UI/ArrowBadge";
import Text from "@/src/components/UI/Text";
import AboutSection from "@/src/components/AboutSection";
import Test from "@/src/components/Text";
import WhatIMake from "@/src/components/WhatIMake";
import Footer from "@/src/components/Footer";
import Loose from "@/src/components/UI/Loose";

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
                <h1 className="text-[calc(clamp(3.25em,7vw,8em)*.875)] leading-[1.06] tracking-[-0.02em]">
                  About
                </h1>
                {/* <h1 className="md:text-[7.7vw] text-[16.7vw]">
                  A
                  <span className={`${twisterFont.className} text-purple-600`}>
                    B
                  </span>
                  out
                </h1> */}
              </Text>
              {/* <ArrowBadge
                animation="scale"
                animateOnView={false}
                delay={1}
                className="bg-purple-600"
              /> */}
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
        <Loose
          // images={[
          //   "/me/1.jpeg",
          //   "/me/2.jpeg",
          //   "/me/3.jpeg",
          //   "/me/4.jpeg",
          //   "/me/5.jpeg",
          //   "/me/6.jpeg",
          //   "/me/7.jpeg",
          // ]}
          images={[
            "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
            "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
            "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          ]}
        />
        {/* <Test /> */}
        <WhatIMake source="About" />
        {/* <div className="h-[50vh] bg-white"></div> */}
      </div>
      <div className="footer_trigger w-full mb-[100vh] pointer-events-none" />
    </>
  );
};

export default About;
