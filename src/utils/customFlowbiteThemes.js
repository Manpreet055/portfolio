import { createTheme } from "flowbite-react";
export const navbarTheme = createTheme({
  root: {
    base: "bg-white fixed z-20 w-full left-0 top-0  px-2 py-3 md:py-4 sm:px-4 dark:border-gray-700 dark:bg-gray-800",
    rounded: {
      on: "rounded",
      off: "",
    },
    bordered: {
      on: "border",
      off: "",
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container",
      },
    },
  },
  brand: {
    base: "flex items-center",
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
  link: {
    base: "block py-2 pl-3 pr-4 transitions md:p-0",
    active: {
      on: "primary-text-bg-gradient  md:bg-transparent ",
      off: "border-b border-gray-100 text-gray-500 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-black dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white",
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: "",
    },
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    icon: "h-5 w-5 shrink-0",
    title: "sr-only",
  },
});

export const footerTheme = createTheme({
  root: {
    base: "w-full rounded-lg bg-white shadow md:flex md:items-center md:justify-between dark:bg-gray-900",
    container: "w-full p-6",
    bgDark: "bg-gray-800",
  },
  groupLink: {
    base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
    link: {
      base: "me-4 last:mr-0 md:mr-6",
      href: "hover:underline",
    },
    col: "flex-col space-y-4",
  },
  icon: {
    base: "text-gray-500 dark:hover:text-white",
    size: "h-5 w-5",
  },
  title: {
    base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white",
  },
  divider: {
    base: "my-6 w-full border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700",
  },
  copyright: {
    base: "text-sm text-gray-500 sm:text-center dark:text-gray-400",
    href: "ml-1 hover:underline",
    span: "ml-1",
  },
  brand: {
    base: "mb-4 flex items-center sm:mb-0",
    img: "mr-3 h-8",
    span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white",
  },
});
