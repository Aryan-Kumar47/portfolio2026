"use client";
import { FC, useEffect, useRef } from "react";
import { ModelInterface } from "./WhatIMade";
import { IProject } from "./projects";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import { IoIosArrowRoundForward } from "react-icons/io";

interface ModelProps {
  model: ModelInterface;
  projects: IProject[];
  source?: "Home" | "Work" | "Archive";
}

const EASE: [number, number, number, number] = [0.7, 0, 0.3, 1];

const scaleAnimation: Variants = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.3, ease: EASE },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.3, ease: EASE },
  },
};

/** Create a paired quickTo(left) + quickTo(top) for a single element */
function createPositionQuickTo(
  el: HTMLElement,
  duration: number,
) {
  const moveX = gsap.quickTo(el, "left", { duration, ease: "power3.out" });
  const moveY = gsap.quickTo(el, "top", { duration, ease: "power3.out" });
  return (x: number, y: number) => {
    moveX(x);
    moveY(y);
  };
}

const Model: FC<ModelProps> = ({ model, projects, source }) => {
  const { active, index } = model;
  const isArchive = source === "Archive";

  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorEl = cursorRef.current;
    const labelEl = cursorLabelRef.current;
    if (!cursorEl || !labelEl) return;

    const moveCursor = createPositionQuickTo(cursorEl, 0.35);
    const moveLabel = createPositionQuickTo(labelEl, 0.3);

    // Container quickTo is only needed when image preview exists
    const containerEl = containerRef.current;
    const moveContainer = containerEl
      ? createPositionQuickTo(containerEl, 0.3)
      : null;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      moveContainer?.(clientX, clientY);
      moveCursor(clientX, clientY);
      moveLabel(clientX, clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isArchive]);

  const animateState = active ? "open" : "closed";

  return (
    <>
      {/* Image preview — hidden for Archive */}
      {!isArchive && (
        <motion.div
          ref={containerRef}
          variants={scaleAnimation}
          initial="initial"
          animate={animateState}
          className="h-96 w-96 fixed top-1/2 left-1/2 flex items-center justify-center overflow-hidden pointer-events-none shadow-lg z-20"
        >
          <div
            className="h-full w-full absolute transition-[top] duration-500 ease-(--ease)"
            style={{ top: `${index * -100}%` }}
          >
            {projects.map((project) => (
              <div
                key={`modal_${project.title}`}
                className="relative h-full flex items-center justify-center"
                style={{ backgroundColor: project.bgColor }}
              >
                <Image
                  src={`/${project.image}`}
                  height={2160}
                  width={2160}
                  alt={`${project.title} preview`}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Cursor dot */}
      <motion.div
        ref={cursorRef}
        variants={scaleAnimation}
        initial="initial"
        animate={animateState}
        className="w-20 h-20 bg-(--color-dark) fixed left-1/2 top-1/2 rounded-full pointer-events-none z-30"
      />

      {/* Cursor label */}
      <motion.div
        ref={cursorLabelRef}
        variants={scaleAnimation}
        initial="initial"
        animate={animateState}
        className="fixed left-1/2 top-1/2 pointer-events-none z-30"
      >
        <IoIosArrowRoundForward
          size={30}
          color="var(--color-white)"
          className="-rotate-45"
        />
      </motion.div>
    </>
  );
};

export default Model;
