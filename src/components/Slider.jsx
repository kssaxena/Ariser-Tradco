import React from "react";
import { ParallaxScroll } from "./ui/parallax-scroll";
import { ImageSlider } from "./ImageSlider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ProductPicture } from "../constants/AllConstants";

const Slider = () => {
  const zoomVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };
  const Card = ({ image, tag }) => {
    return (
      <div className="flex m-10 rounded-xl h-fit relative">
        <div className=" shadow-2xl shadow-black/50 rounded-xl ">
          <img src={image} className="rounded-xl" />
        </div>
        <div className="absolute w-full h-full top-0 left-0 py-auto">
          <h1 className="text-2xl h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8] rounded-xl font-Cinzel tracking-widest">
            {tag}
          </h1>
        </div>
      </div>
    );
  };
  return (
    <div className={` bg-[#DEDFD8]`}>
      <div id="gallery" className={`flex flex-col pt-20 `}>
        <div>
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className={`lg:text-6xl text-3xl font-Cinzel mt-10 tracking-wide px-20`}
          >
            <span className="text-base uppercase tracking-widest">
              Premium Quality
            </span>{" "}
            <br />
            We Develop and Install <br />
            Modern Doors
          </motion.h1>

          <div className=" flex">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className={`text-3xl truncate mt-10 tracking-wide px-20 w-fit text-justify font-Caveat flex flex-col gap-20`}
            >
              " Quality means doing it right when no one is looking " <br />{" "}
              <span className="uppercase font-semibold">- Henry Ford</span>
            </motion.h1>
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className={`text-lg mt-10 pr-10 tracking-wide w-1/2 text-justify`}
            >
              <span className="text-3xl">C</span>hoosing a steel door over a
              wooden door is a powerful step toward security, longevity, and
              modern sophistication. While wooden doors offer charm, steel doors
              stand as a symbol of resilience and smart living. They resist
              warping, cracking, and rotting, unlike wood, and demand far less
              maintenance over time. With advanced designs and finishes that
              beautifully mimic wood grain, today's steel doors combine
              aesthetics with unmatched strength. For those who value safety,
              energy efficiency, and durability—choosing a steel door isn't just
              a decision, it's a declaration of progress, protection, and peace
              of mind.
            </motion.h1>
          </div>
        </div>
        <div className="flex w-full mt-20">
          {ProductPicture.map((product, index) => {
            return (
              <motion.div
                key={product.id || index}
                custom={index}
                variants={zoomVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <Card image={product.image} tag={product.title} />
              </motion.div>
            );
          })}
        </div>
        {/* <div className="w-full flex justify-center items-center">
          <ParallaxScroll ImageSlider={ImageSlider} />
        </div> */}
      </div>
    </div>
  );
};

export default Slider;
