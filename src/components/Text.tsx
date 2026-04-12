"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import {
  editorialItalic,
  editorialLightItalic,
  geraldine,
} from "../utlis/fonts";
import Image from "next/image";
import ParallaxImage from "./UI/ParallaxImage";
import Text from "./UI/Text";
import ArrowIcon from "./UI/ArrowIcon";
import EthosTitle from "./UI/EthosTitle";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Test() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightImages = useRef<HTMLDivElement>(null);
  const maskContainerRef = useRef<HTMLDivElement>(null);
  const maskImageRef = useRef<HTMLDivElement>(null);
  const maskHeaderRef = useRef<HTMLParagraphElement>(null);
  const maskSubHeaderRef = useRef<HTMLParagraphElement>(null);
  const mainHeader = useRef<HTMLDivElement>(null);

  const skills = [
    [
      {
        id: 1,
        name: "Nextjs",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      },
      null,
      {
        id: 2,
        name: "Reactjs",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      null,
    ],
    [
      null,
      {
        id: 3,
        name: "React Native",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      null,
      {
        id: 4,
        name: "Typescript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
    ],
    [
      {
        id: 5,
        name: "Javascript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      null,
      {
        id: 6,
        name: "Nodejs",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      null,
    ],
    [
      null,
      {
        id: 7,
        name: "Mongodb",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        id: 8,
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      null,
    ],
    [
      {
        id: 9,
        name: "MySql",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      },
      null,
      null,
      {
        id: 10,
        name: "Express",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
    ],
  ];

  useGSAP(
    () => {
      if (
        !spotlightImages.current ||
        !maskImageRef.current ||
        !maskContainerRef.current ||
        !maskHeaderRef.current ||
        !mainHeader.current
      )
        return;

      const imagesEl = spotlightImages.current;
      const maskEl = maskContainerRef.current;
      const maskImgEl = maskImageRef.current;
      const headerEl = maskHeaderRef.current;
      const mainHeaderEl = mainHeader.current;

      const spotlightHeight = imagesEl.offsetHeight;
      const viewportHeight = window.innerHeight;
      const initialOffset = spotlightHeight * 0.05;
      const totalMovement = spotlightHeight + initialOffset + viewportHeight;

      // Split text
      const headerSplit = SplitText.create(headerEl, {
        type: "words",
        wordsClass: "spotlight-word",
      });

      gsap.set(headerSplit.words, { opacity: 0 });

      // Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".spotlight",
          start: "top top",
          end: `+=${viewportHeight * 5}`,
          pin: true,
          scrub: 1,
        },
      });
      ScrollTrigger.refresh();
      // tl.fromTo(
      //   mainHeaderEl,
      //   {
      //     scale: 1,
      //   },
      //   {
      //     scale: 0.8,
      //   },
      // );

      // 1️⃣ Image vertical movement
      tl.fromTo(
        imagesEl,
        { yPercent: 5 },
        {
          yPercent: -(totalMovement / spotlightHeight) * 100,
          ease: "none",
          duration: 1,
        },
        // "<",
      );

      // 2️⃣ Mask expand (CSS variable driven)
      tl.to(
        maskEl,
        {
          webkitMaskSize: "500%",
          maskSize: "500%",
          ease: "none",
          duration: 1,
        },
        0.5,
      );

      // 3️⃣ Mask inner scale
      tl.fromTo(
        maskImgEl,
        { scale: 1.5 },
        {
          scale: 1,
          ease: "none",
          duration: 1,
        },
        0.5,
      );

      // 4️⃣ Text reveal
      tl.to(
        headerSplit.words,
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          duration: 0.5,
        },
        1.5,
      );
      if (maskSubHeaderRef.current) {
        tl.to(
          maskSubHeaderRef.current,
          {
            opacity: 1,
            y: -120,
            ease: "power2.out",
            duration: 0.2,
          },
          2,
        );
      }

      return () => {
        tl.kill();
        headerSplit.revert();
        ScrollTrigger.refresh();
      };
    },
    { scope: containerRef, revertOnUpdate: true },
  );

  return (
    <>
      <div ref={containerRef} className="">
        <section className="spotlight relative h-[calc(100vh+30px)] overflow-hidden bg-(--color-dark) text-white">
          <div
            ref={mainHeader}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center"
          >
            <div className="space-y-[calc(var(--gap-padding)/5)]">
              <Text scrub>
                <h2
                  className={`text-[calc(clamp(3.25em,7vw,8em)*.875)] leading-[1.2] tracking-[-0.02em]`}
                >
                  Technologies{" "}
                </h2>
              </Text>
              <div className="flex justify-center items-center">
                <Text scrub>
                  <p className="w-[30ch] text-center">
                    My toolkit includes industry-standard frameworks,
                    programming languages, and development tools.
                  </p>
                </Text>
                {/* <Text scrub>
                  <span
                    className={`${geraldine.className} text-6xl md:text-8xl`}
                  >
                    I use
                  </span>
                </Text> */}
              </div>
            </div>
          </div>

          <div
            ref={spotlightImages}
            className="absolute top-0 left-0 h-[300vh] w-full flex flex-col justify-between translate-y-[5%] will-change-transform"
          >
            {skills.map((row, rowIndex) => (
              <div
                key={rowIndex + "_row"}
                className="w-full p-(--container-padding) overflow-hidden flex gap-(--gap-padding)"
              >
                {row.map((item, colIndex) =>
                  item ? (
                    <SkillCard key={colIndex + "_col"} skill={item} />
                  ) : (
                    <div
                      key={`empty-${rowIndex}-${colIndex}`}
                      className="flex-1 items-center justify-center md:flex aspect-5/7 overflow-hidden hidden"
                    >
                      <span>✦</span>
                    </div>
                  ),
                )}
              </div>
            ))}
          </div>

          {/* MASK SECTION */}
          <div ref={maskContainerRef} className="mask-container">
            <div
              ref={maskImageRef}
              className="h-full w-full bg-white will-change-transform"
            />

            <div className="absolute inset-0 flex items-center justify-center text-center px-(--container-padding)">
              <div className="relative">
                <p ref={maskHeaderRef} className={` text-(--color-text)`}>
                  What I Craft
                </p>
                <div
                  ref={maskSubHeaderRef}
                  className="relative opacity-0 translate-y-8"
                >
                  <ArrowIcon className="min-w-9 min-h-9 absolute left-1/2 -translate-x-1/2 top-0 rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

type Skill = {
  id: number;
  name: string;
  image: string;
};

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="flex flex-1 justify-center items-center flex-col">
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.7365 2.2126C11.8605 0.888695 12.9768 0.330057 13.8624 0.116958C14.3014 0.0113165 14.6737 -0.00700442 14.949 0.0020177C15.0867 0.00652712 15.1988 0.0178301 15.2807 0.0279131C15.313 0.0318944 15.3416 0.0358408 15.3617 0.0386001L15.3741 0.0402943L15.3783 0.04087C16.0379 0.0484616 16.797 0.350622 17.3916 0.840891C18.0014 1.34366 18.5 2.09752 18.5 3.03507C18.5 3.83707 18.359 4.57079 17.9534 5.18219C17.5431 5.80083 16.9041 6.23142 16.0322 6.5053C15.7687 6.58805 15.4881 6.44157 15.4053 6.17811C15.3226 5.91466 15.4691 5.63401 15.7325 5.55126C16.4488 5.32627 16.8686 5.00856 17.1201 4.62946C17.3763 4.24312 17.5 3.72967 17.5 3.03507C17.5 2.47601 17.2045 1.9827 16.7554 1.61245C16.2989 1.236 15.7463 1.04072 15.3529 1.04072C15.3059 1.04072 15.2535 1.0332 15.2413 1.03146L15.2392 1.03117L15.2228 1.02892C15.2031 1.02621 15.183 1.02344 15.1583 1.02041C15.0978 1.01295 15.0166 1.00477 14.9163 1.00148C14.7159 0.994914 14.4348 1.00777 14.0963 1.08921C13.4271 1.25026 12.4925 1.68936 11.4988 2.85979C10.8101 3.67101 10.3065 4.76534 9.97536 5.83899C9.64423 6.91265 9.5 7.91812 9.5 8.52262V18.5C9.5 18.7761 9.27614 19 9 19C8.72386 19 8.5 18.7761 8.5 18.5V8.5C8.5 7.89044 8.36315 6.87985 8.04994 5.80212C7.73649 4.7236 7.26002 3.62541 6.60957 2.81234C5.67156 1.63984 4.79382 1.20535 4.17355 1.04695C3.85939 0.966728 3.59912 0.954207 3.4143 0.960634C3.32178 0.963851 3.24679 0.971862 3.19086 0.979176C3.16804 0.982161 3.14948 0.984866 3.13092 0.987573L3.11517 0.989862L3.11381 0.990069C3.10404 0.991578 3.04952 0.999999 3 0.999999C2.64511 0.999999 2.13296 1.18867 1.70425 1.56379C1.28501 1.93063 1 2.42736 1 3C1 3.70055 1.11781 4.2201 1.3615 4.61C1.59883 4.98972 1.99137 5.30341 2.65811 5.52566C2.92009 5.61298 3.06167 5.89614 2.97434 6.15811C2.88702 6.42009 2.60386 6.56167 2.34189 6.47434C1.50863 6.19659 0.901174 5.76028 0.513501 5.14C0.132187 4.5299 0 3.79945 0 3C0 2.07264 0.464994 1.31937 1.04575 0.811211C1.60873 0.318601 2.33345 0.00910016 2.97178 0.000196062L4.42097 0.0780448C5.26919 0.29465 6.32844 0.860153 7.39043 2.18765C8.15351 3.14148 8.67703 4.37663 9.01021 5.52305C9.01282 5.53204 9.01542 5.54102 9.01801 5.55001C9.0186 5.54809 9.01919 5.54618 9.01978 5.54427C9.3733 4.39801 9.92852 3.16428 10.7365 2.2126Z"
          fill="rgba(255,255,255,10)"
        />
      </svg>
      <div className="relative p-10 w-40 h-40 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center cursor-pointer">
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition duration-300" />

        {/* Icon */}
        <Image
          src={skill.image}
          alt={skill.name}
          width={56}
          height={56}
          className="w-14 h-14 mb-3"
        />

        {/* Title */}
        <p className="text-white text-sm font-semibold tracking-wide text-nowrap">
          {skill.name}
        </p>
      </div>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rotate-180"
      >
        <path
          d="M10.7365 2.2126C11.8605 0.888695 12.9768 0.330057 13.8624 0.116958C14.3014 0.0113165 14.6737 -0.00700442 14.949 0.0020177C15.0867 0.00652712 15.1988 0.0178301 15.2807 0.0279131C15.313 0.0318944 15.3416 0.0358408 15.3617 0.0386001L15.3741 0.0402943L15.3783 0.04087C16.0379 0.0484616 16.797 0.350622 17.3916 0.840891C18.0014 1.34366 18.5 2.09752 18.5 3.03507C18.5 3.83707 18.359 4.57079 17.9534 5.18219C17.5431 5.80083 16.9041 6.23142 16.0322 6.5053C15.7687 6.58805 15.4881 6.44157 15.4053 6.17811C15.3226 5.91466 15.4691 5.63401 15.7325 5.55126C16.4488 5.32627 16.8686 5.00856 17.1201 4.62946C17.3763 4.24312 17.5 3.72967 17.5 3.03507C17.5 2.47601 17.2045 1.9827 16.7554 1.61245C16.2989 1.236 15.7463 1.04072 15.3529 1.04072C15.3059 1.04072 15.2535 1.0332 15.2413 1.03146L15.2392 1.03117L15.2228 1.02892C15.2031 1.02621 15.183 1.02344 15.1583 1.02041C15.0978 1.01295 15.0166 1.00477 14.9163 1.00148C14.7159 0.994914 14.4348 1.00777 14.0963 1.08921C13.4271 1.25026 12.4925 1.68936 11.4988 2.85979C10.8101 3.67101 10.3065 4.76534 9.97536 5.83899C9.64423 6.91265 9.5 7.91812 9.5 8.52262V18.5C9.5 18.7761 9.27614 19 9 19C8.72386 19 8.5 18.7761 8.5 18.5V8.5C8.5 7.89044 8.36315 6.87985 8.04994 5.80212C7.73649 4.7236 7.26002 3.62541 6.60957 2.81234C5.67156 1.63984 4.79382 1.20535 4.17355 1.04695C3.85939 0.966728 3.59912 0.954207 3.4143 0.960634C3.32178 0.963851 3.24679 0.971862 3.19086 0.979176C3.16804 0.982161 3.14948 0.984866 3.13092 0.987573L3.11517 0.989862L3.11381 0.990069C3.10404 0.991578 3.04952 0.999999 3 0.999999C2.64511 0.999999 2.13296 1.18867 1.70425 1.56379C1.28501 1.93063 1 2.42736 1 3C1 3.70055 1.11781 4.2201 1.3615 4.61C1.59883 4.98972 1.99137 5.30341 2.65811 5.52566C2.92009 5.61298 3.06167 5.89614 2.97434 6.15811C2.88702 6.42009 2.60386 6.56167 2.34189 6.47434C1.50863 6.19659 0.901174 5.76028 0.513501 5.14C0.132187 4.5299 0 3.79945 0 3C0 2.07264 0.464994 1.31937 1.04575 0.811211C1.60873 0.318601 2.33345 0.00910016 2.97178 0.000196062L4.42097 0.0780448C5.26919 0.29465 6.32844 0.860153 7.39043 2.18765C8.15351 3.14148 8.67703 4.37663 9.01021 5.52305C9.01282 5.53204 9.01542 5.54102 9.01801 5.55001C9.0186 5.54809 9.01919 5.54618 9.01978 5.54427C9.3733 4.39801 9.92852 3.16428 10.7365 2.2126Z"
          fill="rgba(255,255,255,10)"
        />
      </svg>
    </div>
  );
};
