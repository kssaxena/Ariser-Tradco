import React from "react";
import { Spotlight } from "./ui/Spotlight";
import ContactForm from "./ContactForm";
import { ChevronDown } from "lucide-react";
import LocationCardDescription from "./LocationCardDescription";
import { motion } from "framer-motion";
import { InstagramPosts } from "../constants/AllConstants";

const Contact = () => {
  return (
    <div>
      <div
        id="contact"
        className={`w-full h-fit lg:pt-28 py-10 lg:px-20 flex flex-col justify-center items-center lg:gap-10`}
      >
        <div className="hidden lg:flex flex-row justify-center items-center w-full">
          {InstagramPosts.map((post) => (
            <div>
              <img
                src={post.image}
                className="hover:scale-150 duration-300 ease-in-out hover:shadow-2xl shadow-black hover:rounded-xl"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center flex-col lg:flex-row gap-5 w-full">
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
      </div>
    </div>
  );
};

export default Contact;
