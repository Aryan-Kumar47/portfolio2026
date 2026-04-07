import { cn } from "@/src/utlis/cn";
import React from "react";

interface ArrowAboutIconProps {
  size?: number;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

const ArrowIcon: React.FC<ArrowAboutIconProps> = ({
  size = 20,
  className = "",
  strokeColor = "var(--color-dark)",
  strokeWidth = 1,
}) => {
  return (
    <svg
      className={cn(`w-5 h-5 md:w-16 md:h-16 ${className}`)}
      //   width={size}
      //   height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.10162 3.10156L62.9999 62.9999"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M63 1.00001L63 63L0.999989 63"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
