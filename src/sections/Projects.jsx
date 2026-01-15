import React from "react";
import {
  ShoppingCart,
  Server,
  LayoutDashboard,
  BanknoteArrowDown,
  Cloud,
  ListTodo,
} from "lucide-react";
import ProjectCard from "../ui/ProjectCard.jsx";

const Projects = () => {
  return (
    <section className="mx-3 sm:mx-6 mt-5 sm:mt-10 mb-10" id="projects">
      <h2 className="text-3xl font-semibold">My Projects</h2>
      <div className="px-4 sm:px-8 xl:px-32 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* E-Commerce Website */}
          <ProjectCard
            Icon={ShoppingCart}
            projectName="Stitche E-Commerce Website"
            projectDescription="A full-featured e-commerce platform with product listings,
              shopping cart, and order management and authentication."
            liveLink="https://stitche.vercel.app"
            githubRepo="https://github.com/Manpreet055/Stitche_E-commerce"
          />

          {/* Admin Dashboard */}
          <ProjectCard
            Icon={LayoutDashboard}
            projectName="Admin Dashboard"
            projectDescription="An admin dashboard for managing users, products, messages and orders with data visualization for Stitche."
            popover={true}
          />

          {/*Backend api  */}
          <ProjectCard
            Icon={Server}
            projectName="Backend API Service"
            projectDescription="An Backend API service built with Node.js and Express, providing RESTful endpoints, authentication, for Stitche. "
            liveLink="https://stitche-api.onrender.com/health"
            githubRepo="https://github.com/Manpreet055/Stitche_Backend"
          />

          {/* Weather App */}
          <ProjectCard
            Icon={Cloud}
            projectName="Weather App"
            projectDescription="A weather forecasting app providing real-time updates, city search, and detailed forecasts."
            liveLink="https://cloud-core.netlify.app"
            githubRepo="https://github.com/Manpreet055/Weather-app"
          />

          {/* Expense Tracker */}
          <ProjectCard
            Icon={BanknoteArrowDown}
            projectName="Personal Finance Tracker"
            projectDescription="An application to track income, expenses, and budget with visual reports and analytics."
            liveLink="https://asset-monitor-v1.netlify.app/"
            githubRepo="https://github.com/Manpreet055/Expense-Tracker"
          />

          {/* Todo App */}
          <ProjectCard
            Icon={ListTodo}
            projectName="Todo App"
            projectDescription="A simple and intuitive todo application with dark mode to manage daily tasks efficiently."
            liveLink="https://get-it-done-fr.netlify.app/"
            githubRepo="https://github.com/Manpreet055/To-do-App"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
