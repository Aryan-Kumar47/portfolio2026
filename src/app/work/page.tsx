"use client";
import React, { FC, useEffect } from "react";
import gsap from "gsap";
import WhatIMade, { ModelInterface } from "@/src/components/work/WhatIMade";
import { backstreetFont, GilroyLight } from "@/src/utlis/fonts";
import ArrowBadge from "@/src/components/UI/ArrowBadge";
import Text from "@/src/components/UI/Text";
import Footer from "@/src/components/Footer";

interface pageProps {}

const colors: string[] = [
  "#e49366",
  "#798e7b",
  "#b692a1",
  "#bfccd8",
  "#666d73",
];

const phrase =
  "Each project is demonstration of my skills and capabilities in both front-end and back-end development.";
const page: FC<pageProps> = ({}) => {
  useEffect(() => {
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-scroll",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    t2.fromTo(
      ".project-scroll",
      {
        y: "0px",
      },
      {
        y: "-200px",
      },
    );
  });
  return (
    <>
      <Footer />
      <div className={`w-full bg-white relative`}>
        <div
          className="pt-[calc(clamp(5em,21vh,12em)*1.33)]
  max-[720px]:pt-[calc(12vh*1.95)] pb-[calc(clamp(5em,21vh,12em)*0.66)]
  max-[720px]:pb-[calc(12vh*0.75)] w-full md:px-[calc(10%+64px+32px)] px-[calc(3vw+1rem)]"
        >
          <div className={`  w-full flex items-center justify-between gap-x-4`}>
            <Text delay={0.9}>
              {/* <h1 className="text-[clamp(2.84em,6.125vw,7em)] leading-[1.165] font-bold">
                Creating next level digital products
              </h1> */}
              <h1 className="md:text-[7.7vw] text-[16.7vw] font-medium">
                Pro
                <span className={`${backstreetFont.className} text-[#fb923c]`}>
                  j
                </span>
                ects
              </h1>
            </Text>
            <ArrowBadge
              animation="scale"
              animateOnView={false}
              delay={1}
              className="bg-[#fb923c]"
            />
          </div>

          <Text delay={0.9}>
            <h1 className="text-[calc(clamp(2em,8vw,3.5em)*0.75)] text-gray-800 max-w-[50ch] leading-[1.065]">
              {phrase}
            </h1>
          </Text>
        </div>
        <WhatIMade source="Work" />
      </div>
      <div className="footer_trigger w-full mb-[100vh] pointer-events-none" />
    </>
  );
};

export default page;
