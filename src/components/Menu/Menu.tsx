"use client";
import { useEffect, useRef, useState } from "react";
import MenuButton from "./MenuButton";
import FullscreenMenu from "./FullscreenMenu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import HeroNav from "./HeroNav";

gsap.registerPlugin(ScrollTrigger);

const Menu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openRef = useRef(open);
  const nav = "#mobile-nav";

  const show = () =>
    gsap.to(nav, { scale: 1, duration: 0.3, ease: "power1.out" });

  const hide = () =>
    gsap.to(nav, { scale: 0, duration: 0.3, ease: "power1.out" });

  useEffect(() => {
    const isBelowMd = window.matchMedia("(max-width: 767px)").matches;
    const isInTopRange = window.scrollY < 88;
    openRef.current = open;
    if ((isBelowMd && isInTopRange) || (!isBelowMd && isInTopRange)) hide();
    if (openRef.current && isBelowMd) {
      show();
    }
  }, [open]);

  useGSAP(() => {
    const isBelowMd = window.matchMedia("(max-width: 767px)").matches;

    gsap.to(nav, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: "88px",
        onLeave: () => {
          show();
        },
        onEnterBack: () => {
          if (!openRef.current) {
            hide();
          }
          if (openRef.current && !isBelowMd) {
            setOpen(false);
          }
        },
        onRefresh: (self) => {
          if (self.progress < 1 && !openRef.current) {
            hide();
          } else {
            show();
          }
        },
      },
    });
  });

  return (
    <>
      <HeroNav open={open} setOpen={setOpen} />
      <MenuButton open={open} setOpen={setOpen} />
      <FullscreenMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Menu;
