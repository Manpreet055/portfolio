import React from "react";

const ProjectsTechStack = ({ project }) => {
  return (
    <div className="h-57 theme flex flex-col">
      <h4 className="list-none my-2 font-semibold w-full text-center">
        Tech Stack
      </h4>
      <ul className="overflow-auto cursor-pointer hide-scrollbar flex flex-col gap-2 place-items-start list-disc   rounded-lg px-6 py-1">
        {project?.techStack.map((tech, index) => (
          <li key={index} className="text-sm mx-5 sm:text-base">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsTechStack;
