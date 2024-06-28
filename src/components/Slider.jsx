import React from "react";
import { ParallaxScroll } from "./ui/parallax-scroll";
import { ImageSlider } from "./ImageSlider";

const Slider = () => {
  return (
    <div
      className={`bg-gradient-to-b from-[#18181B] to-[#020718] flex flex-col justify-center items-center p-20`}
    >
      <h1 className={`text-5xl text-white font-light uppercase`}>Gallery</h1>
      <ParallaxScroll ImageSlider={ImageSlider} />
    </div>
  );
};

export default Slider;
