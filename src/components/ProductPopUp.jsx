import React, { useState } from "react";
// import ContactForm from "./ContactForm";
import { useRef } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

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
      <h1 className="w-full justify-center items-center flex mb-10 text-lg">
        Or you can directly reach us at :
        <p className="text-blue-500 m-5 underline">ariserstradco@gmail.com</p>
      </h1>
      {/* <ContactForm /> */}
    </form>
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
    <div
      ref={modelRef}
      onClick={closeModel}
      className="fixed inset-0 flex justify-center items-center z-50 top-[42vh] backdrop-blur-3xl bg-[#17171B] bg-opacity-85"
    >
      <div className="flex flex-col bg-[#17171B] bg-opacity-100 w-full items-center justify-center h-screen">
        <button className="place-self-end" onClick={onClose}>
          <X size={30} />
        </button>
        <div className=" rounded-xl lg:w-1/2 w-[90%]">
          <HeroHeaderContactForm />
        </div>
      </div>
    </div>
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
    <div
      ref={modelRef}
      onClick={closeModel}
      className="fixed inset-0 flex justify-center items-center z-50 top-[0vh] lg:w-1/2 lg:left-[50vh] backdrop-blur-md rounded-xl border p-2"
    >
      <div className="flex flex-col w-full items-center justify-center">
        <button className="place-self-end" onClick={onClose}>
          <X size={30} />
        </button>
        <div className=" rounded-xl lg:w-3/4">
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
