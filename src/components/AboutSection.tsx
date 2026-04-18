import { useEffect, useRef, useState } from "react";
import { geraldine } from "../utlis/fonts";
import { useScrollRotate } from "../hooks/useScrollRotate";
import { useScrollParallaxY } from "../hooks/useScrollParallaxY";
import RounderButton from "./UI/RoundedButton";
import Text from "./UI/Text";
import ArrowIcon from "./UI/ArrowIcon";
import { linkedin } from "./Menu/data";

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
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const [isAboveFold, setIsAboveFold] = useState(false);

  useEffect(() => {
    const checkPosition = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setIsAboveFold(true);
        }
      }
    };

    checkPosition();
  }, []);

  return (
    <section
      id="about-section"
      className={`bg-white ${source === "About" ? "pt-[calc(var(--section-padding)*0.75)] relative pb-(--section-padding) block" : "section"}`}
    >
      <div className="">
        <div className="container-custom medium">
          <div
            className={`flex md:flex-row flex-col justify-between items-start w-full`}
          >
            <div className="w-full md:max-w-[50ch]">
              <p ref={textRef} className="uppercase flex flex-wrap">
                <Text
                  animateOnScroll={!isAboveFold}
                  delay={source === "About" && isAboveFold ? 1 : 0}
                >
                  <span>
                    My work is driven by clarity, performance, and attention to
                    detail. I focus on creating reliable digital experiences
                    that feel simple, fast, and intentional.
                    {/* The combination of my passion for design, code & interaction
                    positions me in a unique place in the web & mobile design &
                    development world. */}
                  </span>
                </Text>
              </p>
              <div className="w-full flex justify-center items-center md:mt-20 mt-10">
                <div className=" w-fit about-button">
                  {source === "Home" ? (
                    <RounderButton
                      href={"/about"}
                      customText={
                        source === "Home"
                          ? "Know More About Me"
                          : "Connect On Linkedin"
                      }
                      className="rounded-[50%] h-44 w-44"
                    >
                      <div className="text-white">About Me</div>
                    </RounderButton>
                  ) : (
                    <RounderButton
                      target="_blank"
                      rel="noopener noreferrer"
                      href={linkedin}
                      customText={"Connect On Linkedin"}
                      className="rounded-[50%] h-44 w-44"
                    >
                      <span className="text-white">Linkedin</span>
                    </RounderButton>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-row md:mt-40 mt-20 relative">
              <Text>
                <div className="text-center w-full">
                  <h2
                    className={`text-8xl pt-4 tracking-[-0.02em] ${geraldine.className}`}
                  >
                    Web &
                  </h2>
                  <h2
                    className={`text-8xl flex justify-center items-center gap-x-6 tracking-[-0.02em]`}
                  >
                    Mobile
                  </h2>
                  <p className={``}>developer</p>
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
