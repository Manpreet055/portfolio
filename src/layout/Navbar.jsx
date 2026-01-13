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
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {"<Manpreet />"}
        </span>
      </NavbarBrand>
      <div className="flex items-center relative md:order-2">
        <span className="absolute right-10 md:right-32 top-1/2 -translate-y-1/2">
          <DarkThemeToggle />
        </span>
        <Button className="hidden md:block" color="purple">
          Hire Me
        </Button>
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
