import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { images } from "../assets/Images";
import { ChevronRightCircleIcon } from "lucide-react";
import { motion } from "framer-motion";

const LocationCardDescription = () => {
  return (
    <div className={`w-full h-[100%] flex `}>
      <div
        className={`flex lg:justify-around justify-center p-20 w-full backdrop-blur-sm shadow-inner shadow-black `}
      >
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <motion.section
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className={`hidden lg:block text-black w-fit flex flex-col justify-center shadow-[0_8px_16px_rgb(0_0_0/0.4)] rounded-lg p-10 bg-[url('./src/assets/gradient.png')] backdrop-blur`}
        >
          <h1
            className={`relative right-0 flex w-full text-5xl uppercase font-sans`}
          >
            Ariser tradco
          </h1>
          <p
            className={`relative right-0 flex w-full justify-center items-center pt-5`}
          >
            Check there to get Directive location
            <ChevronRightCircleIcon />
          </p>
          <h2 className={`relative right-0 flex w-full text-lg pt-5`}>
            The local address<br></br>Office Number C-15, VijayWargiye Complex,
            <br></br>near Kokar Chowk, <br></br>Ranchi, Jharkhand -834001
          </h2>
        </motion.section>
        <motion.section
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className={` lg:w-1/4 flex justify-center items-center lg:pl-20 `}
        >
          <PinContainer
            title="Location"
            href="https://maps.app.goo.gl/QYD3kMM3EcUncvtD8"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] backdrop-blur-sm rounded-xl">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-black  text-base  uppercase">
                Ariser tradco
              </h3>

              <img src={images[0].url} className={`rounded-lg h-full w-full`} />
            </div>
          </PinContainer>
        </motion.section>
      </div>
    </div>
  );
};

export default LocationCardDescription;
