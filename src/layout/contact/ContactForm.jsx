import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="dark:border shadow-lg dark:border-gray-500 max-w-4xl w-full   rounded-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full py-6 px-4 max-w-xl mx-auto"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium">
            Name
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            className="dark:border  shadow-md  dark:border-gray-500 p-2 rounded"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
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
            className="dark:border  shadow-md dark:border-gray-500 p-2 rounded"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        <select
          {...register("subject", { required: "Subject is required" })}
          className="dark:border  shadow-md dark:border-gray-500 p-2 rounded"
        >
          <option value="">Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="support">Support</option>
          <option value="feedback">Feedback</option>
        </select>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-medium">
            Message
          </label>
          <textarea
            placeholder="Your Message"
            id="message"
            {...register("message", { required: "Message is required" })}
            className="dark:border  shadow-md dark:border-gray-500 p-2 rounded h-32"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="primary-bg-gradient rounded-3xl font-medium px-10 py-3 text-white transitions hover:scale-103"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
