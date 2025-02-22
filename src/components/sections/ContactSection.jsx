import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section className="w-full my-20 max-w-[1200px] mx-auto px-4 sm:px-12 py-[120px] flex flex-col gap-12 lg:flex-row-reverse lg:gap-4 lg:justify-between">
      <div className="flex flex-col items-start gap-8">
        <h2 className="primaryText text-2xl md:text-4xl fjalla-one-regular">
          Contact
        </h2>
        <p className="primaryText">Send me a message so we can connect.</p>
        <ul className="w-full flex flex-col items-start gap-4">
          <li className="flex gap-4 primaryText items-center">
            <FaLinkedin className="accentText size-[32px]" />
            <a href="#">linkedin.com/in/fperezfrancisco</a>
          </li>
          <li className="flex gap-4 primaryText items-center">
            <FaGithubSquare className="accentText size-[32px]" />
            <a href="#">github.io/fperezfrancisco</a>
          </li>
          <li className="flex gap-4 primaryText items-center">
            <FaAt className="accentText size-[32px]" />
            <a href="#">fperezfrancisco4@gmail.com</a>
          </li>
          <li className="flex gap-4 primaryText items-center">
            <FaLocationDot className="accentText size-[32px]" />
            <p>Santa Clarita, CA, USA</p>
          </li>
        </ul>
      </div>
      <div className="flex w-full lg:max-w-[500px]">
        <form className="w-full contactForm" action="">
          <ul className="w-full flex flex-col items-start gap-3">
            <li className="flex flex-col w-full relative">
              <label
                htmlFor="name"
                className="absolute top-[18px] left-2 fjalla-one-regular text-[#014f86]"
              >
                Name:
              </label>
              <input
                required
                type="text"
                className="px-4 pl-14 py-4 w-full text-[#014f86] border-2 border-[#014f86] bg-white rounded-2xl fjalla-one-regular"
                placeholder="John Doe"
              />
            </li>
            <li className="flex flex-col w-full relative">
              <label
                htmlFor="name"
                className="absolute top-[18px] left-2 fjalla-one-regular text-[#014f86]"
              >
                Email:
              </label>
              <input
                type="email"
                required
                className="px-4 pl-14 py-4 w-full text-[#014f86] border-2 border-[#014f86] bg-white rounded-2xl fjalla-one-regular"
                placeholder="test@gmail.com"
              />
            </li>
            <li className="flex flex-col w-full relative">
              <label
                htmlFor="name"
                className="absolute top-[18px] left-2 fjalla-one-regular text-[#014f86]"
              >
                Message:
              </label>
              <textarea
                rows={6}
                className="px-4 pl-18 py-4 w-full text-[#014f86] border-2 border-[#014f86] bg-white rounded-2xl fjalla-one-regular"
                placeholder="Leave your message here..."
              ></textarea>
            </li>
          </ul>
          <button className="my-4 primaryBtn w-full max-w-none py-6">
            Send your messge
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
