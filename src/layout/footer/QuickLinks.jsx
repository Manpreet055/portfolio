import React from "react";
import { Instagram, Github, Linkedin } from "lucide-react";

const QuickLinks = () => {
  return (
    <div className="flex w-full justify-evenly  gap-8">
      <div>
        <span className="font-semibold uppercase">Quick Links</span>

        <ul className="flex flex-col lg:flex-row gap-2 sm:gap-4 list-none mt-4">
          <li>
            <a className="text-sm md:text-base" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="text-sm md:text-base" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="text-sm md:text-base" href="#core-skills">
              Skills
            </a>
          </li>
          <li>
            <a className="text-sm md:text-base" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="text-sm md:text-base" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <span className="font-semibold uppercase">FOLLOW ME</span>
        <ul className="flex flex-col lg:flex-row gap-3 sm:gap-4 list-none mt-4">
          <li className="flex items-center gap-2">
            <Github className="w-6 h-6 " />
            <a
              className="text-sm md:text-base hover:underline "
              href="https://github.com/Manpreet055/"
            >
              Github
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Instagram className="w-6 h-6 text-red-400 " />
            <a
              className="text-sm md:text-base hover:underline"
              href="https://www.instagram.com/0hi.manni/"
            >
              Instagram
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Linkedin className="w-6 h-6 text-blue-400 " />
            <a
              className="text-sm md:text-base hover:underline"
              href="https://www.linkedin.com/in/manpreet-dev/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuickLinks;
