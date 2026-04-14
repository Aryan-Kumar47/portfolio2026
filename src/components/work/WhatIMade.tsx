"use client";
import { FC, useMemo, useState, useCallback } from "react";
import { archiveProject, projects } from "./projects";
import Project from "./Project";
import Model from "./Model";
import { useCursorContext } from "@/src/context/CursorContext";
import { useScrollRotate } from "@/src/hooks/useScrollRotate";
import Magnetic from "../UI/Magnetic";
import TransitionLink from "../TransitionLink";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineWorkOutline } from "react-icons/md";
import ProjectCard from "./ProjectCard";
import { useMediaQuery } from "@/src/hooks/useMediaQuery";

interface WhatIMadeProps {
  source?: "Home" | "Work" | "Archive";
}

export interface ModelInterface {
  active: boolean;
  index: number;
}

const WhatIMade: FC<WhatIMadeProps> = ({ source = "Home" }) => {
  const { hide, visible } = useCursorContext();
  const [model, setModel] = useState<ModelInterface>({
    active: false,
    index: 0,
  });

  const isHome = source === "Home";

  // Only run scroll-rotate on Home where the arrow element exists
  useScrollRotate(
    isHome
      ? {
          trigger: ".o-ui-arrow-project",
          fromRotate: 90,
          toRotate: 75,
          fromY: 0,
          toY: -150,
        }
      : { trigger: "" },
  );

  // Compute display list once
  const allWorks = source === "Archive" ? archiveProject : projects;
  const isLg = useMediaQuery("(min-width: 1024px)");

  const displayWorks = useMemo(() => {
    const slice = isLg ? 4 : 2;
    return isHome ? allWorks.slice(0, slice) : allWorks;
  }, [isHome, allWorks, isLg]);

  const handleModelUpdate = useCallback(
    (value: ModelInterface) => setModel(value),
    [],
  );

  return (
    <section
      aria-label="Selected Projects"
      className="flex flex-col overflow-hidden select-none"
    >
      <div className="w-full flex flex-col relative">
        {/* Section label — Home only */}
        {isHome && (
          <div className="w-full container-custom medium">
            <div className="pb-(--gap-padding)">
              <h5>Recent work</h5>
            </div>
          </div>
        )}

        <div className="flex flex-col h-fit items-center justify-center relative w-full container-custom">
          {/* Desktop — list rows */}
          <div
            onMouseEnter={hide}
            onMouseLeave={visible}
            className="w-full flex-col lg:flex hidden list justify-center relative pb-[calc(var(--section-padding)/2)]"
          >
            {displayWorks.map((project, index) => (
              <div
                key={`project_${project.title}`}
                className="overflow-hidden item w-full"
              >
                <Project
                  {...project}
                  setModel={handleModelUpdate}
                  index={index}
                  source={source}
                />
              </div>
            ))}
          </div>

          {/* Mobile — cards */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-12 w-full lg:hidden">
            {displayWorks.map((project) => (
              <ProjectCard
                key={`card_${project.title}`}
                {...project}
                source={source}
              />
            ))}
          </ul>

          {/* "More Works" CTA — Home only */}
          {isHome && <MoreWorksButton />}
        </div>
      </div>

      <Model source={source} model={model} projects={allWorks} />
    </section>
  );
};

/** Extracted to avoid re-rendering with parent state changes */
const MoreWorksButton: FC = () => (
  <div className="w-full flex justify-center items-center md:px-[calc(7vw+5rem)] px-[3vw] pb-[calc(var(--section-padding)/2)]">
    <Magnetic className="w-full md:max-w-[80%] max-w-[90%]">
      <TransitionLink
        customText="Explore More"
        href="/work"
        className="flex justify-center py-[1.8rem] px-[2.5em] w-full rounded-[5rem] group relative shadow-[inset_0px_0px_0px_1px_var(--color-border)]"
      >
        <p className="text-center uppercase text-xs">More Works</p>

        <div className="absolute top-1/2 right-0 -translate-x-1/4 -translate-y-1/2 w-[3.6rem] h-[3.6rem] flex justify-center items-center rounded-full bg-[#3b3b3b] overflow-hidden group-hover:scale-110 transition-transform duration-300 ease-(--ease)">
          <div className="relative w-full h-full">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-(--ease) group-hover:translate-x-[300%]">
              <MdOutlineWorkOutline size={20} color="#fff" />
            </span>
            <span className="absolute top-1/2 left-1/2 -translate-x-[300%] -translate-y-1/2 transition-transform duration-300 ease-(--ease) group-hover:-translate-x-1/2">
              <IoIosArrowRoundForward size={20} color="#fff" />
            </span>
          </div>
        </div>
      </TransitionLink>
    </Magnetic>
  </div>
);

export default WhatIMade;
