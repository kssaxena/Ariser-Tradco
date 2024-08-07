import React from "react";
import { Link } from "react-scroll";

const Button = ({ title, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="inline-flex lg:h-12 h-9 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] lg:px-6 px-2 lg:font-medium text-[#16C4E0] transition-colors focus:outline-none focus:ring-0 focus:ring-[#16C4E0] focus:ring-offset-1 focus:ring-offset-[#16C4E0] text-sm"
    >
      {title}
    </button>
  );
};

export default Button;
