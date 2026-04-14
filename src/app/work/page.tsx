"use client";
import { FC, useState } from "react";
import Text from "@/src/components/UI/Text";
import Footer from "@/src/components/Footer";
import WhatIMade from "@/src/components/work/WhatIMade";
import RoundedButton from "@/src/components/UI/RoundedButton";

const phrase =
  "Each project is a demonstration of my skills and capabilities in both front-end and back-end development.";

const WorkPage: FC = () => {
  return (
    <>
      <Footer />
      <main className={`w-full bg-white relative`}>
        <div className="section default-header">
          <div className="container-custom medium">
            <div className="w-full flex items-center justify-between gap-x-4">
              <Text delay={0.9}>
                <h1 className="text-[calc(clamp(3.25em,7vw,8em)*.875)] leading-[1.06] tracking-[-0.02em]">
                  Projects
                </h1>
              </Text>
            </div>
          </div>
        </div>

        <div className="w-full container-custom hidden md:block">
          <div className="w-full flex pb-(--gap-padding)">
            <div className="pl-(--container-padding) w-[44%]">
              <h5>Client</h5>
            </div>
            <div className="w-[20%]">
              <h5>Industry</h5>
            </div>
            <div className="w-[22%]">
              <h5>Role</h5>
            </div>
            <div className="w-[14%] pr-(--container-padding)">
              <h5>Year</h5>
            </div>
          </div>
        </div>
        <WhatIMade source="Work" />
        <div className="flex justify-center items-center pb-[calc(var(--section-padding)*0.75)]">
          <RoundedButton
            href={"/archive"}
            customText={"More Work."}
            className="rounded-full h-20 w-44"
          >
            <div className="text-white">Archive</div>
          </RoundedButton>
        </div>
      </main>
      <div className="footer_trigger w-full mb-[100vh] pointer-events-none" />
    </>
  );
};

export default WorkPage;
