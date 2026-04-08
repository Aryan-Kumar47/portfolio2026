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
    fromY: 150,
    toY: -10,
  });

  return (
    <section id="about-section" className={`bg-white section`}>
      <div className="">
        <div className="container-custom medium">
          <div
            className={`flex md:flex-row flex-col justify-between items-start w-full`}
          >
            <div className="w-full md:max-w-[50ch]">
              <p className="uppercase flex flex-wrap">
                <Text
                  animateOnScroll={source === "Home"}
                  delay={source === "About" ? 1 : 0}
                >
                  <span className="flex flex-col">
                    <span>
                      <span>i am aryan kumar</span>
                      {/* <span
                        className={`${backstreetFont.className} text-[1.3em] text-[#455CE9] capitalize ml-px`}
                      >
                        Aryan Kumar.
                      </span> */}
                    </span>
                    <span>
                      i build functional, scalable, optimized, modern,
                      responsive & easy to use web & mobile application &
                      website from scratch.
                    </span>
                  </span>
                </Text>
              </p>
              <div className="w-full flex justify-center items-center md:mt-20 mt-10">
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
            <div className="w-full md:w-1/2 flex flex-row md:mt-40 mt-20 relative">
              <Text>
                <div className="text-center w-full">
                  <h2
                    className={`text-8xl leading-[1.2] tracking-[-0.02em] ${geraldine.className}`}
                  >
                    Web &
                  </h2>
                  <h2
                    className={`text-8xl flex justify-center items-center gap-x-6 -mt-5 leading-[1.2] tracking-[-0.02em]`}
                  >
                    Mobile
                  </h2>
                  <p className={`${geraldine.className} mt-2`}>developer</p>
                </div>
              </Text>
              <ArrowIcon className="rotate-90 o-ui-arrow-project1 min-w-9 min-h-9 absolute right-0 top-0" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-(--section-padding)">
        <div className="container-custom medium">
          <div className="flex gap-10 relative">
            <div className="w-full md:max-w-[50ch]">
              <ArrowIcon className="o-ui-arrow-about min-w-9 min-h-9 absolute left-0 -top-10" />
              <div className="uppercase mt-10">
                <Text>
                  <h5 className="pb-(--gap-padding)">
                    things i{" "}
                    <span className={`${geraldine.className} capitalize`}>
                      can
                    </span>{" "}
                    help you with ...
                  </h5>
                  <p className="max-w-[15em] uppercase tracking-[0.05em]">
                    web & mobile • UI & UX • front-end development • back-end
                    development • interaction • animation
                  </p>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
