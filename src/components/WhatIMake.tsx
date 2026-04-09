import EthosTitle from "./UI/EthosTitle";
// 9810fa
interface WhatIMakeI {
  source?: "Home" | "About";
}

export default function WhatIMake({ source = "Home" }: WhatIMakeI) {
  return (
    <div className="relative section flex justify-center items-center flex-col text-(--color-text) h-full">
      <div
        className={`w-full ${source === "About" ? "container-custom medium" : "container-custom absolute -top-[46vh]"}`}
      >
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
