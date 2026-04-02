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

const Text: React.FC<TextProps> = ({
  children,
  animateOnScroll = true,
  delay = 0,
  once = false,
  scrub = false,
  type = "lines",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const splitRef = useRef<SplitText[]>([]);
  const targets = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRef.current = [];
      targets.current = [];

      let elements: HTMLElement[] = [];

      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children) as HTMLElement[];
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        const split = SplitText.create(element, {
          type: type === "linesWords" ? "lines,words" : type,
          mask: "lines",
          linesClass: "line++",
          wordsClass: "word++",
        });

        splitRef.current.push(split);

        if (type === "lines") {
          targets.current.push(...(split.lines as HTMLElement[]));
        }

        if (type === "words") {
          targets.current.push(...(split.words as HTMLElement[]));
        }

        if (type === "linesWords") {
          targets.current.push(...(split.words as HTMLElement[]));
        }
      });

      gsap.set(targets.current, { y: "120%" });

      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: type === "words" ? 0.03 : 0.1,
        ease: "power4.out",
        delay,
      };

      if (animateOnScroll) {
        gsap.to(targets.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once,
            scrub,
          },
        });
      } else {
        gsap.to(targets.current, animationProps);
      }

      return () => {
        splitRef.current.forEach((split) => split?.revert());
      };
    },
    {
      scope: containerRef,
      dependencies: [type, animateOnScroll, delay],
    },
  );

  if (React.Children.count(children) === 1) {
    const child = children as ReactElement<any>;
    return React.cloneElement(child, {
      ref: containerRef,
    });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
};

export default Text;
