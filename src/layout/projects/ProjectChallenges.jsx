import React from "react";
const ProjectChallenges = ({ project }) => {
  return (
    <div className="h-full theme flex flex-col">
      <h4 className="list-none my-2 font-semibold w-full text-center">
        Challenges & Learnings
      </h4>
      <ul className="overflow-auto cursor-pointer hide-scrollbar flex flex-col gap-2 place-items-start list-disc   rounded-lg px-6 py-1">
        {project?.challenges.map((challenge, index) => (
          <li key={index} className="text-sm mx-5 sm:text-base">
            <span className="font-bold">{challenge.title}</span>
            <br />
            <span className="dark:text-neutral-300 text-neutral-500 ">
              {challenge.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectChallenges;
