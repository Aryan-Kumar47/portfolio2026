"use client";

import React from "react";
import { IProject } from "./projects";
import TransitionLink from "../TransitionLink";
import Image from "next/image";

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
    <li className="w-full pb-[calc(var(--section-padding)*1)] px-[calc(var(--container-padding)*0.25)]">
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
          <Image
            src={`/${image}`}
            height={2160}
            width={2160}
            alt={`${title}_preview`}
            className="w-full aspect-square bg-cover bg-center"
          />
          {/* <div
            className="w-full aspect-square bg-cover bg-center"
            style={{
              backgroundImage: `url("${image}")`,
            }}
          /> */}
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
