import React from "react";
import EthosTitle from "./UI/EthosTitle";
// 9810fa
interface WhatIMakeI {
  source?: "Home" | "About";
}

export default function WhatIMake({ source = "Home" }: WhatIMakeI) {
  return (
    <div className="px-[4vw] relative flex justify-center items-center flex-col pb-10 text-black">
      <div className="w- absolute -top-[46vh]">
        <EthosTitle text="Flexible" />
        <EthosTitle
          colorAccent={source === "About" ? "#9810fa" : undefined}
          text="User-driven"
          animation
        />
        <EthosTitle text="sleek" italic />
      </div>
    </div>
  );
}
