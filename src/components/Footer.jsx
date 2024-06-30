import React from "react";
import { footer } from "../constants/AllConstants";

const Footer = () => {
  return (
    <div
      className={`  w-full hello   dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center`}
    >
      <div className="w-full flex justify-evenly items-center">
        <section className="text-center text-gray-500 text-sm">
          <h1>
            2021 Ariser Tradco. <br></br>All rights reserved.
          </h1>
        </section>
        <section className={`flex p-5 text-white`}>
          {footer.map((icon, index) => (
            <a
              className="text-white p-5 flex w-fit text-lg uppercase cursor-pointer hover:font-medium hover:scale-110 ease-in-out duration-200"
              key={index}
            >
              <img
                src={icon}
                width={25}
                height={25}
                className="bg-[#15131D] rounded-full"
              />
            </a>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Footer;
