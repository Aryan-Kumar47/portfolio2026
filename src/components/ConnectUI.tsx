import Image from "next/image";
import Link from "next/link";
import ParallaxImage from "./UI/ParallaxImage";
import { editorialItalic } from "../utlis/fonts";
import Magnetic from "./UI/Magnetic";
import { RiLinkedinLine } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useCursorContext } from "../context/CursorContext";

export default function ConnectUI() {
  const { enter, leave } = useCursorContext();
  return (
    <>
      <div className=" md:w-[66%] w-full relative mx-auto px-[4vw] md:pt-[9vh] pt-[7vh] mb-[7vh] mt-60">
        {/* Top Heading */}
        <h2 className="absolute z-1 left-1/2 -translate-x-1/2 -top-6 text-center text-[4.5rem] leading-[1.1] tracking-normal">
          <div>Connect</div>
          <div>With me</div>
        </h2>

        {/* Parallax Image */}
        <div className="h-full object-cover w-full -z-1 overflow-hidden">
          <ParallaxImage className="-z-1" startY={-100} endY={100}>
            <Image
              src="/me/9.jpeg"
              alt="connect"
              width={1000}
              height={1000}
              className="w-full h-full max-h-125"
            />
          </ParallaxImage>
        </div>

        {/* Bottom Heading */}
        <h2
          className={`absolute left-1/2 -translate-x-1/2 md:-bottom-[6.2rem] -bottom-[3.1rem] text-center ${editorialItalic.className} text-[4.5rem] leading-[1.1] tracking-normal`}
        >
          <div>on</div>
          <div className="overflow-hidden">
            <span>linkedin</span>
          </div>
        </h2>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center md:mt-36 mt-24 pb-24">
        <Magnetic className="w-full md:max-w-[48%] max-w-[90%] ">
          <Link
            onMouseEnter={() => enter("Connection matters")}
            onMouseLeave={leave}
            target="_blank"
            href="https://www.linkedin.com/in/gol-d-studio"
            className="flex justify-center py-[1.8rem] px-2 w-full rounded-[5rem] group relative border"
          >
            <div className="text-center uppercase text-xs">
              <p>Linkedin</p>
            </div>

            <div className="absolute top-1/2 right-0 -translate-x-1/4 -translate-y-1/2 w-[3.6rem] flex justify-center rounded-full bg-[#3b3b3b] items-center h-[3.6rem] overflow-hidden group-hover:scale-110 transition-transform duration-[0.8s] ease-(--ease)">
              <div className="relative w-full h-full">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-[0.8s] ease-(--ease) group-hover:translate-x-[300%]">
                  <RiLinkedinLine size={20} color="#fff" />
                </span>
                <span className="absolute top-1/2 left-1/2 -translate-x-[300%] -translate-y-1/2 transition-transform duration-[0.8s] ease-(--ease) group-hover:translate-x-[-50%]">
                  <IoIosArrowRoundForward size={20} color="#fff" />
                </span>
              </div>
            </div>
          </Link>
        </Magnetic>
      </div>
    </>
  );
}
