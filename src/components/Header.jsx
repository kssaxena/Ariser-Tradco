import React from "react";
import { NavigationElements } from "../constants/AllConstants";
import Button from "./ui/Button";
import { images } from "../assets/Images";
// import { useNavigate } from "react-router-dom";
import { BookPopUp } from "./ProductPopUp.jsx";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [showContactPopUp, setShowContactForm] = useState(false);

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <div
      className={`flex justify-center items-center fixed w-full p-5 top-0 left-0 z-50 text-white  backdrop-blur-lg shadow-sm shadow-black `}
    >
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`logo w-[60%] flex items-center pl-28`}
      >
        <img
          src={images[1].url}
          className={`mr-10 rounded-full`}
          width={60}
          height={60}
          alt="ariser_tradco"
        />
        <h1>ARISER TRADCO</h1>
      </motion.section>
      <section className={`navbar w-[40%] flex justify-evenly items-center `}>
        {NavigationElements.map((item) => (
          <a
            className={`w-fit text-lg uppercase cursor-pointer hover:font-medium hover:scale-110 ease-in-out duration-200 border pr-4 border-b-0 border-t-0 border-l-0 `}
            key={item.id}
            href={item.url}
            onClick={handleClick}
          >
            {item.title}
          </a>
        ))}
      </section>
      <motion.section
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`flex justify-center items-center w-[10%]`}
      >
        <Button title={"Book Now"} onClick={() => setShowContactForm(true)} />
      </motion.section>

      {showContactPopUp && (
        <BookPopUp onClose={() => setShowContactForm(false)} />
      )}
    </div>
  );
};

export default Header;
