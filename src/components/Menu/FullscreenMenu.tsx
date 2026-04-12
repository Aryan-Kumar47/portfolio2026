import React, { useEffect, useRef } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiGithubLogoFill } from "react-icons/pi";
import { TiSocialLinkedin } from "react-icons/ti";
import { gsap } from "gsap";
import { email, footerSocialLinks, navLinks, socialLinks } from "./data";
import Magnetic from "../UI/Magnetic";
import TransitionLink from "../TransitionLink";
import { usePathname } from "next/navigation";

interface FullscreenMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ open, setOpen }) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const iconsRef = useRef<(HTMLAnchorElement | HTMLDivElement | null)[]>([]);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const pathname = usePathname();

  // useEffect(() => {
  //   if (!menuRef.current) return;

  //   tl.current = gsap.timeline({ paused: true });
  //   const width = menuRef.current.offsetWidth;
  //   tl.current
  //     .fromTo(
  //       menuRef.current,
  //       {
  //         //   yPercent: 0,
  //         // scale: 0,
  //         borderRadius: "100%",
  //       },
  //       {
  //         //   yPercent: 100,
  //         // scale: 1,
  //         duration: 0.6,
  //         // transformOrigin: `${width - 48}px 48px`,
  //         //   transformOrigin: "top right",
  //         // borderRadius: "16px",
  //         ease: "var(--ease)",
  //       },
  //     )
  //     .from(
  //       linksRef.current.filter(Boolean),
  //       {
  //         // yPercent: 120,
  //         x: "15vw",
  //         stagger: 0.1,
  //         duration: 0.8,
  //         ease: "var(--ease)",
  //       },
  //       "-=0.4",
  //     )
  //     .from(
  //       iconsRef.current.filter(Boolean),
  //       {
  //         opacity: 0,
  //         scale: 0,
  //         stagger: 0.1,
  //         duration: 0.5,
  //       },
  //       "-=0.5",
  //     );

  //   return () => {
  //     tl.current?.kill();
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!tl.current) return;

  //   if (open) {
  //     tl.current.timeScale(1);
  //     tl.current.play();
  //   } else {
  //     tl.current.timeScale(1);
  //     tl.current.reverse();
  //   }
  // }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed top-0 left-0 w-full h-full bg-[linear-gradient(to_right,hsla(220,13%,0%,0.3)_40%,hsla(220,13%,0%,1)_80%)]  transition-opacity duration-800 ease-(--ease) z-50 will-change-[opacity] ${open ? "opacity-35 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-fit bg-(--color-dark) text-white z-50 transform translate-y-0  transition-transform duration-800 ease-[cubic-bezier(.7,0,.2,1)] will-change-transform  ${open ? "translate-x-0" : "translate-x-[calc(100%+6vw)]"}`}
      >
        {/* Menu */}
        <div
          ref={menuRef}
          className={`flex flex-col justify-between h-full pt-[calc(6.79px*15)] sm:pt-[15vh] pb-[calc(var(--gap-padding)*1.25)] sm:pb-[10vh] px-(--container-padding) sm:px-[7.5vw] relative transform `}
        >
          <div className="flex flex-wrap relative">
            <h5 className="pb-[3em]">Navigation</h5>
            <div className="block w-full h-px bg-(--color-border-light)"></div>
            {/* Links */}
            <ul className="flex flex-col items-start pt-[5vh] ml-[calc(var(--gap-padding)/-2)] w-full">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className={`w-full transform  transition-all duration-800 ease-(--ease) will-change-transform group ${open ? "translate-x-0" : "translate-x-[20vw]"} ${item.href === pathname ? "opacity-60 after:visible" : "after:hidden"} after:content-[''] after:absolute after:bg-white sm:after:left-[calc(var(--gap-padding)/-4)] after:right-[calc(var(--gap-padding)/4)] after:top-1/2 after:-translate-y-1/2 after:w-[calc(clamp(16px,1.2vw,19px)/1.65)] hover:after:block after:h-[calc(clamp(16px,1.2vw,19px)/1.65)] after:rounded-full`}
                >
                  <Magnetic>
                    <TransitionLink
                      onClick={() => setOpen(false)}
                      customText={item.msg}
                      ref={(el: HTMLAnchorElement | null) => {
                        linksRef.current[index] = el;
                      }}
                      href={`${item.href}`}
                    >
                      <span className="px-[calc(var(--gap-padding)/2)]">
                        <span className="text-[calc(clamp(3.25em,5vw,4em)*0.875)] leading-[1.4]">
                          {item.name}
                        </span>
                      </span>
                    </TransitionLink>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-[calc(var(--gap-padding)/-4)] flex flex-wrap relative">
            <div className="pl-[calc(var(--gap-padding)*0.5)]">
              <h5 className="mb-[1em] ">Socials</h5>
              <ul
                className={`transform  transition-all duration-800 ease-(--ease) will-change-transform ${open ? "translate-x-0" : "translate-x-[20vw]"}`}
              >
                {footerSocialLinks.map((item, i) => (
                  <li key={i} className="inline-flex text-[0.85em]">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative inline-block text-white  ${i === 0 ? "pr-[calc(var(--gap-padding)/3)]" : "px-[calc(var(--gap-padding)/3)]"}`}
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

          {/* Small text row */}
          {/* <div
          className={`transition-all duration-800 ease-(--ease) will-change-transform ${open ? "translate-x-0" : "translate-x-[20vw]"}`}
        >
          <div className="flex items-center justify-between text-xs uppercase opacity-60 pb-[1em] px-1.25">
            <p>✦✦</p>
            <p>for work — Contact below</p>
            <p>✦✦</p>
          </div>
          <div
            ref={(el) => {
              iconsRef.current[0] = el;
            }}
          >
            <Magnetic customText="Contact me through mail!">
              <a
                href={`mailto:${email}`}
                className="block w-full text-center text-(--color-dark) bg-white
          py-5 rounded-full text-lg
          transition-all duration-500 ease-(--ease)"
              >
                {email}
              </a>
            </Magnetic>
          </div>
        </div> */}

          {/* Social icons */}
          {/* <ul className="flex justify-around py-[3em]">
          {socialLinks.map((item, i) => {
            const Icon = item.Icon;
            return (
              <li key={i}>
                <Magnetic customText={item.name}>
                  <a
                    ref={(el) => {
                      iconsRef.current[i + 1] = el;
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.link}
                    className="inline-flex p-4 border rounded-full"
                  >
                    <Icon size={24} />
                  </a>
                </Magnetic>
              </li>
            );
          })}
        </ul> */}
        </div>
      </div>
    </>
  );
};

export default FullscreenMenu;
