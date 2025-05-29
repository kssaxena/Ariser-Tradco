import React, { useEffect, useState } from "react";
import { testimonials } from "../constants/AllConstants";
import { AnimatePresence, motion } from "framer-motion";
import { RiDoubleQuotesR } from "react-icons/ri";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { InstagramPosts } from "../constants/AllConstants";

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

  const Card = ({ quote, name, title, onReadMore }) => {
    const getShortQuote = (text) => {
      const words = text.split(" ");
      if (words.length <= 25) return text;
      return words.slice(0, 25).join(" ") + "...";
    };

    return (
      <div className="h-96 w-96 lg:shadow-2xl lg:shadow-[#DEDFD8] scale-110 rounded-lg flex flex-col m-5 justify-evenly items-start bg-[#DEDFD8] px-5 font-Caveat select-none">
        <h1 className="text-4xl">
          <RiDoubleQuotesR />
        </h1>
        <div className="review">
          <h1 className="text-justify lg:text-2xl text-lg">
            "{getShortQuote(quote)}"
          </h1>
          {quote.split(" ").length > 25 && (
            <button
              onClick={() => onReadMore(quote)}
              className="border-b border-[#282623] hover:scale-105 duration-300 ease-in-out mt-5"
            >
              Read more
            </button>
          )}
        </div>
        <div className="name">_ {name}</div>
        <div className="stars w-full flex justify-around items-center">
          ★★★★★ <span>{title}</span>
        </div>
      </div>
    );
  };

  const InstagramCard = ({ image, caption, username, postUrl, profileUrl }) => {
    return (
      <Link
        target="_blank"
        to={profileUrl}
        className="max-w-md rounded-2xl overflow-hidden bg-white border border-pink-600 transition hover:shadow-xl lg:shadow-2xl lg:shadow-pink-600 duration-300 ease-in-out"
      >
        <a href={postUrl} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={caption} className="w-full h-72 object-cover" />
        </a>
        <div className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <Instagram className="text-pink-600" size={20} />
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-800 hover:text-pink-600"
            >
              @{username}
            </a>
          </div>
          <p className="text-gray-700 text-sm line-clamp-3">{caption}</p>
          <a
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm text-pink-600 font-medium hover:underline"
          >
            View on Instagram →
          </a>
        </div>
      </Link>
    );
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
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white font-extrabold text-2xl bg-[#282623] rounded-full "
        >
          <CiCircleChevLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white font-extrabold text-2xl bg-[#282623] rounded-full "
        >
          <CiCircleChevRight />
        </button>

        {/* Dots */}
        <div className="lg:flex justify-center gap-2 my-5 lg:mt-20 hidden ">
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
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 select-none">
                <div className="bg-[#DEDFD8] p-6 rounded-lg shadow-lg w-[90%] max-w-xl animate-fadeIn">
                  <p className="text-gray-700 mb-4  text-justify font-Caveat text-2xl">
                    {" "}
                    <Typewriter text={modalQuote} speed={40} />
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

  const CarouselInstagram = () => {
    const prevSlide = () => {
      setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const nextSlide = () => {
      setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };
    const [current, setCurrent] = useState(0);
    const totalSlides = InstagramPosts.length;

    return (
      <div className="relative overflow-hidden lg:w-1/2 w-[90%]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {InstagramPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-full h-full flex justify-center items-center"
            >
              <InstagramCard
                image={post.image}
                caption={post.caption}
                username="arisertradco"
                profileUrl="https://www.instagram.com/arisertradco/"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white font-extrabold text-2xl bg-[#282623] rounded-full "
        >
          <CiCircleChevLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white font-extrabold text-2xl bg-[#282623] rounded-full "
        >
          <CiCircleChevRight />
        </button>

        {/* Dots */}
        <div className="lg:flex justify-center gap-2 my-5 lg:mt-20 hidden ">
          {InstagramPosts.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === current ? "bg-[#DEDFD8]" : "bg-[#2A2623] border"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div id="praise" className={`bg-[#282623] text-[#130F0C]`}>
        <div className="flex lg:h-fit relative">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="lg:h-[90vh] w-full overflow-hidden object-cover object-center flex justify-center items-center "
          >
            <img
              className="h-[50vh] lg:h-full w-full object-cover object-center"
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
              className=" h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/60 text-[#DEDFD8] font-Cinzel tracking-widest flex-col lg:gap-20"
            >
              Testimonials
              <span className="lg:text-7xl text-3xl">Our customers say</span>
            </motion.h1>
          </div>
        </div>
        <div className="flex justify-around items-center lg:py-20 py-5">
          <h1 className="font-Cinzel text-4xl text-[#DEDFD8] border-b border-[#DEDFD8] py-2 px-5 hidden lg:flex">
            In store reviews
          </h1>
          <Carousel />
        </div>
        <div className="flex justify-around items-center lg:py-20 py-5 lg:border-t lg:mx-20">
          <CarouselInstagram />
          <h1 className="font-Cinzel text-3xl text-[#DEDFD8] border-b border-[#DEDFD8] py-2 px-5 hidden lg:flex">
            Instagram Updates
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Praise;
