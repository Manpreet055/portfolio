import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Phone, Mail } from "lucide-react";
import ContactCard from "./ContactCard";
import { container } from "../../animation/ListStagger";
const ContactDetails = () => {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="grid grid-cols-2 gap-2 sm:gap-4 grid-rows-2  max-w-4xl  justify-evenly items-center w-full lg:max-w-xl lg:max-h-120 lg:min-h-90 "
    >
      <ContactCard
        Icon={Github}
        title="Github"
        link="https://github.com/Manpreet055"
        text="Manpreet Singh"
      />
      <ContactCard
        Icon={Mail}
        title="Mail"
        link="mailto:manpreet.mern@gmail.com"
        text="manpreet.mern"
        color="text-red-400"
      />

      <ContactCard
        Icon={Phone}
        title="Phone"
        link="tel:+971561821018"
        text="+971 5618-21018"
        color="text-green-400"
      />
      <ContactCard
        Icon={Linkedin}
        title="Linkedin"
        link="https://www.linkedin.com/in/manpreet-dev/"
        text="Manpreet Singh"
        color="text-blue-600"
      />
    </motion.ul>
  );
};

export default ContactDetails;
