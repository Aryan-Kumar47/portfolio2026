"use client";

import React from "react";
import { IProject } from "./projects";
import TransitionLink from "../TransitionLink";

interface ProjectProps extends IProject {
  source?: "Home" | "Work" | "Archive";
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  image,
  role,
  year,
  meta,
  bgColor,
  source,
}) => {
  return (
    <li className="w-full md:w-1/2 opacity-100">
      <TransitionLink
        target={source === "Archive" ? "_blank" : "_self"}
        href={
          source === "Archive"
            ? `${meta?.links?.website || meta?.links?.android}`
            : `/work/${title.replaceAll(" ", "_").toLowerCase()}`
        }
        className="block overflow-hidden no-underline"
      >
        {/* Image */}
        <div
          className="relative w-full overflow-hidden"
          style={{ backgroundColor: bgColor }}
        >
          <div
            className="w-full aspect-square bg-cover bg-center"
            style={{
              backgroundImage: `url("${image}")`,
            }}
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
