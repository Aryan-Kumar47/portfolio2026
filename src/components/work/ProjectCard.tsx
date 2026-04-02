"use client";

import React, { useEffect, useRef } from "react";
import { IProject } from "./projects";
import TransitionLink from "../TransitionLink";
import ParallaxImage from "../UI/ParallaxImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectCard: React.FC<IProject> = ({
  name,
  image,
  role,
  year,
  link,
  bgColor,
}) => {
  const cardRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = cardRef.current;

    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <li ref={cardRef} className="w-full md:w-1/2 opacity-0">
      <TransitionLink
        href={`/work/${name.replaceAll(" ", "_")}`}
        className="group block overflow-hidden text-[#3b3b3b] no-underline"
      >
        {/* Image */}
        <div
          className="relative w-full overflow-hidden"
          style={{ backgroundColor: bgColor }}
        >
          <ParallaxImage startY={-40} endY={40}>
            <div
              className="w-full aspect-square bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              style={{
                backgroundImage: `url("${image}")`,
              }}
            />
          </ParallaxImage>
        </div>

        {/* Title */}
        <div className="mt-4">
          <h4 className="text-2xl md:text-3xl font-semibold">
            <span className="relative">{name}</span>
          </h4>
          <div className="h-px w-full bg-neutral-700 my-3" />
        </div>

        {/* Meta */}
        <div className="flex justify-between text-sm text-[#3b3b3b]">
          <p>{role}</p>
          <p>{year}</p>
        </div>
      </TransitionLink>
    </li>
  );
};

export default ProjectCard;
