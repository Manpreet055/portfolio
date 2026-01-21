import {
  ShoppingCart,
  Server,
  LayoutDashboard,
  BanknoteArrowDown,
  Cloud,
  ListTodo,
} from "lucide-react";
const projects = [
  // E-Commerce Project
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
    keyFeatures: [
      "Secure user authentication with JWT",
      "Dynamic product listing with API data",
      "Product details pages with routing",
      "Add, remove, update items in cart functionality",
      "Order placement and order history",
      "Edit user profile information with image upload",
      "Filter and sort products by categories and price",
      "Pagination for product listings",
      "Real-time product search using MongoDB Atlas",
    ],
    challenges: [
      {
        title: "Handling token exchange between frontend and backend",
        description:
          "While implementing JWT-based authentication, I faced challenges in securely storing and exchanging tokens between the frontend and backend. I resolved this by using Axios interceptors to manage token refresh seamlessly, ensuring a smooth user experience without frequent logins.",
      },
      {
        title: "Unexpected backend errors after deployment",
        description:
          "After deploying the backend on Render, I encountered unexpected errors that didn't appear during local development. I debugged environment-specific issues by improving error handling, validating environment variables, and analyzing server logs to ensure stable production behavior.",
      },
    ],
  },

  // Admin Dashboard Project
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
    keyFeatures: [
      "Admin authentication with role-based access control",
      "Create, update, and delete products",
      "Image upload handling using Multer and Cloudinary",
      "Order management with status updates",
      "User management and access control",
      "Secure API communication with JWT",
    ],
    challenges: [
      {
        title: "Handling Images in forms for product management",
        description:
          "During product Creation i faced challendes in handling image uploads. the images keys was not being tracked by multer properly. to solve this i converted react-hook-form data to FormData and append images manually which resolved the issue.",
      },
    ],
  },

  // Backend Project
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
    keyFeatures: [
      "RESTful API architecture using Node.js and Express",
      "JWT-based authentication and authorization",
      "Role-based access control for users and admins",
      "Secure password hashing with bcrypt",
      "Image upload pipeline using Multer and Cloudinary",
      "Centralized error handling and custom error responses",
      "MongoDB Atlas integration with Mongoose",
      "Environment-based configuration for security",
      "Single codebase serving both e-commerce and admin dashboard",
    ],
    challenges: [
      {
        title: "Multer Cloudinary pipeline ",
        description:
          "While implementing image uploadsm, I faced challenges in configuring Multer to work seamlessly with Cloudinary. After researching & taking help of my linkedin connections, I successfully set up a pipeline that uploads images directly to Cloudinary, ensuring efficient storage and retrieval of media assets.",
      },
      {
        title: "Server sleeping issues on Render",
        description:
          "After deploying the backend on Render, I encountered frequent server sleeping issues that affected API availability. To mitigate this, I implemented a monitoring service using UptimeRobot to send periodic requests to the server, keeping it awake and ensuring consistent uptime for users accessing the API.",
      },
    ],
  },

  // Weather App Project
  {
    projectName: "Weather App",
    projectDescription:
      "A weather forecasting app providing 24 hours and daily  weather report, city search, and detailed forecasts like temperature, humidity, and AQI",
    Icon: Cloud,
    liveLink: "https://weather-core.vercel.app/",
    githubRepo: "https://github.com/Manpreet055/Weather-app",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Axios",
      "Lucide-icons",
      "Weather API",
    ],
    keyFeatures: [
      "Current weather conditions with temperature, humidity, and wind speed",
      "24-hour and 7-day weather forecasts",
      "City search functionality with debounce",
      "Air Quality Index (AQI) information",
      "Responsive design for mobile and desktop",
    ],
  },

  // Expense Tracker Project
  {
    projectName: "Personal Finance Tracker",
    projectDescription:
      "An application to track income, expenses, and budget with visual reports. Dark mode, download and sort the data as PDF.",
    Icon: BanknoteArrowDown,
    liveLink: "https://asset-monitor-v1.netlify.app/",
    githubRepo: "https://github.com/Manpreet055/Expense-Tracker",
    techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    keyFeatures: [
      "Add, edit, and delete income and expense entries",
      "Visual reports in list format",
      "Sorting entries by date and amount",
      "Dark mode for better user experience",
      "Local data storage using LocalStorage",
      "Download as Android app ",
      "Download expense reports as PDF",
    ],
  },

  // Todo App Project
  {
    projectName: "Todo App",
    projectDescription:
      "A simple and intuitive todo application with dark mode to manage daily tasks efficiently. Add, edit, delete, and mark tasks as completed.    ",
    Icon: ListTodo,
    liveLink: "https://get-it-done-fr.netlify.app/",
    githubRepo: "https://github.com/Manpreet055/To-do-App",
    techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    keyFeatures: [
      "Add, edit, and delete tasks",
      "Mark tasks as completed",
      "Local data storage using LocalStorage",
      "Filter tasks by status (all, active, completed)",
      "Dark mode for better user experience",
      "Responsive design for mobile and desktop",
    ],
  },
];

export default projects;
