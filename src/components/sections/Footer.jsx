import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#012a4a] text-white">
      <div className="w-full max-w-[1440px] mx-auto px-12 py-16 flex justify-between">
        <span className="mr-4 fjalla-one-regular font-semibold text-2xl">
          <a href="#">FJP</a>
        </span>
        <nav className="flex">
          <ul className="flex items-center gap-6">
            <li className="hover:scale-110  transition-all ease-out duration-500 cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:scale-110  transition-all ease-out duration-500 cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:scale-110  transition-all ease-out duration-500 cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
