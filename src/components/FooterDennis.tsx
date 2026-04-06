"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { geraldine } from "../utlis/fonts";
import { email, footerSocialLinks, navLinks } from "./Menu/data";
import Magnetic from "./UI/Magnetic";
import TransitionLink from "./TransitionLink";
import RoundedButton from "./UI/RoundedButton";
import { useCursorContext } from "../context/CursorContext";

export default function FooterDennis() {
  const currentYear = new Date().getFullYear();
  const { enter, leave } = useCursorContext();
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer_trigger",
        start: "bottom bottom",
        end: "bottom 150px",
        scrub: true,
      },
    });
    tl.fromTo(".fixed_footer", { y: -500 }, { y: 0 });
  }, []);

  useEffect(() => {
    const update = () =>
      setLocalTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short",
        })
      );
    update();
    const id = setInterval(update, 10_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="fixed_footer select-none h-screen flex flex-col bg-(--color-dark) text-white w-full fixed left-0 bottom-0">
      <div className="flex flex-col justify-between h-full container-custom">
        {/* ─── Heading ─── */}
        <div className="flex-1 flex items-center justify-center">
          <h2
            className="text-center leading-[1.08] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3rem, 8vw, 8.5rem)" }}
          >
            Let&apos;
            <span className={geraldine.className}>s</span> work
            <br />
            together
          </h2>
        </div>

        {/* ─── CTA row ─── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Email pill */}
          <a
            onMouseEnter={() => enter("Send an email")}
            onMouseLeave={leave}
            href={`mailto:${email}`}
            className="group inline-flex items-center rounded-full border border-(--color-border-solid-light) hover:border-white/40 transition-[border-color] duration-500"
            style={{
              padding: "clamp(14px, 2vh, 22px) clamp(28px, 4vw, 56px)",
            }}
          >
            <span
              className="text-white/70 group-hover:text-white transition-colors duration-500 whitespace-nowrap"
              style={{ fontSize: "clamp(0.875rem, 1.4vw, 1.25rem)" }}
            >
              {email}
            </span>
          </a>

          {/* CTA button */}
          <RoundedButton
            href="/contact"
            customText="Let's talk"
            backgroundColor="var(--color-blue)"
            hoverBackgroundColor="var(--color-blue-dark)"
            className="rounded-full h-36 w-36 md:h-44 md:w-44"
          >
            <span className="text-white text-xs uppercase tracking-[0.05em] font-medium z-10">
              Get in touch
            </span>
          </RoundedButton>
        </div>

        {/* ─── Bottom bar ─── */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-y-7 gap-x-4 border-t border-(--color-border-solid-light)"
          style={{
            marginTop: "clamp(40px, 6vh, 80px)",
            paddingTop: "clamp(20px, 3vh, 36px)",
            paddingBottom: "clamp(20px, 3vh, 36px)",
          }}
        >
          {/* Version */}
          <FooterColumn label="Version">
            <span className="text-sm text-white/70">
              {currentYear} &copy; Edition
            </span>
          </FooterColumn>

          {/* Local time */}
          <FooterColumn label="Local Time">
            <span className="inline-flex items-center gap-2 text-sm text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {localTime}
            </span>
          </FooterColumn>

          {/* Socials */}
          <FooterColumn label="Socials">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {footerSocialLinks.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <Magnetic>
                      <div>
                        {item.name}
                        <span className="absolute left-0 -bottom-px h-px w-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </div>
                    </Magnetic>
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Navigation */}
          <FooterColumn label="Menu">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {navLinks.map((item, i) => (
                <li key={i}>
                  <TransitionLink
                    href={item.href}
                    className="group relative text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <Magnetic>
                      <div>
                        {item.name}
                        <span className="absolute left-0 -bottom-px h-px w-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </div>
                    </Magnetic>
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>
      </div>
    </footer>
  );
}

/* Small helper to avoid repeating the label pattern */
function FooterColumn({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-[0.65rem] uppercase tracking-[0.05em] text-white/40">
        {label}
      </span>
      {children}
    </div>
  );
}
