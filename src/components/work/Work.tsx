"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { FC, useEffect } from "react";
import { IProject, projects } from "./projects";
import { usePathname, useRouter } from "next/navigation";
import ParallaxImage from "../UI/ParallaxImage";

interface ProjectProps {
  project: IProject;
  index: number;
}

const Work: FC<ProjectProps> = ({ project, index }) => {
  const router = useRouter();
  const pathname = usePathname();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.utils.toArray(".project-image").forEach((image: any) => {
      const innerImage = image.querySelector(".project-image-inner");
      const innerImageContent = image.querySelector(".project-image-content");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
        .to([innerImage, innerImageContent], {
          ease: "none",
          yPercent: 30,
          // scale: 1.2,
        });
    });
  }, []);
  return (
    <div
      onClick={() => {
        // TransitionLink(
        //   `/work/${project.name.replaceAll(" ", "-")}`,
        //   router,
        //   pathname
        // )
      }}
      className="w-full h-fit project-image overflow-hidden group mb-8"
    >
      <div className="w-full h-fit overflow-hidden relative">
        <div className="project-image-inner -translate-y-[20%]">
          <div className=" w-full h-full flex justify-center items-center">
            <ParallaxImage className="h-full w-full" startY={-100} endY={100}>
              <Image
                src={`/${project.image}`}
                width={300}
                height={300}
                alt="project"
                className="w-full h-full scale-125"
              />
            </ParallaxImage>
          </div>
        </div>
      </div>
      <div className="project-image-content h-fit mt-2 border-t pt-4 pb-6">
        <div className=" flex justify-between">
          <h1 className="text-black text-base">{project.name}</h1>
          <span className="text-black text-base ">{project.year}</span>
        </div>
      </div>
    </div>
  );
};

export default Work;
