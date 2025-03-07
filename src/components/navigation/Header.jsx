import React, { useContext, useEffect, useState } from "react";
import { HiMoon } from "react-icons/hi2";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { ThemeContext } from "../../App";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full py-4 px-8 sm:px-12 max-w-[1440px] mx-auto my-0 flex items-center justify-between">
      <span className="mr-4 fjalla-one-regular font-semibold text-2xl primaryText">
        <a href="#">FJP</a>
      </span>
      <nav className="primaryText hidden md:flex">
        <ul className="flex items-center gap-8">
          <li className="hover:scale-110  transition-all ease-out duration-500 cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:scale-110  transition-all ease-out duration-500 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:scale-110  transition-all ease-out duration-500 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
          <li className="ml-8">
            <HiMoon
              className="size-[24px] hover:scale-110 transition-all ease-out duration-200 cursor-pointer"
              onClick={() => setDarkMode(!darkMode)}
            />
          </li>
        </ul>
      </nav>
      <span className="flex md:hidden primaryText">
        <HiMenuAlt3
          onClick={handleToggleMenu}
          className={`size-[24px] hover:scale-110 transition-all ease-out duration-200 cursor-pointer`}
        />
      </span>
      <div
        className={`w-[250px] h-screen min-h-[500px] fixed z-50 darkBackgroundBlue top-0 m-0 right-0 p-8 py-12 transition-all ease-out duration-500 md:hidden ${
          menuOpen ? "translate-x-0 block" : "translate-x-[250px]"
        }`}
      >
        <HiOutlineX
          className="size-[24px] absolute z-50 top-4 right-4 hover:scale-110 transition-all ease-out duration-200 cursor-pointer text-white"
          onClick={handleToggleMenu}
        />
        <ul className="flex flex-col text-white items-start gap-4 mt-4">
          <li className="hover:scale-110  transition-all ease-out duration-500 cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:scale-110  transition-all ease-out duration-500 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:scale-110  transition-all ease-out duration-500 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
          <li className="">
            <HiMoon
              className="size-[24px] hover:scale-110 transition-all ease-out duration-200 cursor-pointer"
              onClick={() => setDarkMode(!darkMode)}
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
