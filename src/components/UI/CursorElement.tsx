"use client";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import gsap from "gsap";

interface CursorElementProps {
  children?: React.ReactNode;
  className?: string;
  /** Duration for cursor-follow movement (seconds). Default: 0.7 */
  followDuration?: number;
  /** Duration for scale-in animation. Default: 0.4 */
  scaleInDuration?: number;
  /** Duration for scale-out animation. Default: 0.3 */
  scaleOutDuration?: number;
}

export interface CursorElementHandle {
  /** Move element to (x, y) screen coords */
  moveTo: (x: number, y: number) => void;
  /** Scale in */
  show: () => void;
  /** Scale out */
  hide: () => void;
  /** Get the underlying DOM element */
  el: HTMLDivElement | null;
}

/**
 * CursorElement — a fixed-position element that follows the cursor
 * and scales in/out. All transforms managed by GSAP to avoid conflicts.
 *
 * Usage:
 * ```tsx
 * const ref = useRef<CursorElementHandle>(null);
 *
 * // on mousemove:
 * ref.current?.moveTo(e.clientX, e.clientY);
 *
 * // on hover start/end:
 * ref.current?.show();
 * ref.current?.hide();
 * ```
 */
const CursorElement = forwardRef<CursorElementHandle, CursorElementProps>(
  (
    {
      children,
      className,
      followDuration = 0.7,
      scaleInDuration = 0.4,
      scaleOutDuration = 0.3,
    },
    ref,
  ) => {
    const elRef = useRef<HTMLDivElement>(null);
    const moveXRef = useRef<gsap.QuickToFunc | null>(null);
    const moveYRef = useRef<gsap.QuickToFunc | null>(null);

    useEffect(() => {
      const el = elRef.current;
      if (!el) return;

      // GSAP owns all transforms from the start
      gsap.set(el, { xPercent: -50, yPercent: -50, scale: 0, x: 0, y: 0 });

      moveXRef.current = gsap.quickTo(el, "x", {
        duration: followDuration,
        ease: "power3.out",
      });
      moveYRef.current = gsap.quickTo(el, "y", {
        duration: followDuration,
        ease: "power3.out",
      });
    }, [followDuration]);

    useImperativeHandle(
      ref,
      () => ({
        moveTo: (x: number, y: number) => {
          moveXRef.current?.(x);
          moveYRef.current?.(y);
        },
        show: () => {
          if (!elRef.current) return;
          gsap.to(elRef.current, {
            scale: 1,
            duration: scaleInDuration,
            ease: "power3.out",
            overwrite: "auto",
          });
        },
        hide: () => {
          if (!elRef.current) return;
          gsap.to(elRef.current, {
            scale: 0,
            duration: scaleOutDuration,
            ease: "power3.in",
            overwrite: "auto",
          });
        },
        el: elRef.current,
      }),
      [scaleInDuration, scaleOutDuration],
    );

    return (
      <div
        ref={elRef}
        className={`fixed top-0 left-0 pointer-events-none ${className ?? ""}`}
      >
        {children}
      </div>
    );
  },
);

CursorElement.displayName = "CursorElement";

export default CursorElement;
