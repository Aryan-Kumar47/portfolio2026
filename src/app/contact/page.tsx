"use client";
import {
  email,
  footerSocialLinks,
  navLinks,
  portfolio2025,
  resume,
} from "@/src/components/Menu/data";
import TransitionLink from "@/src/components/TransitionLink";
import Magnetic from "@/src/components/UI/Magnetic";
import RoundedButton from "@/src/components/UI/RoundedButton";
import { useCursorContext } from "@/src/context/CursorContext";
import { geraldine } from "@/src/utlis/fonts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { usePathname } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { HiMiniArrowUpRight, HiOutlineDocumentText } from "react-icons/hi2";
import { PiSpinnerGapBold } from "react-icons/pi";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const { enter, leave } = useCursorContext();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-button",
        start: "top 80%",
        end: "bottom top",
        scrub: 1,
      },
    });
    t2.fromTo(
      ".contact-button",
      {
        y: "100px",
      },
      {
        y: "-50px",
      },
    );
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("Send it!");
  const [isLoading, setIsLoading] = useState<boolean>();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Sent!");
      } else {
        setStatus("Error!");
      }

      setTimeout(() => {
        setStatus("Send it!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 2000);
    } catch (error) {
      setStatus("Error occurred while sending email.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={`bg-(--color-dark) min-h-svh text-white`}>
      <div className="flex flex-col h-full justify-between">
        <div className="section default-header contact-header">
          <div className="container-custom medium">
            <h1 className={`text-[clamp(2.84em,6.125vw,7em)] leading-[1.165]`}>
              Let'<span className={`${geraldine.className}`}>s</span> start a
              project together
            </h1>
          </div>
        </div>
        <section className="flex gap-x-10 container-custom medium w-full">
          <div className="py-8 flex-1 lg:py-16 max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="py-10 border-y border-white/20 px-[3vw]">
                <label
                  htmlFor="name"
                  className="block mb-2 text-xl pl-1 font-bold text-gray-300 mt-8"
                >
                  What's your name?
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow-sm bg-transparent outline-none text-white placeholder:text-[#999D9E] placeholder:text-xl text-xl w-full p-2.5"
                  placeholder="Aryan Kumar *"
                  required
                />
              </div>
              <div className="py-10 border-b border-white/20 px-[3vw]">
                <label
                  htmlFor="email"
                  className="block mb-2 text-xl pl-1 font-bold text-gray-300"
                >
                  What's your email?
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow-sm bg-transparent outline-none text-white placeholder:text-[#999D9E] placeholder:text-xl text-xl w-full p-2.5"
                  placeholder="kumararyan101203@gmail.com *"
                  required
                />
              </div>
              <div className="sm:col-span-2 py-10 border-b border-white/20 px-[3vw]">
                <label
                  htmlFor="message"
                  className="block mb-2 text-xl pl-1 font-bold text-gray-300"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={10}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="block shadow-sm bg-transparent outline-none text-white placeholder:text-[#999D9E] placeholder:text-xl text-xl w-full p-2.5 resize-none md:h-48 h-32 overflow-y-auto"
                  placeholder="Hello Aryan, can you help me with ... *"
                ></textarea>
              </div>
              <div className="w-full flex justify-center items-center">
                <div className="contact-button">
                  <RoundedButton
                    customText="Send me a message"
                    backgroundColor="#455CE9"
                    hoverBackgroundColor="#334BD3"
                    type="submit"
                    className="rounded-[50%] h-44 w-44"
                  >
                    {isLoading ? (
                      <PiSpinnerGapBold className="animate-spin" />
                    ) : (
                      <div className="px-9 py-3 z-1 text-sm text-center text-white font-bold text-nowrap">
                        {status}
                      </div>
                    )}
                  </RoundedButton>
                </div>
              </div>
            </form>
          </div>
          <div className="hidden py-8 lg:py-16 lg:flex flex-col w-full lg:w-[27%] lg:pl-[calc(clamp(2.5em,8vw,8em)/2)]">
            {/* Contact Details */}
            <span className="text-[0.6em] uppercase tracking-[0.05em] opacity-50 mb-4">
              Contact Details
            </span>

            <ul className="flex flex-col items-start gap-y-3 pb-10">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`mailto:${email}`}
                  className="capitalize link--metis link flex flex-row justify-center items-center gap-x-2 relative group"
                >
                  <Magnetic>
                    <div>
                      <div>{email}</div>
                      <span className="absolute left-1/2 -bottom-1 h-px w-full bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 -translate-x-1/2"></span>
                    </div>
                  </Magnetic>{" "}
                </a>
              </li>
            </ul>

            {/* Business Details */}
            <span className="text-[0.6em] uppercase tracking-[0.05em] opacity-50 mb-4">
              Site Map
            </span>

            <ul className="flex flex-col gap-y-2 pb-10 text-white/80">
              {navLinks.map((item, index) => (
                <TransitionLink href={item.href} className="group w-fit">
                  <Magnetic>
                    <div>
                      <div>{item.name}</div>
                      <span className="absolute left-1/2 -bottom-1 h-px w-full bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 -translate-x-1/2"></span>
                    </div>
                  </Magnetic>
                </TransitionLink>
              ))}
            </ul>

            {/* Socials */}
            <span className="text-[0.6em] uppercase tracking-[0.05em] opacity-50 mb-4">
              Socials
            </span>

            <ul className="flex flex-col items-start gap-y-3">
              {footerSocialLinks.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-block text-white"
                  >
                    <Magnetic>
                      <div>
                        <div>{item.name}</div>
                        <span className="absolute left-1/2 -bottom-1 h-px w-full bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 -translate-x-1/2"></span>
                      </div>
                    </Magnetic>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <div className="md:flex-row flex-col flex lg:hidden flex-1 justify-between items-center py-8">
          <div className="text-xs">
            <div className="">
              <div className="text-gray-400 flex items-center gap-x-0.5 flex-row mb-4">
                <HiMiniArrowUpRight size={13} color="#455CE9" />{" "}
                <span className="text-[0.6em] uppercase tracking-[0.05em] opacity-50">
                  Site Map
                </span>
              </div>
              <ul className="flex flex-row gap-x-2 pb-5 text-white/80">
                {navLinks.map((item, index) => (
                  <TransitionLink href={item.href} className="group w-fit">
                    <Magnetic>
                      <div>
                        <div>{item.name}</div>
                        <span className="absolute left-1/2 -bottom-1 h-px w-full bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 -translate-x-1/2"></span>
                      </div>
                    </Magnetic>
                  </TransitionLink>
                ))}
              </ul>
            </div>
            <div className="">
              <div className="text-gray-400 flex items-center gap-x-0.5 flex-row mb-4">
                <HiMiniArrowUpRight size={13} color="#455CE9" />{" "}
                <span className="text-[0.6em] uppercase tracking-[0.05em] opacity-50">
                  Socials
                </span>
              </div>
              <ul className="flex flex-row items-start gap-x-2 pb-5">
                {footerSocialLinks.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-block text-white"
                    >
                      <Magnetic>
                        <div>
                          <div>{item.name}</div>
                          <span className="absolute left-1/2 -bottom-1 h-px w-full bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 -translate-x-1/2"></span>
                        </div>
                      </Magnetic>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <div className="text-gray-400 flex items-center gap-x-0.5 flex-row mb-4">
                <HiMiniArrowUpRight size={13} color="#455CE9" />{" "}
                <span className="text-[0.6em] uppercase tracking-[0.05em] opacity-50">
                  More
                </span>
              </div>
              <div className="flex flex-row gap-x-2 items-start pb-5">
                <a
                  href={portfolio2025}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row justify-center items-center gap-x-2"
                >
                  <Magnetic>
                    <div>Portfolio 2025</div>
                    <span className="absolute left-1/2 -bottom-1 h-px w-full bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 -translate-x-1/2"></span>
                  </Magnetic>{" "}
                </a>
              </div>
            </div>
            <div className="">
              <div className="text-gray-400 flex items-center gap-x-0.5 flex-row mb-4">
                <HiMiniArrowUpRight size={13} color="#455CE9" />{" "}
                <span className="text-[0.6em] uppercase tracking-[0.05em] opacity-50">
                  Contact Details
                </span>
              </div>
              <ul className="flex flex-col items-start gap-x-2 pb-5">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`mailto:${email}`}
                    className="capitalize link--metis link flex flex-row justify-center items-center gap-x-2 relative group"
                  >
                    <Magnetic>
                      <div>
                        <div>{email}</div>
                        <span className="absolute left-1/2 -bottom-1 h-px w-full bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 -translate-x-1/2"></span>
                      </div>
                    </Magnetic>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="cursor-pointer">
            <a
              onMouseEnter={() => enter("View My Resume")}
              onMouseLeave={leave}
              target="_blank"
              href={resume}
              className="flex flex-row justify-center items-center group a cursor-pointer mt-1"
            >
              <div className="w-fit z-1">
                <Magnetic hoverEffect={false}>
                  <div className="p-6 transition-all duration-300 ease-(--ease) bg-white -mr-4 rounded-full">
                    <HiOutlineDocumentText
                      className=" text-black group-hover:scale-125 transition-all duration-300 ease-(--ease)"
                      size={30}
                    />
                  </div>
                </Magnetic>
              </div>
              <div className="py-4 text-nowrap pr-8 pl-12 text-center border border-gray-500 rounded-full">
                <p>Resume&nbsp;&nbsp;</p>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-20 lg:mt-40">
          <div className="flex flex-row justify-center items-center gap-x-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <p className="text-xs">Available</p>
          </div>
          <div className="flex flex-row justify-center items-center mb-1">
            <p className="text-gray-400 text-xs text-center leading-[1.6]">
              &copy; {currentYear} — Designed & Developed by Aryan Kumar. <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
