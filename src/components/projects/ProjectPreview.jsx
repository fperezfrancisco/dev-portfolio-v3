import React from "react";

const ProjectPreview = ({ project }) => {
  const handleLiveSite = () => {
    window.open(project.liveUrl, "_blank");
  };

  const handleGithub = () => {
    window.open(project.githubUrl, "_blank");
  };

  return (
    <div className="w-full flex flex-col items-start justify-between md:flex-row gap-4 md:gap-6">
      <div
        onClick={handleLiveSite}
        className="aspect-video bg-neutral-200 rounded-2xl w-full hover:scale-105 cursor-pointer transition-all duration-250 ease-out md:w-3/5 md:max-w-[500px] md:aspect-[3/2] object-cover overflow-hidden"
      >
        <img className="h-full hidden md:block" src={project.thumbnail} />
        <img className="h-full block md:hidden" src={project.thumbnailWide} />
      </div>
      <div className="w-full md:w-3/5 md:max-w-[500px] flex flex-col items-start primaryText py-2 lg:py-6">
        <h3 className="text-xl font-medium pb-4">{project && project.title}</h3>
        <p className="pb-4 text-[0.85rem] lg:text-[1rem]">
          {project && project.previewText}
        </p>
        <ul className="flex py-4 lg:py-4 flex-wrap gap-4 items-center text-[0.85rem] lg:text-[1rem] leading-2">
          {project &&
            project.projectTools.map((tool) => (
              <li className="accentText">{tool}</li>
            ))}
        </ul>
        <div className="flex flex-wrap items-center justify-center gap-4 py-2 md:py-6">
          <button onClick={handleLiveSite} className="primaryBtn">
            Live Site
          </button>
          <button
            onClick={handleGithub}
            className="secondaryBtn flex items-center gap-2"
          >
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
