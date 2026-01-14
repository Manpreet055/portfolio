import React from "react";
import { ShoppingCart, ListTodo, BanknoteArrowDown, Cloud } from "lucide-react";
const Projects = () => {
  return (
    <section className="mx-3 sm:mx-6 mt-5 sm:mt-10 mb-10" id="projects">
      <h2 className="text-3xl font-semibold">My Projects</h2>
      <div className="px-4 sm:px-8 xl:px-32 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition">
            <ShoppingCart className="mx-auto mb-4 text-theme" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-center">
              E-Commerce Website
            </h3>
            <p className="text-theme max-w-sm mx-auto text-sm md:text-base text-center">
              A full-featured e-commerce platform with product listings,
              shopping cart, and order management and authentication.{" "}
              <a
                className="text-blue-500 text-nowrap pl-1 hover:text-blue-600 transitions underline"
                href="https://stitche.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition">
            <Cloud className="mx-auto mb-4 text-theme" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Weather App
            </h3>
            <p className="text-theme max-w-sm mx-auto text-sm md:text-base text-center">
              A weather forecasting app providing real-time updates, city
              search, and detailed forecasts.{" "}
              <a
                className="text-blue-500 text-nowrap pl-1 hover:text-blue-600 transitions underline"
                href="https://cloud-core.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition">
            <BanknoteArrowDown className="mx-auto mb-4 text-theme" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Personal Finance Tracker
            </h3>
            <p className="text-theme max-w-sm mx-auto text-sm md:text-base text-center">
              An application to track income, expenses, and budget with visual
              reports and analytics.{" "}
              <a
                className="text-blue-500 text-nowrap pl-1 hover:text-blue-600 transitions underline"
                href="https://asset-monitor-v1.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
