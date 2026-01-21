"use client";

import { BarsIcon, Drawer, DrawerItems } from "flowbite-react";
import { useState, useEffect } from "react";
import {
  User2,
  Instagram,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
} from "lucide-react";
import profile from "../../assets/profile.jpg";
import { set } from "react-hook-form";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || "#hero");

  useEffect(() => {
    // Listen for hash changes
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#hero");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [setActiveHash]);

  const handleClose = () => setIsOpen(false);

  const handleNavClick = (hash) => {
    setActiveHash(hash);
    setIsOpen(false);
  };

  const getLinkClassName = (hash) => {
    return `flex w-full font-medium rounded-lg transitions px-4 py-3 ${
      activeHash === hash
        ? "primary-bg-gradient text-white"
        : "text-theme hover:bg-gray-100 dark:hover:bg-gray-800"
    }`;
  };

  return (
    <>
      <div className="flex my-3 mr-1 items-center justify-center">
        <button className="block md:hidden" onClick={() => setIsOpen(true)}>
          <BarsIcon />
        </button>
      </div>

      <Drawer
        className="flex flex-col gap-1 "
        open={isOpen}
        onClose={handleClose}
      >
        <div className="flex flex-col items-center mt-4">
          <img
            src={profile}
            alt="Profile"
            className="h-30 border rounded-full object-cover w-30 text-gray-400"
          />
          <h2 className="mt-2 text-lg tracking-wider font-semibold">
            Manpreet Singh
          </h2>
          <h1 className="text-sm tracking-wide mt-1">Mern Stack Developer</h1>
        </div>

        <DrawerItems className="focus:border-none">
          <a
            onClick={() => handleNavClick("#hero")}
            href="#hero"
            className={getLinkClassName("#hero")}
          >
            Home
          </a>
        </DrawerItems>

        <DrawerItems className="focus:border-none">
          <a
            href="#about"
            onClick={() => handleNavClick("#about")}
            className={getLinkClassName("#about")}
          >
            About
          </a>
        </DrawerItems>

        <DrawerItems className="focus:border-none">
          <a
            href="#projects"
            onClick={() => handleNavClick("#projects")}
            className={getLinkClassName("#projects")}
          >
            Projects
          </a>
        </DrawerItems>

        <DrawerItems className="focus:border-none">
          <a
            href="#techstack"
            onClick={() => handleNavClick("#core-skills")}
            className={getLinkClassName("#core-skills")}
          >
            Skills
          </a>
        </DrawerItems>

        <DrawerItems className="focus:border-none">
          <a
            href="#contact"
            onClick={() => handleNavClick("#contact")}
            className={getLinkClassName("#contact")}
          >
            Contact Me
          </a>
        </DrawerItems>
        <DrawerItems className="focus:border-none mt-6">
          <a
            className="primary-bg-gradient clash tracking-wide  py-2 font-semibold  shadow-effect transitions px-5 rounded-md  whitespace-nowrap"
            href="https://drive.google.com/uc?export=download&id=1xip8UreNNdagECfht_RHrEnQHtAhBuea"
            download
          >
            Download CV
            <ArrowDown
              className="inline-block ml-2 mb-1"
              size={16}
              strokeWidth={2.5}
            />
          </a>
        </DrawerItems>

        <div className="mt-auto mb-27 sm:mb-4">
          <h1 className="w-full text-center mb-4 font-bold tracking-wider">
            Social Links
          </h1>
          <div className="flex justify-around w-full px-5">
            <a
              href="https://www.instagram.com/0hi.manni/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transitions"
            >
              <Instagram />
            </a>
            <a
              href="https://github.com/Manpreet055/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black transitions dark:text-gray-200 dark:hover:text-white"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/manpreet-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transitions"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:manpreet.mern@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-600 transitions"
            >
              <Mail />
            </a>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
