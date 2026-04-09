import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/src/utlis/cn";

gsap.registerPlugin(ScrollTrigger);

type AnimatedLineProps = {
  className?: string;
  duration?: number;
  delay?: number;
  direction?: "left" | "right";
  animateOnScroll?: boolean;
};

export default function AnimatedLine({
  className = "",
  duration = 0.3,
  delay = 0.9,
  direction = "left",
  animateOnScroll = true,
}: AnimatedLineProps) {
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    const origin = direction === "left" ? "left center" : "right center";

    const config: gsap.TweenVars = {
      scaleX: 1,
      duration,
      delay,
      ease: "var(--ease)",
    };

    if (animateOnScroll) {
      config.scrollTrigger = {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      };
    }

    const animation = gsap.fromTo(
      el,
      { scaleX: 0, transformOrigin: origin },
      config,
    );

    return () => {
      if (animation.scrollTrigger) animation.scrollTrigger.kill();
      animation.kill();
    };
  }, [duration, delay, direction, animateOnScroll]);

  return (
    <div className="overflow-hidden">
      <div
        ref={lineRef}
        className={cn(
          `w-full h-px bg-(--color-dark) will-change-transform ${className}`,
        )}
      />
    </div>
  );
}
