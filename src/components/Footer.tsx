"use client";
import { FC, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { geraldine } from "../utlis/fonts";
import { email, footerSocialLinks, navLinks, portfolio2025 } from "./Menu/data";
import Magnetic from "./UI/Magnetic";
import TransitionLink from "./TransitionLink";
import RoundedButton from "./UI/RoundedButton";
import ParallaxSlider from "./UI/ParallaxSlider";
import SocialFooter from "./SocialFooter";
import FooterCurve from "./FooterCurve";
import { useScrollParallaxY } from "../hooks/useScrollParallaxY";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  useScrollParallaxY({
    trigger: ".translate",
    fromY: 150,
    toY: -100,
  });
  return (
    <>
      <FooterCurve />
      <footer
        className={`select-none h-full bg-(--color-dark) text-white w-full`}
      >
        <div className="section pb-0!">
          <div className="flex footer items-end relative w-full shadow-[0px_5px_0px_5px_var(--color-dark)]">
            <div className="w-full translate">
              <div className="">
                <div className="select-none pb-[calc(var(--section-padding)/2)]">
                  <h1 className="text-[max(9em,15vw)]">
                    <ParallaxSlider repeat={4} baseVelocity={2}>
                      <span className="pe-12">
                        Let'<span className={`${geraldine.className}`}>s</span>{" "}
                        work together
                        <span className="spacer">—</span>
                      </span>
                    </ParallaxSlider>
                  </h1>
                </div>
                <div className="container-custom medium w-full">
                  <div className="mb-[calc(var(--section-padding)*0.6)] relative">
                    <div className="block w-full h-px bg-(--color-border-light)"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="flex gap-x-[calc(var(--gap-padding)/2)]">
                        {footerSocialLinks.map((item, i) => {
                          const Icon = item.Icon;
                          return (
                            <div
                              key={"footer_social_link" + i}
                              className="w-fit"
                            >
                              <RoundedButton
                                target="_blank"
                                border
                                rel="noopener noreferrer"
                                href={item.link}
                                className="rounded-[50%] w-[clamp(5em,11vw,10em)] h-[clamp(5em,11vw,10em)]"
                              >
                                <span className="text-white">
                                  <Icon />
                                </span>
                              </RoundedButton>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-col gap-[calc(var(--section-padding)*.475)]">
                    <div className="w-full md:w-fit">
                      <RoundedButton
                        border
                        className="sm:h-[6.5em] h-[4.5em] w-full"
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`mailto:${email}`}
                        >
                          <span className="text-white text-[calc(clamp(3.25em,7vw,8em)*.375)] leading-[1.06] tracking-[-0.02em]">
                            {email}
                          </span>
                        </a>
                      </RoundedButton>
                    </div>
                  </div>
                </div>
              </div>
              <SocialFooter />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
