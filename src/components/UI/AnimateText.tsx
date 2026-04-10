"use client";

import React, { useCallback, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/src/utlis/cn";

gsap.registerPlugin(ScrollTrigger);

interface AnimateTextProps {
  children: string;
  className?: string;
  as?: React.ElementType;
  start?: string;
  end?: string;
}

const AnimateText: React.FC<AnimateTextProps> = ({
  children,
  className,
  as: Tag = "h1",
  start = "top 50%",
  end = "bottom 50%",
}) => {
  const textRef = useRef<HTMLElement | null>(null);

  const setRef = useCallback((el: HTMLElement | null) => {
    textRef.current = el;
  }, []);

  useGSAP(
    () => {
      const el = textRef.current;
      if (!el) return;

      el.setAttribute("data-text", children.trim());

      ScrollTrigger.create({
        trigger: el,
        start,
        end,
        scrub: 1,
        onUpdate: (self) => {
          const clipValue = Math.max(0, 100 - self.progress * 100);
          el.style.setProperty("--clip-value", `${clipValue}%`);
        },
      });
    },
    { dependencies: [children, start, end] },
  );

  return (
    <Tag ref={setRef} className={cn("animate-text", className)}>
      {children}
    </Tag>
  );
};

export default AnimateText;
