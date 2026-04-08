"use client";
import { FC } from "react";
import RoundedButton from "../UI/RoundedButton";

export type ViewMode = "list" | "grid";

interface ViewToggleProps {
  view: ViewMode;
  onChange: (view: ViewMode) => void;
}

/**
 * ViewToggle — list/grid switcher built with RoundedButton.
 * The active view button uses the accent background; the inactive one is transparent.
 */
const ViewToggle: FC<ViewToggleProps> = ({ view, onChange }) => {
  const isList = view === "list";

  return (
    <div className="flex items-center gap-3">
      <span className="hidden md:inline text-xs uppercase tracking-[0.05em] text-(--color-gray)">
        View
      </span>

      <RoundedButton
        onClick={() => onChange("list")}
        backgroundColor={isList ? "var(--color-dark)" : "transparent"}
        hoverBackgroundColor="var(--color-blue)"
        isChildPadding={false}
        border={!isList}
        className="h-12 px-6 rounded-full"
        aria-label="List view"
        aria-pressed={isList}
      >
        <span
          className={`text-xs uppercase tracking-[0.05em] font-medium z-10 ${
            isList ? "text-white" : "text-(--color-dark)"
          }`}
        >
          List
        </span>
      </RoundedButton>

      <RoundedButton
        onClick={() => onChange("grid")}
        backgroundColor={!isList ? "var(--color-dark)" : "transparent"}
        hoverBackgroundColor="var(--color-blue)"
        isChildPadding={false}
        border={isList}
        className="h-12 px-6 rounded-full"
        aria-label="Grid view"
        aria-pressed={!isList}
      >
        <span
          className={`text-xs uppercase tracking-[0.05em] font-medium z-10 ${
            !isList ? "text-white" : "text-(--color-dark)"
          }`}
        >
          Grid
        </span>
      </RoundedButton>
    </div>
  );
};

export default ViewToggle;
