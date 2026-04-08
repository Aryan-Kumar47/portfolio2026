"use client";
import { FC, useState } from "react";
import { projects, IProject } from "./projects";
import Model from "./Model";
import AnimatedLine from "../UI/AnimatedLine";
import TransitionLink from "../TransitionLink";
import { useCursorContext } from "@/src/context/CursorContext";
import type { ModelInterface } from "./WhatIMade";

/**
 * WorkProjectList — full list view for /work.
 * Shows ALL projects with extra columns: name | type | product | year.
 * Includes the cursor-following hover image preview (Model).
 */
const WorkProjectList: FC = () => {
  const { hide, visible } = useCursorContext();
  const [model, setModel] = useState<ModelInterface>({
    active: false,
    index: 0,
  });

  return (
    <div
      onMouseEnter={hide}
      onMouseLeave={visible}
      className="w-full flex flex-col"
    >
      <AnimatedLine className="bg-(--color-border)" />
      {projects.map((project, index) => (
        <WorkRow
          key={`work_row_${index}`}
          project={project}
          index={index}
          setModel={setModel}
        />
      ))}
      <Model model={model} projects={projects} />
    </div>
  );
};

interface WorkRowProps {
  project: IProject;
  index: number;
  setModel: (m: ModelInterface) => void;
}

const WorkRow: FC<WorkRowProps> = ({ project, index, setModel }) => {
  return (
    <>
      <TransitionLink
        href={`/work/${project.name.replaceAll(" ", "_")}`}
        onMouseEnter={() => setModel({ active: true, index })}
        onMouseLeave={() => setModel({ active: false, index })}
        className="group grid grid-cols-[2fr_1.5fr_1.5fr_auto] items-center w-full py-10 md:py-14 gap-x-6 transition-opacity duration-500"
      >
        <h3 className="text-[calc(clamp(2em,6vw,4em))] text-(--color-dark) font-medium leading-[1.1] tracking-[-0.02em] group-hover:opacity-40 group-hover:-translate-x-2 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
          {project.name}
        </h3>
        <span className="hidden md:block text-xs uppercase tracking-[0.05em] text-(--color-gray) group-hover:opacity-40 transition-opacity duration-500">
          {project.type}
        </span>
        <span className="hidden md:block text-xs uppercase tracking-[0.05em] text-(--color-gray) group-hover:opacity-40 transition-opacity duration-500">
          {project.product}
        </span>
        <span className="text-xs uppercase tracking-[0.05em] text-(--color-gray) text-right group-hover:opacity-40 group-hover:translate-x-2 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
          {project.year}
        </span>
      </TransitionLink>
      <AnimatedLine className="bg-(--color-border)" />
    </>
  );
};

export default WorkProjectList;
