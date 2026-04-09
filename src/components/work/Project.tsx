"use client";
import { FC } from "react";
import TransitionLink from "../TransitionLink";
import { IProject } from "./projects";

interface ProjectProps extends IProject {
  index: number;
  setModel: Function;
  source?: "Home" | "Work";
}

const Project: FC<ProjectProps> = ({
  name,
  role,
  year,
  product,
  index,
  setModel,
  type,
  source = "Home",
}) => {
  return (
    <div
      onMouseEnter={() => {
        setModel({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModel({ active: false, index: index });
      }}
      className={`flex w-full pt-[calc(var(--section-padding)/3.5)] pb-[calc(var(--section-padding)/3)] ${source === "Work" ? "max-h-[calc(clamp(1.75em,2.3vw,2.5em)+4.4em)]" : ""} ${
        index === 0 ? "border-y" : "border-b"
      } border-(--color-border)  cursor-pointer  group`}
    >
      <TransitionLink
        className={` flex w-full sm:items-center justify-between items-start`}
        href={`/work/${name.replaceAll(" ", "_")}`}
      >
        <div className="pl-(--container-padding) w-[44%] group-hover:opacity-33 group-hover:translate-x-[calc(var(--container-padding)*-0.1)] transition-all duration-300 ease-(--ease)">
          <h4
            className={`${source === "Home" ? "text-[calc(clamp(3.25em,7vw,8em)*0.75)]" : "text-[clamp(1.55em,2.3vw,2.5em)]"} py-[0.1em] text-(--color-dark) leading-[1.1] tracking-[-0.01em]`}
          >
            {name}
          </h4>
        </div>
        {source === "Work" && (
          <>
            <div className="text-[1em] w-[20%] sm:block hidden group-hover:opacity-33 group-hover:translate-x-[calc(var(--container-padding)*0.1)] transition-all duration-300 ease-(--ease)">
              <span>{type}</span>
            </div>
            <div className="text-[1em] w-[22%] sm:block hidden group-hover:opacity-33 group-hover:translate-x-[calc(var(--container-padding)*0.1)] transition-all duration-300 ease-(--ease)">
              <span>{role}</span>
            </div>
          </>
        )}
        <div className="pr-[calc(var(--container-padding))] w-[14%] text-[1em] sm:block hidden group-hover:opacity-33 group-hover:translate-x-[calc(var(--container-padding)*0.1)] transition-all duration-300 ease-(--ease)">
          <span>{year}</span>
        </div>
      </TransitionLink>
    </div>
  );
};

export default Project;
