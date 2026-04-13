"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/src/utlis/cn";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  children: React.ReactNode;
  startY?: number;
  endY?: number;
  className?: string;
}

export default function ParallaxImage({
  children,
  startY = -100,
  endY = 100,
  className,
}: ParallaxImageProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!elRef.current) return;
      if (!startY && !endY) return;

      gsap.fromTo(
        elRef.current,
        { y: startY },
        {
          y: endY,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: elRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: elRef, dependencies: [startY, endY] },
  );

  return (
    <div ref={elRef} className={cn(className)}>
      {children}
    </div>
  );
}
