import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export default function FooterCurve() {
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!wrapRef.current) return;
      gsap.to(wrapRef.current, {
        height: "0vh",
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
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
          className="w-[150%] absolute left-1/2 bg-white 
                h-[750%] rounded-[50%] 
                translate-x-[-50%] translate-y-[-86.666%] z-1"
        />
      </div>
    </div>
  );
}
