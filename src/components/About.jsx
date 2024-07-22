import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { LampContainer } from "./ui/lamp";
import { testimonials } from "../constants/AllConstants";
import { TracingBeam } from "./ui/tracing-beam";
import ListOfFeatures from "./ListOfFeatures";
import { motion } from "framer-motion";
import {
  Add_partner1,
  Add_partner2,
  Add_partner3,
  DealerShip1,
  DealerShip2,
  DealerShip3,
  DealerShip4,
} from "../assets/Index";
// import { motion } from "framer-motion";

const About = () => {
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

  return (
    <div id="about" className={`text-white bg-[#020617]`}>
      <TracingBeam>
        <section className="h-fit">
          <LampContainer
            className={`flex flex-col justify-evenly items-center`}
          >
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
              className={`flex flex-col justify-evenly items-center`}
            >
              <h1 className={`text-center text-5xl w-3/4 uppercase font-sans `}>
                Invest in peace of mind
              </h1>
              <h1
                className={`text-center font-light text-5xl w-full uppercase font-sans`}
              >
                lasting durability with steel door.
              </h1>
            </motion.div>
          </LampContainer>
        </section>
        <section className={`bg-[#020617] flex flex-col `}>
          <h1 className={`text-xl font-light`}>Customer Reviews</h1>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </section>
      </TracingBeam>
      <div className=" flex flex-col justify-center items-center gap-10 mt-20">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="uppercase text-3xl font-sans"
        >
          Authorized Dealer of
        </motion.h1>
        <section>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex gap-8"
          >
            <motion.img
              variants={motionVariants(2.5)}
              initial="initial"
              animate="animate"
              src={DealerShip1}
              alt="Advertisement"
              className="w-32 h-32 rounded-full border-4 p-3 border-neutral-900"
            />
            <motion.img
              variants={motionVariants(2)}
              initial="initial"
              animate="animate"
              src={DealerShip2}
              alt="Advertisement"
              className="w-32 h-32 rounded-full border-4 p-3 border-neutral-900"
            />
            <motion.img
              variants={motionVariants(1.5)}
              initial="initial"
              animate="animate"
              src={DealerShip3}
              alt="Advertisement"
              className="w-32 h-32 rounded-full border-4 p-3 border-neutral-900"
            />
            <motion.img
              variants={motionVariants(3)}
              initial="initial"
              animate="animate"
              src={DealerShip4}
              alt="Advertisement"
              className="w-32 h-32 rounded-full border-4 p-3 border-neutral-900"
            />
          </motion.div>
        </section>
      </div>
      <div className=" flex flex-col justify-center items-center gap-10 mt-20">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-sans"
        >
          Our Advertising Partners
        </motion.h1>
        <section>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex gap-8"
          >
            <motion.img
              variants={motionVariants(2.5)}
              initial="initial"
              animate="animate"
              src={Add_partner3}
              alt="Advertisement"
              className="w-32 h-32 rounded-full border-4 p-3 border-neutral-900"
            />
            <motion.img
              variants={motionVariants(2)}
              initial="initial"
              animate="animate"
              src={Add_partner1}
              alt="Advertisement"
              className="w-32 h-32 rounded-full border-4 p-3 border-neutral-900"
            />
            <motion.img
              variants={motionVariants(1.5)}
              initial="initial"
              animate="animate"
              src={Add_partner2}
              alt="Advertisement"
              className="w-32 h-32 rounded-full border-4 p-3 border-neutral-900"
            />
          </motion.div>
        </section>
      </div>
      <ListOfFeatures />
    </div>
  );
};

export default About;
