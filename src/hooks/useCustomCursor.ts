"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!cursorRef.current) return;
    const el = cursorRef.current;

    const moveX = gsap.quickTo(el, "x", {
      duration: 0.2,
      ease: "power3.out",
    });
    const moveY = gsap.quickTo(el, "y", {
      duration: 0.2,
      ease: "power3.out",
    });

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      moveX(e.clientX - 15);
      moveY(e.clientY - 15);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const enter = (text?: string) => {
    if (!cursorRef.current || !svgRef.current) return;
    const tl = gsap.timeline();
    tl.to(svgRef.current, {
      scale: 2,
      opacity: 0.3,
      duration: 0.3,
      ease: "power3.out",
    });
    if (!textRef.current || !text) return;
    textRef.current.textContent = text;
    tl.to(
      textRef.current,
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
        transformOrigin: "left",
      },
      "<",
    );
  };

  const leave = () => {
    if (!cursorRef.current) return;
    const tl = gsap.timeline();
    tl.to(svgRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "power3.out",
    });
    if (!textRef.current) return;
    tl.to(
      textRef.current,
      {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: "power3.out",
      },
      "<",
    );
  };

  const hide = () => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, { opacity: 0, duration: 0.3 });
  };

  const visible = () => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, { opacity: 1, duration: 0.3 });
  };

  return { cursorRef, textRef, svgRef, enter, leave, hide, visible };
}
