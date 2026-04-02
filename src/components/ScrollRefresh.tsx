"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  }, [pathname]);

  return null;
}
