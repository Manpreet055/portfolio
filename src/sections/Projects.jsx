import React, { useEffect } from "react";
import projects from "../utils/projects.js";
import ProjectCard from "../ui/ProjectCard.jsx";
import { motion } from "framer-motion";
import { container, item } from "../animation/ListStagger.js";
import { ArrowRightIcon } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProjectsTechStack from "../layout/projects/ProjectsTechStack.jsx";
const Projects = () => {
  const [showAll, setShowAll] = React.useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  return (
    <section
      className=" sm:px-6 mt-5 sm:mt-10  w-full flex  md:px-10 flex-col justify-center"
      id="projects"
    >
      <div className="flex relative w-full px-4 sm:px-0  mt-10 items-center justify-between">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center  text-3xl clash tracking-wide   sm:text-4xl font-bold"
        >
          My <span className="primary-text-bg-gradient">Projects</span>
        </motion.h1>
        <button
          className="absolute right-1 cursor-pointer shadow-effect text-xs sm:text-base p-3 transitions rounded-lg theme text-nowrap font-medium group flex items-center gap-2"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All"}{" "}
          <ArrowRightIcon
            size={20}
            className="group-hover:translate-x-1 transitions"
          />{" "}
        </button>
      </div>
      <div className="px-4 sm:px-8 xl:px-32 pt-8 sm:pt-10">
        <ProjectsTechStack />
        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={container}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects &&
            displayedProjects.map((project, index) => (
              <motion.li key={project.projectName || index} variants={item}>
                <ProjectCard project={project} />
              </motion.li>
            ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Projects;
