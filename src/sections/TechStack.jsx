import React from "react";
import RenderSkills from "../ui/RenderSkills";
import { motion } from "framer-motion";
import { frontendSkills, backendSkills, tools } from "../utils/techStack";
const TechStack = () => {
  return (
    <section
      id="techstack"
      className="py-5 w-full flex justify-center text-white"
    >
      <div className="w-full sm:mx-6 px-4 md:px-10 flex flex-col justify-center items-center">
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full text-theme text-3xl clash tracking-wide sm:text-4xl font-bold"
          >
            Tech <span className="primary-text-bg-gradient">Stack</span>
          </motion.h3>
          <p className="text-gray-400  my-2  sm:text-lg">
            Technologies I have worked with
          </p>
        </div>
        <div className="w-full flex flex-wrap gap-5 sm:gap-10 items-start justify-evenly mt-6">
          <RenderSkills skills={frontendSkills} title="Frontend Skills" />
          <RenderSkills skills={backendSkills} title="Backend Skills" />
          <RenderSkills skills={tools} title="Tools" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
