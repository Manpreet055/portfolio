import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import { navbarTheme } from "../../utils/customFlowbiteThemes";
import SideBar from "./Sidebar";

const NavbarComponent = () => {
  return (
    <Navbar fluid rounded theme={navbarTheme}>
      <NavbarBrand href="#">
        <span className="primary-text-bg-gradient font-extrabold  self-center whitespace-nowrap text-xl  dark:text-white">
          {"<Manpreet />"}
        </span>
      </NavbarBrand>
      <div className="flex items-center gap-2 md:gap-4 md:order-2">
        <DarkThemeToggle />
        <a
          href="mailto:manpreet.mern@gmail.com"
          className="dark:text-black text-sm dark:bg-white bg-black text-white py-2 font-semibold hover:shadow-md shadow-xl transitions px-5 rounded-full hidden md:block whitespace-nowrap"
        >
          Hire Me
        </a>
        <SideBar />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#hero" active>
          Home
        </NavbarLink>
        <NavbarLink href="#about">About</NavbarLink>
        <NavbarLink href="#core-skills">Skills</NavbarLink>
        <NavbarLink href="#projects">Projects</NavbarLink>
        <NavbarLink href="#contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};
export default NavbarComponent;
