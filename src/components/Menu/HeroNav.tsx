import React from "react";
import Magnetic from "../UI/Magnetic";
import TransitionLink from "../TransitionLink";
import { navLinks } from "./data";
import { usePathname } from "next/navigation";

interface HeroNavProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const HeroNav: React.FC<HeroNavProps> = ({ open, setOpen }) => {
  const pathname = usePathname();
  return (
    <header
      className={`absolute top-0 left-0 right-0 z-50 md:p-10 p-8 ${pathname === "/" || pathname === "/contact" ? "text-white" : "text-[#1c1d20]"}`}
    >
      <div className="flex justify-between items-center">
        <div>
          <Magnetic>
            <TransitionLink
              href={"/"}
              customText="Aryan Kumar"
              className=" group flex relative px-4 -ml-4 w-fit"
            >
              <div
                className={`name text-[16px] flex overflow-hidden w-30 text-nowrap py-2 rounded-full `}
              >
                <p className={""}>Code by Aryan</p>
              </div>
            </TransitionLink>
          </Magnetic>
        </div>
        <div>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) =>
              i === 0 ? null : (
                <div key={i} className="">
                  <TransitionLink
                    key={link.name}
                    href={link.href}
                    //   customText={link.msg}
                  >
                    <Magnetic strength={0.7}>
                      <span className="flex text-[16px] flex-col justify-center items-center group">
                        <span>{link.name}</span>
                        <span
                          className={`w-[clamp(5.82px,0.436vw,6.91px)] h-[clamp(5.82px,0.436vw,6.91px)] rounded-full mt-2 ${pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"} ${pathname === "/" || pathname === "/contact" ? "bg-white" : "bg-[#1c1d20]"}`}
                        ></span>
                      </span>
                    </Magnetic>
                  </TransitionLink>
                </div>
              ),
            )}
          </nav>
          <button
            className="md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <span>Close</span> : <span>Menu</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeroNav;
