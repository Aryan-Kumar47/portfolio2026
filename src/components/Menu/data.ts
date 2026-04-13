import { BsInstagram } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiGithubLogoFill } from "react-icons/pi";
import { TiSocialLinkedin } from "react-icons/ti";

export const email = "kumararyan101203@gmail.com";
export const github = "https://github.com/Aryan-Kumar47";
export const linkedin = "https://www.linkedin.com/in/aryankumar10/";
export const portfolio2025 = "https://aryankumarportfolio2025.vercel.app";
export const resume = "";
export const instagram = "";

export const navLinks = [
  { name: "Home", href: "/", msg: "Me" },
  { name: "Work", href: "/work", msg: "My Work" },
  { name: "About", href: "/about", msg: "About Myself" },
  { name: "Contact", href: "/contact", msg: "Contact Me" },
];

export const socialLinks = [
  {
    name: "Github",
    Icon: PiGithubLogoFill,
    link: github,
  },
  {
    name: "Linkedin",
    Icon: TiSocialLinkedin,
    link: linkedin,
  },
  {
    name: "Resume",
    Icon: IoDocumentTextOutline,
    link: resume,
  },
  {
    name: "Instagram",
    Icon: BsInstagram,
    link: instagram,
  },
];
export const footerSocialLinks = [
  {
    name: "Github",
    Icon: PiGithubLogoFill,
    link: github,
  },
  {
    name: "Linkedin",
    Icon: TiSocialLinkedin,
    link: linkedin,
  },
  {
    name: "Instagram",
    Icon: BsInstagram,
    link: instagram,
  },
];
