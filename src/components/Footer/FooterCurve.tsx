import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useRef } from "react";

interface FooterProps {
  bgColor?: string;
}

export default function FooterCurve({ bgColor = "#fff" }: FooterProps) {
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!wrapRef.current) return;
      const el = wrapRef.current;

      // Delay so page content has rendered and page height is correct
      gsap.to(el, {
        height: "0vh",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      // const timer = setTimeout(() => {
      // }, 100);

      // return () => clearTimeout(timer);
    },
    { scope: wrapRef, dependencies: [pathname] },
  );

  return (
    <div className="w-full relative h-0 block z-2">
      <div
        ref={wrapRef}
        className="w-full relative top-0 overflow-hidden -translate-y-px md:h-[10vh] h-[7.5vh]"
      >
        <div
          className="w-[150%] absolute left-1/2
                h-[750%] rounded-[50%] 
                translate-x-[-50%] translate-y-[-86.666%] z-1"
          style={{ backgroundColor: bgColor }}
        />
      </div>
    </div>
  );
}
