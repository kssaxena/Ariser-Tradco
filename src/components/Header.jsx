import React from "react";
// import Link from "react";
// import { Link } from "react-scroll";
import { NavigationElements } from "../constants/AllConstants";
import Button from "./ui/Button";
import { images } from "../assets/Images";
// import useLocation from "react-dom";

const Header = () => {
  const handleClick = () => {if (!openNavigation) return;

  enablePageScroll();
  setOpenNavigation(false);};
  return (
    <div
      className={`flex justify-center items-center fixed w-full p-5 top-0 left-0 z-50 text-white  backdrop-blur-lg shadow-sm shadow-black `}
    >
      <section className={`logo w-[60%] flex items-center pl-28`}>
        <img
          src={images[1].url}
          className={`mr-10 rounded-full`}
          width={60}
          height={60}
          alt="ariser_tradco"
        />
        <h1>ARISER TRADCO</h1>
      </section>
      <section className={`navbar w-[40%] flex justify-evenly items-center `}>
        {NavigationElements.map((item) => (
          <a
            className={`w-fit text-lg uppercase cursor-pointer hover:font-medium hover:scale-110 ease-in-out duration-200 border pr-4 border-b-0 border-t-0 border-l-0 `}
            key={item.id}
            href={item.url}
            onClick={handleClick}
          >
            {item.title}
          </a>
        ))}
      </section>
      <section className={`flex justify-center items-center w-[10%]`}>
        <Button title={"Book Now"} />
      </section>
      {/* <h1>hello duniya</h1> */}
    </div>
  );
};

export default Header;
