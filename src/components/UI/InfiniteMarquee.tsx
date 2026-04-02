import React, {
  useEffect,
  useRef,
  ReactNode,
  FC,
  useLayoutEffect,
} from "react";
import gsap from "gsap";

type Direction = "left" | "right";

interface InfiniteMarqueeProps {
  children: ReactNode;
  speed?: number; // duration in seconds (lower = faster)
  direction?: Direction;
  pauseOnHover?: boolean;
  className?: string;
}

const InfiniteMarquee: FC<InfiniteMarqueeProps> = ({
  children,
  speed = 20,
  direction = "left",
  pauseOnHover = true,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const contentWidth = content.scrollWidth / 2;

    // Kill previous animation (important on resize or prop change)
    tweenRef.current?.kill();

    // Set initial position
    gsap.set(content, {
      x: direction === "left" ? 0 : -contentWidth,
    });

    // Animate
    tweenRef.current = gsap.to(content, {
      x: direction === "left" ? -contentWidth : 0,
      duration: speed,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [speed, direction, children]);

  const handleMouseEnter = () => {
    if (pauseOnHover) tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) tweenRef.current?.resume();
  };

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={contentRef} className="flex w-max">
        {/* First copy */}
        <div className="flex shrink-0">{children}</div>

        {/* Duplicate copy for seamless loop */}
        <div className="flex shrink-0">{children}</div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
