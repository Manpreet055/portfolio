import { ShoppingCart } from "lucide-react";
import React from "react";
import ProjectCard from "../../ui/ProjectCard";

const ProjectsTechStack = () => {
  const projects = {
    projectName: "E-Commerce Website",
    projectDescription:
      "Full-stack e-commerce platform featuring dynamic catalogs, persistent shopping carts, and end-to-end order management.",
    Icon: ShoppingCart,
    liveLink: "https://stitche.vercel.app",
    githubRepo: "https://github.com/Manpreet055/Stitche_E-commerce",
    techStack: [
      "React",
      "Tailwind CSS",
      "Framer-motion",
      "Flowbite-React",
      "React-router-dom",
      "Axios",
      "Lucide-react-icons",
    ],
  };
  return (
    <ul className="bg-gray-100 cursor-pointer grid grid-rows-6 gap-2 min-h-45 place-items-start list-disc theme rounded-lg p-4 shadow-effect transitions">
      <li className="list-none font-semibold w-full text-center">
        <h2>Tech Stack</h2>
      </li>
      {projects.techStack.map((tech, index) => (
        <li key={index} className="text-sm mx-5 sm:text-base">
          {tech}
        </li>
      ))}
    </ul>
  );
};

export default ProjectsTechStack;
