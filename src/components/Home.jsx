import { BookPopUp, KnowMorePopup } from "./ProductPopUp";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

  const [showContactPopUp, setShowContactForm] = useState(false);
  const [showKnowMore, setShowKnowMore] = useState(false);

  // const openGallery = () => {};
  return (
    <div
      id="home"
      className={`inset-shadow-lg inset-shadow-black `}
      // className={` bg-[url('./src/assets/heroLandingphoto.png')] inset-shadow-lg inset-shadow-black `}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="h-96 lg:h-fit"
      >
        <img
          className="w-full lg:h-screen h-full object-top object-cover"
          src={
            "https://ik.imagekit.io/jarvisai/Ariser%20Tradco/heroLandingphoto.png"
          }
        />
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full ">
        {" "}
        <section className={`flex flex-col lg:w-full lg:h-screen h-96`}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`flex flex-col justify-center items-start text-white overflow-hidden w-full h-full `}
          >
            <div className="lg:flex flex-col lg:justify-end lg:items-end lg:w-1/3 w-full font-Megrim font-semibold hidden">
              <h1 className={`text-white text-3xl font-medium `}>
                Strength You Can Trust.
              </h1>
              <h1 className={`text-white lg:text-5xl text-lg font-medium `}>
                Doors That Last..
              </h1>
            </div>
            <div
              className={`flex flex-col lg:flex-row lg:justify-end lg:items-end items-start lg:w-1/3 w-full gap-10 py-5 px-5`}
            >
              {/* <Button title={""} /> */}
              <button
                onClick={() => setShowContactForm(true)}
                className="border-b hover:scale-105 duration-300 ease-in-out"
              >
                Book Now
              </button>
              <button
                className="border-b hover:scale-105 duration-300 ease-in-out"
                onClick={() => setShowKnowMore(true)}
              >
                Gallery
              </button>
              {/* <Button title={"Know More"} onClick={() => setShowKnowMore(true)} /> */}
            </div>
          </motion.div>
        </section>
        {/* <AuroraBackground className={`flex`}>
      </AuroraBackground> */}
        {/* {showContactPopUp && (
        <ContactPopUp onClose={() => setShowContactForm(false)} />
      )} */}
        <AnimatePresence>
          {showKnowMore && (
            <KnowMorePopup onClose={() => setShowKnowMore(false)} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showContactPopUp && (
            <BookPopUp onClose={() => setShowContactForm(false)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
