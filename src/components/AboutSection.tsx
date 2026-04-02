import React from "react";
import { backstreetFont, geraldine } from "../utlis/fonts";
import { useScrollRotate } from "../hooks/useScrollRotate";
import { useScrollParallaxY } from "../hooks/useScrollParallaxY";
import RounderButton from "./UI/RoundedButton";
import Text from "./UI/Text";
import ArrowIcon from "./UI/ArrowIcon";
import Image from "next/image";
import ParallaxImage from "./UI/ParallaxImage";

interface AboutSectionI {
  source?: "Home" | "About";
}

export default function AboutSection({ source = "Home" }: AboutSectionI) {
  useScrollRotate({
    trigger: ".o-ui-arrow-project1",
    fromRotate: 90,
    toRotate: 75,
    fromY: 0,
    toY: -150,
  });

  useScrollRotate({
    trigger: ".o-ui-arrow-about",
    fromRotate: 0,
    toRotate: 15,
    fromY: 0,
    toY: -100,
    start: "top 80%",
  });

  useScrollParallaxY({
    trigger: ".about-button",
    fromY: 50,
    toY: -50,
  });

  return (
    <div id="about-section" className={`section-wrapper bg-white`}>
      <div
        className={`flex md:flex-row flex-col justify-between items-start w-full md:p-0 px-10`}
      >
        <div className="w-full md:w-1/2">
          <p className="md:text-[clamp(1em,1vw,100vw)] text-[clamp(1em,4vw,100vw)] leading-none uppercase flex flex-wrap md:px-20 md:pl-[calc(10%+64px+32px)] px-0">
            <Text
              animateOnScroll={source === "Home"}
              delay={source === "About" ? 1 : 0}
            >
              <span className="flex flex-col font-bold">
                <span>
                  <span>i am</span>
                  <span
                    className={`${backstreetFont.className} text-[#455CE9] leading-[1.7] capitalize md:text-[clamp(1.5em,1vw,100vw)] text-[clamp(1em,3vw,100vw)] ml-px`}
                  >
                    Aryan Kumar.
                  </span>{" "}
                </span>
                <span>
                  i build functional, scalable, optimized, modern, responsive &
                  easy to use web & mobile application & website from scratch.
                </span>
              </span>
            </Text>
          </p>
          <div className="w-full flex justify-center items-center md:mt-20 mt-10">
            <div className=" w-fit about-button">
              <div className=" w-fit about-button">
                <RounderButton
                  href={"/about"}
                  customText={source === "Home" ? "Know More About Me" : "Me"}
                  // hoverBackgroundColor="#f43f5e"
                  className="rounded-[50%] h-44 w-44"
                >
                  {source === "Home" ? (
                    <div className="text-white">About Me</div>
                  ) : (
                    <Image
                      src="/me/10.png"
                      alt="connect"
                      width={1000}
                      height={1000}
                      className=" rounded-full"
                      unoptimized
                    />
                    // <ParallaxImage className="" startY={-100} endY={100}>
                    // </ParallaxImage>
                  )}
                </RounderButton>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-row md:mt-40 mt-20 relative">
          <Text>
            <div className="text-center w-full">
              <h1 className={`text-8xl leading-[1.4] ${geraldine.className}`}>
                Web &
              </h1>
              <br />
              <h1
                className={`text-8xl flex justify-center items-center gap-x-6 -mt-5`}
              >
                Mobile
              </h1>
              <br />
              <h1 className={`${geraldine.className} text-xs`}>developer</h1>
            </div>
          </Text>
          <ArrowIcon className="rotate-90 o-ui-arrow-project1 min-w-9 min-h-9 absolute right-0 top-0" />
        </div>
      </div>
      <div className="flex gap-10 md:px-0 px-10 mt-24 relative">
        <div className="w-full md:w-1/2">
          <ArrowIcon className="o-ui-arrow-about min-w-9 min-h-9 absolute left-10 md:left-0 top-0" />
          <div className="uppercase mt-10 md:px-[calc(10%+64px+32px)] font-bold">
            <Text>
              <div className="text-xs text-gray-500 mb-8 font-semibold">
                things i{" "}
                <span className={`${geraldine.className} capitalize`}>can</span>{" "}
                help you with ...
              </div>
              <div className="text-xs max-w-112.5 text-black">
                web & mobile • UI & UX • front-end development • back-end
                development • interaction • animation
              </div>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
