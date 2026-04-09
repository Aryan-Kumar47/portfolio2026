"use client";
import React, { FC, useState } from "react";
import ArrowBadge from "@/src/components/UI/ArrowBadge";
import Text from "@/src/components/UI/Text";
import Footer from "@/src/components/Footer";
import WorkProjectList from "@/src/components/work/WorkProjectList";
import WorkProjectGrid from "@/src/components/work/WorkProjectGrid";
import ViewToggle, { ViewMode } from "@/src/components/work/ViewToggle";
import WhatIMade from "@/src/components/work/WhatIMade";

const phrase =
  "Each project is a demonstration of my skills and capabilities in both front-end and back-end development.";

const WorkPage: FC = () => {
  const [view, setView] = useState<ViewMode>("list");

  return (
    <>
      <Footer />
      <main className={`w-full bg-white relative`}>
        {/* Header */}
        <div className="section default-header">
          <div className="container-custom medium">
            <div className="w-full flex items-center justify-between gap-x-4">
              <Text delay={0.9}>
                {/* <h1 className="text-[calc(clamp(3.25em,7vw,8em)*.875)] leading-[1.06] tracking-[-0.02em]">
                  <span>Creating next level</span> <br />
                  <span>digital products</span>
                </h1> */}
                <h1 className="text-[calc(clamp(3.25em,7vw,8em)*.875)] leading-[1.06] tracking-[-0.02em]">
                  Projects
                </h1>
                {/* <h1 className="md:text-[7.7vw] text-[16.7vw] leading-[1.1] tracking-[-0.02em]">
                  Pro
                  <span
                    className={`${backstreetFont.className} text-[#fb923c]`}
                  >
                    j
                  </span>
                  ects
                </h1> */}
              </Text>
              {/* <ArrowBadge
                animation="scale"
                animateOnView={false}
                delay={1}
                className="bg-[#fb923c]"
              /> */}
            </div>
            {/* <Text delay={0.9}>
              <p className="text-[calc(clamp(2em,8vw,3.5em)*0.75)] text-gray-800 max-w-[50ch] leading-[1.3] mt-8">
                {phrase}
              </p>
            </Text> */}
          </div>
        </div>

        {/* Toggle bar */}
        {/* <div className="container-custom medium flex justify-end mb-(--gap-padding)">
          <ViewToggle view={view} onChange={setView} />
        </div> */}

        {/* Project list / grid */}
        {/* <section
          aria-label="All Projects"
          className="container-custom pb-(--section-padding)"
        >
          {view === "list" ? <WorkProjectList /> : <WorkProjectGrid />}
        </section> */}
        <div className="w-full container-custom hidden md:block">
          <div className="w-full flex pb-(--gap-padding)">
            <div className="pl-(--container-padding) w-[44%]">
              <h5>Project</h5>
            </div>
            <div className="w-[20%]">
              <h5>Type</h5>
            </div>
            <div className="w-[22%]">
              <h5>Services</h5>
            </div>
            <div className="w-[14%] pr-(--container-padding)">
              <h5>Year</h5>
            </div>
          </div>
        </div>
        <WhatIMade source="Work" />
      </main>
      <div className="footer_trigger w-full mb-[100vh] pointer-events-none" />
    </>
  );
};

export default WorkPage;
