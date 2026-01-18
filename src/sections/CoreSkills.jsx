import React from "react";
import { motion } from "framer-motion";
import CoreSkillsCard from "../ui/CoreSkillsCard.jsx";
import coreSkills from "../utils/coreSkills.js";
const CoreSkills = () => {
  return (
    <section
      id="core-skills"
      className="w-full flex  flex-col justify-center items-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="w-full h-fit text-center px-4 sm:px-0   mt-10 text-3xl sm:text-4xl font-bold"
      >
        Core <span className="primary-text-bg-gradient">competencies</span>
      </motion.h1>
      <ul className="h-full  grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2  w-full place-items-center mt-6 gap-x-4 md:gap-y-4">
        {coreSkills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: -50 }}
            className="flex justify-center"
          >
            <CoreSkillsCard
              title={skill?.title}
              Icon={skill?.Icon}
              desc={skill?.desc}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default CoreSkills;
