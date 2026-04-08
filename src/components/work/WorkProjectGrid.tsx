"use client";
import { FC } from "react";
import Image from "next/image";
import { projects } from "./projects";
import TransitionLink from "../TransitionLink";
import ParallaxImage from "../UI/ParallaxImage";
import ProjectCard from "./ProjectCard";

/**
 * WorkProjectGrid — image-card grid view for /work.
 * Two columns of square cards. Each card: image + name + type/year meta.
 */
const WorkProjectGrid: FC = () => {
  return (
    <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-(--gap-padding) gap-y-[calc(var(--gap-padding)*2)]">
      {projects.map((project, index) => (
        <ProjectCard key={`grid_${index}`} {...project} />
        // <li key={`grid_${index}`}>
        //   <TransitionLink
        //     href={`/work/${project.name.replaceAll(" ", "_")}`}
        //     className="group block overflow-hidden text-(--color-dark) no-underline"
        //   >
        //     {/* Image */}
        //     <div
        //       className="relative w-full overflow-hidden"
        //       style={{ backgroundColor: project.bgColor }}
        //     >
        //       <ParallaxImage startY={-40} endY={40}>
        //         <div className="w-full aspect-square overflow-hidden">
        //           <Image
        //             src={`/${project.image}`}
        //             alt={`${project.name} project preview`}
        //             width={1200}
        //             height={900}
        //             className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        //             unoptimized
        //           />
        //         </div>
        //       </ParallaxImage>
        //     </div>

        //     {/* Meta */}
        //     <div className="mt-5 flex items-start justify-between">
        //       <h3 className="text-2xl md:text-3xl font-medium leading-[1.2] tracking-[-0.01em]">
        //         {project.name}
        //       </h3>
        //       <div className="flex flex-col items-end gap-y-1">
        //         <span className="text-xs uppercase tracking-[0.05em] text-(--color-gray)">
        //           {project.type}
        //         </span>
        //         <span className="text-xs uppercase tracking-[0.05em] text-(--color-gray)">
        //           {project.year}
        //         </span>
        //       </div>
        //     </div>
        //   </TransitionLink>
        // </li>
      ))}
    </ul>
  );
};

export default WorkProjectGrid;
