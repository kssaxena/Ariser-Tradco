// import { ButtonSvg } from "../assets/Index";
// import { LampContainer } from "./ui/lamp";
// import { ParallaxScroll } from "./ui/parallax-scroll";
// import { ImageSlider } from "./ImageSlider";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { PinContainer } from "./ui/3d-pin";
import Button from "./ui/Button";
import { images } from "../assets/Images";
import { react } from "../assets/Index";
import { collabApps } from "../constants/AllConstants";
import { RightCurve, LeftCurve } from "./ui/CurveForHero";
import { MouseParallax } from "react-just-parallax";
import { BackgroundCircles } from "./ui/BackgroundCircle";
// import { images } from "../assets/Images";

const Home = () => {
  const openGallery =() => {}
  return (
    <div
      id="home"
      className={` bg-[url('./src/assets/heroLandingphoto.png')] `}
    >
      <AuroraBackground className={`flex`}>
        <section className={`flex justify-center items-center  w-full`}>
          <div
            className={`w-1/2 h-fit flex flex-col  text-white overflow-hidden `}
          >
            <div>
              <h1 className={`text-white text-3xl font-medium ml-20`}>
                Strength You Can Trust.
              </h1>
              <h1 className={`text-white text-5xl font-medium ml-20`}>
                Doors That Last..
              </h1>
            </div>
            <div
              className={`flex justify-evenly items-center w-1/2 z-10 ml-10 mt-8`}
            >
              <Button title={"Contact Us"} />
              <Button title={"Our Products"} onClick={openGallery} />
            </div>
          </div>
          <div className={`lg:ml-auto xl:w-[38rem]  `}>
            <div className="relative left-1/4 flex w-[24rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100 backdrop-blur-sm">
              <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                  <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                    <img
                      src={images[1].url}
                      className={`rounded-full`}
                      width={100}
                      height={100}
                      alt="ariser_tradco"
                    />
                  </div>
                </div>
              </div>

              <ul>
                {collabApps.map((app, index) => (
                  <li
                    key={app.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                      index * 45
                    }`}
                  >
                    <div
                      className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-[#15131D] border border-n-1/15 rounded-xl -rotate-${
                        index * 45
                      }`}
                    >
                      <img
                        className="m-auto"
                        width={app.width}
                        height={app.height}
                        alt={app.title}
                        src={app.icon}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <LeftCurve />
              <RightCurve />
          {/* <BackgroundCircles/> */}
            </div>
          </div>
        </section>
      </AuroraBackground>
    </div>
  );
};

export default Home;
