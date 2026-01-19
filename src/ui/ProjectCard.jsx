import React from "react";
import { Popover } from "flowbite-react";

const ProjectCard = ({ project }) => {
  const {
    Icon = null,
    projectName = "",
    projectDescription = "",
    liveLink = "#",
    githubRepo = "#",
    popover = false,
  } = project;
  return (
    <div className="bg-gray-100 cursor-pointer grid h-full place-items-center theme p-6">
      <Icon className="mx-auto mb-4 text-theme" size={48} />
      <h3 className="text-xl font-semibold mb-2 text-center">{projectName}</h3>
      <p className="max-w-sm mx-auto text-sm md:text-base dark:text-neutral-300 text-neutral-500 text-center">
        {projectDescription.includes("Stitche") ? (
          <>
            {projectDescription.split("Stitche")[0]}
            <span className="font-bold">Stitche</span>
            {projectDescription.split("Stitche")[1]}
          </>
        ) : (
          projectDescription
        )}
      </p>
    </div>
  );
};

export default ProjectCard;
