import React from "react";

const ProductCard = ({ img, title, icon }) => {
  return (
    <div className="hover:bg-[url('./src/assets/gradient.png')] bg-[#192335] hover:bg-transparent flex-col flex h-80 w-80 items-center justify-center rounded-lg border border-[#16C4E0] hover:shadow-md hover:shadow-[#16C4E0]  px-6 font-medium text-[#16C4E0] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 backdrop-blur-xl duration-500 ease-in-out">
      <div className="shadow-2xl ">{img}</div>
      <h1 className="shadow-2xl ">{title}</h1>
      <h1 className="shadow-2xl ">{icon}</h1>
    </div>
  );
};

export default ProductCard;
