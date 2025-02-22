import React from "react";
import ProjectPreview from "../projects/ProjectPreview";

const ProjectSection = () => {
  const projectList = [
    {
      title: "Disney Clone",
      previewText:
        "This is a one or two line preview text that will be displayed.",
      projectTools: [
        "React Js",
        "Firebase V9",
        "Tailwind CSS",
        "The Movie API",
      ],
      liveUrl: "",
      githubUrl: "",
      thumbnailSquare: "",
      thumbnailTall: "",
      thumbnailWide: "",
    },
    {
      title: "Disney Clone",
      previewText:
        "This is a one or two line preview text that will be displayed.",
      projectTools: [
        "React Js",
        "Firebase V9",
        "Tailwind CSS",
        "The Movie API",
      ],
      liveUrl: "",
      githubUrl: "",
      thumbnailSquare: "",
      thumbnailTall: "",
      thumbnailWide: "",
    },
    {
      title: "Disney Clone",
      previewText:
        "This is a one or two line preview text that will be displayed.",
      projectTools: [
        "React Js",
        "Firebase V9",
        "Tailwind CSS",
        "The Movie API",
      ],
      liveUrl: "",
      githubUrl: "",
      thumbnailSquare: "",
      thumbnailTall: "",
      thumbnailWide: "",
    },
  ];

  return (
    <section className="w-full my-20 max-w-[1200px] mx-auto px-4 sm:px-12 py-[120px] flex flex-col gap-12 items-center">
      <h2 className="fjalla-one-regular text-2xl md:text-4xl my-4 primaryText">
        Recent Projects
      </h2>
      <div className="w-full max-w-[500px] flex flex-col items-center gap-16 md:gap-24 md:max-w-none ">
        {projectList &&
          projectList.map((project, index) => (
            <ProjectPreview key={index} project={project} />
          ))}
      </div>
    </section>
  );
};

export default ProjectSection;
