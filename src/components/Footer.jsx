import React from "react";
import {  footer } from "../constants/AllConstants";

const Footer = () => {
  return (
    <div className={`flex w-full bg-green-200 justify-evenly items-center`}>
      <section className="text-center text-gray-500 text-sm">
        <h1>
          {" "}
          2021 Ariser Tradco. <br></br>All rights reserved.
        </h1>
      </section>
      <section className={`flex p-5 text-white`}>
        {footer.map((icon, index) => (
          <a
            className="text-white p-5 flex w-fit text-lg uppercase cursor-pointer hover:font-medium hover:scale-110 ease-in-out duration-200"
            key={index}
          >
            <img src={icon} width={30} height={30} />
          </a>
        ))}
      </section>
    </div>
  );
};

export default Footer;
