import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  duration = 1.2,
  delay = 0,
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
      ease: "power3.out",
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
      <div ref={lineRef} className={`w-full h-px bg-black ${className}`} />
    </div>
  );
}
