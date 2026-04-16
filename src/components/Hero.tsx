import ParallaxImage from "./UI/ParallaxImage";
import Image from "next/image";
import { geraldine } from "../utlis/fonts";
import Text from "./UI/Text";

export default function Hero() {
  return (
    <>
      <section
        aria-label="Introduction"
        className=" bg-(--color-dark) h-screen flex flex-col pt-(--section-padding) sm:pt-[calc(var(--section-padding)/2)] pb-[5vh] justify-between px-[4vw] relative"
      >
        <div className="flex flex-col justify-between items-center sm:items-start text-white gap-y-[calc(var(--gap-padding)/4)]">
          <Text animateOnScroll={false} delay={0.8}>
            <h1 className="text-[calc(clamp(3.25em,7vw,7em)*1.5)] leading-[1.2] text-white">
              <span className={`${geraldine.className} pl-1`}>design,</span>{" "}
              <span className={``}>Code</span>
            </h1>
          </Text>
          <div className="max-w-[33ch]">
            <Text animateOnScroll={false} delay={1}>
              <p className="text-[0.8em] sm:text-start text-center">
                I’m Aryan Kumar — a full-stack developer building scalable web &
                mobile applications. Focused on performance, clean architecture,
                and real-world reliability.
              </p>
            </Text>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-[40%] sm:-translate-y-[47%] -translate-x-1/2 w-full xl:w-fit md:w-[80%] lg:px-0 px-(--gap-padding)">
          <div className="mask-ellipse overflow-hidden">
            <ParallaxImage
              className="bg-(--color-dark-dark)"
              startY={-100}
              endY={100}
            >
              <Image
                src="/me/10.png"
                alt="Aryan Kumar — Software Developer"
                width={1000}
                height={1000}
                className="w-full h-full object-cover object-center sm:mt-20 -mt-10 bg-(--color-dark-dark)!"
              />
            </ParallaxImage>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-end justify-between gap-y-[calc(var(--gap-padding)/4)] text-white">
          <div className="max-w-[33ch]">
            <Text animateOnScroll={false} delay={1}>
              <p className="text-[0.8em] flex flex-col justify-center items-center sm:items-end mt-10">
                <span>10+ projects</span>
                <span>2+ years experience</span>
              </p>
            </Text>
          </div>

          <Text animateOnScroll={false} delay={0.8}>
            <p className="text-[calc(clamp(3.25em,7vw,7em)*1.4)] leading-[1.2] text-white">
              <span className={`${geraldine.className} pl-3`}>solve,</span>{" "}
              <span className={``}>Deliver</span>
            </p>
          </Text>
        </div>
      </section>
    </>
  );
}
