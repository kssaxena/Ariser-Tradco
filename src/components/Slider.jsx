import React from "react";
import { ParallaxScroll } from "./ui/parallax-scroll";
import { ImageSlider } from "./ImageSlider";
import { Link } from "react-scroll";

const Slider = () => {
  return (
    <div className={` bg-gradient-to-b from-[#18181B] to-[#020718]`}>
      <div
        id="gallery"
        className={` bg-[url('./src/assets/grid.png')] flex flex-col pt-20 justify-center items-center p-20`}
      >
        <h1 className={`text-5xl text-white font-light uppercase pt-20 pb-5`}>Products</h1>
        <ParallaxScroll ImageSlider={ImageSlider} />
      </div>
    </div>
  );
};

export default Slider;
