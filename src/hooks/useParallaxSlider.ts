"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSliderOptions {
  /** Base movement speed (px/s). Default: 100 */
  baseVelocity?: number;
  /**
   * How scroll direction maps to slider direction:
   * - `"natural"` — scroll down → move left, scroll up → move right (default)
   * - `"inverted"` — scroll down → move right, scroll up → move left
   */
  scrollDirection?: "natural" | "inverted";
  /** Velocity dead zone — ignores scroll velocity below this (px/s). Default: 50 */
  threshold?: number;
  /** How much scroll speed boosts the slider. 0 = no boost. Default: 0.003 */
  scrollBoost?: number;
  /** How smoothly direction changes (0–1, lower = smoother). Default: 0.1 */
  smoothing?: number;
}

export function useParallaxSlider({
  baseVelocity = 100,
  scrollDirection = "natural",
  threshold = 50,
  scrollBoost = 0.003,
  smoothing = 0.1,
}: ParallaxSliderOptions = {}) {
  const elRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!elRef.current) return;

      // "natural": scroll down (positive velocity) → move left (negative xPercent)
      // "inverted": scroll down → move right
      const scrollSign = scrollDirection === "natural" ? -1 : 1;

      let xPercent = 0;
      let direction = scrollSign; // default idle direction
      let smoothDir = scrollSign;

      const st = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const vel = self.getVelocity();
          if (vel > threshold) {
            direction = scrollSign;
          } else if (vel < -threshold) {
            direction = -scrollSign;
          }
        },
      });

      const ticker = (_time: number, deltaTime: number) => {
        smoothDir += (direction - smoothDir) * smoothing;

        const dt = deltaTime / 1000;
        const move = smoothDir * baseVelocity * dt;
        const boost = smoothDir * Math.abs(st.getVelocity()) * dt * scrollBoost;

        xPercent += move + boost;
        xPercent = gsap.utils.wrap(-50, 0, xPercent);

        gsap.set(elRef.current, { xPercent });
      };

      gsap.ticker.add(ticker);

      return () => {
        gsap.ticker.remove(ticker);
        st.kill();
      };
    },
    {
      dependencies: [
        baseVelocity,
        scrollDirection,
        threshold,
        scrollBoost,
        smoothing,
      ],
    },
  );

  return elRef;
}
