"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import Lenis from "lenis";

gsap.registerPlugin(Draggable);

interface UseCustomScrollbarProps {
  lenis: Lenis | undefined;
  thumbRef: RefObject<HTMLDivElement | null>;
  scrollbarRef: RefObject<HTMLDivElement | null>;
  dependency?: any;
}

export const useCustomScrollbar = ({
  lenis,
  thumbRef,
  scrollbarRef,
  dependency,
}: UseCustomScrollbarProps) => {
  useEffect(() => {
    if (!lenis || !thumbRef.current || !scrollbarRef.current) return;

    const thumb = thumbRef.current;
    const scrollbar = scrollbarRef.current;

    let hideTimeout: ReturnType<typeof setTimeout> | null = null;

    const showThumb = () => {
      thumb.style.opacity = "1";
      if (hideTimeout) clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        if (isDragging) return;
        thumb.style.opacity = "0";
      }, 1000);
    };

    const calculateValues = () => {
      const contentHeight = document.documentElement.scrollHeight;
      const visibleHeight = window.innerHeight;
      const scrollbarHeight = scrollbar.clientHeight;

      const thumbHeight = (visibleHeight / contentHeight) * scrollbarHeight;

      const maxScroll = contentHeight - visibleHeight;
      const maxThumbMove = scrollbarHeight - thumbHeight;

      thumb.style.height = `${thumbHeight}px`;

      return { maxScroll, maxThumbMove };
    };

    let { maxScroll, maxThumbMove } = calculateValues();

    const handleResize = () => {
      if (isDragging) return;
      const values = calculateValues();
      maxScroll = values.maxScroll;
      maxThumbMove = values.maxThumbMove;
    };

    let isDragging = false;
    const setThumbY = gsap.quickSetter(thumb, "y", "px");
    const handleLenisScroll = () => {
      if (maxScroll <= 0 || isDragging) return;

      const scrollY = lenis.scroll;
      const thumbY = (scrollY / maxScroll) * maxThumbMove;

      setThumbY(thumbY);
      showThumb();
    };

    lenis.on("scroll", handleLenisScroll);
    window.addEventListener("resize", handleResize);

    const draggable = Draggable.create(thumb, {
      type: "y",
      bounds: scrollbar,
      onPress() {
        isDragging = true;
        gsap.killTweensOf(thumb);
      },
      onDrag() {
        if (maxThumbMove <= 0) return;
        const ratio = this.y / maxThumbMove;
        lenis.scrollTo(ratio * maxScroll, { immediate: true });
        setThumbY(this.y);
      },
      onRelease() {
        isDragging = false;
        showThumb();
      },
    })[0];

    return () => {
      lenis.off("scroll", handleLenisScroll);
      window.removeEventListener("resize", handleResize);
      draggable?.kill();
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, [lenis, dependency]);
};
