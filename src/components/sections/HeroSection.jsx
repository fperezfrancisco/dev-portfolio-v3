import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="w-full min-h-[70vh] max-w-[1200px] mx-auto px-4 sm:px-12 py-[100px] flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-center lg:gap-4">
      <div className="heroTextContainer flex flex-col items-center text-center w-full lg:items-start lg:text-left lg:max-w-[450px]">
        <h1 className="text-5xl fjalla-one-regular md:text-[64px] primaryText">
          Hi, I'm Francisco
        </h1>
        <p className="primaryText my-2 md:text-xl md:my-4">
          A <span className="accentText">front-end software developer</span> out
          of Santa Clarita, California.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 my-2 md:my-6">
          <button className="primaryBtn">Get in touch</button>
          <button className="secondaryBtn flex items-center gap-2">
            {" "}
            <FaArrowUpRightFromSquare className="size-[14px]" /> Resume
          </button>
        </div>
        <div className="flex flex-wrap gap-4 my-2 md:my-6 accentText">
          <FaLinkedin
            tabIndex={0}
            className="size-[32px] hover:scale-110 transition-all duration-200 ease-out cursor-pointer"
            alt="Linked In Profile"
            title="Linked In Profile"
          />
          <FaGithubSquare
            className="size-[32px] hover:scale-110 transition-all duration-200 ease-out cursor-pointer"
            alt="Github Profile"
            title="Github Profile"
            tabIndex={0}
          />
          <FaMailBulk
            tabIndex={0}
            className="size-[32px] hover:scale-110 transition-all duration-200 ease-out cursor-pointer"
            alt="Send me an email"
            title="Send me an email"
          />
        </div>
      </div>
      <div className=" flex items-center justify-center ">
        <div className="size-[300px] sm:size-[400px] backgroundLinearGradient rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
