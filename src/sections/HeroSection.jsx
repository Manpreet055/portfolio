import React from "react";
import Blob from "../ui/Blob";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";

const HeroSection = () => {
  const keywords = ["Secure", "Responsive", "Scalable", "Dynamic"];
  return (
    <section className="px-3 sm:px-3" id="hero">
      <div className="lg:mx-16 mt-2 shadow-effect transitions sm:mt-6 overflow-hidden rounded-3xl relative flex items-start min-h-150vh px-4 sm:px-6 xl:px-32 py-8 sm:py-16 bg-gray-100 theme">
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
            className="text-sm sm:text-base   tracking-wide leading-snug sm:leading-relaxed sm:max-w-lg "
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
        {/* <Blob
        position="bottom-90 left-100 "
        className="text-teal-300/30 bottom-0 blur-3xl"
          path="M56.2,-14.1C65.3,9.6,59.7,42.1,38.7,58.7C17.7,75.2,-18.9,75.8,-43.4,58.3C-67.9,40.9,-80.4,5.4,-71.1,-18.6C-61.9,-42.6,-30.9,-55,-3.7,-53.8C23.6,-52.6,47.2,-37.8,56.2,-14.1Z"
        />
        <Blob
        position="top-50 z-20 right-100 "
        className="text-pink-300/15  bottom-0 blur-2xl "
          path="M56.2,-14.1C65.3,9.6,59.7,42.1,38.7,58.7C17.7,75.2,-18.9,75.8,-43.4,58.3C-67.9,40.9,-80.4,5.4,-71.1,-18.6C-61.9,-42.6,-30.9,-55,-3.7,-53.8C23.6,-52.6,47.2,-37.8,56.2,-14.1Z"
        />
        <Blob
        position="top-0 z-20 left-50 lg:right-40"
        className="text-pink-300/15  bottom-0 blur-2xl "
          path="M56.2,-14.1C65.3,9.6,59.7,42.1,38.7,58.7C17.7,75.2,-18.9,75.8,-43.4,58.3C-67.9,40.9,-80.4,5.4,-71.1,-18.6C-61.9,-42.6,-30.9,-55,-3.7,-53.8C23.6,-52.6,47.2,-37.8,56.2,-14.1Z"
        /> */}
      </div>
    </section>
  );
};

export default HeroSection;
