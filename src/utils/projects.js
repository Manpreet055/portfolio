import { html } from "framer-motion/client";
import {
  ShoppingCart,
  Server,
  LayoutDashboard,
  BanknoteArrowDown,
  Cloud,
  ListTodo,
} from "lucide-react";
const projects = [
  {
    projectName: "E-Commerce Website",
    projectDescription:
      "Full-stack e-commerce platform featuring dynamic catalogs, persistent shopping carts, and end-to-end order management.",
    Icon: ShoppingCart,
    liveLink: "https://stitche.vercel.app",
    githubRepo: "https://github.com/Manpreet055/Stitche_E-commerce",
    techStack: [
      "React",
      "Tailwind CSS",
      "Framer-motion",
      "Flowbite-React",
      "React-router-dom",
      "Axios",
      "Lucide-react-icons",
    ],
  },
  {
    projectName: "Admin Dashboard",
    projectDescription:
      "An admin dashboard for managing users, products, messages and orders with data visualization",
    Icon: LayoutDashboard,
    popover: true,
    techStack: [
      "React",
      "Tailwind CSS",
      "Framer-motion",
      "Flowbite-React",
      "React-router-dom",
      "Axios",
      "Lucide-react-icons",
    ],
  },
  {
    projectName: "Backend API Service",
    projectDescription:
      "An Backend API built with Node.js and Express, providing RESTful endpoints, authentication for dashboard and e-commerce.",
    Icon: Server,
    liveLink: "https://stitche-api.onrender.com/health",
    githubRepo: "https://github.com/Manpreet055/Stitche_Backend",
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Authentication",
      "Bcrypt",
      "Mongoose",
      "Ngrok",
      "Cloudinary",
      "Multer",
    ],
  },
  {
    projectName: "Weather App",
    projectDescription:
      "A weather forecasting app providing real-time updates, city search, and detailed forecasts.",
    Icon: Cloud,
    liveLink: "https://cloud-core.netlify.app",
    githubRepo: "https://github.com/Manpreet055/Weather-app",
    techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
  },
  {
    projectName: "Personal Finance Tracker",
    projectDescription:
      "An application to track income, expenses, and budget with visual reports and analytics.",
    Icon: BanknoteArrowDown,
    liveLink: "https://asset-monitor-v1.netlify.app/",
    githubRepo: "https://github.com/Manpreet055/Expense-Tracker",
    techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  },
  {
    projectName: "Todo App",
    projectDescription:
      "A simple and intuitive todo application with dark mode to manage daily tasks efficiently.",
    Icon: ListTodo,
    liveLink: "https://get-it-done-fr.netlify.app/",
    githubRepo: "https://github.com/Manpreet055/To-do-App",
    techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  },
];

export default projects;
