import React from "react";
import { Mail } from "lucide-react";
const ContactCard = () => {
  return (
    <div className="grid place-items-center h-full ">
      <div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-80 sm:w-96">
          <div className="flex items-center mb-4">
            <Mail className="text-blue-500 w-6 h-6 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Get in Touch
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out!
          </p>
          <a
            href="mailto:manpreetuae4@gmail.com"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
