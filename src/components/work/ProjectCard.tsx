"use client";

import React from "react";
import { createProjectSlug, IProject } from "./projects";
import TransitionLink from "../TransitionLink";
import Image from "next/image";

interface ProjectProps extends IProject {
  source?: "Home" | "Work" | "Archive";
  index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  image,
  role,
  year,
  meta,
  bgColor,
  source,
  industry,
  index,
}) => {
  return source === "Archive" ? (
    <>
      <div
        className={`flex w-full ${
          index === 0 ? "border-y" : "border-b"
        } border-(--color-border)  cursor-pointer  group`}
      >
        <TransitionLink
          className={`pt-[calc(var(--section-padding)/3.5)] pb-[calc(var(--section-padding)/3)] flex w-full sm:items-center justify-between items-start`}
          target={source === "Archive" ? "_blank" : "_self"}
          href={
            source === "Archive"
              ? `${meta?.links?.website || meta?.links?.android}`
              : createProjectSlug(title)
          }
        >
          <div className="pl-(--container-padding) w-[44%] group-hover:opacity-33 group-hover:translate-x-[calc(var(--container-padding)*-0.1)] transition-all duration-300 ease-(--ease)">
            <h4
              className={`text-[clamp(1.55em,2.3vw,2.5em)] py-[0.1em] text-(--color-dark) leading-[1.1] tracking-[-0.01em]`}
            >
              {title}
            </h4>
          </div>
          <div className="text-[1em] w-[20%] block group-hover:opacity-33 group-hover:translate-x-[calc(var(--container-padding)*0.1)] transition-all duration-300 ease-(--ease)">
            <span>{industry}</span>
          </div>
          <div className="text-[1em] w-[22%] sm:block hidden group-hover:opacity-33 group-hover:translate-x-[calc(var(--container-padding)*0.1)] transition-all duration-300 ease-(--ease)">
            <span>{role}</span>
          </div>
          <div className="pr-[calc(var(--container-padding))] w-[14%] text-[1em] block group-hover:opacity-33 group-hover:translate-x-[calc(var(--container-padding)*0.1)] transition-all duration-300 ease-(--ease)">
            <span>{year}</span>
          </div>
        </TransitionLink>
      </div>
    </>
  ) : (
    <li className="w-full pb-[calc(var(--section-padding)*1)] px-[calc(var(--container-padding)*0.25)]">
      <TransitionLink
        href={`/work/${title.replaceAll(" ", "_").toLowerCase()}`}
        className="block overflow-hidden no-underline"
      >
        {/* Image */}
        <div
          className="relative w-full overflow-hidden aspect-square"
          style={{ backgroundColor: bgColor }}
        >
          <Image
            src={`/${image}`}
            height={800}
            width={800}
            alt={`${title}_preview`}
            className="w-full aspect-square bg-cover bg-center"
            style={{ backgroundColor: bgColor }}
          />
        </div>

        {/* Title */}
        <div className="pt-(--gap-padding) pb-[calc(var(--gap-padding)/6)]">
          <h4 className="text-2xl md:text-3xl font-semibold">
            <span className="relative">{title}</span>
          </h4>
          <div className="h-px w-full bg-(--color-border) my-[calc(var(--gap-padding)/2)]" />
        </div>

        {/* Meta */}
        <div className="flex justify-between text-sm">
          <p>{role}</p>
          <p>{year}</p>
        </div>
      </TransitionLink>
    </li>
  );
};

export default ProjectCard;
