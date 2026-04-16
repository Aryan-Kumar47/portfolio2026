// hooks/useScrollParallaxY.ts
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParallaxOptions {
  trigger: string;
  start?: string;
  end?: string;
  scrub?: number | boolean;
  fromY?: number | string;
  toY?: number | string;
  markers?: boolean;
}

export const useScrollParallaxY = ({
  trigger,
  start = "top bottom",
  end = "bottom top",
  scrub = 1,
  fromY = 50,
  toY = -50,
  markers = false,
}: ParallaxOptions) => {
  useEffect(() => {
    if (!trigger) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        trigger,
        { y: fromY },
        {
          y: toY,
          scrollTrigger: {
            trigger,
            start,
            end,
            scrub,
            markers,
          },
        },
      );
    });

    return () => ctx.revert();
  }, [trigger, start, end, scrub, fromY, toY]);
};
