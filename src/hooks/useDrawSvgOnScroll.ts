import { useEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface DrawSvgOptions {
  duration?: number;
  ease?: string;
  stagger?: number;
  start?: string;
  end?: string;
  scrub?: boolean;
}

export function useDrawSvgOnScroll(
  options: DrawSvgOptions = {},
): RefObject<SVGSVGElement | null> {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const ctx = gsap.context(() => {
      const paths = Array.from(svg.querySelectorAll<SVGPathElement>("path"));

      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: options.duration ?? 1.6,
        ease: options.ease ?? "power3.out",
        stagger: options.stagger ?? 0.15,
        scrollTrigger: {
          trigger: svg,
          start: options.start ?? "top 80%",
          end: options.end ?? "top 60%",
          scrub: options.scrub,
          //   toggleActions: "play none none reset",
          markers: true,
        },
      });
    }, svg);

    return () => ctx.revert();
  }, [options.duration, options.ease, options.stagger, options.start]);

  return svgRef;
}
