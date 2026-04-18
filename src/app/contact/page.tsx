"use client";
import { email, footerSocialLinks, navLinks } from "@/src/components/Menu/data";
import TransitionLink from "@/src/components/TransitionLink";
import Magnetic from "@/src/components/UI/Magnetic";
import RoundedButton from "@/src/components/UI/RoundedButton";
import { geraldine } from "@/src/utlis/fonts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { FC, useEffect, useState } from "react";
import { PiSpinnerGapBold } from "react-icons/pi";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [status, setStatus] = useState("Send it!");
  const [isLoading, setIsLoading] = useState<boolean>();
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
    <main className={`bg-(--color-dark) min-h-svh text-white`}>
      <div className="flex flex-col h-full justify-between">
        <div className="section default-header contact-header">
          <div className="container-custom medium">
            <h1 className={`text-[clamp(2.84em,6.125vw,7em)] leading-[1.165]`}>
              Let'<span className={`${geraldine.className}`}>s</span> start a
              project together
            </h1>
            <div className="block lg:hidden">
              <div className="pt-[calc(clamp(3.25em,7vw,8em)*.875*1.175)] h-[calc(var(--section-padding)*.75)] "></div>
              <div className="">
                <h5 className="mb-[1.5em]!">Email</h5>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`mailto:${email}`}
                >
                  <span className="text-white text-[calc(clamp(3.25em,7vw,8em)*.375)] leading-[1.06] tracking-[-0.02em]">
                    {email}
                  </span>
                </a>
              </div>
            </div>
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
              Email
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
                <TransitionLink
                  key={"navlinks_" + index}
                  href={item.href}
                  className="group w-fit"
                >
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
                <li key={"contact_footer_social" + i}>
                  <a
                    href={item.href}
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
        <div className="flex lg:hidden w-full flex-wrap relative flex-col-reverse md:flex-row justify-between  pt-[calc(var(--section-padding)/1.3)] sm:pr-[calc(var(--gap-padding)/1.33)] pb-[calc(var(--gap-padding)/1.75)] sm:pl-[calc(var(--gap-padding)/1.33)]">
          <div className="flex justify-between md:w-auto w-full relative md:px-0 px-(--container-padding) md:pb-0 pb-[calc(var(--gap-padding)*0.75)]">
            <div className="pr-(--gap-padding)">
              <h5 className="mb-[1.5em]!">Version</h5>
              <p className="h-[2.5em flex justify-center items-center">
                © {currentYear}
              </p>
            </div>
            <div className="">
              <h5 className="mb-[1.5em]!">Local time</h5>
              <p className="h-[2.5em flex justify-center items-center">
                {time}
              </p>
            </div>
          </div>
          <div className="px-[calc(var(--container-padding)-var(--gap-padding)*0.333)] pb-[calc(var(--section-padding)/3)] md:px-0 md:pb-0">
            <h5 className="md:pl-[calc(var(--gap-padding)*0.5)] pl-[calc(var(--gap-padding)/3)] mb-[1.5em]!">
              Socials
            </h5>
            <ul className={``}>
              {footerSocialLinks.map((item, i) => (
                <li
                  key={"contact_footer_social_mobile" + i}
                  className="inline-flex"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  </a>
                </li>
              ))}
            </ul>
            <div className="md:hidden block h-px bg-(--color-border-light) mt-(--gap-padding) w-[calc(100%-var(--gap-padding)*0.666)] ml-[calc(var(--gap-padding)*0.333)]"></div>
          </div>
        </div>
        <div className="hidden lg:flex w-full justify-between pt-[calc(var(--section-padding)/1.3)] sm:pr-[calc(var(--gap-padding)/1.33)] pb-[calc(var(--gap-padding)/1.75)] sm:pl-[calc(var(--gap-padding)/1.33)]">
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
      </div>
    </main>
  );
};

export default page;
