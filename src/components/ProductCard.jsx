import React from "react";

const ProductCard = ({ heading, title, icon }) => {
  return (
    <div className="flex flex-col h-96 w-80 items-center justify-center rounded-lg border px-3 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 backdrop-blur-sm scroll-smooth scale-100 duration-500 ease-in-out m-5">
      <div className="shadow-2xl flex w-full h-3/4 object-cover object-left-top ">
        {heading}
      </div>
      <div>
        <h1 className="shadow-2xl ">{title}</h1>
        <h1 className="shadow-2xl ">{icon}</h1>
      </div>
    </div>
  );
};

export default ProductCard;
