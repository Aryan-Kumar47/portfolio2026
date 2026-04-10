import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React, { ReactElement, ReactNode, useRef } from "react";

interface TextProps {
  children: ReactNode | ReactNode[];
  animateOnScroll?: boolean;
  delay?: number;
  once?: boolean;
  scrub?: boolean;
  type?: "lines" | "words" | "linesWords";
}

gsap.registerPlugin(ScrollTrigger, SplitText);

const SPLIT_TYPE_MAP = {
  lines: "lines",
  words: "words",
  linesWords: "lines,words",
} as const;

const Text: React.FC<TextProps> = ({
  children,
  animateOnScroll = true,
  delay = 0,
  once = false,
  scrub = false,
  type = "lines",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const elements = containerRef.current.hasAttribute("data-copy-wrapper")
        ? (Array.from(containerRef.current.children) as HTMLElement[])
        : [containerRef.current];

      const splits: SplitText[] = [];
      const targets: HTMLElement[] = [];

      elements.forEach((element) => {
        const split = SplitText.create(element, {
          type: SPLIT_TYPE_MAP[type],
          mask: "lines",
          linesClass: "line++",
          wordsClass: "word++",
        });

        splits.push(split);

        const items =
          type === "lines"
            ? (split.lines as HTMLElement[])
            : (split.words as HTMLElement[]);
        targets.push(...items);
      });

      gsap.set(targets, { y: "120%" });

      gsap.to(targets, {
        y: "0%",
        duration: 0.5,
        stagger: type === "words" ? 0.03 : 0.1,
        ease: "power3.out",
        delay,
        ...(animateOnScroll && {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once,
            scrub,
          },
        }),
      });

      return () => {
        splits.forEach((split) => split.revert());
      };
    },
    {
      scope: containerRef,
      dependencies: [type, animateOnScroll, delay, once, scrub],
    },
  );

  if (React.Children.count(children) === 1) {
    const child = children as ReactElement<any>;
    return React.cloneElement(child, { ref: containerRef });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
};

export default Text;
