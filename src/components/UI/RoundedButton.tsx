"use client";

import gsap from "gsap";
import React, { ButtonHTMLAttributes, FC, useEffect, useRef } from "react";
import { cn } from "@/src/utlis/cn";
import TransitionLink from "../TransitionLink";
import { useCursorContext } from "@/src/context/CursorContext";

interface RoundedButtonProps extends ButtonHTMLAttributes<
  HTMLDivElement | HTMLButtonElement
> {
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  href?: string;
  customText?: string;
  isChildPadding?: boolean;
  border?: boolean;
}

const RoundedButton: FC<RoundedButtonProps> = ({
  className,
  backgroundColor = "var(--color-dark)",
  hoverBackgroundColor = "var(--color-blue)",
  href,
  customText,
  children,
  isChildPadding = true,
  border = false,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<GSAPTimeline | null>(null);
  let timeoutId: string | number | NodeJS.Timeout | null | undefined = null;
  const { leave, enter } = useCursorContext();

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    const circle = circleRef.current;

    if (!container || !inner || !circle) return;

    const hasMouse = window.matchMedia("(pointer: fine)").matches;
    if (!hasMouse) return;

    const ctx = gsap.context(() => {
      // ===== Magnetic Movement =====
      const xOuter = gsap.quickTo(container, "x", {
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });

      const yOuter = gsap.quickTo(container, "y", {
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });

      const xInner = gsap.quickTo(inner, "x", {
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });

      const yInner = gsap.quickTo(inner, "y", {
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = container.getBoundingClientRect();

        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        xOuter(x * 0.2);
        yOuter(y * 0.2);

        xInner(x * 0.25);
        yInner(y * 0.25);
      };

      const handleMouseLeave = () => {
        xOuter(0);
        yOuter(0);
        xInner(0);
        yInner(0);
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
        timeline.current?.play();
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      // ===== Hover Fill Animation =====
      timeline.current = gsap
        .timeline({ paused: true })
        .to(
          circle,
          {
            top: "-25%",
            width: "150%",
            duration: 0.4,
            ease: "power3.in",
          },
          "enter",
        )
        .to(
          container,
          {
            borderColor: hoverBackgroundColor,
            color: "#fff",
          },
          "enter",
        )
        .to(
          circle,
          {
            top: "-150%",
            width: "125%",
            duration: 0.25,
          },
          "exit",
        )
        .to(
          container,
          {
            borderColor: "rgba(136,136,136,0.5)",
            color: "#191921",
          },
          "exit",
        );

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, container);

    return () => ctx.revert();
  }, [hoverBackgroundColor]);

  const handleMouseEnter = () => {
    timeline.current?.tweenFromTo("enter", "exit");
    if (!href) {
      enter(customText);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`rounded-full ${border ? "border border-[#888888]/50" : ""}`}
    >
      {href ? (
        <TransitionLink href={href} customText={customText}>
          <div
            onMouseEnter={handleMouseEnter}
            className={cn(
              "relative overflow-hidden cursor-pointer rounded-full flex justify-center items-center text-[#191921] will-change-transform",
              className,
            )}
            style={{ backgroundColor: backgroundColor }}
            {...props}
          >
            <div
              ref={circleRef}
              style={{ backgroundColor: hoverBackgroundColor }}
              className="absolute top-full w-full h-[150%] rounded-full"
            />

            <div
              ref={innerRef}
              className="px-9 py-3 relative z-10 flex justify-center items-center text-nowrap"
            >
              {children}
            </div>
          </div>
        </TransitionLink>
      ) : (
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={leave}
          className={cn(
            "relative overflow-hidden cursor-pointer rounded-full flex justify-center items-center text-[#191921] will-change-transform",
            className,
          )}
          style={{ backgroundColor: backgroundColor }}
          {...props}
        >
          <div
            ref={circleRef}
            style={{ backgroundColor: hoverBackgroundColor }}
            className="absolute top-full w-full h-[150%] rounded-full"
          />

          <div
            ref={innerRef}
            className={`${isChildPadding ? "px-9 py-3" : ""} relative z-10 flex justify-center items-center text-nowrap`}
          >
            {children}
          </div>
        </button>
      )}
    </div>
  );
};

export default RoundedButton;
