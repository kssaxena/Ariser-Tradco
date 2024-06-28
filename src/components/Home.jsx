import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
// import { ButtonSvg } from "../assets/Index";
// import { LampContainer } from "./ui/lamp";
import { PinContainer } from "./ui/3d-pin";
import Button from "./ui/Button";
import { images } from "../assets/Images";
// import { ParallaxScroll } from "./ui/parallax-scroll";
// import { ImageSlider } from "./ImageSlider";

const Home = () => {
  return (
    <div>
      <AuroraBackground className={`flex`}>
        <section className={`flex justify-center items-center`}>
          <div>
            <PinContainer
              title="Location"
              href="https://maps.app.goo.gl/QYD3kMM3EcUncvtD8"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 uppercase">
                  Ariser tradco
                </h3>

                <img
                  src={images[0].url}
                  className={`rounded-lg h-full w-full`}
                />
                {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
              </div>
            </PinContainer>
          </div>
          <div
            className={`w-fit h-fit justify-center items-center flex flex-col  text-white overflow-hidden`}
          >
            <div>
              <h1 className={`text-white text-5xl font-medium`}>
                Innovative Door
              </h1>
              <h1 className={`text-white text-7xl font-medium`}>
                Designs and Solution..
              </h1>
            </div>
            <div className={`flex justify-evenly items-center w-1/2 z-10 mt-8`}>
              <Button title={"Contact Us"} />
              <Button title={"Gallery"} />
              {/* <Button title="hello" /> */}
            </div>
          </div>
          <div>
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Aceternity UI
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Customizable Tailwind CSS and Framer Motion Components.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          </div>
        </section>
        <section>
          {/* <ParallaxScroll></ParallaxScroll> */}
        </section>
      </AuroraBackground>
    </div>
  );
};

export default Home;
