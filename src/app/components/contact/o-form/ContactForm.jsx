"use client";

import { useState } from "react";
import MainButton from "../../buttons/MainButton";
import ErrorMessages from "../../errormessages/ErrorMessages";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    if (!email) return "Email is required";

    if (!email.includes("@") || !email.includes(".")) {
      return "Please enter a valid email";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateEmail(email);
    setEmailError(error);

    if (!error) {
      console.log("Form submitted successfully");
    }
  };

  return (
    <div className="col-(--content-col) my-10">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 mx-5 py-4 gap-3 lg:px-80 md:px-40"
      >
        <input
          type="text"
          className="w-full h-full border col-span-full p-2 focus:outline-accent placeholder:text-foreground"
          placeholder="Your Name"
        />

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => setEmailError(validateEmail(e.target.value))}
          className={`w-full h-full border col-span-full p-2 focus:outline-accent placeholder:text-foreground ${
            emailError ? "border-red-500" : ""
          }`}
          placeholder="Your Email"
        />

        {/* {emailError && (
          <ErrorMessages
            message={emailError}
            error="border-red-500"
          />
        )} */}

        {emailError && (
         <p className="text-sm text-red-500 mt-1 col-span-full">
         {emailError}
          </p>
        )}
        <textarea
          className="w-full border col-span-full h-70 p-2 focus:outline-accent placeholder:text-foreground"
          placeholder="Your Comment"
        />

        <MainButton
          text="send"
          styling="col-span-full w-1/2 md:w-35 justify-self-end"
        />
      </form>
    </div>
  );
};

export default ContactForm;
