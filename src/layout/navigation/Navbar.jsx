import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import { navbarTheme } from "../../utils/customFlowbiteThemes";
import SideBar from "./Sidebar";
import { useState, useEffect } from "react";

const NavbarComponent = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "techstack", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar fluid rounded theme={navbarTheme}>
      <NavbarBrand href="#">
        <span className="primary-text-bg-gradient clash font-semibold tracking-wide self-center whitespace-nowrap text-xl  dark:text-white">
          {"<Manpreet />"}
        </span>
      </NavbarBrand>
      <div className="flex items-center gap-2 md:gap-4 md:order-2">
        <DarkThemeToggle className="cursor-pointer" />
        <a
          href="mailto:manpreet.mern@gmail.com"
          className="theme-alt clash tracking-wide text-theme-alt py-2 font-semibold hover:shadow-md shadow-effect transitions px-5 rounded-full hidden md:block whitespace-nowrap"
        >
          Hire Me
        </a>
        <SideBar />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#hero" active={activeSection === "hero"}>
          Home
        </NavbarLink>
        <NavbarLink href="#about" active={activeSection === "about"}>
          About
        </NavbarLink>
        <NavbarLink href="#techstack" active={activeSection === "techstack"}>
          Skills
        </NavbarLink>
        <NavbarLink href="#projects" active={activeSection === "projects"}>
          Projects
        </NavbarLink>
        <NavbarLink href="#contact" active={activeSection === "contact"}>
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};
export default NavbarComponent;
