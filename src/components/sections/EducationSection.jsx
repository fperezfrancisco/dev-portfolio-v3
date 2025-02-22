import React from "react";

const EducationSection = () => {
  return (
    <section className="w-full my-20 max-w-[1200px] mx-auto px-4 sm:px-12 py-[80px] flex flex-col gap-24 items-center">
      <div className=" w-full border-2 border-amber-200 flex flex-col items-start gap-4 lg:flex-row justify-start">
        <span className="fjalla-one-regular text-2xl md:text-4xl primaryText lg:w-[200px]">
          About Me
        </span>

        <div className="flex flex-col gap-4 items-start primaryText w-fit border-2 border-green-400">
          <p>
            I am a passionate front-end software developer well-versed in the
            core technologies of HTML, CSS, and JavaScript, with advanced
            experience in React.js and Tailwind CSS. My expertise lies in
            building dynamic, responsive, and large-scale applications that come
            to life with clean code and attention to detail.
          </p>
          <p>
            Outside of programming, I enjoy exercising, playing soccer, and
            traveling with friends & family.
          </p>
        </div>
      </div>
      <div className=" w-full flex flex-col items-start gap-4 lg:flex-row">
        <span className="fjalla-one-regular text-2xl md:text-4xl primaryText lg:w-[200px]">
          Education
        </span>
        <div className="flex flex-col gap-4 items-start primaryText w-fit">
          <ul className="flex flex-col items-start w-full gap-6">
            <li className="flex flex-col items-start gap-1">
              <p className="">B.A. Applied Mathematics</p>
              <p className="accentText text-[0.9rem]">UC Berkeley</p>
              <p className="accentText text-[0.9rem]">Jan 2017 - May 2021</p>
            </li>
            <li className="flex flex-col items-start gap-1">
              <p className="">Frontend Developer Bootcamp</p>
              <p className="accentText text-[0.9rem]">Frontend Simplfied</p>
              <p className="accentText text-[0.9rem]">Aug 2024 - Dec 2024</p>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-full flex flex-col items-start gap-10 lg:flex-row">
        <h2 className="fjalla-one-regular text-2xl md:text-4xl primaryText w-[140px]">
          Skills
        </h2>
        <div className="flex flex-col gap-4 items-start primaryText">
          <ul className="flex flex-col items-start w-full gap-6">
            <li className="flex flex-col items-start gap-1">
              <p className="">B.A. Applied Mathematics</p>
              <p className="accentText text-[0.9rem]">UC Berkeley</p>
              <p className="accentText text-[0.9rem]">Jan 2017 - May 2021</p>
            </li>
            <li className="flex flex-col items-start gap-1">
              <p className="">Frontend Developer Bootcamp</p>
              <p className="accentText text-[0.9rem]">Frontend Simplfied</p>
              <p className="accentText text-[0.9rem]">Aug 2024 - Dec 2024</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
