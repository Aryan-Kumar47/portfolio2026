"use client";
import React, { FC } from "react";
import { projects } from "./projects";
import Project from "./Project";
import Model from "./Model";
import Work from "./Work";
import { backstreetFont } from "@/src/utlis/fonts";
import { useCursorContext } from "@/src/context/CursorContext";
import { useScrollRotate } from "@/src/hooks/useScrollRotate";
import Text from "../UI/Text";
import ArrowIcon from "../UI/ArrowIcon";
import Magnetic from "../UI/Magnetic";
import TransitionLink from "../TransitionLink";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineWorkOutline } from "react-icons/md";
import AnimatedLine from "../UI/AnimatedLine";
import ProjectCard from "./ProjectCard";

interface WhatIMakeProps {
  source?: "Home" | "Work";
}

export interface ModelInterface {
  active: boolean;
  index: number;
}

const WhatIMade: FC<WhatIMakeProps> = ({ source = "Home" }) => {
  const { hide, visible } = useCursorContext();
  useScrollRotate({
    trigger: ".o-ui-arrow-project",
    fromRotate: 90,
    toRotate: 75,
    fromY: 0,
    toY: -150,
  });
  const [model, setModel] = React.useState<ModelInterface>({
    active: false,
    index: 0,
  });
  return (
    <section
      aria-label="Projects"
      className={`flex flex-col overflow-hidden select-none ${source === "Work" ? "mt-0" : ""}`}
      style={{ padding: "clamp(80px, 12vh, 160px) clamp(20px, 4vw, 80px)" }}
    >
      <div className={`w-full flex flex-col gap-12 relative`}>
        {source === "Home" && (
          <div className="flex flex-row gap-5 sm:gap-10 px-10 justify-between items-center md:px-[calc(5%+64px+32px)] relative">
            <Text>
              <h2
                className="leading-[1.2] tracking-[-0.02em]"
                style={{ fontSize: "clamp(3rem, 7.7vw, 8rem)" }}
              >
                Pro
                <span className={`${backstreetFont.className} text-[#455CE9]`}>
                  j
                </span>
                ects
              </h2>
            </Text>
            <ArrowIcon className="rotate-90 o-ui-arrow-project min-w-9 min-h-9 absolute right-10 top-10" />
          </div>
        )}

        <div className="flex flex-col h-fit items-center justify-center px-10 relative md:px-[calc(5%+64px+32px)]">
          <div
            onMouseEnter={hide}
            onMouseLeave={visible}
            className="w-full flex-col md:flex hidden list justify-center relative"
          >
            {(source === "Home" ? projects.slice(0, 4) : projects).map(
              (project, index) => {
                return (
                  <div
                    key={`home_project_${index}`}
                    className="overflow-hidden item w-full transition-all duration-200 ease-linear hideCursor "
                  >
                    {index === 0 && <AnimatedLine className="bg-gray-200" />}
                    <Project {...project} setModel={setModel} index={index} />
                    <AnimatedLine className="bg-gray-200" />
                  </div>
                );
              },
            )}
          </div>
          <div className="block md:hidden w-full">
            <ul className="flex flex-col gap-y-12">
              {(source === "Home" ? projects.slice(0, 4) : projects).map(
                (project, index) => {
                  return <ProjectCard key={index} {...project} />;
                },
              )}
            </ul>
          </div>
          {source === "Home" && (
            <div className="w-full flex justify-center items-center md:px-[calc(7vw+5rem)] px-[3vw] mt-32 mb-11">
              <Magnetic className="w-full md:max-w-[80%] max-w-[90%] ">
                <TransitionLink
                  customText="Explore More"
                  href={"/work"}
                  className="flex justify-center py-[1.8rem] px-2 w-full rounded-[5rem] group relative border"
                >
                  <div className="text-center uppercase text-xs">
                    <p>More Works</p>
                  </div>

                  <div className="absolute top-1/2 right-0 -translate-x-1/4 -translate-y-1/2 w-[3.6rem] flex justify-center rounded-full bg-[#3b3b3b] items-center h-[3.6rem] overflow-hidden group-hover:scale-110 transition-all duration-[0.8s] ease-[cubic-bezier(.18,.71,.11,1)]">
                    <div className="relative w-full h-full">
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[0.8s] ease-[cubic-bezier(.18,.71,.11,1)] group-hover:translate-x-[300%]">
                        <MdOutlineWorkOutline size={20} color="#fff" />
                      </span>
                      <span className="absolute top-1/2 left-1/2 -translate-x-[300%] -translate-y-1/2 transition-all duration-[0.8s] ease-[cubic-bezier(.18,.71,.11,1)] group-hover:translate-x-[-50%]">
                        <IoIosArrowRoundForward size={20} color="#fff" />
                      </span>
                    </div>
                  </div>
                </TransitionLink>
              </Magnetic>
            </div>
          )}
        </div>
      </div>
      <Model model={model} projects={projects} />
    </section>
  );
};

export default WhatIMade;
