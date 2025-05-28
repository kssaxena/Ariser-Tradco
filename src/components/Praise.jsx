import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { LampContainer } from "./ui/lamp";
import { testimonials } from "../constants/AllConstants";
import { TracingBeam } from "./ui/tracing-beam";
import ListOfFeatures from "./ListOfFeatures";
import { AnimatePresence, motion } from "framer-motion";
import { RiDoubleQuotesR } from "react-icons/ri";
// import { CarouselPlugin } from "./ui/testemonialCarousel";
// import { motion } from "framer-motion";

const Praise = () => {
  const Typewriter = ({ text, speed = 50 }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        if (index >= text.length) clearInterval(interval);
      }, speed);

      return () => clearInterval(interval); // cleanup
    }, [text, speed]);

    return <p className="whitespace-pre-line">{displayedText}</p>;
  };

  const Carousel = () => {
    const prevSlide = () => {
      setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const nextSlide = () => {
      setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };
    const [current, setCurrent] = useState(0);
    const totalSlides = testimonials.length;
    const [showModal, setShowModal] = useState(false);
    const [modalQuote, setModalQuote] = useState("");

    const openModal = (quote) => {
      setModalQuote(quote);
      setShowModal(true);
    };

    const closeModal = () => {
      setShowModal(false);
      setModalQuote("");
    };

    return (
      <div className="relative overflow-hidden lg:w-1/2 w-[90%]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-full h-full flex justify-center items-center"
            >
              <Card
                name={slide.name}
                quote={slide.quote}
                title={slide.title}
                onReadMore={openModal}
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          &#8594;
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 my-5 lg:mt-20">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === current ? "bg-[#DEDFD8]" : "bg-[#2A2623] border"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

        {/* Modal OUTSIDE carousel */}
        <AnimatePresence>
          {showModal && (
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
            >
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300">
                <div className="bg-[#DEDFD8] p-6 rounded-lg shadow-lg w-[90%] max-w-xl animate-fadeIn">
                  <h2 className="text-2xl font-semibold mb-4">Full Quote</h2>
                  <p className="text-gray-700 mb-4 text-xl text-justify">
                    {" "}
                    <Typewriter text={modalQuote} speed={5} />
                  </p>
                  {/* <p className="text-gray-700 mb-4 text-xl">"{modalQuote}"</p> */}
                  <button
                    onClick={closeModal}
                    className="border-b border-[#282623] hover:scale-105 duration-300 ease-in-out"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const Card = ({ quote, name, title, onReadMore }) => {
    const getShortQuote = (text) => {
      const words = text.split(" ");
      if (words.length <= 25) return text;
      return words.slice(0, 25).join(" ") + "...";
    };

    return (
      <div className="h-96 w-96 lg:shadow-2xl lg:shadow-[#DEDFD8] scale-110 rounded-lg flex flex-col m-5 justify-evenly items-start bg-[#DEDFD8] px-5">
        <h1 className="text-4xl">
          <RiDoubleQuotesR />
        </h1>
        <div className="review">
          <h1 className="text-justify">"{getShortQuote(quote)}"</h1>
          {quote.split(" ").length > 25 && (
            <button
              onClick={() => onReadMore(quote)}
              className="border-b border-[#282623] hover:scale-105 duration-300 ease-in-out mt-5 "
            >
              Read more
            </button>
          )}
        </div>
        <div className="name">_ {name}</div>
        <div className="stars w-full flex justify-around items-center ">
          ★★★★★ <span>{title}</span>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* <div id="praise" className={`bg-[#DEDFD8] text-[#130F0C]`}> */}
      <div id="praise" className={`bg-[#282623] text-[#130F0C]`}>
        <div className="flex lg:h-fit relative">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="lg:h-[90vh] overflow-hidden"
          >
            <img
              className="h-[50vh] lg:h-fit w-full object-cover object-center"
              src={
                "https://ik.imagekit.io/jarvisai/Ariser%20Tradco/A%20high-resolution,%20realistic%20daytime%20photograph%20of%20a%20house%20exterior%20with%20a%20symmetrical%20composition.%20In%20the%20center,%20there%20is%20a%20modern%20dark%20brown%20wooden%20double%20door%20with%20detailed%20paneling%20and%20a%20brass%20handle.%20To%20the%20right%20of%20the%20door%20is%20a%20%20(2).jpg"
              }
            />
          </motion.div>
          <div className="absolute w-full h-full top-0 left-0 py-auto">
            <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
              className="text-3xl h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/60 text-[#DEDFD8] font-Cinzel tracking-widest"
            >
              Testimonials
            </motion.h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:py-20 py-5">
          <Carousel />
        </div>
      </div>

      <div className="hidden">
        older code
        {/* lamp container  */}
        {/* <section className="h-fit">
        <LampContainer
            className={`flex flex-col justify-evenly items-center`}
          >
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
              className={`flex flex-col justify-evenly items-center`}
            >
              <h1
                className={`text-center lg:text-5xl text-3xl lg:w-3/4 uppercase font-sans `}
              >
                Invest in peace of mind
              </h1>
              <h1
                className={`text-center font-light lg:text-5xl text-2xl w-full uppercase font-sans`}
              >
                lasting durability with steel door.
              </h1>
            </motion.div>
          </LampContainer>
      </section> */}
        {/* infinite moving cards  */}
        {/* <div className="hidden lg:block">
          <section className={`bg-[#020617] flex flex-col`}>
            <h1 className={`text-xl font-light  text-center`}>
              Customer Reviews
            </h1>
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="normal"
            />
          </section>
        </div> */}
        {/* <TracingBeam>
      </TracingBeam> */}
        {/* <div className=" flex flex-col justify-center items-center gap-10 mt-20 ">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="uppercase lg:text-3xl text-2xl font-sans"
        >
          Authorized Dealer of
        </motion.h1>
        <section className="w-full flex justify-center items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex w-full lg:w-1/2"
          >
            <div className="gap-8 flex flex-col justify-center items-center w-full h-full lg:flex-row ">
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
            </div>
            <div className="gap-8 flex flex-col justify-center items-center w-full h-full lg:flex-row ">
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
            </div>
          </motion.div>
        </section>
      </div>
      <div className=" flex flex-col justify-center items-center gap-10 mt-20">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className=" lg:text-3xl text-2xl font-sans"
        >
          Our Advertising Partners
        </motion.h1>
        <section>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex gap-8 flex-col lg:flex-row"
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
      </div> */}
        {/* <ListOfFeatures /> */}
      </div>
    </div>
  );
};

export default Praise;
