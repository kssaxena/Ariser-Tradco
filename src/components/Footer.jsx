import { AnimatePresence, motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="hidden lg:block">
      <div
        className={`w-full flex  dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative  items-center justify-center h-36`}
      >
        <div className="w-full flex justify-evenly items-center">
          <section className="text-center text-gray-500 text-sm">
            <h1>
              Ariser Tradco. <br></br>All rights reserved.
            </h1>
          </section>
          <motion.section
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`flex justify-center items-center lg:gap-5 gap-2 text-neutral-500 `}
          >
            <a
              href="tel:+916204365007"
              className=" hover:scale-105 duration-300 ease-in-out"
            >
              <FaPhoneAlt className="text-2xl " />
            </a>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
