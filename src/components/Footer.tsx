"use client";
import { FC, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { CiMail } from "react-icons/ci";
import { HiArrowLongUp, HiOutlineDocumentText } from "react-icons/hi2";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { geraldine } from "../utlis/fonts";
import {
  email,
  footerSocialLinks,
  navLinks,
  portfolio2025,
  resume,
} from "./Menu/data";
import Magnetic from "./UI/Magnetic";
import TransitionLink from "./TransitionLink";
import { useCursorContext } from "../context/CursorContext";
import RoundedButton from "./UI/RoundedButton";
import { useScrollParallaxY } from "../hooks/useScrollParallaxY";
import ParallaxSlider from "./UI/ParallaxSlider";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const currentYear = new Date().getFullYear();
  const { enter, leave } = useCursorContext();
  useGSAP(
    () => {
      if (!wrapRef.current) return;
      gsap.to(wrapRef.current, {
        height: "0vh",
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: wrapRef, dependencies: [pathname] },
  );
  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(wrapRef.current, {
  //     height: "0vh",
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: wrapRef.current,
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".footer_trigger",
  //       start: "bottom bottom",
  //       end: "bottom 150px",
  //       scrub: true,
  //     },
  //   });
  //   tl.fromTo(
  //     ".fixed_footer",
  //     {
  //       y: -500,
  //     },
  //     {
  //       y: 0,
  //     },
  //   );
  // });
  useScrollParallaxY({
    trigger: ".footer",
    fromY: 100,
    toY: 0,
  });
  return (
    // <footer
    //   className={`fixed_footer select-none h-scree bg-(--color-dark) text-white w-full fixed left-0 bottom-0`}
    // >
    <>
      <div className="w-full relative h-0 block z-2">
        <div
          ref={wrapRef}
          className="w-full relative top-0 overflow-hidden -translate-y-px md:h-[10vh] h-[7.5vh]"
        >
          <div
            className="w-[150%] absolute left-1/2 bg-white 
                h-[750%] rounded-[50%] 
                translate-x-[-50%] translate-y-[-86.666%] z-1"
          ></div>
        </div>
      </div>
      <footer
        className={`select-none h-full bg-(--color-dark) text-white w-full`}
      >
        <div className="section pb-0!">
          <div className="flex footer items-end relative w-full shadow-[0px_5px_0px_5px_var(--color-dark)]">
            <div className="w-full">
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
                  <div className="pb-[calc(var(--section-padding)*1)]">
                    <div className="block w-full h-px bg-(--color-border-light)"></div>
                  </div>
                  <div className="flex justify-center items-center flex-col gap-[calc(var(--section-padding)*.475)]">
                    <div className="w-full md:w-fit">
                      <RoundedButton border className="h-[6.5em] w-full">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`mailto:${email}`}
                          // className="w-fit"
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
              <div className="flex w-full flex-wrap relative flex-col-reverse md:flex-row justify-between  pt-[calc(var(--section-padding)/1.3)] pr-[calc(var(--gap-padding)/1.33)] pb-[calc(var(--gap-padding)/1.75)] pl-[calc(var(--gap-padding)/1)]">
                <div className="flex justify-between md:w-auto w-full relative md:px-0 px-(--container-padding) md:pb-0 pb-[calc(var(--gap-padding)*0.75)]">
                  <div className="pr-(--gap-padding)">
                    <h5 className="mb-[1.5em]!">Version</h5>
                    <p className="text-[0.8em]">2022 © Edition</p>
                  </div>
                  <div className="">
                    <h5 className="mb-[1.5em]!">Version</h5>
                    <p className="text-[0.8em]">2022 © Edition</p>
                  </div>
                </div>
                <div className="px-[calc(var(--container-padding)-var(--gap-padding)*0.333)] pb-[calc(var(--section-padding)/3)] md:px-0 md:pb-0">
                  <h5 className="md:pl-[calc(var(--gap-padding)*0.5)] pl-[calc(var(--gap-padding)/3)] mb-[1.5em]!">
                    Socials
                  </h5>
                  <ul className={``}>
                    {footerSocialLinks.map((item, i) => (
                      <li key={i} className="inline-flex text-[0.85em]">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group relative inline-block text-white px-[calc(var(--gap-padding)/3)]`}
                        >
                          <Magnetic>
                            <div>
                              <div className="h-[2.5em] flex justify-center items-center">
                                {item.name}
                              </div>
                              <span className="absolute left-1/2 -bottom-1 h-px w-full bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 -translate-x-1/2"></span>
                            </div>
                          </Magnetic>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="md:hidden block h-px bg-(--color-border-light) mt-(--gap-padding) w-[calc(100%-var(--gap-padding)*0.666)] ml-[calc(var(--gap-padding)*0.333)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
