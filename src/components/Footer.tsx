"use client";
import { FC, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
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
// import { cv, email, github, linkedin, nav, portfolio2023 } from "@/constants";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const { enter, leave } = useCursorContext();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer_trigger",
        start: "bottom bottom",
        end: "bottom 150px",
        scrub: true,
      },
    });
    tl.fromTo(
      ".fixed_footer",
      {
        y: -500,
      },
      {
        y: 0,
      },
    );
  }, []);
  return (
    <footer
      className={`fixed_footer select-none h-scree bg-(--color-dark) text-white w-full fixed left-0 bottom-0`}
    >
      <div className="section pb-0!">
        <div className="flex items-end relative w-full shadow-[0px_5px_0px_5px_var(--color-dark)]">
          <div className="w-full">
            <div className="container-custom medium w-full">
              <div>
                <div className="pb-[calc(var(--section-padding)/2)]">
                  <h2 className="text-[calc(clamp(3.25em,7vw,8em)*0.875)]">
                    <span>
                      <div className="profile-picture"></div> Let’s work{" "}
                    </span>
                    <span>together</span>
                  </h2>
                </div>
                <div className="pb-[calc(var(--section-padding)*.475)]">
                  <div className="block w-full h-px bg-(--color-border-light)"></div>
                </div>
                <div className="flex justify-center items-center flex-col gap-[calc(var(--section-padding)*.475)]">
                  <div className="w-fit">
                    <RoundedButton border className="">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`mailto:${email}`}
                        className="px-10 py-8 w-fit"
                      >
                        <span className="text-white text-[calc(clamp(3.25em,7vw,8em)*.375)] leading-[1.06] tracking-[-0.02em]">
                          {email}
                        </span>
                      </a>
                    </RoundedButton>
                  </div>
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
  );
};

export default Footer;
