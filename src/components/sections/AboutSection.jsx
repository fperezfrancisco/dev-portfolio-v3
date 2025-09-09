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
    "Redux",
    "Context API",
  ],
  backend: [
    "Firebase V9",
    "Node Js",
    "Mongo Db",
    "Express Js",
    "Api Creation",
    "Strapi CMS",
  ],
  other: [
    "NPM",
    "Github",
    "Figma",
    "Canva",
    "Vercel",
    "Netlify",
    "Google Cloud Platform",
    "AWS",
    "Render",
  ],
};

const AboutSection = () => {
  return (
    <section
      className="w-full my-20 max-w-[1200px] mx-auto px-4 sm:px-12 py-[64px] flex flex-col gap-24"
      id="about"
    >
      <div className="w-full flex flex-col items-start lg:flex-row gap-8 lg:justify-between overflow-x-hidden">
        <h2 className="fjalla-one-regular text-2xl md:text-4xl primaryText">
          About Me
        </h2>
        <motion.div
          className="w-full lg:w-2/3 primaryText flex flex-col gap-4 "
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          <p>
            I’m Francisco Perez, a{" "}
            <strong>
              Frontend Engineer specializing in React.js and Next.js
            </strong>
            . I build fast, scalable, and user-focused web applications with
            clean, maintainable code and an eye for modern UI/UX design.
          </p>

          <p>
            I’ve worked with startups and organizations to design and launch{" "}
            <strong>production-ready platforms</strong>, including a youth
            sports club website serving 200+ families and a training academy
            platform that increased client registrations by 5x. At{" "}
            <strong>Vistora Technologies</strong>, I am currently contributing
            to building a SaaS dashboard with React, Tailwind, and Firebase,
            collaborating with a team of engineers to ship features to real
            world users.
          </p>

          <p>
            Beyond coding, I enjoy exercising, playing soccer, and traveling
            with friends and family. I thrive in{" "}
            <strong>collaborative, high-growth environments</strong> where I can
            push products forward while continuing to sharpen my skills in cloud
            and full-stack development.
          </p>
        </motion.div>
      </div>
      <div className="w-full flex flex-col items-start lg:flex-row gap-8 lg:justify-between overflow-x-hidden">
        <h2 className="fjalla-one-regular text-2xl md:text-4xl primaryText">
          Experience
        </h2>
        <motion.div
          className="w-full lg:w-2/3 primaryText flex flex-col gap-4 "
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          <div class="mb-6">
            <h3 class="text-lg font-semibold">
              Frontend Developer — Vistora Technologies
            </h3>
            <p class="text-sm italic accentText">Mar 2025 – Present</p>
            <ul class="list-disc list-inside mt-2">
              <li>
                Built responsive landing pages, authentication flows, and
                dashboards using{" "}
                <strong>React.js, Next.js, Tailwind CSS, and Firebase</strong>.
              </li>
              <li>
                Implemented scalable UI components and a Redux-based global
                state architecture for authentication and session handling.
              </li>
              <li>
                Collaborated with founders and engineers to align UI/UX with
                product and business goals, shipping production-ready features.
              </li>
            </ul>
          </div>
          <div class="mb-6">
            <h3 class="text-lg font-semibold">
              Freelance Frontend Engineer (Client Projects)
            </h3>
            <p class="text-sm italic accentText">Mar 2024 – Aug 2025</p>
            <ul class="list-disc list-inside mt-2">
              <li>
                <strong>LASC Youth Soccer Club:</strong> Designed and built a
                Next.js + Strapi CMS website serving 200+ families, enabling
                staff to manage news, events, and team pages independently.
              </li>
              <li>
                <strong>Trilogy Soccer:</strong> Launched a new marketing and
                enrollment website that led to a{" "}
                <strong>5x increase in registrations</strong> and 75% higher
                conversions within 90 days.
              </li>
              <li>
                Delivered SEO-optimized, mobile-first websites with measurable
                performance gains (up to <strong>60% faster load times</strong>
                ).
              </li>
            </ul>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-semibold">
              Frontend Developer Internship — Frontend Simplified
            </h3>
            <p class="text-sm italic accentText">Aug 2024 – Dec 2024</p>
            <ul class="list-disc list-inside mt-2">
              <li>
                Developed interactive React applications with animations,
                transitions, and API-driven data handling.
              </li>
              <li>
                Worked in a remote, collaborative environment using Git and
                GitHub for version control and project management.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      <div className="w-full flex flex-col items-start lg:flex-row gap-8 lg:justify-between overflow-x-hidden">
        <h2 className="fjalla-one-regular text-2xl md:text-4xl primaryText">
          Education
        </h2>
        <motion.div
          className="w-full lg:w-2/3 primaryText flex flex-col gap-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
        >
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
