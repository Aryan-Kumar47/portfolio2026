"use client";

import { useParallaxSlider } from "@/src/hooks/useParallaxSlider";
import { FC, Fragment, ReactNode } from "react";

interface ParallaxSliderProps {
  children: ReactNode | ReactNode[];
  /** How many times to repeat children for seamless wrap. Default: 2 */
  repeat?: number;
  /** Base movement speed (px/s) */
  baseVelocity?: number;
  /**
   * `"natural"` — scroll down → move left (default)
   * `"inverted"` — scroll down → move right
   */
  scrollDirection?: "natural" | "inverted";
  /** Scroll velocity boost multiplier. Default: 0.003 */
  scrollBoost?: number;
  /** Direction smoothing (0–1). Default: 0.1 */
  smoothing?: number;
}

const ParallaxSlider: FC<ParallaxSliderProps> = ({
  children,
  repeat = 2,
  baseVelocity = 100,
  scrollDirection = "natural",
  scrollBoost,
  smoothing,
}) => {
  const sliderRef = useParallaxSlider({
    baseVelocity,
    scrollDirection,
    scrollBoost,
    smoothing,
  });

  return (
    <div className="flex flex-nowrap overflow-hidden whitespace-nowrap">
      <div ref={sliderRef} style={{ display: "inline-flex" }}>
        {Array.from({ length: repeat }, (_, index) => (
          <Fragment key={index}>{children}</Fragment>
        ))}
      </div>
    </div>
  );
};

export default ParallaxSlider;
