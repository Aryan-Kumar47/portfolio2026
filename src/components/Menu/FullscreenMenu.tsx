import React, { useEffect, useRef } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiGithubLogoFill } from "react-icons/pi";
import { TiSocialLinkedin } from "react-icons/ti";
import { gsap } from "gsap";
import { email, navLinks, socialLinks } from "./data";
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

  useEffect(() => {
    if (!menuRef.current) return;

    tl.current = gsap.timeline({ paused: true });
    const width = menuRef.current.offsetWidth;
    tl.current
      .fromTo(
        menuRef.current,
        {
          //   yPercent: 0,
          scale: 0,
          borderRadius: "100%",
        },
        {
          //   yPercent: 100,
          scale: 1,
          duration: 0.8,
          transformOrigin: `${width - 48}px 48px`,
          //   transformOrigin: "top right",
          borderRadius: "16px",
          ease: "power4.inOut",
        },
      )
      .from(
        linksRef.current.filter(Boolean),
        {
          yPercent: 120,
          stagger: 0.1,
          duration: 0.6,
          ease: "power4.out",
        },
        "-=0.4",
      )
      .from(
        iconsRef.current.filter(Boolean),
        {
          opacity: 0,
          scale: 0,
          stagger: 0.1,
          duration: 0.5,
        },
        "-=0.5",
      );

    return () => {
      tl.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (!tl.current) return;

    if (open) {
      tl.current.timeScale(1);
      tl.current.play();
    } else {
      tl.current.timeScale(1);
      tl.current.reverse();
    }
  }, [open]);

  return (
    <div
      className={`fixed inset-0 top-1.5 md:left-auto md:bottom-auto md:right-1 w-full md:w-[30%] min-w-96 z-50 text-white ${open ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`absolute block md:hidden inset-0 bg-black/80 transition-opacity duration-400 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Menu */}
      <div
        ref={menuRef}
        className="relative w-[calc(100%-12px)] mx-auto md:w-full bg-[#1C1D20] px-[4vw] -translate-y-ful overflow-hidden rounded-2xl border border-gray-500"
      >
        {/* Links */}
        <ul className="flex flex-col items-center pt-[15vh]">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={`overflow-hidden flex gap-x-2 items-center hover:underline ${item.href === pathname ? "opacity-60" : ""}`}
            >
              {item.href === pathname && <span>✦</span>}
              <TransitionLink
                onClick={() => setOpen(false)}
                customText={item.msg}
                ref={(el: HTMLAnchorElement | null) => {
                  linksRef.current[index] = el;
                }}
                href={`${item.href}`}
                className="block uppercase text-[19vw] md:text-[4vw] leading-[100%]"
              >
                <span>{item.name}</span>
              </TransitionLink>
              {item.href === pathname && <span>✦</span>}
            </li>
          ))}
        </ul>

        {/* Small text row */}
        <div className="flex items-center justify-between text-xs uppercase opacity-60 mt-11.25 mb-6.25 px-1.25">
          <p>✦✦</p>
          <p>for work — Contact below</p>
          <p>✦✦</p>
        </div>

        {/* Email button */}
        <div
          ref={(el) => {
            iconsRef.current[0] = el;
          }}
        >
          <Magnetic customText="Contact me through mail!">
            <a
              href="mailto:hi@abhishekjha.me"
              className="block w-full text-center text-black bg-white
          py-5 rounded-full text-lg
          transition-all duration-500 ease-[cubic-bezier(.075,.82,.165,1)]"
            >
              {email}
            </a>
          </Magnetic>
        </div>

        {/* Social icons */}
        <ul className="flex justify-around pt-10 pb-[2vh]">
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
        </ul>
      </div>
    </div>
  );
};

export default FullscreenMenu;
