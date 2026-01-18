import React from "react";
import { motion } from "framer-motion";
const RenderSkills = ({ skills, title }) => {
  return (
    <ul className="flex flex-wrap mt-4 gap-1 max-w-md justify-evenly gap-y-4">
      <li className="w-full text-theme text-center font-semibold text-xl">
        {title}
      </li>
      {skills.map((skill) => (
        <motion.li
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ x: -50 }}
          key={skill}
          className=" grid  h-15 w-fit px-5  dark:text-neutral-300 text-neutral-500  whitespace-nowrap place-items-center  bg-gray-100 theme rounded-lg sm:text-base text-sm shadow-effect uppercase tracking-wider hover:border-purple-500    transitions"
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  );
};

export default RenderSkills;
