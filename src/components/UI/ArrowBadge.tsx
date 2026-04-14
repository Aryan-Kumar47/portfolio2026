import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/src/utlis/cn";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "rotate" | "scale";

interface ArrowBadgeProps {
  animation?: AnimationType;
  animateOnView?: boolean;
  delay?: number;
  size?: number;
  className?: string;
}

export default function ArrowBadge({
  animation = "scale",
  animateOnView = true,
  delay = 0,
  size = 40,
  className,
}: ArrowBadgeProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const from = animation === "rotate" ? { rotate: -180 } : { scale: 0 };
      const to = animation === "rotate" ? { rotate: 0 } : { scale: 1 };

      gsap.fromTo(ref.current, from, {
        ...to,
        duration: 1,
        delay,
        ease: "power3.out",
        ...(animateOnView && {
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }),
      });
    },
    { scope: ref, dependencies: [animation, animateOnView, delay] },
  );

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-full p-3",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <svg
        height="20"
        width="20"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className="-rotate-90"
      >
        <path
          fill="var(--color-white)"
          d="M14.603,10.301c-0.391-0.394-1.024-0.394-1.414,0l-7.873,7.962c-0.404,0.382-0.421,1.055-0.026,1.453l7.899,7.988c0.391,0.394,1.024,0.394,1.414,0c0.391-0.394,0.391-1.033,0-1.427l-6.205-6.275h17.598c0.552,0,1-0.448,1-1V5c0-0.552-0.448-1-1-1s-1,0.448-1,1v12.986H8.415l6.188-6.257C14.994,11.334,14.994,10.695,14.603,10.301z"
        />
      </svg>
    </span>
  );
}
