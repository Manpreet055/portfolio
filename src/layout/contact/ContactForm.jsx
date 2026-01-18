import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import sendMessage from "../../services/contactService.js";
import { Spinner } from "flowbite-react";
import { User, Mail } from "lucide-react";
const ContactForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [isMessageSent, setIsMessageSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    sendMessage(data, setLoading, setError, setIsMessageSent);
    if (isMessageSent) {
      reset();
    }
  };
  return (
    <motion.div
      initial={{ x: -50 }}
      whileInView={{ x: 0 }}
      exit={{ x: -50 }}
      transition={{ duration: 0.3 }}
      className="shadow-effect theme  dark:text-neutral-300 text-neutral-500  transitions max-w-4xl w-full mt-4   rounded-xl"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 sm:gap-4 w-full p-6  max-w-xl mx-auto"
      >
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="text-gray-400 text-sm sm:text-base dark:text-gray-300 font-medium"
          >
            Name
          </label>
          <span className="relative">
            <User className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 " />
            <input
              id="name"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="dark:border w-full text-sm sm:text-base  shadow-md  dark:border-gray-500 p-2 pl-10 rounded bg-gray-100 dark:bg-gray-700"
            />
          </span>
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-gray-400 text-sm sm:text-base dark:text-gray-300 font-medium"
          >
            Email
          </label>
          <span className="relative">
            <Mail className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 " />
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="dark:border pl-10 w-full text-sm sm:text-base  shadow-md dark:border-gray-500 p-2 rounded bg-gray-100 dark:bg-gray-700"
            />
          </span>
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Subject */}
        <select
          {...register("subject", { required: "Subject is required" })}
          className="dark:border mt-4 text-sm sm:text-base shadow-md dark:border-gray-500 p-2 rounded bg-gray-100 dark:bg-gray-700"
        >
          <option value="">Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="support">Support</option>
          <option value="feedback">Feedback</option>
        </select>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="message"
            className="text-gray-400 text-sm sm:text-base dark:text-gray-300 font-medium"
          >
            Message
          </label>
          <textarea
            placeholder="Your Message"
            id="message"
            {...register("message", { required: "Message is required" })}
            className="dark:border  shadow-md dark:border-gray-500 p-2 rounded h-32 text-sm sm:text-base bg-gray-100 dark:bg-gray-700"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>
        <div className="w-full flex justify-between itms-center">
          <button
            disabled={loading}
            type="submit"
            className="primary-bg-gradient rounded-3xl mt-2 font-medium px-10 p-3 text-sm sm:text-base text-white transitions hover:scale-105"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Spinner size="sm" color="gray" aria-label="Loading spinner" />{" "}
                Sending...
              </span>
            ) : (
              "Send"
            )}
          </button>
          {error ? (
            <span className="text-red-500 text-nowrap text-xs sm:text-sm">
              {error || "Some error occurred"}
            </span>
          ) : isMessageSent ? (
            <span className="primary-text-bg-gradient text-nowrap text-xs sm:text-sm">
              Message sent successfully!
            </span>
          ) : null}
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
