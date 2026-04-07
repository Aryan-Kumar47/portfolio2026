import EthosTitle from "./UI/EthosTitle";
// 9810fa
interface WhatIMakeI {
  source?: "Home" | "About";
}

export default function WhatIMake({ source = "Home" }: WhatIMakeI) {
  return (
    <div className="relative pb-(--section-padding) flex justify-center items-center flex-col text-(--color-text)">
      <div
        className={`absolute w-full -top-[46vh] ${source === "About" ? "container-custom medium" : "container-custom"}`}
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
