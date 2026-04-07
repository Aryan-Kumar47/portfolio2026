"use client";

import React, { JSX, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  className = "",
  as: Tag = "h1",
  start = "top 50%",
  end = "bottom 50%",
}) => {
  const textRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
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
    }, el);

    return () => ctx.revert();
  }, [children, start, end]);

  return (
    <Tag
      ref={textRef as any}
      className={cn(`animate-text text-[10rem] leading-[1.2] ${className}`)}
    >
      {children}
    </Tag>
  );
};

export default AnimateText;
