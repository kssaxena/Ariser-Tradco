import React from "react";
import { ParallaxScroll } from "./ui/parallax-scroll";
import { ImageSlider } from "./ImageSlider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Slider = () => {
  return (
    <div
      className={` bg-gradient-to-b from-[#18181B] to-[#020718] hidden lg:block`}
    >
      <div
        id="gallery"
        className={` bg-[url('./src/assets/grid.png')] flex flex-col pt-20 justify-center items-center p-20`}
      >
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={`lg:text-6xl text-3xl text-center font-sans bg-gradient-to-r from-pink-300 via-cyan-500 to-purple-500 bg-clip-text tracking-tight text-transparent m-10`}
        >
          Have a look on our products...
        </motion.h1>
        <div className="w-full flex justify-center items-center">
          <ParallaxScroll ImageSlider={ImageSlider} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
