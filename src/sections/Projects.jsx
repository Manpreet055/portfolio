import React from "react";
import projects from "../utils/projects.js";
import ProjectCard from "../ui/ProjectCard.jsx";
import { motion } from "framer-motion";
import { container, item } from "../animation/ListStagger.js";

const Projects = () => {
  return (
    <section
      className=" sm:mx-6 mt-5 sm:mt-10 mb-10 w-full flex  md:px-10 flex-col justify-center"
      id="projects"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="w-full text-start mt-10 text-3xl px-4 sm:px-0   sm:text-4xl font-bold"
      >
        My Projects
      </motion.h1>
      <div className="px-4 sm:px-8 xl:px-32 py-8 sm:py-10">
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.li key={index} variants={item}>
              <ProjectCard
                Icon={project.Icon}
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                liveLink={project.liveLink}
                githubRepo={project.githubRepo}
                popover={project.popover} // This will be undefined for others, which is fine
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Projects;
