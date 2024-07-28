// import React from "react";
// import { GridImage } from "../assets/Index";
// import Button from "./ui/Button";
// import { EmailJSResponseStatus } from "@emailjs/browser";
// import { Form } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    customer: "",
    dealership: "",
    name: "",
    number: "",
    location: "",
    description: "",
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

    // console.log(form);
  };

  const isFormFilled = () => {
    return (
      form.customer !== "",
      form.dealership !== "",
      form.name !== "",
      form.number !== "",
      form.location !== "",
      form.description !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // template_jcen1o6

    emailjs
      .send(
        process.env.MAIN_CONTACT_FORM_SERVICE_KEY,
        process.env.MAIN_CONTACT_FORM_TEMPLATE_KEY,
        {
          from_customer: form.customer,
          from_dealership: form.dealership,
          from_name: form.name,
          from_number: form.number,
          from_location: form.location,
          from_description: form.description,
          to_email: "arisertradco@gmail.com",
          to_name: "Ariser Tradco",
          // message: form.description,
        },
        process.env.MAIN_CONTACT_FORM_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, Consulting person will contact you soon");

          setForm({
            customer: "",
            dealership: "",
            name: "",
            number: "",
            location: "",
            description: "",
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
    <div
      className={`flex flex-col justify-center items-center w-full rounded-lg`}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`flex flex-col w-full`}
      >
        <div className={`text-white flex justify-evenly items-center`}>
          <label
            className={`sm:block hidden lg:w-[20%] justify-evenly rounded-xl p-2 border border-gray-500 backdrop-blur-xl shadow-md shadow-black  text-xs `}
          >
            <input
              className={` mr-2 `}
              type="checkbox"
              value={form.customer}
              onChange={handleChange}
            />
            Customer
          </label>
          <label
            className={`sm:block hidden lg:w-[40%] justify-evenly rounded-xl p-2 border border-gray-500 backdrop-blur-xl shadow-md shadow-black text-xs  `}
          >
            <input
              className={` mr-2 `}
              type="checkbox"
              value={form.dealership}
              onChange={handleChange}
            />
            Willing to own Dealership ?
          </label>
        </div>
        <label
          className={`lg:m-2 lg:text-lg font-light text-white lg:pl-10 pl-3 m-2`}
          htmlFor="name"
          id="name"
        >
          Name
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          id="name"
          placeholder="Enter name"
          className={` lg:m-1 lg:p-5 p-3 text-sm lg:text-lg rounded-md backdrop-blur-xl bg-transparent border border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 shadow-sm shadow-black focus:ring-offset-1 focus:ring-offset-black text-white`}
          type="name"
          required
        />
        <label
          className={`lg:m-2 lg:text-lg font-light text-white lg:pl-10 pl-3 m-2`}
          htmlFor="number"
          id="number"
        >
          Contact Number
        </label>
        <input
          name="number"
          value={form.number}
          onChange={handleChange}
          id="number"
          placeholder="Your Contact Number"
          className={` lg:m-1 lg:p-5 p-3 text-sm lg:text-lg rounded-md backdrop-blur-xl bg-transparent border border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 shadow-sm shadow-black focus:ring-offset-1 focus:ring-offset-black text-white`}
          type="number"
          required
        />
        <div className="flex flex-col">
          <label
            className={`lg:m-2 lg:text-lg font-light text-white lg:pl-10 pl-3 m-2`}
            htmlFor="location"
            id="address"
          >
            Current Location
          </label>
          <select
            name="location"
            value={form.location}
            onChange={handleChange}
            className={` lg:m-1 lg:p-5 p-3 text-sm lg:text-lg rounded-md backdrop-blur-xl bg-transparent border border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 shadow-sm shadow-black focus:ring-offset-1 focus:ring-offset-black text-white`}
          >
            <option className="bg-[#18181B]">Select</option>
            <option value={"Ranchi"} className="bg-[#18181B]">
              Ranchi
            </option>
            <option value={"Ramgarh"} className="bg-[#18181B]">
              Ramgarh
            </option>
            <option value={"Bokaro"} className="bg-[#18181B]">
              Bokaro
            </option>
            <option value={"Dhanbad"} className="bg-[#18181B]">
              Dhanbad
            </option>
            <option value={"Chatra"} className="bg-[#18181B]">
              Chatra
            </option>
            <option value={"Simdega"} className="bg-[#18181B]">
              Simdega
            </option>
            <option value={"Khunti"} className="bg-[#18181B]">
              Khunti
            </option>
            <option value={"Hazaribagh"} className="bg-[#18181B]">
              Hazaribagh
            </option>
            <option value={"Koderma"} className="bg-[#18181B]">
              Koderma
            </option>
            <option value={"Giridih"} className="bg-[#18181B]">
              Giridih
            </option>
            <option value={"Lohardaga"} className="bg-[#18181B]">
              Lohardaga
            </option>
            <option value={"Gumla"} className="bg-[#18181B]">
              Gumla
            </option>
          </select>
        </div>
        <label
          className={`lg:m-2 lg:text-lg font-light text-white lg:pl-10 pl-3 m-2`}
          htmlFor="description"
          id="address"
        >
          Address
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          id="address"
          placeholder="Please describe your requirement and also provide Construction Site Address"
          className={` w-full h-40 m-1 p-5 rounded-md backdrop-blur-xl bg-transparent border border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 shadow-sm shadow-black focus:ring-offset-1 focus:ring-offset-black text-white`}
          type="address"
          required
        />
        <button
          disabled={!isFormFilled()}
          onClick={handleSubmit}
          type="submit"
          className="inline-flex lg:h-12 h-9 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] lg:px-6 px-2 lg:font-medium text-[#16C4E0] transition-colors focus:outline-none focus:ring-0 focus:ring-[#16C4E0] focus:ring-offset-1 focus:ring-offset-[#16C4E0] text-sm lg:mt-20 lg:mb-10 mt-5"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
