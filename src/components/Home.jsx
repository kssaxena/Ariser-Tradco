import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Button from "./ui/Button";
import { images } from "../assets/Images";
import { RightCurve, LeftCurve } from "./ui/CurveForHero";
import { ContactPopUp, KnowMorePopup } from "./ProductPopUp";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Home = () => {
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
  // const navigate = useNavigate();

  const [showContactPopUp, setShowContactForm] = useState(false);
  const [showKnowMore, setShowKnowMore] = useState(false);

  // const openGallery = () => {};
  return (
    <div
      id="home"
      className={` bg-[url('./src/assets/heroLandingphoto.png')] `}
    >
      <AuroraBackground className={`flex`}>
        <section
          className={`flex flex-col lg:flex-row justify-center items-center w-full`}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`lg:w-1/2 h-fit flex flex-col justify-center items-center lg:justify-start lg:items-start  text-white overflow-hidden w-full`}
          >
            <div className=" w-full flex flex-col justify-center items-center lg:items-start lg:px-5 gap-5">
              <h1 className={`text-white text-3xl font-medium lg:ml-20`}>
                Strength You Can Trust.
              </h1>
              <h1
                className={`text-white lg:text-5xl text-lg font-medium lg:ml-20`}
              >
                Doors That Last..
              </h1>
            </div>
            <div
              className={`w-full flex justify-evenly items-center lg:w-1/2 z-10 lg:ml-14 mt-8 p-1`}
            >
              <Button
                title={"Contact Us"}
                onClick={() => setShowContactForm(true)}
              />
              <Button
                title={"Know More"}
                onClick={() => setShowKnowMore(true)}
              />
            </div>
            {showContactPopUp && (
              <ContactPopUp onClose={() => setShowContactForm(false)} />
            )}

            {showKnowMore && (
              <KnowMorePopup onClose={() => setShowKnowMore(false)} />
            )}
          </motion.div>
          <motion.div
            variants={motionVariants(1)}
            initial="initial"
            animate="animate"
            className="w-full h-50 w-50 flex justify-center items-center mt-10 lg:hidden"
          >
            <ChevronDown className="h-20 w-20 text-cyan-500" />
          </motion.div>
          <div className={`lg:ml-auto xl:w-[38rem] hidden lg:block `}>
            <div className="relative left-1/4 flex w-[24rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100 backdrop-blur-sm">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex w-60 aspect-square m-auto border border-n-6 rounded-full "
              >
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                  <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                    <img
                      src={images[1].url}
                      className={`rounded-full`}
                      width={100}
                      height={100}
                      alt="ariser_tradco"
                    />
                  </div>
                </div>
              </motion.div>

              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </section>
      </AuroraBackground>
    </div>
  );
};

export default Home;
