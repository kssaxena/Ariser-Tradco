import React, { useEffect } from "react";
import { NavigationElements } from "../constants/AllConstants";
import Button from "./ui/Button";
import { images } from "../assets/Images";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [showContactPopUp, setShowContactForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerBgClass =
    location.hash === "#home" || !isScrolled ? "" : "bg-black/30";
  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <div
      // className={`flex justify-around items-center fixed w-full lg:p-5 p-2 top-0 left-0 z-50 text-white ${
      //   location.hash === "#home" ? "" : "bg-black/30"
      // }`}
      className={`flex justify-around items-center fixed w-full lg:p-5 p-2 top-0 left-0 z-50 text-white ${headerBgClass}`}
    >
      <div className="hidden lg:block justify-evenly items-center">
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`navbar w-[40%] flex justify-evenly items-center `}
        >
          {NavigationElements.map((item) => (
            <a
              className={`w-fit text-lg  cursor-pointer hover:font-medium hover:scale-110 ease-in-out duration-200 pr-4 `}
              key={item.id}
              href={item.url}
              onClick={handleClick}
            >
              {item.title}
            </a>
          ))}
        </motion.section>
      </div>
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`logo flex items-center lg:pl-28 `}
      >
        <img
          src={images[1].url}
          className={`lg:mr-10 mr-5 rounded-full`}
          width={60}
          height={60}
          alt="ariser_tradco"
        />
        <h1 className="lg:flex hidden ">ARISER TRADCO</h1>
      </motion.section>
      <motion.section
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`flex justify-center items-center lg:gap-5 gap-2 `}
      >
        {/* <button
          onClick={() => setShowContactForm(true)}
          className="border-b hover:scale-105 duration-300 ease-in-out lg:flex hidden"
        >
          Book Now
        </button> */}
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
      {/* <AnimatePresence>
        {showContactPopUp && (
          <BookPopUp onClose={() => setShowContactForm(false)} />
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default Header;
