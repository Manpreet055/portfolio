import React, { useEffect } from "react";
import projects from "../utils/projects.js";
import ProjectCard from "../ui/ProjectCard.jsx";
import { motion } from "framer-motion";
import { container, item } from "../animation/ListStagger.js";
import { ArrowRightIcon } from "flowbite-react";

const Projects = () => {
  const [showAll, setShowAll] = React.useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  return (
    <section
      className="mt-5 sm:mt-10 mb-10 w-full flex  md:px-10 flex-col justify-center"
      id="projects"
    >
      <div className="flex w-full px-4 sm:px-0  mt-10 items-center justify-between">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full text-start  text-3xl    sm:text-4xl font-bold"
        >
          My Projects
        </motion.h1>
        <button
          className="sm:text-lg text-nowrap font-medium hover-transition group flex items-center gap-2"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All"}{" "}
          <ArrowRightIcon
            size={20}
            className="group-hover:translate-x-1 transitions"
          />{" "}
        </button>
      </div>
      <div className="px-4 sm:px-8 xl:px-32 py-8 sm:py-10">
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects &&
            displayedProjects.map((project, index) => (
              <li key={project.projectName || index}>
                <ProjectCard project={project} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
