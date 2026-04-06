"use client";
import Image from "next/image";
import React, { FC, use, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { IProject, projects } from "@/src/components/work/projects";
import { GilroyLight } from "@/src/utlis/fonts";
import RoundedButton from "@/src/components/UI/RoundedButton";
import Footer from "@/src/components/FooterDennis";
interface pageProps {
  params: {
    id: string;
  };
}

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page: FC<PageProps> = ({ params }) => {
  const { id } = use(params); // unwrap the promise

  const [project, setProject] = useState<IProject>();

  useEffect(() => {
    const ele = projects.find(
      (object) => object.name === id.replace(/-/g, " "),
    );

    setProject(ele);
  }, [id]);

  return (
    <>
      <Footer />
      <div className={`relative bg-white pb-48`}>
        <div
          className="flex justify-center items-center w-full pt-[calc(clamp(5em,21vh,12em)*1.33)]
  max-[720px]:pt-[calc(12vh*1.95)]"
        >
          <RoundedButton
            backgroundColor="transparent"
            hoverBackgroundColor="#fb923c"
            href="/work"
            className=" md:h-20 md:w-20 h-16 w-16 rounded-full"
            border
          >
            <RxCross2 size={20} color="#000" />
          </RoundedButton>
        </div>
        <div className="relative w-full flex justify-center items-center flex-col">
          <div className="mt-5 ">
            <h1
              className="font-bold leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(3rem, 8.9vw, 10rem)" }}
            >
              {project?.name}
            </h1>
          </div>
          <div className="w-full flex justify-between flex-wrap md:px-[calc(7vw+5rem)] px-[calc(3vw+1rem)] items-center mt-10">
            <div className="text-sm font-bold text-black">
              <p className="text-gray-600">Role</p>
              <p className="mt-4">{project?.role}</p>
            </div>
            <div className="text-sm font-bold text-black">
              <p className="text-gray-600">Year</p>
              <p className="mt-4">{project?.year}</p>
            </div>
            <div className="text-sm font-bold text-black">
              <p className="text-gray-600">Type</p>
              <p className="mt-4">{project?.type}</p>
            </div>
          </div>
        </div>
        <div className="mt-20 flex gap-20 md:flex-row flex-col-reverse md:px-[calc(7vw+5rem)] px-[calc(3vw+1rem)] justify-between">
          <div className="md:w-1/2 w-full mt-7">
            <div className="text-sm text-black font-semibold mb-10">
              <p className="text-gray-600 mb-4">Description</p>
              <p className="">{project?.description}</p>
            </div>
            {/* <div className="text-sm text-black font-semibold mb-10">
              <p className="text-gray-600 mb-4">Purpose</p>
              <p className="">{project?.purpose}</p>
            </div> */}
            <div className="text-sm text-black font-semibold mb-10">
              <p className="text-gray-600 mb-4">Technologies</p>
              <p className="">{project?.technologies}</p>
            </div>
            <div className="text-sm text-black font-semibold mb-10">
              <p className="text-gray-600 mb-4">Products</p>
              <p className="">{project?.product}</p>
            </div>
          </div>
          <div className="relative">
            <div
              className={` w-full absolute -top-20 right-0 flex justify-end items-end translate-y-10 md:translate-x-16 translate-x-4 ${
                project?.link === "" ? "hidden" : "block"
              }`}
            >
              <RoundedButton
                backgroundColor="#455CE9"
                hoverBackgroundColor="#334BD3"
                href={project?.link}
                className="rounded-[50%] h-32 w-32"
              >
                <div className="px-9 py-3 z-1 text-sm text-center text-white font-bold text-nowrap flex justify-center items-center">
                  Live <HiMiniArrowUpRight size={13} color="#fff" />
                </div>
              </RoundedButton>
            </div>
            <Image
              className=" w-full h-fit object-cover object-center"
              src={`/${project?.image}`}
              height={1000}
              width={1000}
              alt={`${project?.name} project screenshot`}
            />
          </div>
        </div>
      </div>
      <div className="footer_trigger w-full mb-[100vh] pointer-events-none" />
    </>
  );
};

export default Page;
