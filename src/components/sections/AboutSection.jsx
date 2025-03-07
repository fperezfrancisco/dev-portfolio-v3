import React from "react";
import { motion, useAnimation } from "motion/react";

const skillsList = {
  frontend: [
    "Html",
    "CSS",
    "Javascript",
    "React JS",
    "Next JS",
    "Tailwind CSS",
    "Typescript",
  ],
  backend: ["Firebase V9", "Node Js", "Mongo Db"],
  other: ["NPM", "Github", "Figma", "Canva", "Vercel", "Netlify"],
};

const AboutSection = () => {
  return (
    <section
      className="w-full my-20 max-w-[1200px] mx-auto px-4 sm:px-12 py-[120px] flex flex-col gap-24"
      id="about"
    >
      <div className="w-full lex flex-col items-start lg:flex-row gap-8 lg:justify-between overflow-x-hidden">
        <h2 className="fjalla-one-regular text-2xl md:text-4xl primaryText">
          About Me
        </h2>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          <div className="w-full lg:w-2/3 primaryText flex flex-col gap-4 ">
            <p>
              I am a passionate front-end software developer well-versed in the
              core technologies of HTML, CSS, and JavaScript, with advanced
              experience in React.js and Tailwind CSS. My expertise lies in
              building dynamic, responsive, and large-scale applications that
              come to life with clean code and attention to detail.
            </p>
            <p>
              Outside of programming, I enjoy exercising, playing soccer, and
              traveling with friends & family.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="w-full flex flex-col items-start lg:flex-row gap-8 lg:justify-between overflow-x-hidden">
        <h2 className="fjalla-one-regular text-2xl md:text-4xl primaryText">
          Education
        </h2>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
        >
          <div className="w-full lg:w-2/3 primaryText flex flex-col gap-4">
            <ul className="flex flex-col items-start w-full gap-6">
              <li className="flex flex-col items-start gap-1">
                <p className="text-xl">B.A. Applied Mathematics</p>
                <p className="accentText text-[0.9rem]">UC Berkeley</p>
                <p className="accentText text-[0.9rem]">Jan 2017 - May 2021</p>
              </li>
              <li className="flex flex-col items-start gap-1">
                <p className="text-xl">Frontend Developer Bootcamp</p>
                <p className="accentText text-[0.9rem]">Frontend Simplfied</p>
                <p className="accentText text-[0.9rem]">Aug 2024 - Dec 2024</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      <div className="w-full flex flex-col items-start lg:flex-row gap-8 lg:justify-between overflow-x-hidden">
        <h2 className="fjalla-one-regular text-2xl md:text-4xl primaryText">
          Skills
        </h2>
        <div className="flex flex-col gap-8 items-start primaryText w-full lg:w-2/3">
          <motion.div
            className="flex flex-col items-start gap-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
          >
            <h3 className="primaryText text-xl">Frontend</h3>
            <div className="py-2 flex flex-wrap w-full gap-2">
              {skillsList &&
                skillsList.frontend.map((skill) => (
                  <span className="backgroundLinearGradient px-8 py-2 text-[0.8rem] rounded-xl text-white">
                    {skill}
                  </span>
                ))}
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-start gap-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
          >
            <h3 className="primaryText text-xl">Backend</h3>
            <div className="py-2 flex flex-wrap w-full gap-2">
              {skillsList &&
                skillsList.backend.map((skill) => (
                  <span className="backgroundLinearGradient px-8 py-2 text-[0.8rem] rounded-xl text-white">
                    {skill}
                  </span>
                ))}
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-start gap-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
          >
            <h3 className="primaryText text-xl">Other Technologies</h3>
            <div className="py-2 flex flex-wrap w-full gap-2">
              {skillsList &&
                skillsList.other.map((skill) => (
                  <span className="backgroundLinearGradient px-8 py-2 text-[0.8rem] rounded-xl text-white">
                    {skill}
                  </span>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
