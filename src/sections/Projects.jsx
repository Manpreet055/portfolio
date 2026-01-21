import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "flowbite-react";
import RenderProjects from "../layout/projects/RenderProjects.jsx";

const Projects = () => {
  const [showAll, setShowAll] = React.useState(false);
  return (
    <section
      className=" sm:px-6 mt-5 sm:mt-10  w-full flex  md:px-10 flex-col justify-center"
      id="projects"
    >
      <div className="flex relative w-full px-4 sm:px-0  mt-10 items-center justify-between">
        <motion.h1
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          exit={{ y: -50 }}
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
      <RenderProjects showAll={showAll} />
    </section>
  );
};

export default Projects;
