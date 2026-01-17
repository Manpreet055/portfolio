import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Phone, Mail } from "lucide-react";
import ContactCard from "./ContactCard";
const ContactDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
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
    </motion.div>
  );
};

export default ContactDetails;
