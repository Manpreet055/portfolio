import React from "react";
import { motion } from "framer-motion";
import projects from "../../utils/projects.js";
import ProjectCard from "./ProjectCard.jsx";

const RenderProjects = ({ showAll }) => {
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  return (
    <div className="px-4 sm:px-8 xl:px-32 pt-8 sm:pt-10">
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects &&
          displayedProjects.map((project, index) => (
            <motion.li
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              exit={{ y: 50 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              key={project.projectName || index}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
      </ul>
    </div>
  );
};

export default RenderProjects;
