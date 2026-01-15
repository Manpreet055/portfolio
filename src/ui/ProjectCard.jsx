import React from "react";
import { Popover } from "flowbite-react";
const ProjectCard = ({
  Icon = null,
  projectName = "",
  projectDescription = "",
  liveLink = "#",
  githubRepo = "#",
  popover = false,
}) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition">
      <Icon className="mx-auto mb-4 text-theme" size={48} />
      <h3 className="text-xl font-semibold mb-2 text-center">{projectName}</h3>
      <p className="text-theme max-w-sm mx-auto text-sm md:text-base text-center">
        {projectDescription}
      </p>
      <div className="flex items-center w-full justify-center mt-4 space-x-2">
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
