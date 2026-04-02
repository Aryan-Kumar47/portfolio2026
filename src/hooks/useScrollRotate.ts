// hooks/useScrollRotate.ts
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface RotateOptions {
  trigger: string;
  start?: string;
  end?: string;
  scrub?: number | boolean;
  fromRotate?: number;
  toRotate?: number;
  fromY?: number;
  toY?: number;
}

export const useScrollRotate = ({
  trigger,
  start = "top bottom",
  end = "bottom top",
  scrub = 1,
  fromRotate = 0,
  toRotate = 15,
  fromY = 0,
  toY = -100,
}: RotateOptions) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        trigger,
        {
          rotate: fromRotate,
          y: fromY,
        },
        {
          rotate: toRotate,
          y: toY,
          scrollTrigger: {
            trigger,
            start,
            end,
            scrub,
          },
        },
      );
    });

    return () => ctx.revert();
  }, [trigger, start, end, scrub, fromRotate, toRotate, fromY, toY]);
};
