"use client";

import { useState } from "react";
import Magnetic from "./UI/Magnetic";
import TransitionLink from "./TransitionLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "/work", msg: "See my work" },
    { name: "About", href: "/about", msg: "Know about me" },
    { name: "Contact", href: "/contact", msg: "Contact me" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-white" style={{ padding: "clamp(24px, 3vw, 40px)" }}>
      <div className="flex justify-between items-center label">
        <div>
          <Magnetic>
            <TransitionLink
              href={"/"}
              customText="Aryan Kumar"
              className=" group flex relative px-4 -ml-4 w-fit"
            >
              <div
                className={`name flex overflow-hidden w-30 text-nowrap py-2 rounded-full `}
              >
                <p className={""}>Design & Code by</p>
              </div>
            </TransitionLink>
          </Magnetic>
        </div>
        <div>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <div key={i} className="">
                <TransitionLink
                  key={link.name}
                  href={link.href}
                  //   customText={link.msg}
                >
                  <Magnetic strength={0.7}>
                    <span className="flex flex-col justify-center items-center group">
                      <span>{link.name}</span>
                      <span className="w-1 h-1 bg-white rounded-full mt-2 opacity-0 group-hover:opacity-100"></span>
                    </span>
                  </Magnetic>
                </TransitionLink>
              </div>
            ))}
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <span>Close</span> : <span>Menu</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
