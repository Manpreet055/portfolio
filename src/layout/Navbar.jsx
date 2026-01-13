import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import { navbarTheme } from "../utils/customFlowbiteThemes";

const NavbarComponent = () => {
  return (
    <Navbar fluid rounded theme={navbarTheme}>
      <NavbarBrand href="#">
        <span className="primary-text-bg-gradient font-extrabold  self-center whitespace-nowrap text-xl  dark:text-white">
          {"<Manpreet />"}
        </span>
      </NavbarBrand>
      <div className="flex items-center relative md:order-2">
        <span className="absolute right-10 md:right-25 top-1/2 -translate-y-1/2">
          <DarkThemeToggle />
        </span>
        <button className="dark:text-black dark:bg-white bg-black text-white py-2 font-semibold hover:bg-gray-200 transition-all duration-300 ease-in-out px-5 rounded-4xl  hidden md:block">
          Hire Me
        </button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};
export default NavbarComponent;
