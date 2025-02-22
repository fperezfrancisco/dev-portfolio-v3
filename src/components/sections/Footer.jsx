import React from "react";

const Footer = () => {
  return (
    <footer className="w-screen bg-[#012a4a] text-white">
      <div className="w-full max-w-[1440px] mx-auto px-12 py-16 flex justify-between">
        <span className="mr-4 fjalla-one-regular font-semibold text-2xl">
          FJP
        </span>
        <nav className="flex">
          <ul className="flex items-center gap-6">
            <li className="hover:scale-110  transition-all ease-out duration-500 cursor-pointer">
              Projects
            </li>
            <li className="hover:scale-110  transition-all ease-out duration-500 cursor-pointer">
              About
            </li>
            <li className="hover:scale-110  transition-all ease-out duration-500 cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
