"use client";
import { FC } from "react";
import TransitionLink from "../TransitionLink";
import { IProject } from "./projects";

interface ProjectProps extends IProject {
  index: number;
  setModel: Function;
}

const Project: FC<ProjectProps> = ({
  name,
  role,
  year,
  product,
  index,
  setModel,
}) => {
  return (
    <div
      onMouseEnter={() => {
        setModel({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModel({ active: false, index: index });
      }}
      className={` flex w-full ${
        index === 0 ? "border-y-[0.5px]" : "border-b-[0.5px]"
      } border-(--color-border)  cursor-pointer  group`}
    >
      <TransitionLink
        className={`px-4 py-14 flex w-full sm:items-center items-start justify-between`}
        href={`/work/${name.replaceAll(" ", "_")}`}
      >
        <div className=" group-hover:opacity-50 group-hover:-translate-x-4 transition-all duration-300 ease-[cubic_bezier(0.76_0_0.24_2)]">
          <h3 className="text-[calc(clamp(2em,8vw,3.5em)*0.75)] text-(--color-dark) font-extrabold leading-[1.1] tracking-[-0.01em]">
            {name}
          </h3>
          <p className="text-sm text-(--color-gray) sm:block hidden">
            {product}
          </p>
        </div>
        <div className="text-sm text-(--color-gray) sm:block hidden group-hover:opacity-50 group-hover:translate-x-4 transition-all duration-300 ease-[cubic_bezier(0.76_0_0.24_2)]">
          <p className="">{role}</p>
          <span className="">{year}</span>
        </div>
        {/* <button className="group border sm:hidden block rounded-full p-4 border-(--color-gray)">
          <i className="flex justify-center items-center">
            <svg
              className="group-hover:fill-(black) fill-blue-400"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.292893 17.2929C-0.0976311 17.6834 -0.0976311 18.3166 0.292893 18.7071C0.683418 19.0976 1.31658 19.0976 1.70711 18.7071L0.292893 17.2929ZM18.9706 1.02944C18.9706 0.477153 18.5228 0.0294373 17.9706 0.029437L8.97056 0.0294378C8.41828 0.0294375 7.97056 0.477153 7.97056 1.02944C7.97056 1.58172 8.41828 2.02944 8.97056 2.02944L16.9706 2.02944L16.9706 10.0294C16.9706 10.5817 17.4183 11.0294 17.9706 11.0294C18.5228 11.0294 18.9706 10.5817 18.9706 10.0294L18.9706 1.02944ZM1.70711 18.7071L18.6777 1.73654L17.2635 0.322331L0.292893 17.2929L1.70711 18.7071Z"
                fill="inherit"
              ></path>
            </svg>
          </i>
        </button> */}
      </TransitionLink>
    </div>
  );
};

export default Project;
