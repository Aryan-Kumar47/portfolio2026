import { useCursorContext } from "@/src/context/CursorContext";
import React from "react";
import Magnetic from "../UI/Magnetic";
import RoundedButton from "../UI/RoundedButton";

interface MenuButtonProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuButton: React.FC<MenuButtonProps> = ({ open, setOpen }) => {
  const { enter, leave } = useCursorContext();
  return (
    <header id="mobile-nav" className="fixed right-3 top-3 z-51 scale-0">
      <RoundedButton
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        isChildPadding={false}
        border
      >
        <div
          className={`relative flex justify-between items-center w-[clamp(4em,5.5vw,5em)] h-[clamp(4em,5.5vw,5em)]`}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[calc(clamp(4em,5.5vw,5em)/2)] h-5 cursor-pointer">
              <span
                className={`absolute left-0 top-[20%] h-0.5 w-full bg-white origin-left transition-transform duration-400 ease-in-out
            ${open ? "scale-x-0" : "scale-x-100"}`}
              />

              <span
                className={`absolute left-0 bottom-[20%] h-0.5 w-full bg-white origin-right transition-transform duration-400 ease-in-out
            ${open ? "scale-x-0" : "scale-x-100"}`}
              />

              <span
                className={`absolute left-1/2 top-1/2 h-0.5 w-[68%]
  bg-white origin-center -translate-x-1/2 -translate-y-1/2
  transition-all duration-400 ease-in-out
  ${open ? "rotate-45 opacity-100" : "rotate-45 scale-x-0 opacity-0"}`}
              />

              {/* X line 2 */}
              <span
                className={`absolute left-1/2 top-1/2 h-0.5 w-[68%]
  bg-white origin-center -translate-x-1/2 -translate-y-1/2
  transition-all duration-400 ease-in-out
  ${open ? "-rotate-45 opacity-100" : "-rotate-45 scale-x-0 opacity-0"}`}
              />
            </div>
          </div>
        </div>
      </RoundedButton>
    </header>
  );
};

export default MenuButton;
