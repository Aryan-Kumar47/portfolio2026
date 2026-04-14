import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ArrowText: React.FC = () => {
  const curveRef = useRef<SVGPathElement>(null);
  const headRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (!curveRef.current || !headRef.current) return;

      gsap.set([curveRef.current, headRef.current], {
        strokeDasharray: (_i: number, target: SVGPathElement) =>
          target.getTotalLength(),
        strokeDashoffset: (_i: number, target: SVGPathElement) =>
          target.getTotalLength(),
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 80%",
        },
      });

      tl.to(curveRef.current, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      tl.to(
        headRef.current,
        {
          strokeDashoffset: 0,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.2",
      );
    },
    { scope: svgRef },
  );

  return (
    <svg
      ref={svgRef}
      width="344"
      height="363"
      viewBox="0 0 144 163"
      fill="none"
      className="mix-blend-difference"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={curveRef}
        d="M2.50018 28.1596C15.229 26.9255 51.5017 22.9863 57.4501 41.5954C59.9252 49.3386 58.9372 61.37 53.8001 68.1562C42.7682 82.7295 15.7616 74.4662 31.432 56.1129C40.2203 45.82 57.2221 47.7031 69.2429 49.2023C86.9624 51.4123 97.9718 62.0634 108.645 75.3623C114.066 82.1161 131.976 118.928 129.378 118.396"
        stroke="var(--color-dark)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        ref={headRef}
        d="M137.742 131.063C135.088 130.422 114.929 124.865 117.3 125.865C120.403 127.175 123.74 128.204 126.661 129.891C130.117 131.886 134.022 132.979 137.232 135.341C140.048 137.413 139.486 119.025 138.651 115.911"
        stroke="var(--color-dark)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default ArrowText;
