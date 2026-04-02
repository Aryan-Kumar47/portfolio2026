"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  className = "",
}: ParallaxImageProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: startY },
        {
          y: endY,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [startY, endY]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}
