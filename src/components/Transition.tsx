// components/RouteTransition.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { startTransition, useEffect, useRef } from "react";
import { pageTransitionOut, themes } from "../utlis/pageTransition";
import { geraldine } from "../utlis/fonts";

export default function Transition() {
  const randomColor = themes[Math.floor(Math.random() * themes.length)];
  const pathname = usePathname();
  const isFirstLoad = useRef(true);
  useEffect(() => {
    let tl: gsap.core.Timeline;
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
    }
    tl = pageTransitionOut();

    return () => {
      tl?.kill();
    };
  }, [pathname]);
  return (
    <>
      <div className="transition-container fixed inset-0 z-200 pointer-events-none">
        <div className="transition-screen absolute inset-0" />

        <svg
          className="transition-scribble absolute w-[120%] h-[120%] -top-[6%] -left-[10%]"
          viewBox="0 0 3222 3114"
          preserveAspectRatio="none"
        >
          <path
            className="scribble-path"
            d="M299.654 453.865C505.574 319.225 711.494 184.585 836.054 109.945C960.614 35.3048 997.574 24.7448 944.014 110.385C890.454 196.025 745.254 378.185 571.454 634.385C397.654 890.585 199.654 1215.3 110.854 1382.58C22.0544 1549.86 48.4544 1549.86 77.8944 1540.62C107.334 1531.38 139.014 1512.9 367.854 1319.9C596.694 1126.9 1021.73 759.945 1255.21 555.065C1488.69 350.185 1517.73 318.505 1527.41 306.145C1537.09 293.785 1526.53 301.705 1346.85 618.625C1167.17 935.545 818.694 1561.22 635.214 1896.74C451.734 2232.26 443.814 2258.66 447.654 2268.3C451.494 2277.94 467.334 2270.02 511.134 2236.9C554.934 2203.78 626.214 2145.7 966.534 1817.46C1306.85 1489.22 1914.05 892.585 2263.81 557.505C2613.57 222.425 2687.49 166.985 2741.41 129.185C2795.33 91.3848 2827.01 72.9048 2843.33 67.3448C2859.65 61.7848 2859.65 69.7048 2849.09 96.2248C2838.53 122.745 2817.41 167.625 2584.77 544.505C2352.13 921.385 1370.37 2165.43 1139.25 2537.83C908.134 2910.23 902.854 2926.07 902.774 2939.51C902.694 2952.95 907.974 2963.51 1255.21 2613.87C1602.45 2264.23 2829.73 1017.54 2903.53 1071.46C2977.33 1125.38 2176.12 2817.04 2128 3037C2079.88 3256.96 2911.24 2018.56 3172 1793"
            fill="none"
            // stroke={"#455CE9"}
            stroke={"var(--color-dark)"}
            strokeLinecap="round"
            strokeWidth={"31%"}
          />
        </svg>

        <div className="transition-logo text-white flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-[calc(clamp(3.25em,7vw,8em)*.875)] leading-[1.06] tracking-[-0.02em]">
            Aryan Kumar
          </h1>
          <p className={`${geraldine.className} text-[2em]`}>
            software developer
          </p>
        </div>
      </div>
    </>
  );
}
