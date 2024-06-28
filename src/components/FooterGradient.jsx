// import { gradient } from "../../assets";
import { GradientPng } from "../assets/Index";

export const Gradient = () => {
  return (
    <div className="absolute  -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
      <div className="absolute  left-1/2 w-40 h-40 -translate-x-3/4 -translate-y-1/2">
        <img
          className="w-full"
          src={GradientPng}
          width={942}
          height={942}
          alt="Gradient"
        />
      </div>
    </div>
  );
};
