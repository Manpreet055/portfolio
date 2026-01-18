import React from "react";
import ContactForm from "../layout/contact/ContactForm.jsx";
import ContactDetails from "../layout/contact/ContactDetails.jsx";
const Contact = () => {
  return (
    <section
      id="contact"
      className=" px-4 flex-col mt-10 py-10 justify-center items-center"
    >
      <h2 className="text-4xl w-full font-bold text-center ">
        Get in <span className="primary-text-bg-gradient">Touch</span>
      </h2>
      <h3 className="w-full text-sm text-gray-500 dark:text-gray-300 text-center font-medium mt-1 mb-4">
        Interested in working together? Let's connect!
      </h3>
      <div className="flex gap-y-6 flex-col lg:flex-row mt-6 gap-4 justify-around items-center w-full h-full ">
        <ContactDetails />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
