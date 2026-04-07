import ParallaxImage from "./UI/ParallaxImage";
import Image from "next/image";
import { geraldine } from "../utlis/fonts";
import Text from "./UI/Text";

export default function Hero() {
  return (
    <>
      <section aria-label="Introduction" className=" bg-[#1C1D20] h-screen flex flex-col pt-[10vh] pb-[5vh] justify-between px-[4vw] relative">
        <div className="flex md:flex-row flex-col justify-between items-center text-white">
          <Text animateOnScroll={false} delay={0.8}>
            <h1 className="md:text-[8rem] text-[4rem] text-white">
              <span className={`${geraldine.className} pl-1`}>design,</span>{" "}
              <span className={``}>Code</span>
            </h1>
          </Text>
          <Text animateOnScroll={false} delay={1}>
            <p className="text-xs text-center">
              Hi, I'm Software developer from India <br /> I craft productions
              ready web & mobile apps
            </p>
          </Text>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full md:w-fit">
          <div className="mask-ellipse overflow-hidden">
            <ParallaxImage className="" startY={-100} endY={100}>
              <Image
                src="/me/10.png"
                alt="Aryan Kumar — Software Developer"
                width={1000}
                height={1000}
                className="w-full h-full object-cover object-center md:mt-20 -mt-10"
                unoptimized
              />
            </ParallaxImage>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between text-white z-1">
          <Text animateOnScroll={false} delay={1}>
            <p className="text-xs flex flex-col justify-center items-center gap-y-4 mt-10">
              <span className="text-center">
                I identify and eliminate bugs for living
              </span>
              <span>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7365 2.2126C11.8605 0.888695 12.9768 0.330057 13.8624 0.116958C14.3014 0.0113165 14.6737 -0.00700442 14.949 0.0020177C15.0867 0.00652712 15.1988 0.0178301 15.2807 0.0279131C15.313 0.0318944 15.3416 0.0358408 15.3617 0.0386001L15.3741 0.0402943L15.3783 0.04087C16.0379 0.0484616 16.797 0.350622 17.3916 0.840891C18.0014 1.34366 18.5 2.09752 18.5 3.03507C18.5 3.83707 18.359 4.57079 17.9534 5.18219C17.5431 5.80083 16.9041 6.23142 16.0322 6.5053C15.7687 6.58805 15.4881 6.44157 15.4053 6.17811C15.3226 5.91466 15.4691 5.63401 15.7325 5.55126C16.4488 5.32627 16.8686 5.00856 17.1201 4.62946C17.3763 4.24312 17.5 3.72967 17.5 3.03507C17.5 2.47601 17.2045 1.9827 16.7554 1.61245C16.2989 1.236 15.7463 1.04072 15.3529 1.04072C15.3059 1.04072 15.2535 1.0332 15.2413 1.03146L15.2392 1.03117L15.2228 1.02892C15.2031 1.02621 15.183 1.02344 15.1583 1.02041C15.0978 1.01295 15.0166 1.00477 14.9163 1.00148C14.7159 0.994914 14.4348 1.00777 14.0963 1.08921C13.4271 1.25026 12.4925 1.68936 11.4988 2.85979C10.8101 3.67101 10.3065 4.76534 9.97536 5.83899C9.64423 6.91265 9.5 7.91812 9.5 8.52262V18.5C9.5 18.7761 9.27614 19 9 19C8.72386 19 8.5 18.7761 8.5 18.5V8.5C8.5 7.89044 8.36315 6.87985 8.04994 5.80212C7.73649 4.7236 7.26002 3.62541 6.60957 2.81234C5.67156 1.63984 4.79382 1.20535 4.17355 1.04695C3.85939 0.966728 3.59912 0.954207 3.4143 0.960634C3.32178 0.963851 3.24679 0.971862 3.19086 0.979176C3.16804 0.982161 3.14948 0.984866 3.13092 0.987573L3.11517 0.989862L3.11381 0.990069C3.10404 0.991578 3.04952 0.999999 3 0.999999C2.64511 0.999999 2.13296 1.18867 1.70425 1.56379C1.28501 1.93063 1 2.42736 1 3C1 3.70055 1.11781 4.2201 1.3615 4.61C1.59883 4.98972 1.99137 5.30341 2.65811 5.52566C2.92009 5.61298 3.06167 5.89614 2.97434 6.15811C2.88702 6.42009 2.60386 6.56167 2.34189 6.47434C1.50863 6.19659 0.901174 5.76028 0.513501 5.14C0.132187 4.5299 0 3.79945 0 3C0 2.07264 0.464994 1.31937 1.04575 0.811211C1.60873 0.318601 2.33345 0.00910016 2.97178 0.000196062L4.42097 0.0780448C5.26919 0.29465 6.32844 0.860153 7.39043 2.18765C8.15351 3.14148 8.67703 4.37663 9.01021 5.52305C9.01282 5.53204 9.01542 5.54102 9.01801 5.55001C9.0186 5.54809 9.01919 5.54618 9.01978 5.54427C9.3733 4.39801 9.92852 3.16428 10.7365 2.2126Z"
                    fill="#fff"
                  />
                </svg>
              </span>
            </p>
          </Text>

          <Text animateOnScroll={false} delay={0.8}>
            <p className="md:text-[8rem] text-[4rem] text-white leading-[1.1]">
              <span className={`${geraldine.className} pl-3`}>solve,</span>{" "}
              <span className={``}>Deliver</span>
            </p>
          </Text>
        </div>
      </section>
    </>
  );
}
