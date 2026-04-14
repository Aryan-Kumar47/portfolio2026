// CursorContext.tsx
"use client";
import React, { createContext, useContext } from "react";
import { useCursor } from "../hooks/useCustomCursor";

const CursorContext = createContext<ReturnType<typeof useCursor> | null>(null);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const cursor = useCursor();

  return (
    <CursorContext.Provider value={cursor}>
      {children}
      <div
        ref={cursor.cursorRef}
        className="cursor w-fit h-fit z-100 top-0 left-0 fixed pointer-events-none pointer-fine:block hidden"
      >
        <span
          ref={cursor.textRef}
          className="absolute -left-3.5 top-1/2 -translate-y-1/2 opacity-0 scale-0 rounded-full px-4 pl-13.75 py-3.75 bg-white/20 backdrop-blur-xs border border-white/20 shadow-lg text-nowrap pointer-events-none text-xs text-black"
        >
          click to enable sound
        </span>
        <svg ref={cursor.svgRef} width="30" height="30" viewBox="0 0 30 30">
          <circle
            className="cursor__inner mix-blend-difference opacity-100"
            cx="15"
            cy="15"
            r="7.5"
            fill="#000"
          />
        </svg>
      </div>
    </CursorContext.Provider>
  );
};

export const useCursorContext = () => {
  const ctx = useContext(CursorContext);
  if (!ctx)
    throw new Error("useCursorContext must be used inside CursorProvider");
  return ctx;
};
