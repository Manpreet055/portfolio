import React from "react";
import ContactForm from "../layout/contact/ContactForm.jsx";
import ContactCard from "../layout/contact/ContactCard.jsx";
const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-3 sm:mx-6 mt-5 sm:mt-10 mb-10 w-full flex px-4 md:px-10 flex-col justify-center items-center"
    >
      <h2 className="text-4xl w-full font-bold text-center ">Get in Touch</h2>
      <h3 className="w-full text-center font-medium mt-2 mb-4">
        Interested in working together? Let's connect!
      </h3>
      <ContactCard />
      <ContactForm />
    </section>
  );
};

export default Contact;
