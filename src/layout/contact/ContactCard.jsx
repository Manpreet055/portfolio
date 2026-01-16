import React from "react";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
const ContactCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col sm:flex-row max-w-4xl p-4 lg:flex-col dark:border dark:border-gray-700 justify-evenly items-center w-full min-h-40 lg:max-w-sm rounded-xl lg:min-h-130  h-full "
    >
      <div className="flex flex-col items-center">
        <Mail size={48} className="text-pink-400 p-2 rounded" />
        <a
          href="mailto:manpreet.mern@gmail.com"
          className="font-semibold hover:underline"
        >
          manpreet.mern@gmail.com
        </a>
      </div>
      <div className="flex flex-col mt-4 items-center">
        <Phone size={48} className="text-blue-400 p-2 rounded" />
        <a href="tel:+971561821018" className="font-semibold hover:underline ">
          +971 5618-21018
        </a>
      </div>
    </motion.div>
  );
};

export default ContactCard;
