"use client";
import { FC } from "react";
import Text from "@/src/components/UI/Text";
import WhatIMade from "@/src/components/work/WhatIMade";
import Footer from "@/src/components/Footer";

const ArchivePage: FC = () => {
  return (
    <>
      <main className="w-full bg-white relative">
        <div className="section default-header">
          <div className="container-custom medium">
            <div className="w-full flex items-center justify-between gap-x-4">
              <Text delay={0.9}>
                <h1 className="text-[calc(clamp(3.25em,7vw,8em)*.875)] leading-[1.06] tracking-[-0.02em]">
                  Archive
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
        <WhatIMade source="Archive" />
      </main>
      <Footer />
    </>
  );
};

export default ArchivePage;
