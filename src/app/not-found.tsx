"use client";
import { useEffect, useState } from "react";
import { email, footerSocialLinks } from "../components/Menu/data";
import Magnetic from "../components/UI/Magnetic";
import SocialFooter from "../components/Footer/SocialFooter";
import RoundedButton from "../components/UI/RoundedButton";
import ParallaxSlider from "../components/UI/ParallaxSlider";

export default function NotFound() {
  const [time, setTime] = useState("");
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
    <footer className={`select-none h-svh bg-(--color-dark) text-white w-full`}>
      <div className="section pb-0!">
        <div className="flex items-end relative w-full h-full shadow-[0px_5px_0px_5px_var(--color-dark)]">
          <div className="w-full">
            <div className="">
              <div className="select-none pb-[calc(var(--section-padding)/2)]">
                <h1 className="text-[max(9em,15vw)]">
                  <ParallaxSlider repeat={4} baseVelocity={2}>
                    <span className="pe-12">
                      Error 404
                      <span className="spacer">—</span>
                    </span>
                  </ParallaxSlider>
                </h1>
              </div>
              <div className="container-custom medium w-full">
                <div className="mb-[calc(var(--section-padding)*0.6)] relative">
                  <div className="block w-full h-px bg-(--color-border-light)"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex gap-x-[calc(var(--gap-padding)/2)]">
                      <div key={"404_home"} className="w-fit">
                        <RoundedButton
                          border
                          rel="noopener noreferrer"
                          href={"/"}
                          className="rounded-[50%] w-[clamp(5em,11vw,10em)] h-[clamp(5em,11vw,10em)]"
                        >
                          <span className="text-white">Back to home</span>
                        </RoundedButton>
                      </div>
                      {/* {footerSocialLinks.map((item, i) => {
                        const Icon = item.Icon;
                        return (
                          <div key={"footer_social_link" + i} className="w-fit">
                            <RoundedButton
                              target="_blank"
                              border
                              rel="noopener noreferrer"
                              href={item.href}
                              className="rounded-[50%] w-[clamp(5em,11vw,10em)] h-[clamp(5em,11vw,10em)]"
                            >
                              <span className="text-white">
                                <Icon size={30} />
                              </span>
                            </RoundedButton>
                          </div>
                        );
                      })} */}
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-center items-center flex-col gap-[calc(var(--section-padding)*.475)]">
                  <div className="w-full md:w-fit">
                    <RoundedButton
                      border
                      className="sm:h-[6.5em] h-[4.5em] w-full"
                    >
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`mailto:${email}`}
                      >
                        <span className="text-white text-[calc(clamp(3.25em,7vw,8em)*.375)] leading-[1.06] tracking-[-0.02em]">
                          {email}
                        </span>
                      </a>
                    </RoundedButton>
                  </div>
                </div> */}
              </div>
            </div>
            <SocialFooter isNav={false} />
          </div>
        </div>
      </div>
    </footer>
  );
}
