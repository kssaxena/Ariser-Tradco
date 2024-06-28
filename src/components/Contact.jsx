import React from "react";
import { Spotlight } from "./ui/Spotlight";
import ContactForm from "./ContactForm";
import { ChevronDown } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="contact"
      className={`flex flex-col w-full items-center bg-[#18181B] p-10`}
    >
      <h1
        className={`text-4xl text-white font-light mb-10 flex justify-center items-center`}
      >
        Let us know, how we can Help You !
        <ChevronDown className={`animate-bounce m-5 text-[#16C4E0]`} />
      </h1>
      <Spotlight className={`h-fit`} />
      <section
        className={`form w-1/2 p-5 flex right-0 z-10 border border-gray-500 shadow-lg shadow-black rounded-xl hover:scale-105 duration-300 ease-in-out`}
      >
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;