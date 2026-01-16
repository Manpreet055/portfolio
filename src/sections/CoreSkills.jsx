import React from "react";
import { motion } from "framer-motion";
import CoreSkillsCard from "../ui/CoreSkillsCard.jsx";
import coreSkills from "../utils/coreSkills.js";
import { container, item } from "../animation/ListStagger.js";
const CoreSkills = () => {
  return (
    <section
      id="core-skills"
      className="w-full flex  md:px-10 flex-col justify-center items-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="w-full h-fit text-start px-4 sm:px-0   mt-10 text-3xl sm:text-4xl font-bold"
      >
        Core competencies{" "}
      </motion.h1>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: true }}
        className="h-full  grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2  w-full place-items-center mt-6 gap-x-4 md:gap-y-4"
      >
        {coreSkills.map((skill, index) => (
          <motion.li
            key={index}
            variants={item}
            className="flex justify-center"
          >
            <CoreSkillsCard
              title={skill?.title}
              Icon={skill?.Icon}
              desc={skill?.desc}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default CoreSkills;
