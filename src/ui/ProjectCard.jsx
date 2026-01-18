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
    <div className="bg-gray-100  grid grid-rows-[60px_30px_80px_10px] sm:grid-rows-[60px_30px_100px_1fr] place-items-center  theme rounded-lg p-6 shadow-effect transitions">
      <Icon className="mx-auto mb-4 text-theme" size={48} />
      <h3 className="text-xl font-semibold mb-2 text-center">{projectName}</h3>
      <p className="max-w-sm mx-auto text-sm md:text-base  dark:text-neutral-300 text-neutral-500 text-center">
        {projectDescription}
      </p>
      <div className="flex items-center w-full justify-center space-x-2">
        {popover ? (
          <Popover
            aria-labelledby="default-popover"
            content={
              <div className="w-64 text-sm theme">
                <div className="p-2">
                  <p>This project is under development.</p>
                </div>
              </div>
            }
          >
            <button className="text-blue-500 text-sm text-nowrap pl-1 hover:text-blue-600 transitions underline">
              Live Link
            </button>
          </Popover>
        ) : (
          <a
            className="text-blue-500 text-sm text-nowrap pl-1 hover:text-blue-600 transitions underline"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Link
          </a>
        )}

        {/* Github repo */}
        {popover ? (
          <Popover
            aria-labelledby="default-popover"
            content={
              <div className="w-64 text-sm theme">
                <div className="p-2">
                  <p>This project is under development.</p>
                </div>
              </div>
            }
          >
            <button className="text-blue-500 text-sm text-nowrap pl-1 hover:text-blue-600 transitions underline">
              Github Repo
            </button>
          </Popover>
        ) : (
          <a
            className="text-blue-500 text-sm text-nowrap pl-1 hover:text-blue-600 transitions underline"
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
