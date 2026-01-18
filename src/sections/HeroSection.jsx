import React from "react";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";

const HeroSection = () => {
  const keywords = ["Secure", "Responsive", "Scalable", "Dynamic"];
  return (
    <section className="px-3 sm:px-3" id="hero">
      <div className="lg:mx-16 mt-2 shadow-effect cursor-pointer transitions sm:mt-6 overflow-hidden rounded-3xl flex items-start min-h-150vh px-4 sm:px-6 xl:px-32 py-8 sm:py-16 bg-gray-100 theme">
        <div className="p-1 sm:p-4 max-w-2xl gap-6 h-full flex flex-col items-start justify-center">
          <h1 className="text-lg sm:text-xl font-semibold ">
            Mern stack developer
          </h1>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-bold max-w-xs sm:max-w-lg"
          >
            Hello, I'm Manpreet Singh
          </motion.h1>

          <div className="flex items-center md:text-lg whitespace-nowrap font-semibold">
            I build&nbsp;
            <TypewriterComponent
              options={{
                strings: keywords,
                typeSepeed: 60,
                deleteSpeed: 30,
                delaySpeed: 2000,
                autoStart: true,
                loop: true,
              }}
            />
            web applications.
          </div>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-sm sm:text-base  dark:text-neutral-300 text-neutral-500 tracking-wide relative leading-snug sm:leading-relaxed sm:max-w-lg "
          >
            I’m a full-stack MERN developer who builds and deploys modern,
            scalable web applications. I focus on clean UI, solid backend
            architecture, and real-world features using React, Node.js, Express,
            and MongoDB.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex items-center gap-4"
          >
            <a
              href="#contact"
              className="px-5 py-3 primary-bg-gradient text-white rounded-3xl text-sm font-semibold hover:bg-blue-700 shadow-2xl transition"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-5 py-3 bg-white text-black rounded-3xl text-sm font-semibold hover:bg-gray-200 shadow-2xl transition-all duration-300 ease-in-out"
            >
              View Portfolio
            </a>
          </motion.div>
        </div>{" "}
      </div>
    </section>
  );
};

export default HeroSection;
