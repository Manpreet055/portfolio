import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section
      className=" flex px-4 md:px-10 flex-col justify-center items-center"
      id="about"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-center mt-10 text-3xl sm:text-4xl font-bold"
      >
        About Me
      </motion.h1>
      <div className="flex flex-col mt-6 w-full items-center ">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl text-sm sm:text-base text-center leading-relaxed tracking-wide  text-theme  "
        >
          I'm Manpreet Singh, a passionate web developer with expertise in
          creating dynamic, beautiful, and responsive websites.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
