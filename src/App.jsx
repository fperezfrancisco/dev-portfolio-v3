import { createContext, useState } from "react";
import Header from "./components/navigation/Header";
import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";

export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark";
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={`w-full max-w-screen h-full min-h-screen bodyContainer relative bkgMainColor transition-all ease-out duration-500 ${
          darkMode ? "darkMode" : ""
        }`}
      >
        <Header />
        <main className="w-full h-full py-8">
          <HeroSection />
          <ProjectSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
