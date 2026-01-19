import { Popover } from "flowbite-react";
import React from "react";
import { Github, Globe } from "lucide-react";

const ProjectLinks = ({ project }) => {
  const { popover, liveLink, githubRepo } = project;
  return (
    <div className="flex flex-col theme h-57 items-center w-full space-y-2">
      <h4 className="list-none my-2 font-semibold w-full text-center">
        Project Links
      </h4>
      <div className="grid grid-cols-1 gap-3 pt-6 place-items-start">
        {popover ? (
          <Popover
            aria-labelledby="default-popover"
            content={
              <div className="w-64 text-sm theme">
                <div className="p-2">
                  <p className="text-nowrap">
                    This project is under development.
                  </p>
                </div>
              </div>
            }
          >
            <button className="project-links">
              <Globe className="inline-block mr-1" size={23} />
              Live Link
            </button>
          </Popover>
        ) : (
          <a
            className="project-links"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="inline-block mr-1" size={23} />
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
                  <p className="text-nowrap">
                    This project is under development.
                  </p>
                </div>
              </div>
            }
          >
            <button className="project-links">
              <Github className="inline-block mr-1" size={23} />
              Github Repo
            </button>
          </Popover>
        ) : (
          <a
            className="project-links"
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="inline-block mr-1" size={23} />
            Github Repo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectLinks;
