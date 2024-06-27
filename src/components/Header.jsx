import React from "react";
import Link from "react";
import { NavigationElements } from "../constants/AllConstants";
const Header = () => {
  return (
    <div
      className={`flex fixed w-full p-5 top-0 left-0 z-50 text-white bg-n-8/90 backdrop-blur-lg shadow-sm shadow-black `}
    >
      <section className={`logo w-[60%] `}>
        <h1>ARISER TRADCO</h1>
      </section>
      <section className={`navbar w-[30%]  flex justify-evenly items-center`}>
        {NavigationElements.map((item) => (
          <a
            className={`w-fit text-lg uppercase cursor-pointer hover:font-medium hover:scale-110 ease-in-out duration-200 `}
            key={item.id}
            to={item.url}
          >
            {item.title}
          </a>
        ))}
      </section>
      {/* <h1>hello duniya</h1> */}
    </div>
  );
};

export default Header;
