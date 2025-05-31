import React from "react";
import { Spotlight } from "./ui/Spotlight";
import ContactForm from "./ContactForm";
import { ChevronDown } from "lucide-react";
import LocationCardDescription from "./LocationCardDescription";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <div id="contact" className={`w-full h-fit lg:pt-28 py-10 lg:px-20 flex flex-col lg:flex-row justify-center items-center lg:gap-10`}>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className={`lg:text-4xl text-2xl w-full uppercase tracking-wider font-Cinzel text-center lg:text-start`}
        >
          We provide the best quality doors
        </motion.h1>
        <LocationCardDescription />
      </div>
      {/* <div
        className={` bg-[url('./src/assets/grid.png')] flex flex-col w-full items-center bg-[#18181B] pb-20 `}
      >
        <h1
          className={`lg:text-4xl text-white font-light mb-10 flex justify-center items-center`}
        >
          Let us know, how we can Help You !
          <ChevronDown className={`animate-bounce m-5 text-[#16C4E0]`} />
        </h1>
        <Spotlight className={`h-fit`} />
        <section
          className={`form lg:w-1/2 p-5 w-[90%] flex right-0 z-10 border border-gray-500 shadow-lg shadow-black rounded-xl backdrop-blur-xl`}
        >
          <ContactForm />
        </section>
      </div> */}
    </div>
  );
};

export default Contact;
