import React from "react";
import { Spotlight } from "./ui/Spotlight";
import ContactForm from "./ContactForm";
import { ChevronDown } from "lucide-react";
import LocationCardDescription from "./LocationCardDescription";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <div id="contact" className={`w-full h-full bg-[#17171B] pt-28 pb-16`}>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl w-full text-center mb-10 text-white uppercase font-sans tracking-wider bg-gradient-to-r from-pink-300 via-cyan-500 to-purple-500 bg-clip-text text-transparent`}
        >
          Location
        </motion.h1>
        <LocationCardDescription />
      </div>
      <div
        className={` bg-[url('./src/assets/grid.png')] flex flex-col w-full items-center bg-[#18181B] pb-20 `}
      >
        <h1
          className={`text-4xl text-white font-light mb-10 flex justify-center items-center`}
        >
          Let us know, how we can Help You !
          <ChevronDown className={`animate-bounce m-5 text-[#16C4E0]`} />
        </h1>
        <Spotlight className={`h-fit`} />
        <section
          className={`form w-1/2 p-5 flex right-0 z-10 border border-gray-500 shadow-lg shadow-black rounded-xl backdrop-blur-xl `}
        >
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default Contact;
