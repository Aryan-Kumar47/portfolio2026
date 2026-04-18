import React, { useRef } from "react";
import { footerSocialLinks, navLinks } from "./data";
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
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed top-0 left-0 w-full h-full bg-[linear-gradient(to_right,hsla(220,13%,0%,0.3)_40%,hsla(220,13%,0%,1)_80%)]  transition-opacity duration-800 ease-(--ease) z-50 ${open ? "opacity-35 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-fit bg-(--color-dark) text-white z-50 transform translate-y-0  transition-transform duration-800 ease-[cubic-bezier(.7,0,.2,1)]  ${open ? "translate-x-0" : "translate-x-[calc(100%+6vw)]"}`}
      >
        {/* Menu */}
        <div
          ref={menuRef}
          className={`flex flex-col justify-between h-svh pt-[calc(6.79px*15)] sm:pt-[15vh] pb-[calc(var(--gap-padding)*1.25)] sm:pb-[10vh] px-(--container-padding) sm:px-[7.5vw] relative transform `}
        >
          <div className="flex flex-wrap relative">
            <h5 className="pb-[3em]">Navigation</h5>
            <div className="block w-full h-px bg-(--color-border-light)"></div>
            {/* Links */}
            <ul className="flex flex-col items-start pt-[5vh] ml-[calc(var(--gap-padding)/-2)] w-full">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className={`w-full transform transition-transform duration-800 ease-(--ease) group ${open ? "translate-x-0" : "translate-x-[20vw]"} ${item.href === pathname ? "opacity-60 after:visible" : "after:hidden"} after:content-[''] after:absolute after:bg-white sm:after:left-[calc(var(--gap-padding)/-4)] after:right-[calc(var(--gap-padding)/4)] after:top-1/2 after:-translate-y-1/2 after:w-[calc(clamp(16px,1.2vw,19px)/1.65)] hover:after:block after:h-[calc(clamp(16px,1.2vw,19px)/1.65)] after:rounded-full`}
                >
                  <TransitionLink
                    onClick={() => setOpen(false)}
                    customText={item.msg}
                    ref={(el: HTMLAnchorElement | null) => {
                      linksRef.current[index] = el;
                    }}
                    href={`${item.href}`}
                    className="w-fit"
                  >
                    <Magnetic>
                      <span className="px-[calc(var(--gap-padding)/2)]">
                        <span className="text-[calc(clamp(3.25em,5vw,4em)*0.875)] leading-[1.4]">
                          {item.name}
                        </span>
                      </span>
                    </Magnetic>
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-[calc(var(--gap-padding)/-4)] flex flex-wrap relative">
            <div className="pl-[calc(var(--gap-padding)*0.5)]">
              <h5 className="mb-[1em] pl-[calc(var(--gap-padding)/2)]">
                Socials
              </h5>
              <ul
                className={`transform transition-transform duration-800 ease-(--ease) ${open ? "translate-x-0" : "translate-x-[20vw]"}`}
              >
                {footerSocialLinks.map((item, i) => (
                  <li key={i} className="inline-flex text-[0.85em]">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative inline-block text-white  px-[calc(var(--gap-padding)/3)]`}
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
      </div>
    </>
  );
};

export default FullscreenMenu;
