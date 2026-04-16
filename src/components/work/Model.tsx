"use client";
import { FC, useEffect, useRef } from "react";
import { ModelInterface } from "./WhatIMade";
import { IProject } from "./projects";
import Image from "next/image";
import gsap from "gsap";
import { IoIosArrowRoundForward } from "react-icons/io";
import CursorElement, { CursorElementHandle } from "../UI/CursorElement";

interface ModelProps {
  model: ModelInterface;
  projects: IProject[];
  source?: "Home" | "Work" | "Archive";
}

const Model: FC<ModelProps> = ({ model, projects, source }) => {
  const { active, index } = model;
  const isArchive = source === "Archive";

  const imageRef = useRef<CursorElementHandle>(null);
  const dotRef = useRef<CursorElementHandle>(null);
  const labelRef = useRef<CursorElementHandle>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Mouse tracking — move all 3 CursorElements
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      imageRef.current?.moveTo(e.clientX, e.clientY);
      dotRef.current?.moveTo(e.clientX, e.clientY);
      labelRef.current?.moveTo(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Scale in/out
  useEffect(() => {
    if (active) {
      imageRef.current?.show();
      dotRef.current?.show();
      labelRef.current?.show();
    } else {
      imageRef.current?.hide();
      dotRef.current?.hide();
      labelRef.current?.hide();
    }
  }, [active]);

  // Image slide
  useEffect(() => {
    if (!sliderRef.current) return;
    gsap.to(sliderRef.current, {
      yPercent: index * -100,
      duration: 0.7,
      ease: "power3.out",
      overwrite: true,
    });
  }, [index]);

  return (
    <>
      {/* Image preview */}
      {!isArchive && (
        <CursorElement
          ref={imageRef}
          followDuration={0.7}
          className="h-96 w-96 flex items-center justify-center overflow-hidden shadow-lg z-20"
        >
          <div ref={sliderRef} className="h-full w-full absolute top-0 left-0">
            {projects.map((project) => (
              <div
                key={`modal_${project.title}`}
                className="relative h-full flex items-center justify-center"
                style={{ backgroundColor: project.bgColor }}
              >
                <Image
                  src={`/${project.image}`}
                  height={800}
                  width={800}
                  alt={`${project.title} preview`}
                  className="object-contain"
                  style={{ backgroundColor: project.bgColor }}
                />
              </div>
            ))}
          </div>
        </CursorElement>
      )}

      {/* Cursor dot */}
      <CursorElement
        ref={dotRef}
        followDuration={0.6}
        className="w-20 h-20 bg-(--color-dark) rounded-full z-30"
      />

      {/* Cursor label */}
      <CursorElement ref={labelRef} followDuration={0.51} className="z-30">
        <div className="text-white">View</div>
      </CursorElement>
    </>
  );
};

export default Model;
