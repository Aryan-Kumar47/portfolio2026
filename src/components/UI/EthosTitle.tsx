import React from "react";
import Text from "./Text";
import Heading from "./Heading";
import { geraldine } from "@/src/utlis/fonts";

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
    <h1
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
      <div className="block overflow-hidden leading-none">
        {animation ? (
          <Heading
            colorAccent={colorAccent}
            colorInitial={colorInitial}
            colorFinal={colorFinal}
          >
            <h2
              className={`animate-text ${italic ? `${geraldine.className}` : ""}`}
            >
              {text}
            </h2>
          </Heading>
        ) : (
          <h2
            className={`animate-text ${italic ? `${geraldine.className} px-2` : ""}`}
          >
            {text}
          </h2>
        )}
      </div>
    </h1>
  );
}
