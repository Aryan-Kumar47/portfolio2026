"use client";
import React, { FC, useEffect, useRef } from "react";
import ReactLenis, { useLenis } from "lenis/react";
import gsap from "gsap";
import { Draggable, ScrollTrigger, SplitText } from "gsap/all";
import { usePathname } from "next/navigation";
import { useCustomScrollbar } from "../hooks/useCustomScrollbar";
import { CursorProvider } from "../context/CursorContext";
import Menu from "./Menu/Menu";
import Footer from "./Footer";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: FC<SmoothScrollProps> = ({ children }) => {
  const pathname = usePathname();
  const lenis = useLenis();

  gsap.registerPlugin(Draggable, ScrollTrigger, SplitText);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);

  useCustomScrollbar({
    lenis,
    thumbRef,
    scrollbarRef,
    dependency: pathname,
  });

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 0.8,
        wheelMultiplier: 1,
        smoothWheel: true,
      }}
    >
      <CursorProvider>
        <Menu />
        <div className={`antialiased flex flex-col`}>
          <div id="main-content" ref={contentRef}>
            <div className={`relative bg-white`}>{children}</div>
            {/* <Footer /> */}
            {/* <div className=" w-full mb-[100vh] footer_trigger" /> */}
          </div>

          <div ref={scrollbarRef} className="scrollbar">
            <div className="inner">
              <div data-drag ref={thumbRef} id="thumb" className="thumb"></div>
            </div>
          </div>
        </div>
      </CursorProvider>
    </ReactLenis>
  );
};

export default SmoothScroll;
