"use client";
import Image from "next/image";
import { FC, use, useEffect, useRef, useState } from "react";
import { IProject, projects } from "@/src/components/work/projects";
import RoundedButton from "@/src/components/UI/RoundedButton";

import Text from "@/src/components/UI/Text";
import { useScrollParallaxY } from "@/src/hooks/useScrollParallaxY";
import ImageHover from "@/src/components/UI/ImageHover";
import SocialFooter from "@/src/components/Footer/SocialFooter";
import FooterCurve from "@/src/components/Footer/FooterCurve";
import TransitionLink from "@/src/components/TransitionLink";
import { notFound } from "next/navigation";
import CursorElement, {
  CursorElementHandle,
} from "@/src/components/UI/CursorElement";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page: FC<PageProps> = ({ params }) => {
  const { id } = use(params);

  const [project, setProject] = useState<IProject>();
  const [nextProject, setNextProject] = useState<IProject>();
  const labelRef = useRef<CursorElementHandle>(null);
  const dotRef = useRef<CursorElementHandle>(null);

  useEffect(() => {
    const index = projects.findIndex(
      (object) =>
        object.title.toLowerCase() === id.replace(/_/g, " ").toLowerCase(),
    );

    if (index === -1) {
      notFound();
    }
    setProject(projects[index]);

    const next = projects[(index + 1) % projects.length];
    setNextProject(next);
  }, [id]);

  // Defer ScrollTriggers until project data loads — otherwise
  // positions are calculated on an empty page (wrong height)
  const ready = !!project;

  useScrollParallaxY({
    trigger: ready ? ".link-button" : "",
    fromY: 50,
    toY: -50,
  });
  useScrollParallaxY({
    trigger: ready ? ".link-button-2" : "",
    fromY: 50,
    toY: -50,
  });
  useScrollParallaxY({
    trigger: ready ? ".image-wraper" : "",
    fromY: "60%",
    toY: "-10%",
    start: "-100px bottom",
    end: "top center",
  });

  const handleMouseEnter = (e: React.MouseEvent) => {
    labelRef.current?.show();
    dotRef.current?.show();
    dotRef.current?.moveTo(e.clientX, e.clientY);
    labelRef.current?.moveTo(e.clientX, e.clientY);
  };
  const handleMouseLeave = () => {
    labelRef.current?.hide();
    dotRef.current?.hide();
  };
  const onMove = (e: React.MouseEvent) => {
    dotRef.current?.moveTo(e.clientX, e.clientY);
    labelRef.current?.moveTo(e.clientX, e.clientY);
  };

  return (
    <>
      <main className={`relative bg-white`}>
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
            <div className="flex flex-wrap">
              <div className="block w-full md:mb-0 mb-[8vw] md:w-[calc(33.333%-var(--gap-padding))] md:mr-[calc(var(--gap-padding)*1.5)]">
                <h5>Industry</h5>
                <div className="my-[1.75em] mb-[1.5em] h-px w-full bg-(--color-border)"></div>
                <ul>
                  <li className="inline-flex">
                    <p className="font-[450] text-[1em] leading-[1.66] text-(--text)">
                      {project?.industry}
                    </p>
                  </li>
                </ul>
              </div>

              <div className="block w-full md:mb-0 mb-[8vw] md:w-[calc(33.333%-var(--gap-padding))] md:mr-[calc(var(--gap-padding)*1.5)]">
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

              <div className="block w-full md:mb-0 mb-[8vw] md:w-[calc(33.333%-var(--gap-padding))]">
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
        {project?.image && (
          <div className="container-custom w-full">
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
                    height={800}
                    width={800}
                    loading="lazy"
                    alt={`${project?.title ?? "Project"} screenshot`}
                    style={{ backgroundColor: project.bgColor }}
                  />
                </ImageHover>
              </div>
              <div className="link-button w-fit absolute top-0 right-0 flex justify-end items-end -translate-y-1/2 -translate-x-1/2 z-2">
                <RoundedButton
                  target="_blank"
                  backgroundColor="var(--color-blue)"
                  hoverBackgroundColor="var(--color-blue-dark)"
                  rel="noopener noreferrer"
                  href={
                    project?.meta?.links?.website ||
                    project?.meta?.links?.android
                  }
                  customText={"View Project Live"}
                  className="rounded-[50%] w-[clamp(9em,12vw,11em)] h-[clamp(9em,12vw,11em)]"
                >
                  <span className="text-white">View</span>
                </RoundedButton>
              </div>
            </div>
          </div>
        )}
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
          <div style={{ backgroundColor: project?.bgColor }}>
            <div className="section">
              <div className="flex flex-wrap relative container-custom w-full gap-x-(--gap-padding)">
                {project?.mobileImages.map((item, i) => (
                  <MobileImage
                    key={`mobile_imgaes_${i}`}
                    item={item}
                    title={project.title}
                    index={i}
                    bgColor={project.bgColor}
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
          </div>
        )}
      </main>
      {ready && (
        <FooterCurve
          bgColor={project?.mobileImages ? project?.bgColor : undefined}
        />
      )}
      <footer
        className={`select-none h-full bg-(--color-dark) text-white w-full relative`}
      >
        <div className="section pb-0!">
          <div className="flex footer items-end relative w-full shadow-[0px_5px_0px_5px_var(--color-dark)]">
            <div className="w-full">
              <div className="flex flex-col container-custom medium">
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={onMove}
                >
                  <TransitionLink
                    href={`/work/${nextProject?.title.replaceAll(" ", "_").toLowerCase()}`}
                    className="pb-[13em] md:pb-[calc(var(--section-padding)/1.25)] flex flex-col relative"
                  >
                    <div className="w-full relative block">
                      <p className="text-center mb-[calc(var(--section-padding)/4)]">
                        Next Case
                      </p>
                      <h2 className="text-[calc(clamp(3.25em,7vw,8em)*1)] text-center">
                        {nextProject?.title}
                      </h2>
                    </div>
                    <div className="w-[70vw] sm:w-[50vw] md:w-[40vw] lg:w-[calc(clamp(10em,27.5vw,25em)*0.9)] absolute left-1/2 bottom-0 -translate-x-1/2 z-2 overflow-hidden">
                      <div className="ab w-full translate-y-[60%] md:translate-y-[73%]">
                        <div className="w-full h-full image-wraper">
                          <Image
                            src={`/${nextProject?.image}`}
                            height={800}
                            width={800}
                            alt={`${nextProject?.title} preview`}
                            className="object-cover w-full h-full"
                            style={{ backgroundColor: nextProject?.bgColor }}
                          />
                        </div>
                      </div>
                    </div>
                  </TransitionLink>
                </div>
                <div className="row pb-[calc(var(--section-padding)*1)]  sm:pb-[calc(var(--section-padding)*0.75)] lg:pb-[calc(var(--section-padding)*0.475)]">
                  <div className="block w-full h-px bg-(--color-border-light)" />{" "}
                </div>
                <div className="flex justify-center pb-[calc(var(--section-padding)/5)]">
                  <div className="md:w-fit w-full">
                    <RoundedButton
                      href={"/work"}
                      customText={"More Work."}
                      className="rounded-full h-[4.25em]"
                      border
                    >
                      <div className="text-white">All work</div>
                    </RoundedButton>
                  </div>
                </div>
              </div>
              <SocialFooter />
            </div>
          </div>
        </div>
        <CursorElement
          ref={dotRef}
          followDuration={0.85}
          className="w-24 h-24 bg-(--color-blue) rounded-full z-30"
        />
        <CursorElement ref={labelRef} followDuration={0.7} className="z-30">
          <p>Next Case</p>
        </CursorElement>
      </footer>
      {/* <Footer /> */}
    </>
  );
};
const MobileImage = ({
  item,
  title,
  index,
  bgColor,
}: {
  item: string;
  title: string;
  index: number;
  bgColor?: string;
}) => {
  const imageClass = `mobile-image-${index}`;
  useScrollParallaxY({
    trigger: `.${imageClass}`,
    fromY: 80 + index * 60,
    toY: -80,
  });

  return (
    <div className={`flex flex-1 ${imageClass}`}>
      <div className="overflow-hidden rounded-xl w-full">
        <Image
          className="w-full object-contain object-center"
          src={`/${item}`}
          height={800}
          width={800}
          alt={`${title ?? "Project"}_screenshot`}
          style={{ backgroundColor: bgColor }}
        />
      </div>
    </div>
  );
};

export default Page;
