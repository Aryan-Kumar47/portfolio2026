import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
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
  className,
  duration = 0.3,
  delay = 0.9,
  direction = "left",
  animateOnScroll = true,
}: AnimatedLineProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!lineRef.current) return;

      const origin = direction === "left" ? "left center" : "right center";

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: origin },
        {
          scaleX: 1,
          duration,
          delay,
          ease: "power3.out",
          ...(animateOnScroll && {
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }),
        },
      );
    },
    { scope: lineRef, dependencies: [duration, delay, direction, animateOnScroll] },
  );

  return (
    <div className="overflow-hidden">
      <div ref={lineRef} className={cn("w-full h-px bg-(--color-dark)", className)} />
    </div>
  );
}
