"use client";

import gsap from "gsap";
import { CustomEase, DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(DrawSVGPlugin, CustomEase);

export const themes = [
  "#63BEF6",
  "#FE954E",
  "#FF6598",
  "#87D95C",
  "#63BEF6",
  "#FFE321",
  // "#011B73",
];
let lastThemeIndex = -1;
let staggerDefault = 0.075;
let durationDefault = 1;
function getNonRepeatingRandomTheme() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * themes.length);
  } while (newIndex === lastThemeIndex);
  lastThemeIndex = newIndex;
  return themes[newIndex];
}
function disableScroll() {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
}

const scribbleWidth = "33%";
const scribbleWidthStart = "8%";
CustomEase.create("cubic-default", "0.625, 0.05, 0, 1");
CustomEase.create("cubic-default-scribble", "0.75, 0.15, 0.15, 1");
// gsap.defaults({ ease: "cubic-default", duration: durationDefault });

export function pageTransitionIn(): gsap.core.Timeline {
  const randomColor = getNonRepeatingRandomTheme();
  const tl = gsap.timeline({
    onStart: () => {
      disableScroll();
    },
  });
  tl.set(".scribble-path", {
    stroke: randomColor,
    strokeWidth: scribbleWidthStart,
    drawSVG: "0% 0%",
  });
  tl.set(".transition-container", { pointerEvents: "all" });
  tl.set(".transition-screen", { background: randomColor });
  tl.to(".scribble-path", {
    duration: 0.8,
    drawSVG: "0% 100%",
    ease: "cubic-default-scribble",
  });
  tl.to(
    ".scribble-path",
    {
      strokeWidth: scribbleWidth,
      duration: 0.8,
      ease: "cubic-default-scribble",
    },
    "<",
  );
  tl.to(".transition-logo", { autoAlpha: 1 }, "-=0.4");
  tl.to(".transition-screen", {
    autoAlpha: 1,
    duration: 0.01,
  });
  return tl;
}

export function pageTransitionOut(): gsap.core.Timeline {
  const tl = gsap.timeline();
  tl.eventCallback("onComplete", () => {
    enableScroll();
  });
  tl.set(".transition-container", {
    pointerEvents: "all",
  });
  tl.set(".transition-screen", {
    autoAlpha: 1,
  });
  tl.set(".scribble-path", {
    drawSVG: "0% 100%",
    strokeWidth: scribbleWidth,
  });
  tl.set(".transition-logo", {
    autoAlpha: 1,
  });
  tl.to(".transition-screen", {
    autoAlpha: 0,
  });
  tl.to(".scribble-path", {
    duration: 0.8,
    drawSVG: "100% 100%",
    ease: "cubic-default-scribble",
  });
  tl.to(
    ".scribble-path",
    {
      strokeWidth: scribbleWidthStart,
      duration: 0.8,
      ease: "cubic-default-scribble",
    },
    "<",
  );
  tl.to(".transition-logo", { autoAlpha: 0 }, "-=0.9");
  tl.to(
    ".transition-container",
    {
      pointerEvents: "none",
    },
    "-=0.5",
  );
  return tl;
}
