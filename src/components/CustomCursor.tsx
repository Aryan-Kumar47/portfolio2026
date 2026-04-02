"use client";

import React from "react";
import { useCursor } from "../hooks/useCustomCursor";

export default function CustomCursor() {
  const { cursorRef, enter, leave } = useCursor();

  return (
    <div
      ref={cursorRef}
      className="cursor w-fit h-fit z-100 top-0 left-0 fixed pointer-events-none block"
    >
      <svg width="30" height="30" viewBox="0 0 30 30">
        <circle
          className="cursor__inner mix-blend-difference opacity-100"
          cx="15"
          cy="15"
          r="7.5"
          fill="#000"
        />
      </svg>

      <span className="absolute cursor-txt text-nowrap pointer-events-none top-full left-full text-[10px] text-gray-600">
        click to enable sound
      </span>
    </div>
  );
}

// "use client";

// import { useRef } from "react";
// import { useCustomCursor } from "../hooks/useCustomCursor";

// export default function CustomCursor() {
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const tooltipRef = useRef<HTMLDivElement>(null);

//   useCustomCursor(cursorRef, tooltipRef, {
//     speed: 1,
//     tooltipOffset: 40,
//   });

//   return (
//     <>
//       <div ref={cursorRef} className="custom-cursor" data-type="default" />
//       <div ref={tooltipRef} className="cursor-tooltip" />
//     </>
//   );
// }
