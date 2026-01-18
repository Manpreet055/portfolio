import React from "react";

const RenderSkills = ({ skills, title }) => {
  return (
    <ul className="flex flex-wrap mt-4 gap-1 max-w-md justify-evenly gap-y-4">
      <li className="w-full text-theme text-center font-semibold text-xl">
        {title}
      </li>
      {skills.map((skill) => (
        <li
          key={skill}
          className=" grid  h-15 w-fit px-5 text-theme whitespace-nowrap place-items-center  bg-gray-100 theme rounded-lg sm:text-base text-sm shadow-effect uppercase tracking-wider hover:border-purple-500    transitions"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default RenderSkills;
