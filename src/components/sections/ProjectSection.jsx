import React from "react";
import ProjectPreview from "../projects/ProjectPreview";
import { motion, useAnimation } from "motion/react";
import disney from "../../../public/project-thumbnails/disney.png";
import disneyWide from "../../../public/project-thumbnails-wide/disney-wide.png";
import library from "../../../public/project-thumbnails/library.png";
import libraryWide from "../../../public/project-thumbnails-wide/library-wide.png";
import trilogy from "../../../public/project-thumbnails/trilogy.png";
import trilogyWide from "../../../public/project-thumbnails-wide/trilogy-wide.png";
import wordle from "../../../public/project-thumbnails/wordle.png";
import wordlWide from "../../../public/project-thumbnails-wide/wordle-wide.png";

const ProjectSection = () => {
  const projectList = [
    {
      title: "Disney Clone",
      previewText:
        "A complete clone of the Disney Plus streaming service that allows users to view movie & tv show information as well as add selections to watchlist.",
      projectTools: [
        "React Js",
        "Firebase V9",
        "Tailwind CSS",
        "The Movie API",
      ],
      liveUrl: "https://fperezfrancisco.github.io/disney-plus-clone/",
      githubUrl: "https://github.com/fperezfrancisco/disney-plus-clone",
      thumbnail: disney,
      thumbnailWide: disneyWide,
    },
    {
      title: "Library Ecommerce",
      previewText:
        "This project is a modern, responsive eCommerce website designed for a seamless user experience. Users can browse through available books, view detailed information for each title, and add items to their cart with full management functionality.",
      projectTools: ["React Js", "CSS"],
      liveUrl: "https://fperezfrancisco.github.io/library-react/",
      githubUrl: "https://github.com/fperezfrancisco/library-react",
      thumbnail: library,
      thumbnailWide: libraryWide,
    },
    {
      title: "Trilogy Soccer Website",
      previewText:
        "This multi-page website was designed and developed to serve real-world users, enabling them to easily view and purchase soccer training bundles, camps, and private sessions.",
      projectTools: ["React Js", "Tailwind CSS"],
      liveUrl: "https://trilogysoccer.com/",
      githubUrl: "https://trilogysoccer.com/",
      thumbnail: trilogy,
      thumbnailWide: trilogyWide,
    },
    {
      title: "Wordle Game Clone",
      previewText:
        "This is a fully functioning replica of the famous guessing game - Wordle. Users can play the game as well as keep track of important stats.",
      projectTools: ["HTML", "CSS", "Javascript", "Dictionary API"],
      liveUrl: "https://fperezfrancisco.github.io/wordle/",
      githubUrl: "https://github.com/fperezfrancisco/wordle",
      thumbnail: wordle,
      thumbnailWide: wordlWide,
    },
  ];

  return (
    <section
      className="w-full my-20 max-w-[1200px] mx-auto px-4 sm:px-12 py-[120px] flex flex-col gap-12 items-center"
      id="projects"
    >
      <h2 className="fjalla-one-regular text-2xl md:text-4xl my-4 primaryText">
        Recent Projects
      </h2>

      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <div className="w-full max-w-[500px] flex flex-col items-center gap-16 md:gap-24 md:max-w-none ">
          {projectList &&
            projectList.map((project, index) => (
              <ProjectPreview key={index} project={project} />
            ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
