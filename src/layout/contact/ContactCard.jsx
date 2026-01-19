import React from "react";
import { motion } from "framer-motion";
import { item } from "../../animation/ListStagger";
const ContactCard = ({ Icon = null, title, link, text, color = "" }) => {
  return (
    <motion.li
      variants={item}
      className="flex cursor-pointer flex-col h-40 theme justify-center shadow-effect transitions p-6 rounded-2xl  w-full items-center"
    >
      <span className="flex items-center gap-3 font-semibold">
        {" "}
        <Icon size={48} className={`p-2 rounded ${color}`} /> {title}
      </span>
      <a
        href={link}
        className="font-semibold pl-2 text-sm text-gray-400 dark:text-gray-300 hover:underline"
      >
        {text}
      </a>
    </motion.li>
  );
};

export default ContactCard;
