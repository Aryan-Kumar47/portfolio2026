import React, { useEffect, useState } from "react";
import { navLinks } from "./Menu/data";
import { usePathname } from "next/navigation";
import TransitionLink from "./TransitionLink";
import Magnetic from "./UI/Magnetic";

export default function SocialFooter() {
  const [time, setTime] = useState("");
  const pathname = usePathname();

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const updateTime = () => {
      const formatted = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      setTime(`${formatted} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex w-full flex-wrap relative flex-col-reverse md:flex-row justify-between  pt-[calc(var(--section-padding)/1.3)] sm:pr-[calc(var(--gap-padding)/1.33)] pb-[calc(var(--gap-padding)/1.75)] sm:pl-[calc(var(--gap-padding)/1.33)]">
      <div className="flex justify-between md:w-auto w-full relative md:px-0 px-(--container-padding) md:pb-0 pb-[calc(var(--gap-padding)*0.75)]">
        <div className="pr-(--gap-padding)">
          <h5 className="mb-[1.5em]!">Version</h5>
          <p className="h-[2.5em flex justify-center items-center">
            © {currentYear}
          </p>
        </div>
        <div className="">
          <h5 className="mb-[1.5em]!">Local time</h5>
          <p className="h-[2.5em flex justify-center items-center">{time}</p>
        </div>
      </div>
      <div className="px-[calc(var(--container-padding)-var(--gap-padding)*0.333)] pb-[calc(var(--section-padding)/3)] md:px-0 md:pb-0">
        <h5 className="md:pl-[calc(var(--gap-padding)*0.5)] pl-[calc(var(--gap-padding)/3)] mb-[1.5em]!">
          Navigation
        </h5>
        <ul className={``}>
          {navLinks.map((item, i) => {
            return pathname === item.href ? null : (
              <li key={i} className="inline-flex">
                <TransitionLink
                  href={`${item.href}`}
                  className={`group relative inline-block text-white px-[calc(var(--gap-padding)/3)]`}
                >
                  <Magnetic>
                    <div>
                      <div className="h-[2.5em flex justify-center items-center">
                        {item.name}
                      </div>
                      <span className="absolute left-1/2 -bottom-1 h-px w-full bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 -translate-x-1/2"></span>
                    </div>
                  </Magnetic>
                </TransitionLink>
              </li>
            );
          })}
        </ul>
        <div className="md:hidden block h-px bg-(--color-border-light) mt-(--gap-padding) w-[calc(100%-var(--gap-padding)*0.666)] ml-[calc(var(--gap-padding)*0.333)]"></div>
      </div>
    </div>
  );
}
