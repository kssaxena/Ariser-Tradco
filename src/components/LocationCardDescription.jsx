import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { images } from "../assets/Images";
import { ChevronRightCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

const LocationCardDescription = () => {
  return (
    <div className={` h-[100%] flex `}>
      <div
        className={`flex flex-col lg:flex-row lg:justify-around justify-center gap-5`}
      >
        <h1 className="flex flex-col truncate justify-center items-start lg:px-5 font-semibold font-sans pt-5">
          Address <span className="font-normal">Office no C15</span>{" "}
          <span className="font-normal">Vijaywargiye Complex</span>{" "}
          <span className="font-normal">Near Kokar chowk, Ranchi - 834009</span>
        </h1>
        <motion.section
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className={` text-black w-fit lg:flex flex-col lg:justify-center rounded-lg p-10 gap-5`}
        >
          <h1 className="flex justify-center items-center text-2xl gap-10 truncate">
            Say hello{" "}
            <span>
              <a
                href="tel:+916204365007"
                className=" hover:scale-105 duration-300 ease-in-out"
              >
                <FaPhoneAlt className="text-2xl " />
              </a>
            </span>
          </h1>
          <h1 className="text-center">or</h1>
          {/* social links  */}
          <motion.section
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`flex justify-center items-center lg:gap-5 gap-2 `}
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ariserstradco@gmail.com&su=Door%20Booking&body="
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:scale-105 duration-300 ease-in-out"
            >
              <BiLogoGmail className="text-2xl " />
            </a>
            <a
              href="https://maps.app.goo.gl/5gFYD3iDwonwXCa46"
              target="_blank"
              className=" hover:scale-105 duration-300 ease-in-out"
            >
              <FaLocationDot className="text-2xl " />
            </a>
            <a
              href="https://www.instagram.com/arisertradco?igsh=Zm5uYWFuamYxNG45"
              target="_blank"
              className=" hover:scale-105 duration-300 ease-in-out"
            >
              <FiInstagram className="text-2xl " />
            </a>
            <a
              href="https://wa.me/916204365007"
              target="_blank"
              className=" hover:scale-105 duration-300 ease-in-out"
            >
              <IoLogoWhatsapp className="text-2xl " />
            </a>
          </motion.section>
        </motion.section>
      </div>
    </div>
  );
};

export default LocationCardDescription;
