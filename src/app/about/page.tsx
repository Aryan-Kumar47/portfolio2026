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
import Loose from "@/src/components/UI/Loose";
import Skills from "@/src/components/Skills";
import AnimateText from "@/src/components/UI/AnimateText";
import Heading from "@/src/components/UI/Heading";
import RoundedButton from "@/src/components/UI/RoundedButton";
import Footer from "@/src/components/Footer";

interface pageProps {}
const phrase = `I’m Aryan Kumar, I design and engineer full-stack web & mobile applications.`;
const About: FC<pageProps> = ({}) => {
  return (
    <>
      <main className={`w-full relative bg-white`}>
        <div className="section default-header about-header">
          <div className="container-custom medium">
            <Text delay={0.9}>
              <h1 className="text-[calc(clamp(3.25em,7vw,8em)*.875)] leading-[1.06] tracking-[-0.02em]">
                {phrase}
              </h1>
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
        <div className="section pt-0!">
          <Loose
            images={[
              "/me/18.jpeg",
              "/me/8.jpeg",
              "/me/9.jpeg",
              "/me/19.png",
              "/me/13.png",
              "/me/14.jpg",
              "/me/15.jpg",
            ]}
            // images={[
            //   "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
            //   "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            //   "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            //   "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
            //   "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
            //   "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
            //   "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
            //   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            //   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            //   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            //   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            //   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            // ]}
          />
        </div>
        {/* <Skills /> */}
        {/* <div className="section pt-0!">
          <div className="container-custom medium">
            <div className="flex justify-center ">
              <Text>
                <p className="text-center max-w-[50ch]">
                  I use these technologies to build fast, responsive, and
                  scalable web and mobile applications that work reliably in
                  real-world environments.
                </p>
              </Text>
            </div>
          </div>
        </div> */}

        {/* <div className="section">
          <div className="container-custom">
            <div className="flex flex-col justify-center items-center gap-(--gap-padding)">
              <Heading>
                <h1 className="text-[calc(clamp(3.25em,7vw,8em)*0.75)] leading-[1.06] tracking-[-0.02em] text-center">
                  Ready to build something
                </h1>
                <h1 className="text-[calc(clamp(3.25em,7vw,8em)*0.75)] leading-[1.06] tracking-[-0.02em] text-center">
                  that actually works?
                </h1>
              </Heading>
              <div className="w-fit mt-(--gap-padding)">
                <RoundedButton
                  href={"/about"}
                  customText={"Let's build something."}
                  className="rounded-full h-20 w-44"
                >
                  <div className="text-white">LET'S TALK</div>
                </RoundedButton>
              </div>
            </div>
          </div>
        </div> */}

        {/* <Test /> */}
        {/* <WhatIMake source="About" /> */}
        {/* <div className="h-[50vh] bg-white"></div> */}
        <Footer />
      </main>
      <Footer />
    </>
  );
};

export default About;
