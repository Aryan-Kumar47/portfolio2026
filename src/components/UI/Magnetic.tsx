"use client";

import { useCursorContext } from "@/src/context/CursorContext";
import { cn } from "@/src/utlis/cn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { FC, PropsWithChildren, useCallback, useRef } from "react";

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
  duration = 0.3,
  ease = "var(--ease)",
  inner = false,
  className,
  customText,
  hoverEffect = true,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { enter, leave } = useCursorContext();

  useGSAP(
    () => {
      const element = wrapperRef.current;
      if (!element) return;

      const hasMouse = window.matchMedia("(pointer: fine)").matches;
      if (!hasMouse) return;

      const target = inner
        ? (element.firstElementChild as HTMLElement)
        : element;
      if (!target) return;

      const xTo = gsap.quickTo(target, "x", { duration, ease });
      const yTo = gsap.quickTo(target, "y", { duration, ease });

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = element.getBoundingClientRect();
        xTo((clientX - (left + width / 2)) * strength);
        yTo((clientY - (top + height / 2)) * strength);
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
    },
    { scope: wrapperRef, dependencies: [strength, duration, ease, inner] },
  );

  const handleEnter = useCallback(() => {
    if (hoverEffect) enter(customText);
  }, [hoverEffect, enter, customText]);

  const handleLeave = useCallback(() => {
    if (hoverEffect) leave();
  }, [hoverEffect, leave]);

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      ref={wrapperRef}
      className={cn("inline-block w-full", className)}
    >
      {children}
    </div>
  );
};

export default Magnetic;
