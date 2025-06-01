import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import { ProductCardSlider } from "../constants/AllConstants";

const Products = () => {
  const [openModel, setOpenModel] = useState(false);
  const [count, setCount] = useState(false);

  const AchievementCardData = [
    {
      id: "0",
      background: "10000",
      front: "More than Products",
    },
    {
      id: "1",
      background: "8",
      front: "Years",
    },
    {
      id: "2",
      background: "4500",
      front: "Over Customers",
    },
  ];

  const AchievementCard = ({ BackGround, Front }) => {
    return (
      <div className="Heading flex justify-center items-end   cursor-default">
        <div className="absolute">
          <h1 className=" text-center text-7xl lg:text-9xl font-Cinzel text-[#694A2A] z-0 opacity-20 tracking-tighter">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}
            >
              {count && (
                <CountUp start={0} end={BackGround} duration={2} delay={0} />
              )}
            </ScrollTrigger>
          </h1>
        </div>
        <div className=" flex flex-col items-center font-Megrim  ">
          <h1 className="text-center text-3xl lg:text-5xl font-extrabold  pt-4 txt-green z-10 drop-shadow-2xl">
            {Front}
          </h1>
        </div>
      </div>
    );
  };

  const DummyContent = () => {
    return (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  The first rule of Apple club is that you boast about Apple
                  club.
                </span>{" "}
                Keep a journal, quickly jot down a grocery list, and take
                amazing class notes. Want to convert those notes to text? No
                problem. Langotiya jeetu ka mara hua yaar is ready to capture
                every thought.
              </p>
              <img
                src="https://assets.aceternity.com/macbook.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };

  function AppleCardsCarouselDemo() {
    const cards = ProductCardSlider.map((card, index) => (
      <Card key={card.src} card={card} index={index} />
    ));

    return (
      <div className="w-full h-full">
        <Carousel items={cards} />
      </div>
    );
  }

  return (
    <div id="products_slider" className="bg-[#DEDFD8]">
      <div className="h-fit w-full lg:pt-24 lg:pb-20 ">
        <div className="flex lg:flex-row flex-col">
          <h1
            className={`lg:text-6xl text-3xl font-Cinzel mt-10 tracking-wide lg:px-20 px-5 lg:w-3/4 w-full`}
          >
            <span className="text-base uppercase tracking-widest">
              Modern design
            </span>{" "}
            <br />
            We deal in finest <br />
            Doors & windows
          </h1>

          <h1
            className={`lg:text-lg lg:mt-10 mt-5 lg:pr-10 lg:tracking-wide lg:w-1/2 text-justify px-5 flex flex-col justify-start items-start gap-5 mb-10`}
          >
            <span>
              Established in 2018, ARISER TRADCO has grown to become a trusted
              name in the steel doors and windows industry, offering
              unparalleled quality, reliability, and innovation.{" "}
            </span>
            <span>
              With over seven years of expertise, we specialize in the supply
              and distribution of premium-grade steel doors and windows designed
              to meet.....
            </span>{" "}
            <button
              onClick={() => setOpenModel(true)}
              className="border-b border-[#110F0B] hover:scale-105 duration-300 ease-in-out tracking-tight"
            >
              Read more
            </button>
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col justify-evenly items-center gap-10 lg:pt-20 select-none pb-10 lg:pb-20">
          {AchievementCardData.map((item) => (
            <AchievementCard BackGround={item.background} Front={item.front} />
          ))}
        </div>
        <AnimatePresence>
          {openModel && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: "100vh",
                width: "100vw",
                backgroundColor: "transparent", // Corrected from `transparent` to string
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
              }}
              className="fixed lg:top-0 lg:left-0 lg:h-screen w-full flex flex-col lg:justify-start lg:items-start text-justify z-50  backdrop-blur-3xl lg:pt-0 pt-28 overflow-y-scroll"
            >
              <button
                onClick={() => setOpenModel(false)}
                className="border-b border-[#110F0B] hover:scale-105 duration-300 ease-in-out tracking-tight flex "
              >
                <X /> Close
              </button>
              <h1 className="lg:w-3/4 lg:text-xl lg:p-10 px-5">
                Established in 2018,{" "}
                <span className="text-2xl ">ARISER TRADCO</span> has grown to
                become a trusted name in the steel doors and windows industry,
                offering unparalleled quality, reliability, and innovation.{" "}
                <br /> With over seven years of expertise, we specialize in the
                supply and distribution of premium-grade steel doors and windows
                designed to meet the highest standards of security, durability,
                and aesthetic appeal. <br />
                Our company was founded on a vision to redefine strength and
                style in architectural fittings, and we continue to uphold that
                commitment through every product we deliver. At{" "}
                <span className="text-2xl ">ARISER TRADCO</span>, we take pride
                in our customer-centric approach, ensuring each solution is
                tailored to meet the specific needs of homeowners, builders, and
                developers alike. Our products are not only engineered for
                robust performance but are also crafted with design versatility
                in mind—blending seamlessly into both contemporary and
                traditional settings. Backed by a team of experienced
                professionals and a growing portfolio of satisfied clients, we
                stand as a symbol of trust and excellence in the building
                materials sector. Whether it's residential, commercial, or
                industrial projects,{" "}
                <span className="text-2xl ">ARISER TRADCO</span> is your
                reliable partner for superior steel solutions that are built to
                last.
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="lg:ml-10 lg:mb-10 ">
          <AppleCardsCarouselDemo />
        </div>
        <div className="border border-black mx-20 lg:my-10 m-10"></div>
        {/* <section
          className={`  bg-transparent  flex flex-col justify-center items-center text-4xl`}
        >
          <h1 className={`lg:text-4xl text-2xl font-light `}>
            Showcased Products
          </h1>
          <div>
            <InfiniteProductSlider
              items={ProductDetails1}
              direction="right"
              speed="slow"
            />
          </div>
          <div className="hidden lg:block">
            <InfiniteProductSlider
              items={ProductDetails2}
              direction="left"
              speed="slow"
            />
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Products;
