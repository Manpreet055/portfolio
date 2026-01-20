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
      "Stitche is a Full-stack e-commerce platform featuring persistent shopping carts, order management, and secure user authentication.",
    Icon: ShoppingCart,
    liveLink: "https://stitche.vercel.app",
    githubRepo: "https://github.com/Manpreet055/Stitche_E-commerce",
    techStack: [
      "React",
      "Tailwind CSS",
      "Framer-motion",
      "Flowbite-React",
      "Lucide-react-icons",
      "React-router-dom",
      "Axios",
      "React-hook-form",
    ],
  },
  {
    projectName: "Admin Dashboard",
    projectDescription:
      "An admin dashboard for Stitche managing users, products, messages and orders with data visualization features using charts and graphs. ",
    Icon: LayoutDashboard,
    popover: true,
    techStack: [
      "React",
      "Tailwind CSS",
      "Framer-motion",
      "Flowbite-React",
      "Lucide-react-icons",
      "React-router-dom",
      "Axios",
      "Recharts",
      "React-hook-form",
    ],
  },
  {
    projectName: "Backend API Service",
    projectDescription:
      "An Backend API for Stitche built with Node.js and Express, providing RESTful API endpoints, authentication for dashboard and e-commerce.",
    Icon: Server,
    liveLink: "https://stitche-api.onrender.com/health",
    githubRepo: "https://github.com/Manpreet055/Stitche_Backend",
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Authentication",
      "Mongoose",
      "Ngrok",
      "Cloudinary",
      "Multer",
    ],
  },
  {
    projectName: "Weather App",
    projectDescription:
      "A weather forecasting app providing 24 hours and daily  weather report, city search, and detailed forecasts like temperature, humidity, and AQI",
    Icon: Cloud,
    liveLink: "https://cloud-core.netlify.app",
    githubRepo: "https://github.com/Manpreet055/Weather-app",
    techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
  },
  {
    projectName: "Personal Finance Tracker",
    projectDescription:
      "An application to track income, expenses, and budget with visual reports. Dark mode, download and sort the data as PDF.",
    Icon: BanknoteArrowDown,
    liveLink: "https://asset-monitor-v1.netlify.app/",
    githubRepo: "https://github.com/Manpreet055/Expense-Tracker",
    techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  },
  {
    projectName: "Todo App",
    projectDescription:
      "A simple and intuitive todo application with dark mode to manage daily tasks efficiently. Add, edit, delete, and mark tasks as completed.    ",
    Icon: ListTodo,
    liveLink: "https://get-it-done-fr.netlify.app/",
    githubRepo: "https://github.com/Manpreet055/To-do-App",
    techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  },
];

export default projects;
