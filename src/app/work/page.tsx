"use client";
import React, { FC, useState } from "react";
import { backstreetFont } from "@/src/utlis/fonts";
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
                <h1 className="md:text-[7.7vw] text-[16.7vw] font-medium leading-[1.1] tracking-[-0.02em]">
                  Pro
                  <span
                    className={`${backstreetFont.className} text-[#fb923c]`}
                  >
                    j
                  </span>
                  ects
                </h1>
              </Text>
              <ArrowBadge
                animation="scale"
                animateOnView={false}
                delay={1}
                className="bg-[#fb923c]"
              />
            </div>
            <Text delay={0.9}>
              <p className="text-[calc(clamp(2em,8vw,3.5em)*0.75)] text-gray-800 max-w-[50ch] leading-[1.3] mt-8">
                {phrase}
              </p>
            </Text>
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
        <WhatIMade source="Work" />
      </main>
      <div className="footer_trigger w-full mb-[100vh] pointer-events-none" />
    </>
  );
};

export default WorkPage;
