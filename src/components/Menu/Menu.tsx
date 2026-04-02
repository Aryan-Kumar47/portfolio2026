"use client";
import { useEffect, useRef, useState } from "react";
import MenuButton from "./MenuButton";
import FullscreenMenu from "./FullscreenMenu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import HeroNav from "./HeroNav";

const Menu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openRef = useRef(open);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    if (open && mediaQuery.matches) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    const nav = "#mobile-nav";

    gsap.to(nav, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: "88px",
        onLeave: () => {
          gsap.to(nav, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          (gsap.to(nav, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          }),
            setOpen(false));
        },
      },
    });
  }, []);

  //   useEffect(() => {
  //     const nav = "#mobile-nav";
  //     const firstViewport = window.innerHeight;

  //     gsap.set(nav, { yPercent: -translate });

  //     let lastDirection = 0;

  //     const directionTrigger = ScrollTrigger.create({
  //       start: 0,
  //       end: "max",
  //       onUpdate: (self) => {
  //         const scrollY = self.scroll();

  //         // 🔹 First viewport → always hidden + close menu
  //         if (scrollY <= firstViewport) {
  //           gsap.to(nav, {
  //             yPercent: -translate,
  //             duration: 0.25,
  //             ease: "power2.out",
  //           });

  //           if (openRef.current) {
  //             setOpen(false);
  //           }

  //           return;
  //         }

  //         if (self.direction !== lastDirection) {
  //           lastDirection = self.direction;

  //           // 🔥 If menu is open → ALWAYS keep nav visible
  //           if (openRef.current) {
  //             gsap.to(nav, {
  //               yPercent: 0,
  //               duration: 0.25,
  //               ease: "power2.out",
  //             });
  //             return;
  //           }

  //           // 🔹 Normal scroll behavior
  //           gsap.to(nav, {
  //             yPercent: self.direction === 1 ? -translate : 0,
  //             duration: 0.25,
  //             ease: "power2.out",
  //           });
  //         }
  //       },
  //     });

  //     return () => directionTrigger.kill();
  //   }, []);

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <>
      <HeroNav open={open} setOpen={setOpen} />
      <MenuButton open={open} setOpen={setOpen} />
      <FullscreenMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Menu;
