import React from "react";
import { ParallaxScroll } from "./ui/parallax-scroll";
import { ImageSlider } from "./ImageSlider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ProductPicture } from "../constants/AllConstants";
import {
  Add_partner1,
  Add_partner2,
  Add_partner3,
  DealerShip1,
  DealerShip2,
  DealerShip3,
  DealerShip4,
} from "../assets/Index";

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
  const motionVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  const Card = ({ image, tag }) => {
    return (
      <div className="flex lg:m-10 m-5 rounded-xl h-fit relative">
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
    <div className={` bg-[#DEDFD8] text-[#130F0C]`}>
      <div id="about" className={`flex flex-col lg:pt-20 `}>
        <div>
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className={`lg:text-6xl text-3xl font-Cinzel mt-10 tracking-wide lg:px-20 px-5`}
          >
            <span className="text-base uppercase tracking-widest">
              Premium Quality
            </span>{" "}
            <br />
            We Develop and Install <br />
            Modern Doors
          </motion.h1>

          <div className=" flex lg:flex-row flex-col px-4">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className={`lg:text-3xl text-lg lg:truncate lg:mt-10 tracking-wide lg:px-20 lg:w-fit text-justify font-Caveat flex flex-col lg:gap-20 gap-5 w-screen`}
            >
              " Quality means doing it right when no one is looking " <br />{" "}
              <span className="uppercase font-semibold lg:border-b border-[#130F0C] text-end pr-10">
                - Henry Ford
              </span>
            </motion.h1>
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className={`lg:text-lg lg:mt-10 mt-5 lg:pr-10 lg:tracking-wide lg:w-1/2 text-justify`}
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
        <div className="lg:flex hidden lg:flex-row flex-col w-full lg:mt-10">
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
        {/* logos and brands */}
        <div className="border-b-2 border-[#130F0C]  lg:mx-20 mx-5 lg:pb-20">
          <section className="w-full flex justify-center items-center my-10">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="flex w-full justify-evenly items-center flex-wrap"
            >
              <motion.img
                variants={motionVariants(2.5)}
                initial="initial"
                animate="animate"
                src={DealerShip1}
                alt="Advertisement"
                className="w-10 lg:w-20 rounded-full shadow-2xl shadow-[#130F0C]"
              />
              <motion.img
                variants={motionVariants(2)}
                initial="initial"
                animate="animate"
                src={DealerShip2}
                alt="Advertisement"
                className="w-10 lg:w-20 rounded-full shadow-2xl shadow-[#130F0C]"
              />
              <motion.img
                variants={motionVariants(1.5)}
                initial="initial"
                animate="animate"
                src={DealerShip3}
                alt="Advertisement"
                className="w-10 lg:w-20 rounded-full shadow-2xl shadow-[#130F0C]"
              />
              <motion.img
                variants={motionVariants(3)}
                initial="initial"
                animate="animate"
                src={DealerShip4}
                alt="Advertisement"
                className="w-10 lg:w-20 rounded-full shadow-2xl shadow-[#130F0C]"
              />
              <motion.img
                variants={motionVariants(2.5)}
                initial="initial"
                animate="animate"
                src={Add_partner3}
                alt="Advertisement"
                className="w-10 lg:w-20 rounded-full shadow-2xl shadow-[#130F0C]"
              />
              <motion.img
                variants={motionVariants(2)}
                initial="initial"
                animate="animate"
                src={Add_partner1}
                alt="Advertisement"
                className="w-10 lg:w-20 rounded-full shadow-2xl shadow-[#130F0C]"
              />
              <motion.img
                variants={motionVariants(1.5)}
                initial="initial"
                animate="animate"
                src={Add_partner2}
                alt="Advertisement"
                className="w-10 lg:w-20 rounded-full shadow-2xl shadow-[#130F0C]"
              />
            </motion.div>
          </section>
        </div>
        {/* <div className="w-full flex justify-center items-center">
          <ParallaxScroll ImageSlider={ImageSlider} />
        </div> */}
      </div>
    </div>
  );
};

export default Slider;
