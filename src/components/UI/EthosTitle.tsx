import React from "react";
import Text from "./Text";
import Heading from "./Heading";
import { editorialLightItalic, PPMoriRegular } from "@/src/utlis/fonts";

export default function EthosTitle({
  text,
  italic,
  animation,
  p,
  colorAccent = "#455CE9",
  colorInitial = "var(--color-gray)",
  colorFinal = "var(--color-text)",
}: {
  text: string;
  italic?: boolean;
  animation?: boolean;
  p?: string;
  colorInitial?: string;
  colorAccent?: string;
  colorFinal?: string;
}) {
  return (
    <h2
      className={`relative text-center text-[14vw] md:text-[10vw] font-semibold leading-[1.1] ethos-title flex ${p ? "justify-between" : "justify-center"} items-center`}
    >
      {p && (
        <Text>
          <p className="text-xs max-w-[50ch] text-start text-(--color-gray)">
            {p}
          </p>
        </Text>
      )}
      {/* Line 1 */}
      <div className="block overflow-hidden leading-[1em] h-[0.85em]">
        {animation ? (
          <Heading
            colorAccent={colorAccent}
            colorInitial={colorInitial}
            colorFinal={colorFinal}
          >
            <h1
              className={`animate-text ${italic ? editorialLightItalic.className : PPMoriRegular.className}`}
            >
              {text}
            </h1>
          </Heading>
        ) : (
          <h1
            className={`animate-text ${p ? "pl-2" : "pl-0"} ${italic ? editorialLightItalic.className : PPMoriRegular.className}`}
          >
            {text}
          </h1>
        )}
      </div>
    </h2>
  );
}
