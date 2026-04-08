"use client";
import React, { FC, useEffect, useRef } from "react";
import { ModelInterface } from "./WhatIMade";
import { IProject } from "./projects";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import { IoIosArrowRoundForward } from "react-icons/io";

interface ModelProps {
  model: ModelInterface;
  projects: IProject[];
}

const scaleAnimation: Variants = {
  initial: {
    scale: 0,
    x: "-50%",
    y: "-50%",
  },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.3,
      ease: [0.7, 0, 0.3, 1] as [number, number, number, number],
    },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.3,
      ease: [0.7, 0, 0.3, 1] as [number, number, number, number],
    },
  },
};

const Model: FC<ModelProps> = ({ model, projects }) => {
  const { active, index } = model;

  const container = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!container.current || !cursor.current || !cursorLabel.current) return;

    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.3,
      transition: "var(--ease)",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.3,
      transition: "var(--ease)",
    });

    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.35,
      transition: "var(--ease)",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.35,
      transition: "var(--ease)",
    });

    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.3,
      transition: "var(--ease)",
    });
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.3,
      transition: "var(--ease)",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      moveContainerX(clientX);
      moveContainerY(clientY);

      moveCursorX(clientX);
      moveCursorY(clientY);

      moveCursorLabelX(clientX);
      moveCursorLabelY(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Image Modal */}
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        className="h-96 w-96 fixed top-1/2 left-1/2 
        flex items-center justify-center 
        overflow-hidden pointer-events-none shadow-lg z-20"
      >
        <div
          className="h-full w-full absolute transition-all duration-300 ease-(--ease)"
          style={{ top: `${index * -100}%` }}
        >
          {projects.map((project, i) => (
            <div
              key={`modal_${i}`}
              className="relative h-full flex items-center justify-center"
              style={{ backgroundColor: project.bgColor }}
            >
              <div className="">
                <Image
                  src={`/${project.image}`}
                  // src={"/test.jpg"}
                  height={2160}
                  width={2160}
                  alt="project-image"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        className="w-20 h-20 bg-(--color-dark) fixed left-1/2 top-1/2 
        rounded-full
        pointer-events-none z-30"
      />

      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        className="fixed left-1/2 top-1/2 
        pointer-events-none z-30"
      >
        <IoIosArrowRoundForward size={20} color="var(--color-white)" />
      </motion.div>
    </>
  );
};

export default Model;
