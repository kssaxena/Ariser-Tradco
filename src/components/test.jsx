import React from "react";
import { Spotlight } from "./ui/Spotlight";
// import ContactForm from "./ContactForm";
import { ChevronDown } from "lucide-react";
import LocationCardDescription from "./LocationCardDescription";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";


const Test = () => {

    const ContactFormTest = () => {
      const formRef = useRef();
      const [form, setForm] = useState({
        name: "",
        email: "",
        description: "",
        customer: "",
        dealership: "",
        number: "",
        location: "",
      });
      const [loding, setLoading] = useState(false);

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
            "servicetoken",
            "templatenumber",
            {
              from_name: form.name,
              to_name: "Sir/Ma'am",
              from_number: form.number,
              from_description: form.description,
              from_location: form.location,
              to_email: "arisertradco@gmail.com",
              // message: form.description,
            },
            "key"
          )
          .then(
            () => {
              setLoading(false);
              alert(
                "Thank you. Tech team will get in touch with you shortly..."
              );

              setForm({
                name: "",
                description: "",
                customer: "",
                dealership: "",
                number: "",
                location: "",
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
            <div className="text-white flex flex-col items-center">
              <div className="flex flex-wrap justify-center gap-4">
                <label className="flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-xl p-2 border border-gray-500 backdrop-blur-xl shadow-md shadow-black">
                  <input
                    type="checkbox"
                    value={form.customer}
                    onChange={handleChange}
                    className="mr-20"
                  />
                  Customer
                </label>
                <label className="flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-xl p-2 border border-gray-500 backdrop-blur-xl shadow-md shadow-black">
                  <input
                    type="checkbox"
                    value={form.dealership}
                    onChange={handleChange}
                    className="mr-20"
                  />
                  Willing to own Dealership ?
                </label>
              </div>
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
          </form>
          <div className={`mt-10`}>
            <button
              type="submit"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-[#16C4E0] transition-colors focus:outline-none focus:ring-0 focus:ring-[#16C4E0] focus:ring-offset-1 focus:ring-offset-[#16C4E0]"
            >
              {loding ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      );
    };

  return (
    <div>
      <div id="contact" className={`w-full h-full bg-[#17171B] pt-28 pb-16`}>
        <h1
          className={`text-4xl w-full text-center mb-10 text-white uppercase`}
        >
          Location
        </h1>
        <LocationCardDescription />
      </div>
      <div
        className={` bg-[url('./src/assets/grid.png')] flex flex-col w-full items-center bg-[#18181B] pb-20 `}
      >
        <h1
          className={`text-4xl text-white font-light mb-10 flex justify-center items-center`}
        >
          Let us know, how we can Help You !
          <ChevronDown className={`animate-bounce m-5 text-[#16C4E0]`} />
        </h1>
        <Spotlight className={`h-fit`} />
        <section
          className={`form w-1/2 p-5 flex right-0 z-10 border border-gray-500 shadow-lg shadow-black rounded-xl backdrop-blur-xl `}
        >
          <ContactFormTest />
        </section>
      </div>
    </div>
  );
};

export default Test;
