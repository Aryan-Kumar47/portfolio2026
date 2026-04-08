"use client";
import React, { FC } from "react";
import { projects } from "./projects";
import Project from "./Project";
import Model from "./Model";
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
import ArrowBadge from "../UI/ArrowBadge";

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
      aria-label="Selected Projects"
      className={`flex flex-col overflow-hidden pb-[calc(var(--section-padding)*0.75)] select-none`}
    >
      <div className={`w-full flex flex-col relative`}>
        {source === "Home" && (
          <div className="w-full container-custom medium">
            <div className="w-full pb-(--gap-padding)">
              <div className="">
                <h5>Recent work</h5>
              </div>
            </div>
            {/* <div
              className={
                "flex w-full flex-row gap-5 sm:gap-10 justify-between items-center relative "
              }
            >
              <Text>
                <h2 className="md:text-[7.7vw] leading-[1.2] tracking-[-0.02em] text-[16.7vw]">
                  Pro
                  <span
                    className={`${backstreetFont.className} text-[#455CE9]`}
                  >
                    j
                  </span>
                  ect<span className={``}>s</span>
                </h2>
              </Text>
              <ArrowIcon className="rotate-90 o-ui-arrow-project min-w-9 min-h-9 absolute right-10 top-10" />
            </div> */}
          </div>
        )}

        <div
          className={`flex flex-col h-fit items-center justify-center relative w-full container-custom`}
        >
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
                    className={`overflow-hidden item w-full transition-all duration-200 ease-linear `}
                  >
                    <Project
                      {...project}
                      setModel={setModel}
                      index={index}
                      source={source}
                    />
                  </div>
                );
              },
            )}
          </div>
          <div className="block md:hidden w-full">
            <ul className="flex flex-col gap-y-12 w-full">
              {(source === "Home" ? projects.slice(0, 4) : projects).map(
                (project, index) => {
                  return <ProjectCard key={index} {...project} />;
                },
              )}
            </ul>
          </div>
          {source === "Home" && (
            <div className="w-full flex justify-center items-center md:px-[calc(7vw+5rem)] px-[3vw] pt-[calc(var(--section-padding)/2)]">
              <Magnetic className="w-full md:max-w-[80%] max-w-[90%] ">
                <TransitionLink
                  customText="Explore More"
                  href={"/work"}
                  className="flex justify-center py-[1.8rem] px-[2.5em] w-full rounded-[5rem] group relative shadow-[inset_0px_0px_0px_1px_var(--color-border)]"
                >
                  <div className="text-center uppercase text-xs">
                    <p>More Works</p>
                  </div>

                  <div className="absolute top-1/2 right-0 -translate-x-1/4 -translate-y-1/2 w-[3.6rem] flex justify-center rounded-full bg-[#3b3b3b] items-center h-[3.6rem] overflow-hidden group-hover:scale-110 transition-all duration-[0.8s] ease-(--ease)">
                    <div className="relative w-full h-full">
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[0.8s] ease-(--ease) group-hover:translate-x-[300%]">
                        <MdOutlineWorkOutline size={20} color="#fff" />
                      </span>
                      <span className="absolute top-1/2 left-1/2 -translate-x-[300%] -translate-y-1/2 transition-all duration-[0.8s] ease-(--ease) group-hover:translate-x-[-50%]">
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
