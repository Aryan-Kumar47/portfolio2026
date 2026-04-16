"use client";
import { FC } from "react";
import AnimatedLine from "@/src/components/UI/AnimatedLine";
import Text from "@/src/components/UI/Text";
import AboutSection from "@/src/components/AboutSection";
import Loose from "@/src/components/UI/Loose";
import Footer from "@/src/components/Footer/Footer";

interface pageProps {}
const phrase = `I’m Aryan Kumar, I design and engineer full-stack web & mobile applications.`;
const About: FC<pageProps> = ({}) => {
  return (
    <>
      <main className={`w-full relative bg-white`}>
        <div className="section default-header about-header">
          <div className="container-custom medium">
            <Text delay={0.9}>
              <h1 className="text-[calc(clamp(3.25em,7vw,8em)*.875)] leading-[1.06] tracking-[-0.02em]">
                {phrase}
              </h1>
            </Text>
          </div>
        </div>
        <div className="container-custom medium">
          <AnimatedLine
            className="bg-(--color-gray)"
            animateOnScroll={false}
            delay={1}
          />
        </div>
        <AboutSection source="About" />
        <div className="section pt-0!">
          <Loose
            images={[
              "/me/18.jpeg",
              "/me/8.jpeg",
              "/me/9.jpeg",
              "/me/19.png",
              "/me/13.png",
              "/me/14.jpg",
              "/me/15.jpg",
            ]}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
