import React from "react";

const FeaturesCard = ({ title, icon, description }) => {
  return (
    <div
      className="hover:bg-[url('./src/assets/gradient.png')] bg-[#192335] hover:bg-transparent flex-col flex h-80 w-80 items-center justify-center rounded-lg border border-[#16C4E0] hover:shadow-md hover:shadow-[#16C4E0]  px-6 font-medium text-[#16C4E0] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ml-10 mr-10 mt-5 mb-5 backdrop-blur-xl duration-500 ease-in-out"
    >
      <h1 className="shadow-2xl ">{icon}</h1>
      <h1 className="text-3xl m-2 uppercase">{title}</h1>
      <p className="text-sm font-light m-2 text-center sm:w-full sm">{description}</p>
    </div>
  );
};

export default FeaturesCard;
