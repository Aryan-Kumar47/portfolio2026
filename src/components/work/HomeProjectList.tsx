"use client";
import { FC, useState } from "react";
import { projects, IProject } from "./projects";
import { backstreetFont } from "@/src/utlis/fonts";
import Text from "../UI/Text";
import ArrowIcon from "../UI/ArrowIcon";
import RoundedButton from "../UI/RoundedButton";
import AnimatedLine from "../UI/AnimatedLine";
import TransitionLink from "../TransitionLink";
import ProjectCard from "./ProjectCard";
import { useScrollRotate } from "@/src/hooks/useScrollRotate";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useCursorContext } from "@/src/context/CursorContext";
import { ModelInterface } from "./WhatIMade";
import Model from "./Model";

/**
 * HomeProjectList — compact variant for the homepage.
 * Shows the first 4 projects as simple rows: name | product | year.
 * No hover-image preview. Includes a "More Works" RoundedButton CTA.
 */
const HomeProjectList: FC = () => {
  useScrollRotate({
    trigger: ".o-ui-arrow-project",
    fromRotate: 90,
    toRotate: 75,
    fromY: 0,
    toY: -150,
  });

  const { hide, visible } = useCursorContext();
  const [model, setModel] = useState<ModelInterface>({
    active: false,
    index: 0,
  });

  const featured = projects.slice(0, 4);

  return (
    <section
      aria-label="Selected Projects"
      className="section flex flex-col overflow-hidden select-none"
    >
      <div className="container-custom w-full flex flex-col gap-[calc(var(--gap-padding)*2)] relative">
        {/* Heading */}
        <div className="flex w-full flex-row gap-5 sm:gap-10 justify-between items-center relative">
          <Text>
            <h2 className="md:text-[7.7vw] leading-[1.2] tracking-[-0.02em] text-[16.7vw]">
              Pro
              <span className={`${backstreetFont.className} text-[#455CE9]`}>
                j
              </span>
              ects
            </h2>
          </Text>
          <ArrowIcon className="rotate-90 o-ui-arrow-project min-w-9 min-h-9 absolute right-10 top-10" />
        </div>

        {/* Desktop list */}
        <div
          onMouseEnter={hide}
          onMouseLeave={visible}
          className="hidden md:flex w-full flex-col"
        >
          <AnimatedLine className="bg-(--color-border)" />
          {featured.map((project, index) => (
            <HomeRow
              key={`home_row_${index}`}
              project={project}
              index={index}
              setModel={setModel}
            />
          ))}
        </div>

        {/* Mobile cards */}
        <div className="block md:hidden w-full">
          <ul className="flex flex-col gap-y-12 w-full">
            {featured.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </ul>
        </div>

        {/* More Works CTA */}
        <div className="w-full flex justify-center items-center mt-16">
          <RoundedButton
            href="/work"
            customText="Explore More"
            backgroundColor="var(--color-dark)"
            hoverBackgroundColor="var(--color-blue)"
            className="rounded-full h-36 w-36 md:h-44 md:w-44"
          >
            <span className="text-white text-xs uppercase tracking-[0.05em] font-medium z-10 flex items-center gap-1">
              More Works
              <IoIosArrowRoundForward size={18} />
            </span>
          </RoundedButton>
        </div>
      </div>
      <Model model={model} projects={projects} />
    </section>
  );
};

interface HomeRowProps {
  project: IProject;
  index: number;
  setModel: (m: ModelInterface) => void;
}

/* Single home row — compact, no image preview */
const HomeRow: FC<HomeRowProps> = ({ project, index, setModel }) => (
  <>
    <TransitionLink
      href={`/work/${project.name.replaceAll(" ", "_")}`}
      onMouseEnter={() => setModel({ active: true, index: index })}
      onMouseLeave={() => setModel({ active: false, index: index })}
      className="group flex w-full items-center justify-between py-10 md:py-12 transition-opacity duration-500"
    >
      <h3 className="text-[calc(clamp(2em,5vw,3em))] text-(--color-dark) font-medium leading-[1.1] tracking-[-0.02em] group-hover:opacity-40 group-hover:-translate-x-2 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
        {project.name}
      </h3>
      <span className="hidden sm:block text-xs uppercase tracking-[0.05em] text-(--color-gray) group-hover:opacity-40 transition-opacity duration-500">
        {project.product}
      </span>
      <span className="hidden sm:block text-xs uppercase tracking-[0.05em] text-(--color-gray) group-hover:opacity-40 group-hover:translate-x-2 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
        {project.year}
      </span>
    </TransitionLink>
    <AnimatedLine className="bg-(--color-border)" />
  </>
);

export default HomeProjectList;
