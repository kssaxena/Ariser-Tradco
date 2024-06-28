import React from "react";
import { GridImage } from "../assets/Index";
import Button from "./ui/Button";

const ContactForm = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center w-full backdrop-blur-xl rounded-lg bg-transparent`}
    >
      <form className={`flex flex-col w-full`}>
        <label
          className={`m-2 text-lg font-light text-white pl-10`}
          htmlFor="name"
          id="name"
        >
          Name
        </label>
        <input
          id="name"
          placeholder="Enter name"
          className={` m-1 p-5 rounded-md bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 focus:ring-offset-black text-white`}
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
          id="number"
          placeholder="Your Contact Number"
          className={` m-1 p-5 rounded-md bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 focus:ring-offset-black text-white`}
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
          className={` m-1 p-5 rounded-md bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] focus:outline-none focus:ring focus:ring-black focus:ring-offset focus:ring-offset-black text-white`}
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
          <option className="bg-[#18181B]">If others please specify</option>
        </select>
        <label
          className={`m-2 text-lg font-light text-white pl-10`}
          htmlFor="address"
          id="address"
        >
          Address
        </label>
        <input
          id="address"
          placeholder="Construction Site Address"
          className={` m-1 p-5 rounded-md bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 focus:ring-offset-black text-white`}
          type="address"
          required
        />
      </form>
      <div className={`mt-10`}>
        <Button title={"Submit"} />
      </div>
    </div>
  );
};

export default ContactForm;
