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
    <section
      id="about-section"
      aria-label="About"
      className="section-wrapper bg-white"
    >
      <div className="flex md:flex-row flex-col justify-between items-start w-full md:p-0 px-10">
        <div className="w-full md:w-1/2">
          <div
            className="uppercase flex flex-wrap md:px-20 md:pl-[calc(10%+64px+32px)] px-0 leading-[1.4]"
            style={{ fontSize: "clamp(0.875rem, 1vw, 1.125rem)" }}
          >
            <Text
              animateOnScroll={source === "Home"}
              delay={source === "About" ? 1 : 0}
            >
              <span className="flex flex-col font-bold">
                <span>
                  <span>i am</span>
                  <span
                    className={`${backstreetFont.className} text-[#455CE9] leading-[1.7] capitalize ml-px`}
                    style={{ fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)" }}
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
          </div>
          <div
            className="w-full flex justify-center items-center"
            style={{ marginTop: "clamp(40px, 6vh, 80px)" }}
          >
            <div className="w-fit about-button">
              <div className="w-fit about-button">
                <RounderButton
                  href={"/about"}
                  customText={source === "Home" ? "Know More About Me" : "Me"}
                  className="rounded-[50%] h-44 w-44"
                >
                  {source === "Home" ? (
                    <div className="text-white">About Me</div>
                  ) : (
                    <Image
                      src="/me/10.png"
                      alt="Aryan Kumar"
                      width={1000}
                      height={1000}
                      className="rounded-full"
                      unoptimized
                    />
                  )}
                </RounderButton>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 flex flex-row relative"
          style={{ marginTop: "clamp(40px, 8vh, 160px)" }}
        >
          <Text>
            <div className="text-center w-full">
              <h2
                className={`leading-[1.2] tracking-[-0.02em] ${geraldine.className}`}
                style={{ fontSize: "clamp(4rem, 7vw, 8rem)" }}
              >
                Web &
              </h2>
              <h2
                className="leading-[1.2] tracking-[-0.02em] -mt-2"
                style={{ fontSize: "clamp(4rem, 7vw, 8rem)" }}
              >
                Mobile
              </h2>
              <p
                className={`${geraldine.className} label mt-2`}
                style={{textTransform: 'lowercase'}}
              >
                developer
              </p>
            </div>
          </Text>
          <ArrowIcon className="rotate-90 o-ui-arrow-project1 min-w-9 min-h-9 absolute right-0 top-0" />
        </div>
      </div>
      <div
        className="flex gap-10 md:px-0 px-10 relative"
        style={{ marginTop: "clamp(60px, 10vh, 120px)" }}
      >
        <div className="w-full md:w-1/2">
          <ArrowIcon className="o-ui-arrow-about min-w-9 min-h-9 absolute left-10 md:left-0 top-0" />
          <div className="uppercase mt-10 md:px-[calc(10%+64px+32px)] font-bold">
            <Text>
              <h3 className="label text-gray-500 mb-8 font-semibold">
                things i{" "}
                <span className={`${geraldine.className} capitalize`}>can</span>{" "}
                help you with ...
              </h3>
              <p className="label max-w-[50ch] text-black leading-loose">
                web & mobile &bull; UI & UX &bull; front-end development &bull;
                back-end development &bull; interaction &bull; animation
              </p>
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
