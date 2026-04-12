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
      className={`fixed_footer select-none h-screen flex flex-col bg-(--color-dark) text-white w-full fixed left-0 bottom-0`}
    >
      <div className="section pb-0!">
        <div className="container-custom medium">
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
            <div className="flex justify-center items-center">
              <div className="w-fit">
                <RoundedButton border className="">
                  <span className="text-white px-10 py-8 text-[calc(clamp(3.25em,7vw,8em)*.575)] leading-[1.06] tracking-[-0.02em]">
                    {email}
                  </span>
                </RoundedButton>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap relative flex-row justify-between  pt-[calc(var(--section-padding)/1.3)] pr-[calc(var(--gap-padding)/1.33)] pb-[calc(var(--gap-padding)/1.75)] pl-[calc(var(--gap-padding)/1)]">
          <div className="flex justify-between w-auto relative">
            <div className="pr-(--gap-padding)">
              <h5 className="mb-[1.5em]!">Version</h5>
              <p className="text-[0.8em]">2022 © Edition</p>
            </div>
            <div className="">
              <h5 className="mb-[1.5em]!">Version</h5>
              <p className="text-[0.8em]">2022 © Edition</p>
            </div>
          </div>
          <div>
            <h5 className="pl-[calc(var(--gap-padding)*0.5)] mb-[1.5em]!">
              Socials
            </h5>
            <ul className={``}>
              {footerSocialLinks.map((item, i) => (
                <li key={i} className="inline-flex text-[0.85em]">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative inline-block text-white px-[calc(var(--gap-padding)/3)] `}
                  >
                    <Magnetic>
                      <div>
                        <div>{item.name}</div>
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
    </footer>
    // <footer
    //   className={`fixed_footer select-none h-screen flex flex-col bg-[#1C1D20] text-white w-full fixed left-0 bottom-0 pt-[4vh] px-[3vw]`}
    // >
    //   <div className="flex flex-col h-full justify-end items-center mt-8">
    //     <div className="md:mt-0 mt-20">
    //       <h1 className={`md:text-[7vw] w-fit text-[10vw]`}>
    //         Let'<span className={`${geraldine.className}`}>s</span> have a chat
    //       </h1>
    //     </div>
    //     <div className="flex-col flex flex-1 justify-center items-center py-8 gap-y-10">
    //       <div className="">
    //         <a
    //           onMouseEnter={() => enter("Write an email")}
    //           onMouseLeave={leave}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           href={`mailto:${email}`}
    //           className="flex flex-row justify-center items-center group a cursor-pointer"
    //         >
    //           <div className="py-4 pl-8 pr-12 border border-gray-500 rounded-full">
    //             <p className="text-nowrap md:text-[5vw] text-[4vw]">{email}</p>
    //           </div>
    //           <Magnetic hoverEffect={false}>
    //             <div className="md:p-12 p-6 bg-white -ml-4 rounded-full transition-all duration-300 ease-(--ease)">
    //               <CiMail
    //                 className="stroke-[0.2] text-2xl md:text-6xl group-hover:scale-125 transition-all duration-300 ease-(--ease) text-black"
    //                 // size={60}
    //               />
    //             </div>
    //           </Magnetic>
    //         </a>
    //         <div className="flex justify-center items-center">
    //           <a
    //             onMouseEnter={() => enter("View My Resume")}
    //             onMouseLeave={leave}
    //             target="_blank"
    //             href={resume}
    //             className="flex flex-row justify-center items-center group a cursor-pointer mt-1"
    //           >
    //             <div className="w-fit z-1">
    //               <Magnetic hoverEffect={false}>
    //                 <div className="p-6 transition-all duration-300 ease-(--ease) bg-white -mr-4 rounded-full">
    //                   <HiOutlineDocumentText
    //                     className=" text-black group-hover:scale-125 transition-all duration-300 ease-(--ease)"
    //                     size={30}
    //                   />
    //                 </div>
    //               </Magnetic>
    //             </div>
    //             <div className="py-4 text-nowrap pr-8 pl-12 text-center border border-gray-500 rounded-full">
    //               <p>Resume&nbsp;&nbsp;</p>
    //             </div>
    //           </a>
    //         </div>
    //         <div className="flex flex-row justify-between mt-10 gap-y-10 px-4">
    //           <div className="text-xs">
    //             <div className="mb-1.25">
    //               <div className="text-gray-400 flex items-center gap-x-0.5 flex-row mb-4">
    //                 <HiMiniArrowUpRight size={13} color="#455CE9" />{" "}
    //                 <h5 className="text-xs uppercase tracking-[0.05em] opacity-50">
    //                   Site Map
    //                 </h5>
    //               </div>
    //               <ul className="flex flex-row gap-x-2 pb-5 text-white/80">
    //                 {navLinks.map((item, index) => (
    //                   <div
    //                     key={index}
    //                     className={`flex flex-row justify-center items-center gap-x-2
    //                   ${pathname === item.href ? "hidden" : ""}
    //                 `}
    //                   >
    //                     <span className="w-1 h-1 rounded-full bg-white"></span>
    //                     <TransitionLink
    //                       href={item.href}
    //                       className="group w-fit"
    //                     >
    //                       <Magnetic>
    //                         <div>
    //                           <div>{item.name}</div>
    //                           <span className="absolute left-1/2 -bottom-1 h-px w-full bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 -translate-x-1/2"></span>
    //                         </div>
    //                       </Magnetic>
    //                     </TransitionLink>
    //                   </div>
    //                 ))}
    //               </ul>
    //             </div>
    //             <div className="mb-1.25">
    //               <div className="text-gray-400 flex items-center gap-x-0.5 flex-row mb-4">
    //                 <HiMiniArrowUpRight size={13} color="#455CE9" />{" "}
    //                 <h5 className="text-xs uppercase tracking-[0.05em] opacity-50">
    //                   More
    //                 </h5>
    //               </div>
    //               <div className="flex flex-row gap-x-2">
    //                 <a
    //                   href={portfolio2025}
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                   className="flex flex-row justify-center items-center gap-x-2 group"
    //                 >
    //                   <span className="w-1 h-1 rounded-full bg-white"></span>
    //                   <Magnetic>
    //                     <div>Portfolio 2025</div>
    //                     <span className="absolute left-1/2 -bottom-1 h-px w-full bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 -translate-x-1/2"></span>
    //                   </Magnetic>{" "}
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="text-xs">
    //             <div className="text-gray-400 flex items-center gap-x-0.5 flex-row mb-4">
    //               <HiMiniArrowUpRight size={13} color="#455CE9" />{" "}
    //               <span className="text-xs uppercase tracking-[0.05em] opacity-50">
    //                 Socials
    //               </span>
    //             </div>
    //             <ul className="flex flex-row items-start gap-x-2 pb-5">
    //               {footerSocialLinks.map((item, i) => (
    //                 <li key={i}>
    //                   <a
    //                     href={item.link}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     className="flex flex-row justify-center items-center gap-x-2 group"
    //                   >
    //                     <span className="w-1 h-1 rounded-full bg-white"></span>

    //                     <Magnetic>
    //                       <div>
    //                         <div>{item.name}</div>
    //                         <span className="absolute left-1/2 -bottom-1 h-px w-full bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 -translate-x-1/2"></span>
    //                       </div>
    //                     </Magnetic>
    //                   </a>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex md:hidden w-fit flex-row justify-end items-end  a cursor-pointer">
    //         <Magnetic>
    //           <div>
    //             <div
    //               onClick={() => {
    //                 window.scrollTo({
    //                   top: 0,
    //                   behavior: "smooth",
    //                 });
    //               }}
    //               className="p-6 group hover:scale-110 bg-white transition-all duration-300 ease-(--ease) rounded-full"
    //             >
    //               <HiArrowLongUp
    //                 className="group-hover:stroke-0 group-hover:scale-150 transition-all duration-300 ease-(--ease) text-black"
    //                 size={30}
    //               />
    //             </div>
    //           </div>
    //         </Magnetic>
    //       </div>
    //     </div>
    //     <div className="pb-4">
    //       <div className="flex flex-row justify-center items-center gap-x-2 mb-1">
    //         <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
    //         <p className="text-xs">Available</p>
    //       </div>
    //       <div className="flex flex-row justify-center items-center mb-1">
    //         <p className="text-gray-400 text-xs text-center leading-[1.6]">
    //           &copy; {currentYear} Aryan Kumar — Designed & Developed with
    //           passion. <br />
    //           All rights reserved.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
