import React from "react";
import { motion } from "framer-motion";
import CoreSkills from "./CoreSkills";
const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col xl:flex-row  w-full sm:mx-6 mt-5 sm:mt-10 mb-10"
    >
      <div className="w-full flex px-4 md:px-10 flex-col justify-start items-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full text-start mt-10 text-3xl sm:text-4xl font-bold"
        >
          About Me
        </motion.h1>
        <div className="flex flex-col mt-6 w-full items-start justify-center gap-6">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-4xl text-sm sm:text-base text-start leading-loose Inter italic tracking-wider  text-theme  "
          >
            "I’m a full-stack MERN developer with hands-on experience building
            and deploying production-ready web applications. My journey into
            tech started alongside long, physically demanding work shifts—so
            discipline, consistency, and problem-solving aren’t just skills for
            me, they’re habits.
            <br />
            I specialize in building modern, responsive, and scalable web apps
            using React, Tailwind CSS, Node.js, Express, and MongoDB. I focus
            heavily on clean UI, smooth user experience, and maintainable code.
            From frontend animations with Framer Motion to secure backend APIs
            with JWT authentication, I enjoy working across the entire stack.
            <br />
            I follow a build-first mindset—learning by shipping real projects.
            I’ve designed and deployed complete systems including eCommerce
            platforms with authentication, admin panels, API integrations, and
            real-world workflows. I care about performance, structure, and
            writing code that actually survives production.
            <br />
            Currently, I’m focused on leveling up my frontend craftsmanship
            while staying strong on backend fundamentals, with the goal of
            working on impactful products in a fast-paced engineering team."
          </motion.p>
        </div>
      </div>
      <CoreSkills />
    </section>
  );
};

export default About;
