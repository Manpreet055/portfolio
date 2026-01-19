"use client";

import { Footer, FooterDivider } from "flowbite-react";
import { footerTheme } from "../utils/customFlowbiteThemes";
import QuickLinks from "../layout/footer/QuickLinks";
const FooterSection = () => {
  return (
    <>
      <hr className="mt-6 w-full border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
      <Footer
        className="max-w-7xl sm:mb-10 bg-none theme   mx-auto shadow-effect transitions"
        container
        theme={footerTheme}
      >
        <div className="w-full">
          <div className="w-full flex flex-col md:flex-row md:justify-between items-center md:items-start ">
            <div className="mb-6 md:mb-0 flex flex-col items-center">
              <div className="primary-text-bg-gradient font-semibold whitespace-nowrap text-xl clash tracking-wide  dark:text-white">
                {"<Manpreet />"}
              </div>
              <p className="mt-2 text-sm text-gray-500 text-nowrap">
                Full Stack Dev <span className="mx-1">|</span> Creative Designer
              </p>
            </div>
            <QuickLinks />
          </div>
          <FooterDivider />
          <div className="w-full grid place-items-center ">
            <span className="text-xs sm:text-sm text-gray-500 text-center dark:text-gray-400 block">
              {`© 2024-${new Date().getFullYear()} Manpreet Dev • Full Stack Developer`}
              <span className="block mt-1 sm:inline sm:mt-0 sm:ml-2 text-gray-400 dark:text-gray-500">
                — Built with ❤️ and React —
              </span>
            </span>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterSection;
