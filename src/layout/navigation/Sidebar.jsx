"use client";

import { BarsIcon, Drawer, DrawerItems } from "flowbite-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { User2, Instagram, Github, Linkedin } from "lucide-react";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex my-3  mr-1 items-center justify-center">
        <button className="block md:hidden " onClick={() => setIsOpen(true)}>
          <BarsIcon />
        </button>
      </div>

      <Drawer
        className="flex flex-col  gap-5"
        open={isOpen}
        onClose={handleClose}
      >
        <div className="flex flex-col items-center mt-4">
          <User2
            className="h-30 border rounded-full  w-30 text-gray-400"
            strokeWidth={1}
          />
          <h2 className="mt-2 text-lg tracking-wider font-semibold">
            Manpreet Singh
          </h2>
          <h1 className="text-sm tracking-wide mt-1">Mern Stack Developer</h1>
        </div>
        <DrawerItems className="focus:border-none">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex w-full  font-medium  rounded-lg transitions ${
                isActive ? " primary-bg-gradient px-4 py-3 " : "text-theme "
              }`
            }
          >
            Home
          </NavLink>
        </DrawerItems>
        <DrawerItems className="focus:border-none">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex w-full  font-medium  rounded-lg transitions ${
                isActive ? " primary-bg-gradient px-4 py-3 " : "text-theme "
              }`
            }
          >
            About
          </NavLink>
        </DrawerItems>
        <DrawerItems className="focus:border-none">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex w-full  font-medium  rounded-lg transitions ${
                isActive ? " primary-bg-gradient px-4 py-3 " : "text-theme "
              }`
            }
          >
            Projects
          </NavLink>
        </DrawerItems>
        <DrawerItems className="focus:border-none">
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `flex w-full  font-medium  rounded-lg transitions ${
                isActive ? " primary-bg-gradient px-4 py-3 " : "text-theme "
              }`
            }
          >
            Skills
          </NavLink>
        </DrawerItems>
        <DrawerItems className="focus:border-none">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex w-full  font-medium  rounded-lg transitions  ${
                isActive ? " primary-bg-gradient px-4 py-3 " : "text-theme "
              }`
            }
          >
            Contact Me
          </NavLink>
        </DrawerItems>
        <div className="mt-auto mb-27 sm:mb-4">
          <h1 className="w-full text-center mb-4 font-bold tracking-wider">
            Social Links
          </h1>
          <div className="flex justify-around w-full  px-5">
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
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default Sidebar;
