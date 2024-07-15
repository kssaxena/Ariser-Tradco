// import React from "react";
// import { GridImage } from "../assets/Index";
// import Button from "./ui/Button";
// import { EmailJSResponseStatus } from "@emailjs/browser";
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

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // template_jcen1o6

    emailjs
      .send(
        "service_lk0d92r",
        "template_1k1ak2a",
        {
          from_customer: form.customer,
          from_dealership: form.dealership,
          from_name: form.name,
          from_number: form.number,
          from_location: form.location,
          from_description: form.description,
          to_email: "arisertradco@gmail.com",
          to_name: "Sir/Ma'am",
          // message: form.description,
        },
        "sjT5W7tqglVjKont6"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. Tech team will get in touch with you shortly...");

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
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`flex flex-col justify-center items-center w-full  rounded-lg`}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`flex flex-col w-full`}
      >
        <div className={`text-white flex justify-evenly items-center`}>
          <label
            className={` flex w-[20%] justify-evenly rounded-xl p-2 border border-gray-500 backdrop-blur-xl shadow-md shadow-black `}
          >
            <input
              className={` mr-2 `}
              type="checkbox"
              value={form.customer}
              onChange={handleChange}
            />
            Customer
          </label>
          or
          <label
            className={` flex w-[40%] justify-evenly rounded-xl p-2 border border-gray-500 backdrop-blur-xl shadow-md shadow-black`}
          >
            <input
              className={` mr-2  `}
              type="checkbox"
              value={form.dealership}
              onChange={handleChange}
            />
            Willing to own Dealership ?
          </label>
        </div>
        <label
          className={`m-2 text-lg font-light text-white pl-10`}
          htmlFor="name"
          id="name"
        >
          Name
        </label>
        <input
          value={form.name}
          onChange={handleChange}
          id="name"
          placeholder="Enter name"
          className={` m-1 p-5 rounded-md backdrop-blur-xl bg-transparent border border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 shadow-sm shadow-black focus:ring-offset-1 focus:ring-offset-black text-white`}
          type="name"
          required
        />
        <label
          className={`m-2 text-lg font-light text-white pl-10`}
          htmlFor="contactNumber"
          id="number"
        >
          Contact Number
        </label>
        <input
          value={form.number}
          onChange={handleChange}
          id="number"
          placeholder="Your Contact Number"
          className={` m-1 p-5 rounded-md backdrop-blur-xl bg-transparent border border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 shadow-sm shadow-black focus:ring-offset-1 focus:ring-offset-black text-white`}
          type="number"
          required
        />
        <label
          className={`m-2 text-lg font-light text-white pl-10`}
          htmlFor="address"
          id="address"
        >
          Current Location
        </label>
        <select
          value={form.location}
          onChange={handleChange}
          className={` m-1 p-5 rounded-md backdrop-blur-xl bg-transparent border border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 shadow-sm shadow-black focus:ring-offset-1 focus:ring-offset-black text-white`}
        >
          <option className="bg-[#18181B]">Select</option>
          <option className="bg-[#18181B]">Ranchi</option>
          <option className="bg-[#18181B]">Ramgarh</option>
          <option className="bg-[#18181B]">Bokaro</option>
          <option className="bg-[#18181B]">Dhanbad</option>
          <option className="bg-[#18181B]">Chatra</option>
          <option className="bg-[#18181B]">Simdega</option>
          <option className="bg-[#18181B]">Khunti</option>
          <option className="bg-[#18181B]">Hazaribagh</option>
          <option className="bg-[#18181B]">Koderma</option>
          <option className="bg-[#18181B]">Giridih</option>
          <option className="bg-[#18181B]">Lohardaga</option>
          <option className="bg-[#18181B]">Gumla</option>
          <option className="bg-[#18181B]">
            If others please specify in address area
          </option>
        </select>
        <label
          className={`m-2 text-lg font-light text-white pl-10`}
          htmlFor="address"
          id="address"
        >
          Address
        </label>
        <input
          value={form.description}
          onChange={handleChange}
          id="address"
          placeholder="Construction Site Address"
          className={` m-1 p-5 rounded-md backdrop-blur-xl bg-transparent border border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 shadow-sm shadow-black focus:ring-offset-1 focus:ring-offset-black text-white`}
          type="address"
          required
        />
        <button
          type="submit"
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-[#16C4E0] transition-colors focus:outline-none focus:ring-0 focus:ring-[#16C4E0] focus:ring-offset-1 focus:ring-offset-[#16C4E0] mt-20 mb-10"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      
    </div>
  );
};

export default ContactForm;
