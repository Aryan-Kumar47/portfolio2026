"use client";
import Image from "next/image";
import React, { FC, use, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { RiArrowRightUpLine } from "react-icons/ri";
import { IProject, projects } from "@/src/components/work/projects";
import RoundedButton from "@/src/components/UI/RoundedButton";
import Footer from "@/src/components/Footer";
import Text from "@/src/components/UI/Text";
import ParallaxImage from "@/src/components/UI/ParallaxImage";
import { useScrollParallaxY } from "@/src/hooks/useScrollParallaxY";
import { div } from "framer-motion/client";
import ImageHover from "@/src/components/UI/ImageHover";
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
      (object) =>
        object.title.toLowerCase() === id.replace(/_/g, " ").toLowerCase(),
    );

    setProject(ele);
  }, [id]);
  useScrollParallaxY({
    trigger: ".link-button",
    fromY: 50,
    toY: -50,
  });
  useScrollParallaxY({
    trigger: ".link-button-2",
    fromY: 50,
    toY: -50,
  });

  return (
    <>
      <Footer />
      <div className={`relative bg-white`}>
        {/* <div
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
        </div> */}
        <div className="section default-header pb-0!">
          <div className="container-custom medium">
            <Text delay={0.9}>
              <h1 className="text-[calc(clamp(3.25em,7vw,8em)*.875)] leading-[1.06] tracking-[-0.02em]">
                {project?.title}
              </h1>
            </Text>
          </div>
        </div>
        <div className="pt-[calc(var(--section-padding)/1.75)] pb-[calc(var(--section-padding)/1.25)] -mt-px">
          <div className="container-custom medium">
            <div className="flex flex-wrap relative">
              <div className="block w-full md:mb-0 mb-[8vw] order-2 relative md:w-[calc(33.333%-var(--gap-padding))] md:mr-[calc(var(--gap-padding)*1.5)]">
                <h5>Industry</h5>
                <div className="my-[1.75em] mb-[1.5em] h-px w-full bg-(--color-border)"></div>
                <li className="inline-flex">
                  <p className="font-[450] text-[1em] leading-[1.66] text-(--text)">
                    {project?.industry}
                  </p>
                </li>
              </div>

              <div className="block w-full md:mb-0 mb-[8vw] order-2 relative md:w-[calc(33.333%-var(--gap-padding))] md:mr-[calc(var(--gap-padding)*1.5)]">
                <h5>Service</h5>
                <div className="my-[1.75em] mb-[1.5em] h-px w-full bg-(--color-border)"></div>
                <ul className="">
                  {project?.service?.map((item, i) => (
                    <li key={`service_${i}`} className="list-none py-0">
                      <p className="font-[450] text-[1em] leading-[1.66] text-(--text)">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="block w-full md:mb-0 mb-[8vw] order-2 relative md:w-[calc(33.333%-var(--gap-padding))]">
                <h5>Platforms</h5>
                <div className="my-[1.75em] mb-[1.5em] h-px w-full bg-(--color-border)"></div>
                <ul className="">
                  {project?.product?.map((item, i) => (
                    <li key={`platforms_${i}`} className="list-none py-0">
                      <p className="font-[450] text-[1em] leading-[1.66] text-(--text)">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-custom">
          <div className="relative">
            <div className="overflow-hidden">
              <ImageHover
                symbols={id.replace(/_/g, "").split("")}
                blockSize={30}
                clusterSize={5}
              >
                <Image
                  className=" w-full aspect-square sm:aspect-16/11 object-cover object-center"
                  src={`/${project?.image}`}
                  height={2160}
                  width={2160}
                  alt={`${project?.title ?? "Project"} screenshot`}
                />
              </ImageHover>
            </div>
            <div className="link-button w-fit absolute top-0 right-0 -translate-y-1/2 -translate-x-1/2 z-2">
              <RoundedButton
                target="_blank"
                backgroundColor="var(--color-blue)"
                hoverBackgroundColor="var(--color-blue-dark)"
                rel="noopener noreferrer"
                href={
                  project?.meta?.links?.website || project?.meta?.links?.android
                }
                customText={"View Project Live"}
                className="rounded-[50%] w-[clamp(9em,12vw,11em)] h-[clamp(9em,12vw,11em)]"
              >
                <span className="text-white">View</span>
              </RoundedButton>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container-custom">
            <div className="flex flex-wrap relative">
              {[
                project?.sections?.problem,
                project?.sections?.solution,
                project?.sections?.role,
              ].map((item, i) => {
                return (
                  <div
                    key={`sections_p_s_r_${i}`}
                    className={`block w-full relative sm:pt-0 ${i === 0 ? "pt-0" : "pt-[calc(var(--section-padding)*0.5)]"} md:w-[calc(33.333%-var(--gap-padding))] md:mr-[calc(var(--gap-padding)*1)]`}
                  >
                    <h5>0{i + 1}</h5>
                    <div className="my-[1.75em] mb-[1.5em] h-px w-full bg-(--color-border)"></div>
                    <h4 className="text-[clamp(1.55em,2.3vw,2.5em)] leading-[1.45] mb-[1em]">
                      {item?.heading}
                    </h4>
                    <p className="mt-[2em]">{item?.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="section pt-0!">
          <div className="container-custom">
            <div className="flex flex-wrap relative mb-[calc(var(--section-padding)/2)]">
              <div className="block w-full relative ">
                <h2 className="mb-[0.66em] text-[clamp(2.44em,3.75vw,3.375em)] font-medium leading-[1.065]">
                  {project?.sections?.techStack?.heading}
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap relative">
              {[
                {
                  heading: "Frontend",
                  items: project?.sections?.techStack?.frontend,
                },
                {
                  heading: "Backend",
                  items: project?.sections?.techStack?.backend,
                },
                {
                  heading: "Database",
                  items: project?.sections?.techStack?.database,
                },
              ].map((item, i) => {
                return (
                  <div
                    key={`sections_techstack_${i}`}
                    className={`block w-full relative sm:pt-0 ${i === 0 ? "pt-0" : "pt-[calc(var(--section-padding)*0.5)]"} md:w-[calc(33.333%-var(--gap-padding))] md:mr-[calc(var(--gap-padding)*1)]`}
                  >
                    <h5>0{i + 1}</h5>
                    <div className="my-[1.75em] mb-[1.5em] h-px w-full bg-(--color-border)"></div>
                    <h4 className="text-[clamp(1.55em,2.3vw,2.5em)] leading-[1.45] mb-[1em]">
                      {item.heading}
                    </h4>
                    <ul className="mt-[2em]">
                      {item.items &&
                        item.items?.map((t, index) => (
                          <li
                            key={`techstack_${index}`}
                            className="inline-flex"
                          >
                            <p className="font-[450] text-[1em] leading-[1.66] mb-[1em] text-(--text)">
                              {index > 0 && <span>, </span>}
                              {t}
                            </p>
                          </li>
                        ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {project?.mobileImages && project.meta?.links?.android && (
          <div
            style={{ backgroundColor: project?.bgColor }}
            className="section"
          >
            <div className="flex flex-wrap relative container-custom w-full gap-x-(--gap-padding)">
              {project?.mobileImages.map((item, i) => (
                <MobileImage
                  key={`mobile_imgaes_${i}`}
                  item={item}
                  title={project.title}
                  index={i}
                />
              ))}
            </div>
            <div className="link-button-2 w-fit absolute top-0 right-0 flex justify-end items-end -translate-y-1/2 -translate-x-1/2">
              <RoundedButton
                target="_blank"
                backgroundColor="var(--color-blue)"
                hoverBackgroundColor="var(--color-blue-dark)"
                rel="noopener noreferrer"
                href={project?.meta?.links?.android}
                customText={"View Project Live"}
                className="rounded-[50%] w-[clamp(9em,12vw,11em)] h-[clamp(9em,12vw,11em)]"
              >
                <span className="text-white">View</span>
              </RoundedButton>
            </div>
          </div>
        )}
      </div>
      <div className="footer_trigger w-full mb-[100vh] pointer-events-none" />
    </>
  );
};
const MobileImage = ({ item, title, index }: any) => {
  const imageClass = `mobile-image-${index}`;
  console.log(item, index);
  useScrollParallaxY({
    trigger: `.${imageClass}`,
    fromY: 80 + index * 60,
    toY: -80,
    // start: `top ${80 - index * 10}%`,
  });

  return (
    <div className={`flex flex-1 ${imageClass}`}>
      <div className="overflow-hidden rounded-xl w-full">
        <Image
          className="w-full object-contain object-center"
          src={`/${item}`}
          height={2160}
          width={2160}
          alt={`${title ?? "Project"}_screenshot`}
        />
      </div>
    </div>
  );
};

export default Page;
