import React, { useState } from "react";
// import ContactForm from "./ContactForm";
import { useRef } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ParallaxScroll } from "./ui/parallax-scroll";

import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { ImageSlider } from "../constants/AllConstants";

const HeroHeaderContactForm = () => {
  const formRef = useRef();
  const [Form, setForm] = useState({
    name: "",
    number: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const isFormFilled = () => {
    // console.log("isFormFilled");
    return (
      Form.name.trim() !== "" &&
      Form.number !== "" &&
      Form.address.trim() !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (Form.number.length != 10) {
      alert("Invalid Contact Number");
      return;
    }

    emailjs
      .send(
        process.env.HERO_HEADER_FROM_SERVICE_KEY,
        process.env.HERO_HEADER_FROM_TEMPLATE_KEY,
        {
          from_name: Form.name,
          from_number: Form.number,
          from_siteLocation: Form.address,
          to_email: "arisertradco@gmail.com",
          to_name: "Ariser Tradco",
          // message: form.description,
        },
        process.env.HERO_HEADER_FROM_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, Consulting person will contact you soon");

          setForm({
            name: "",
            number: "",
            address: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Try again later");
        }
      );
  };

  return (
    <div>
      <form ref={formRef} className="flex flex-col">
        <h1 className="w-full justify-center items-center flex mb-10 lg:text-lg">
          Enter details so that our Tech team can reach you !
        </h1>
        <label className="m-1 ">Name</label>
        <input
          type="text"
          name="name"
          value={Form.name}
          onChange={handleChange}
          id="name"
          required={true}
          placeholder="Your full Name please"
          className="m-1 p-2 rounded-md backdrop-blur-xl bg-transparent border border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 shadow-sm shadow-black focus:ring-offset-1 focus:ring-offset-black text-white"
        />
        <label className="m-1 ">Number</label>
        <input
          type="number"
          name="number"
          value={Form.number}
          onChange={handleChange}
          id="number"
          required={true}
          placeholder="Your Contact / Whatsapp Number"
          className="m-1 p-2 rounded-md backdrop-blur-xl bg-transparent border border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 shadow-sm shadow-black focus:ring-offset-1 focus:ring-offset-black text-white"
        />
        <label className="m-1 ">Address</label>
        <input
          type="address"
          name="address"
          value={Form.address}
          onChange={handleChange}
          id="address"
          required={true}
          placeholder="Address"
          className="m-1 p-2 rounded-md backdrop-blur-xl bg-transparent border border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 shadow-sm shadow-black focus:ring-offset-1 focus:ring-offset-black text-white"
        />
        <button
          disabled={() => {
            // console.log("Function OK");
            return !isFormFilled();
          }}
          onClick={handleSubmit}
          type="submit"
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-[#16C4E0] transition-colors focus:outline-none focus:ring-0 focus:ring-[#16C4E0] focus:ring-offset-1 focus:ring-offset-[#16C4E0] mt-20 mb-10"
        >
          {loading ? "Sending..." : "Send"}
        </button>
        {/* <ContactForm /> */}
      </form>
      <h1 className="w-full justify-center items-center flex mb-10 text-lg gap-5">
        Directly reach us at :
        {/* <p className="text-blue-500 m-5 underline">ariserstradco@gmail.com</p> */}
        <a href="tel:+91620365007">
          <FaPhoneAlt className="text-2xl " />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ariserstradco@gmail.com&su=Door%20Booking&body="
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:scale-105 duration-300 ease-in-out"
        >
          <BiLogoGmail className="text-2xl " />
        </a>
        <a
          href="https://www.instagram.com/arisertradco?igsh=Zm5uYWFuamYxNG45"
          target="_blank"
          className=" hover:scale-105 duration-300 ease-in-out"
        >
          <FiInstagram className="text-2xl " />
        </a>
        <a
          href="https://wa.me/916204365007"
          target="_blank"
          className=" hover:scale-105 duration-300 ease-in-out"
        >
          <IoLogoWhatsapp className="text-2xl " />
        </a>
      </h1>
    </div>
  );
};

const BookPopUp = ({ onClose }) => {
  const modelRef = useRef();

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      ref={modelRef}
      onClick={closeModel}
      className="fixed inset-0 flex justify-center items-center z-50 top-0 backdrop-blur-3xl bg-black/50 bg-opacity-85 text-white"
    >
      <div className="flex flex-col w-full items-center justify-center h-screen">
        <button className="place-self-end" onClick={onClose}>
          <X size={30} />
        </button>
        <div className=" rounded-xl lg:w-1/2 w-[90%]">
          <HeroHeaderContactForm />
        </div>
      </div>
    </motion.div>
  );
};

const ContactPopUp = ({ onClose }) => {
  const modelRef = useRef();

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modelRef}
      onClick={closeModel}
      className="fixed inset-0 flex justify-center items-center z-50 top-[0vh] lg:w-1/2 lg:left-[50vh] backdrop-blur-md rounded-xl "
    >
      <div className="flex flex-col w-full items-center justify-center">
        <button className="place-self-end" onClick={onClose}>
          <X size={30} />
        </button>
        <div className=" rounded-xl w-3/4">
          <HeroHeaderContactForm />
        </div>
      </div>
    </div>
  );
};

const KnowMorePopup = ({ onClose }) => {
  const modelRef = useRef();

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };

  return (
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
      ref={modelRef}
      onClick={closeModel}
      className="fixed inset-0 flex justify-center items-center z-50 top-0 backdrop-blur-xl rounded-xl p-2"
    >
      <div className="flex flex-col w-full items-center justify-center p-10">
        <button
          className="place-self-end text-white border-b hover:scale-105 duration-300 ease-in-out flex gap-2"
          onClick={onClose}
        >
          <X />
          Close
        </button>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center items-center"
        >
          <ParallaxScroll ImageSlider={ImageSlider} />
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProductSliderPopup = ({ onClose }) => {
  const modelRef = useRef();

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modelRef}
      onClick={closeModel}
      className="fixed inset-0 flex justify-center items-center z-50 top-[0vh] w-1/2 left-[50vh] backdrop-blur-md rounded-xl border p-2"
    >
      <div className="flex flex-col w-full items-center justify-center">
        <button className="place-self-end" onClick={onClose}>
          <X size={30} />
        </button>
        <div className=" rounded-xl w-3/4">
          <h1 className="text-6xl text-center font-sans bg-gradient-to-r from-pink-300 via-cyan-500 to-purple-500 bg-clip-text tracking-tight text-transparent m-10">
            ARISER TRADCO
          </h1>
          <p className="text-center w-full font-sans m-5 ">
            Your Gateway to Premium Steel Doors
          </p>
          <p className=" m-5">
            ARISER TRADCO is a leading supplier of premium steel doors in
            Ranchi, Jharkhand, India. We are committed to providing our
            customers with the highest quality doors that combine security,
            style, and durability.
          </p>
          <p className=" m-5">
            We offer a comprehensive selection of premium steel doors to suit
            any residential or commercial need. Our doors are available in a
            variety of styles, finishes, and configurations to perfectly
            complement your existing architecture. Whether you're looking for a
            sleek modern door, a classic entryway door, or a robust security
            door, ARISER TRADCO has the perfect option for you.
          </p>
        </div>
        <Link
          to={`https://maps.app.goo.gl/fRSzw51VhKYzAs6FA`}
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-[#16C4E0] transition-colors focus:outline-none focus:ring-0 focus:ring-[#16C4E0] focus:ring-offset-1 focus:ring-offset-[#16C4E0] m-10"
        >
          Visit our Outlet
        </Link>
      </div>
    </div>
  );
};

export { BookPopUp, ContactPopUp, KnowMorePopup, ProductSliderPopup };
