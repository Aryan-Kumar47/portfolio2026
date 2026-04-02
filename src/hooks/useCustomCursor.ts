"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  // Track mouse position
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!cursorRef.current) return;

    const moveCursor = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Animate cursor using GSAP
      gsap.to(cursorRef.current, {
        x: mouse.current.x - 15, // center (half of 30px)
        y: mouse.current.y - 15,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
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

// import { useEffect } from "react";
// import gsap from "gsap";

// type Options = {
//   speed?: number;
//   tooltipOffset?: number;
// };

// export function useCustomCursor(
//   cursorRef: React.RefObject<HTMLDivElement | null>,
//   tooltipRef: React.RefObject<HTMLDivElement | null>,
//   options?: Options,
// ) {
//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     if (window.matchMedia("(hover: none)").matches) return;

//     const cursor = cursorRef.current;
//     const tooltip = tooltipRef.current;
//     if (!cursor || !tooltip) return;

//     gsap.set(cursor, { autoAlpha: 0 });

//     const speed = options?.speed ?? 0.15;
//     const tooltipOffset = options?.tooltipOffset ?? 40;
//     let isDragging = false;

//     const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
//     const pos = { ...mouse };

//     const xSet = gsap.quickSetter(cursor, "x", "px");
//     const ySet = gsap.quickSetter(cursor, "y", "px");
//     const tooltipXSet = gsap.quickSetter(tooltip, "x", "px");
//     const tooltipYSet = gsap.quickSetter(tooltip, "y", "px");

//     // =========================
//     // Mouse Move
//     // =========================
//     const onMouseMove = (e: MouseEvent) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };

//     const tick = () => {
//       pos.x += (mouse.x - pos.x) * speed;
//       pos.y += (mouse.y - pos.y) * speed;

//       xSet(pos.x);
//       ySet(pos.y);

//       tooltipXSet(pos.x);
//       tooltipYSet(pos.y - tooltipOffset);
//     };

//     gsap.ticker.add(tick);
//     window.addEventListener("mousemove", onMouseMove);

//     // =========================
//     // Show / Hide when leaving window
//     // =========================
//     const handleMouseLeaveWindow = (e: MouseEvent) => {
//       if (!e.relatedTarget) {
//         gsap.set([cursor, tooltip], { autoAlpha: 0 });
//       }
//     };

//     const handleMouseEnterWindow = () => {
//       gsap.set(cursor, { autoAlpha: 1 });
//     };

//     window.addEventListener("mouseout", handleMouseLeaveWindow);
//     window.addEventListener("mouseover", handleMouseEnterWindow);

//     // =========================
//     // Hover + Drag Detection
//     // =========================

//     const handlePointerOver = (e: PointerEvent) => {
//       if (isDragging) return;
//       const target = e.target as HTMLElement;
//       if (!target) return;

//       const hoverEl = target.closest<HTMLElement>(
//         "a, button, input, textarea, [data-drag], [data-cursor-text], [data-text]",
//       );

//       if (!hoverEl) {
//         cursor.dataset.type = "default";
//         tooltip.style.opacity = "0";
//         gsap.to(cursor, { scale: 1, duration: 0.2 });
//         return;
//       }

//       let type = "default";

//       if (hoverEl.matches("a, button")) type = "pointer";
//       else if (
//         hoverEl.matches("input, textarea") ||
//         hoverEl.hasAttribute("data-text")
//       )
//         type = "text";
//       else if (hoverEl.hasAttribute("data-drag")) type = "drag";

//       const text = hoverEl.getAttribute("data-cursor-text");

//       cursor.dataset.type = type;

//       if (text) {
//         tooltip.textContent = text;
//         tooltip.style.opacity = "1";
//         gsap.to(cursor, { scale: 1.2, duration: 0.2 });
//       } else {
//         tooltip.style.opacity = "0";
//         gsap.to(cursor, { scale: 1.2, duration: 0.2 });
//       }
//     };

//     // =========================
//     // Dragging State
//     // =========================
//     const handleMouseDown = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       if (target.closest("[data-drag]")) {
//         isDragging = true;
//         cursor.dataset.type = "dragging";
//       }
//       gsap.to(cursor, { scale: 0.9, duration: 0.15 });
//     };

//     const handleMouseUp = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       // After drag ends → recalc what we're hovering
//       const elementUnderCursor = document.elementFromPoint(
//         mouse.x,
//         mouse.y,
//       ) as HTMLElement | null;

//       if (elementUnderCursor?.closest("[data-drag], a, button,  [data-text]")) {
//         gsap.to(cursor, { scale: 1.2, duration: 0.15 });
//       } else {
//         gsap.to(cursor, { scale: 1, duration: 0.15 });
//       }

//       if (!isDragging) return;

//       isDragging = false;

//       if (elementUnderCursor?.closest("[data-drag]")) {
//         cursor.dataset.type = "drag";
//       } else if (elementUnderCursor?.closest("a, button")) {
//         cursor.dataset.type = "pointer";
//       } else {
//         cursor.dataset.type = "default";
//       }
//     };

//     document.addEventListener("pointerover", handlePointerOver);
//     document.addEventListener("mousedown", handleMouseDown);
//     document.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", onMouseMove);
//       window.removeEventListener("mouseout", handleMouseLeaveWindow);
//       window.removeEventListener("mouseover", handleMouseEnterWindow);

//       document.removeEventListener("pointerover", handlePointerOver);
//       document.removeEventListener("mousedown", handleMouseDown);
//       document.removeEventListener("mouseup", handleMouseUp);

//       gsap.ticker.remove(tick);
//     };
//   }, [cursorRef, tooltipRef, options]);
// }
