import React, { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useNavigate } from "react-router";
import heroImg from "../../assets/portfolio-hero-art.png";
import resume from "../../assets/resume.pdf";

// React
import { motion, useAnimation } from "motion/react";
import { duration } from "@mui/material";

const HeroSection = () => {
  const handleResume = () => {
    window.open(resume, "_blank", "noopener,noreferrer");
  };

  const controls = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      controls.start({ opacity: 1, y: 0, x: 0 });
    }, 250);
    //controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section className="w-full min-h-[70vh] max-w-[1200px] mx-auto px-4 sm:px-12 py-[100px] flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-center lg:gap-4">
      <div className="heroTextContainer flex flex-col items-center text-center w-full lg:items-start lg:text-left lg:max-w-[450px]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl fjalla-one-regular md:text-[64px] primaryText">
            Hi, I'm Francisco
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
        >
          <p className="primaryText my-2 md:text-xl md:my-4">
            A <span className="accentText">front-end software developer</span>{" "}
            out of Santa Clarita, California.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-4 my-2 md:my-6">
            <button className="primaryBtn">
              <a href="#contact">Get in touch</a>
            </button>
            <button
              className="secondaryBtn flex items-center gap-2"
              onClick={handleResume}
            >
              {" "}
              <FaArrowUpRightFromSquare className="size-[14px]" /> Resume
            </button>
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-4 my-2 md:my-6 accentText">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
          >
            <a
              href="https://www.linkedin.com/in/fperezfrancisco/"
              target="_blank"
            >
              <FaLinkedin
                tabIndex={0}
                className="size-[32px] hover:scale-110 transition-all duration-200 ease-out cursor-pointer"
                alt="Linked In Profile"
                title="Linked In Profile"
              />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
          >
            <a href="https://github.com/fperezfrancisco" target="_blank">
              <FaGithubSquare
                className="size-[32px] hover:scale-110 transition-all duration-200 ease-out cursor-pointer"
                alt="Github Profile"
                title="Github Profile"
                tabIndex={0}
              />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
          >
            <a href="mailto:fperezfrancisco4@gmail.com" target="_blank">
              <FaMailBulk
                tabIndex={0}
                className="size-[32px] hover:scale-110 transition-all duration-200 ease-out cursor-pointer"
                alt="Send me an email"
                title="Send me an email"
              />
            </a>
          </motion.div>
        </div>
      </div>
      <div className=" flex items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          <img
            src={heroImg}
            alt="Francisco J Perez Headshot"
            className="w-full max-w-[350px] md:max-w-[450px]"
          />
        </motion.div>

        <div className="hidden size-[300px] sm:size-[400px] backgroundLinearGradient rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
