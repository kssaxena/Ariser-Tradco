import React from "react";
import { motion } from "framer-motion";

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

const FeaturesCard = ({ title, icon, description, Timeduration }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: Timeduration }}
      className="hover:bg-[url('./src/assets/gradient.png')] bg-[#192335] hover:bg-transparent lg:flex-col flex lg:h-80 lg:w-80 h-52 w-full items-center justify-center rounded-lg border border-[#16C4E0] hover:shadow-md hover:shadow-[#16C4E0]  px-6 font-medium text-[#16C4E0] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ml-10 mr-10 mt-5 mb-5 backdrop-blur-xl duration-500 ease-in-out  "
    >
      <div className="w-full flex justify-center items-center lg:h-1/4 ">
        <motion.h1
          variants={motionVariants(2)}
          initial="initial"
          animate="animate"
          className="shadow-2xl "
        >
          {icon}
        </motion.h1>
      </div>
      <div className="flex flex-col justify-start items-center lg:w-full lg:h-1/2">
        <h1 className="text-2xl m-2 uppercase">{title}</h1>
        <p className="lg:text-xs text-xs font-light m-2 text-center">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeaturesCard;
