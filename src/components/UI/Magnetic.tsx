"use client";

import { useCursorContext } from "@/src/context/CursorContext";
import { cn } from "@/src/utlis/cn";
import gsap from "gsap";
import React, { FC, PropsWithChildren, useEffect, useRef } from "react";

interface MagneticProps extends PropsWithChildren {
  strength?: number;
  duration?: number;
  ease?: string;
  inner?: boolean;
  className?: string;
  customText?: string;
  hoverEffect?: boolean;
}

const Magnetic: FC<MagneticProps> = ({
  children,
  strength = 0.3,
  duration = 1,
  ease = "elastic.out(1, 0.3)",
  inner = false,
  className,
  customText,
  hoverEffect = true,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { enter, leave } = useCursorContext();

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;

    const hasMouse = window.matchMedia("(pointer: fine)").matches;
    if (!hasMouse) return;

    const target = inner ? (element.firstElementChild as HTMLElement) : element;

    if (!target) return;

    const xTo = gsap.quickTo(target, "x", { duration, ease });
    const yTo = gsap.quickTo(target, "y", { duration, ease });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();

      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x * strength);
      yTo(y * strength);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength, duration, ease, inner]);

  return (
    <div
      onMouseEnter={() => {
        if (!hoverEffect) return;
        enter(customText);
      }}
      onMouseLeave={() => {
        if (!hoverEffect) return;
        leave;
      }}
      ref={wrapperRef}
      className={cn(`inline-block w-full ${className}`)}
    >
      {children}
    </div>
  );
};

export default Magnetic;
