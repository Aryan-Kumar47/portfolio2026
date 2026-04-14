"use client";

import gsap from "gsap";
import React, { ButtonHTMLAttributes, FC, useCallback, useRef } from "react";
import { useGSAP } from "@gsap/react";
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
  target?: string;
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
  target = "_self",
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline | null>(null);
  const { leave, enter } = useCursorContext();

  useGSAP(
    () => {
      const container = containerRef.current;
      const inner = innerRef.current;
      const circle = circleRef.current;

      if (!container || !inner || !circle) return;

      const hasMouse = window.matchMedia("(pointer: fine)").matches;
      if (!hasMouse) return;

      // Magnetic movement
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
        timeline.current?.play();
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      // Hover fill animation
      timeline.current = gsap
        .timeline({ paused: true })
        .to(
          circle,
          { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
          "enter",
        )
        .to(
          container,
          { borderColor: hoverBackgroundColor, color: "#fff" },
          "enter",
        )
        .to(circle, { top: "-150%", width: "125%", duration: 0.25 }, "exit")
        .to(
          container,
          { borderColor: "rgba(136,136,136,0.5)", color: "#191921" },
          "exit",
        );

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: containerRef, dependencies: [hoverBackgroundColor] },
  );

  const handleMouseEnter = useCallback(() => {
    timeline.current?.tweenFromTo("enter", "exit");
    if (!href) enter(customText);
  }, [href, enter, customText]);

  const innerClasses = cn(
    "relative overflow-hidden cursor-pointer rounded-full flex justify-center items-center",
    className,
  );

  const innerContent = (
    <>
      <div
        ref={circleRef}
        style={{ backgroundColor: hoverBackgroundColor }}
        className="absolute top-full w-full h-[150%] rounded-full"
      />
      <div
        ref={innerRef}
        className={cn(
          "relative z-10 flex justify-center items-center text-nowrap",
          isChildPadding && "px-[2.5em] py-[2.125em",
        )}
      >
        {children}
      </div>
    </>
  );

  return (
    <div
      ref={containerRef}
      className={cn("rounded-full", border && "border border-[#888888]/50")}
    >
      {href ? (
        <TransitionLink target={target} href={href} customText={customText}>
          <div
            onMouseEnter={handleMouseEnter}
            className={innerClasses}
            style={{ backgroundColor }}
            {...props}
          >
            {innerContent}
          </div>
        </TransitionLink>
      ) : (
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={leave}
          className={innerClasses}
          style={{ backgroundColor }}
          {...props}
        >
          {innerContent}
        </button>
      )}
    </div>
  );
};

export default RoundedButton;
