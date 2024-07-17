import React, { useState } from "react";
// import ContactForm from "./ContactForm";
import { useRef } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_8hkk28w",
        "template_gvflzsu",
        {
          from_name: Form.name,
          from_number: Form.number,
          from_siteLocation: Form.address,
          to_email: "arisertradco@gmail.com",
          to_name: "Ariser Tradco",
          // message: form.description,
        },
        "sjT5W7tqglVjKont6"
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
      <h1 className="w-full justify-center items-center flex mb-10 text-lg">
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
      className="fixed inset-0 flex justify-center items-center z-50 top-[50vh] backdrop-blur-3xl bg-[#17171B] bg-opacity-85"
    >
      <div className="flex flex-col bg-[#17171B] bg-opacity-85 w-full items-center justify-center">
        <button className="place-self-end" onClick={onClose}>
          <X size={30} />
        </button>
        <div className=" rounded-xl w-1/2">
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
      className="fixed inset-0 flex justify-center items-center z-50 top-[0vh] w-1/2 left-[50vh] backdrop-blur-md rounded-xl "
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

export { BookPopUp, ContactPopUp };
